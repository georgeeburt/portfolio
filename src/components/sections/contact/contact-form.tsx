'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  console.log(formData);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
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
          onChange={handleChange}
          className="p-1 sm:minw-full min-w-80 lg:w-4/6 outline-zinc-800 bg-white/5 rounded-lg border border-white/10"
          required
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
          onChange={handleChange}
          className="p-1 sm:w-full min-w-80 lg:w-4/6  outline-zinc-800 bg-white/5 rounded-lg border border-white/10"
          required
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
          onChange={handleChange}
          className="outline-zinc-800 resize-none bg-white/5 rounded-lg border border-white/10"
          required
        ></textarea>
      </p>
      <input
        type="submit"
        className="p-2 w-full rounded-lg hover:bg-white/5 cursor-pointer border border-white/10"
      />
    </form>
  );
}
