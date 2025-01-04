import { useState, FormEvent } from 'react';
import { useToast } from './use-toast';
import type { ContactFormData } from '@/types';

export default function useContactForm() {
  const [formData, setFormData] = useState(<ContactFormData>{
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing Required Fields',
        description: 'Name, email, and message are all required',
        variant: 'destructive'
      });
      return;
    }

    if (formData.honeypot) {
      toast({
        title: 'Failed to send message',
        description: 'Spam detected',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      if (formData.name === 't3st') {
        throw new Error('Test error triggered');
      }

      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 429) {
        toast({
          title: 'Rate Limit Exceeded',
          description:
            "You've exceeded the rate limit, please try again later.",
          variant: 'destructive'
        });
        setIsSubmitting(false);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitting(false);
      toast({
        title: 'Message sent',
        description: 'Your message has been successfully sent!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: 'Error',
        description:
          'There was an error sending your message, please try again',
        variant: 'destructive'
      });
      console.error('Error submitting form:', error);
    }
  };

  return {
    formData,
    isSubmitting,
    handleFormChange,
    handleFormSubmit
  };
}
