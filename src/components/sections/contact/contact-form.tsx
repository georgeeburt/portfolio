export default function ContactForm() {
  return (
    <form action="" className="flex flex-grow flex-col gap-6">
      <p className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="p-1 sm:minw-full min-w-80 lg:w-4/6 outline-zinc-800 bg-white/5 rounded-lg border border-white/10"
          required
        />
      </p>
      <p className="flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="p-1 sm:w-full min-w-80 lg:w-4/6  outline-zinc-800 bg-white/5 rounded-lg border border-white/10"
          required
        />
      </p>
      <p className="flex flex-col gap-2">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          rows={5}
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
