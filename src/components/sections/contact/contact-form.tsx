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

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast({
        title: 'Message sent',
        description: 'Your message has been successfully sent!'
      });
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch (error) {
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
          className="p-1 lg:w-4/6 outline-zinc-800 bg-white/5 rounded-lg border border-white/10"
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
          className="p-1 lg:w-4/6  outline-zinc-800 bg-white/5 rounded-lg border border-white/10"
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
          className="p-1 outline-zinc-800 resize-none bg-white/5 rounded-lg border border-white/10"
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
        className="p-2 w-full rounded-lg bg-primary/60 cursor-pointer border border-white/20"
      />
    </form>
  );
}
