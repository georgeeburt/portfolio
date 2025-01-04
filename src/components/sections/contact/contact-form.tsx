'use client';

import useContactForm from '@/lib/hooks/use-contact-form';

export default function ContactForm() {
  const {
    formData,
    isSubmitting,
    handleFormChange,
    handleFormSubmit
  } = useContactForm();

  return (
    <form
      onSubmit={handleFormSubmit}
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
          onChange={handleFormChange}
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
          onChange={handleFormChange}
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
          onChange={handleFormChange}
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
          onChange={handleFormChange}
          value={formData.honeypot}
        />
      </p>
      <input
        type="submit"
        value={isSubmitting ? 'Sending...' : 'Send Message'}
        className="w-full cursor-pointer rounded-lg border border-primary-border bg-primary p-2 font-semibold text-primary-foreground hover:bg-secondary"
      />
    </form>
  );
}
