export const servicesData = {
  'custom-software': {
    heroType: 'rings',
    layoutStyle: 'brutalist',
    title: 'Custom Software Development',
    description: 'We build proprietary systems from scratch. When off-the-shelf software fails your complex business logic, we engineer a solution that fits your exact operational model.',
    problem: 'Off-the-shelf SaaS products force you to adapt your operations to their limitations. As you scale, these workarounds become fragile bottlenecks that limit growth.',
    approach: 'We map your specific operational logic first. Then we build a custom architecture—typically microservices or serverless functions—designed to handle your exact data throughput and compliance requirements without unnecessary bloat.',
    deliverables: [
      'Production-ready application codebase',
      'Scalable database architecture (SQL/NoSQL)',
      'Secure, documented API endpoints',
      'Automated deployment pipelines (CI/CD)'
    ]
  },
  'workflow-automation': {
    heroType: 'terminal',
    layoutStyle: 'timeline',
    title: 'Workflow Automation',
    description: 'We identify manual bottlenecks and script them out of existence. Your team spends less time on data entry and more time on high-leverage tasks.',
    problem: 'Your highly paid employees spend hours copying data between disconnected systems. This introduces human error, slows response times, and wastes capital.',
    approach: 'We audit your daily operations to locate repetitive tasks. We write custom scripts and integrate third-party APIs to handle data synchronization instantly in the background.',
    deliverables: [
      'Custom API integrations between distinct tools',
      'Background task workers and cron jobs',
      'Real-time data synchronization scripts',
      'Automated reporting and alerting systems'
    ]
  },
  'crm-erp': {
    heroType: 'split',
    layoutStyle: 'minimal',
    title: 'CRM & ERP Development',
    description: 'We centralize your operations. We build secure, data-rich platforms that give you absolute control over your enterprise data.',
    problem: 'Generic CRMs lack the specialized fields and workflows required for your specific industry. You end up paying for features you don\'t use while lacking the ones you actually need.',
    approach: 'We design a centralized relational database tailored to your business entities. We build custom dashboards with strict role-based access controls so every department sees exactly what they need—nothing more, nothing less.',
    deliverables: [
      'Custom relational database schema',
      'Role-based access control (RBAC) implementation',
      'Department-specific dashboards',
      'Secure data migration from legacy systems'
    ]
  },
  'web-development': {
    heroType: 'rings',
    layoutStyle: 'timeline',
    title: 'Web Development',
    description: 'High-performance React web apps. We prioritize sub-100ms load times and intuitive user paths.',
    problem: 'Slow web applications bleed revenue. Users abandon pages that take longer than three seconds to load, and search engines penalize sluggish performance.',
    approach: 'We build server-side rendered applications using Next.js. We optimize assets at the build step, utilize edge caching, and eliminate layout shifts to guarantee a fast, accessible user experience.',
    deliverables: [
      'Server-side rendered Next.js application',
      'Strict WCAG accessibility compliance',
      'Edge network deployment configuration',
      'Technical SEO optimization'
    ]
  },
  'mobile-development': {
    heroType: 'split',
    layoutStyle: 'brutalist',
    title: 'Mobile Application Development',
    description: 'Native iOS and Android applications. We deliver apps with uncompromising performance and strict platform guidelines.',
    problem: 'Cross-platform mobile frameworks often result in bloated apps that drain battery and feel alien to native users.',
    approach: 'We build specifically for the target operating system. Whether using Swift for iOS or Kotlin for Android, we prioritize native gesture handling, offline-first architectures, and low memory footprint.',
    deliverables: [
      'Native iOS (Swift) or Android (Kotlin) codebase',
      'Offline-first data caching implementation',
      'Push notification infrastructure',
      'App Store and Google Play deployment'
    ]
  },
  'ui-ux-design': {
    heroType: 'terminal',
    layoutStyle: 'minimal',
    title: 'UI/UX Engineering',
    description: 'We design interfaces that respect the user. High contrast, clear hierarchy, and interaction patterns that reduce cognitive load.',
    problem: 'Dense, confusing interfaces require extensive user training. Poor design hides critical actions and frustrates operators.',
    approach: 'We apply psychological UX principles to build predictable layouts. We remove visual noise, establish a clear typographic hierarchy, and ensure every interactive element provides immediate, clear feedback.',
    deliverables: [
      'Interactive Figma prototypes',
      'Comprehensive design system documentation',
      'Motion design and micro-interaction specs',
      'Usability testing reports'
    ]
  },
  'hire-developers': {
    heroType: 'split',
    layoutStyle: 'timeline',
    title: 'Dedicated Engineering Teams',
    description: 'We drop pre-vetted, senior engineering pods directly into your workflow to ship features alongside your internal team.',
    problem: 'Recruiting senior engineering talent takes months. While you interview candidates, your product roadmap stalls and technical debt compounds.',
    approach: 'We bypass the hiring phase. We integrate our experienced engineers directly into your Jira boards, Slack channels, and codebases to start committing production code in days, not months.',
    deliverables: [
      'Immediate access to senior engineering talent',
      'Seamless integration into existing agile workflows',
      'Direct contribution to your proprietary codebase',
      'Continuous knowledge transfer to internal staff'
    ]
  },
  'it-consulting': {
    heroType: 'terminal',
    layoutStyle: 'brutalist',
    title: 'IT Consulting',
    description: 'Strategic technical guidance. We audit your architecture, mitigate risks, and define the correct technology stack for your next phase of growth.',
    problem: 'Technical decisions made today permanently impact your company\'s ability to scale. Choosing the wrong database or hosting provider creates expensive rewrite cycles years down the line.',
    approach: 'We review your codebase, infrastructure, and team capabilities. We provide a deterministic roadmap outlining exactly what to refactor, what to migrate, and what to build from scratch.',
    deliverables: [
      'Comprehensive architecture audit',
      'Security and compliance vulnerability report',
      'Cloud migration roadmap',
      'Technology stack recommendations'
    ]
  },
  'cloud-services': {
    heroType: 'rings',
    layoutStyle: 'minimal',
    title: 'Cloud Migration & Ops',
    description: 'We move legacy databases to AWS or Azure, set up zero-trust security, and optimize your monthly compute spend.',
    problem: 'On-premise servers lack the elasticity required for modern web traffic. Managing physical hardware drains engineering resources that should focus on product development.',
    approach: 'We script your infrastructure using Terraform. We containerize your applications, configure managed Kubernetes clusters, and establish automated deployment pipelines for continuous integration.',
    deliverables: [
      'Infrastructure as Code (IaC) configuration',
      'Kubernetes cluster setup and orchestration',
      'Automated CI/CD deployment pipelines',
      'Zero-trust network security policies'
    ]
  }
};

