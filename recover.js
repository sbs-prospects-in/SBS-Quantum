const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:\\Users\\satvi\\.gemini\\antigravity-ide\\brain\\eb07efe9-d8f0-46c9-b1c1-64f55b1fb91b\\.system_generated\\logs\\transcript_full.jsonl';

const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n').filter(Boolean);

let count = 0;
for (const line of lines) {
  try {
    const entry = JSON.parse(line);
    if (entry.type === 'PLANNER_RESPONSE' && entry.tool_calls) {
      for (const call of entry.tool_calls) {
        let args = call.args;
        if (typeof args === 'string') {
          args = JSON.parse(args);
        }

        if (call.name === 'write_to_file') {
          if (args.TargetFile && args.CodeContent) {
            if (args.TargetFile.includes('.gemini')) continue;
            
            fs.mkdirSync(path.dirname(args.TargetFile), { recursive: true });
            fs.writeFileSync(args.TargetFile, args.CodeContent);
            console.log('write_to_file:', args.TargetFile);
            count++;
          }
        }
        else if (call.name === 'replace_file_content') {
          if (args.TargetFile && args.TargetContent && args.ReplacementContent) {
            if (args.TargetFile.includes('.gemini')) continue;
            if (!fs.existsSync(args.TargetFile)) continue;
            
            let content = fs.readFileSync(args.TargetFile, 'utf8');
            content = content.replace(args.TargetContent, args.ReplacementContent);
            fs.writeFileSync(args.TargetFile, content);
            console.log('replace_file_content:', args.TargetFile);
            count++;
          }
        }
        else if (call.name === 'multi_replace_file_content') {
          if (args.TargetFile && args.ReplacementChunks) {
            if (args.TargetFile.includes('.gemini')) continue;
            if (!fs.existsSync(args.TargetFile)) continue;
            
            let content = fs.readFileSync(args.TargetFile, 'utf8');
            let chunks = args.ReplacementChunks;
            if (typeof chunks === 'string') {
              chunks = JSON.parse(chunks);
            }
            
            for (const chunk of chunks) {
              if (chunk.TargetContent && chunk.ReplacementContent) {
                content = content.replace(chunk.TargetContent, chunk.ReplacementContent);
              }
            }
            fs.writeFileSync(args.TargetFile, content);
            console.log('multi_replace_file_content:', args.TargetFile);
            count++;
          }
        }
      }
    }
  } catch (e) {
    // console.error('Error parsing line:', e.message);
  }
}
console.log('Total file edits recovered:', count);
