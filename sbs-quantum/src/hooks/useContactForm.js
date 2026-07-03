import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Stub API call
      // In a real app, this would be an actual Axios call to an endpoint
      // await axios.post('/api/contact', formData);
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request
      
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit
  };
}
