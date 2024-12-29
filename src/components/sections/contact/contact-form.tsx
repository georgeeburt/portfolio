'use client';

import { FormEvent, useState } from 'react';
import { useToast } from '@/lib/hooks/use-toast';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
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
      setFormData({ name: '', email: '', message: '', honeypot: '' });
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-grow flex-col gap-6"
    >
      <p className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-lg border border-white/10 bg-white/5 p-1 outline-zinc-800 lg:w-4/6"
        />
      </p>
      <p className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="rounded-lg border border-white/10 bg-white/5 p-1 outline-zinc-800 lg:w-4/6"
        />
      </p>
      <p className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold">
          Message:
        </label>
        <textarea
          id="message"
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="resize-none rounded-lg border border-white/10 bg-white/5 p-1 outline-zinc-800"
        ></textarea>
      </p>
      {/* Honeypot field */}
      <p className="hidden">
        <label htmlFor="honeypot">Leave this field blank</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          onChange={handleChange}
          value={formData.honeypot}
        />
      </p>
      <input
        type="submit"
        value={isSubmitting ? 'Sending...' : 'Send Message'}
        className="w-full cursor-pointer rounded-lg border border-white/20 bg-primary p-2 font-semibold text-primary-foreground hover:bg-secondary"
      />
    </form>
  );
}
