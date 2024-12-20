export default function BlurBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Purple circle */}
      <div
        className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        style={{
          top: '10%',
          left: '15%',
        }}
      />

      {/* Blue circle */}
      <div
        className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        style={{
          top: '60%',
          right: '15%',
        }}
      />

      {/* Pink circle */}
      <div
        className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        style={{
          top: '20%',
          left: '50%',
        }}
      />

      {/* Emerald circle */}
      <div
        className="absolute w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
        style={{
          top: '60%',
          left: '25%',
        }}
      />

      {/* Green circle - Only visible on desktop */}
      <div
        className="hidden md:block absolute w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl"
        style={{
          top: '25%',
          right: '2%',
        }}
      />

      {/* Sky circle - Only visible on desktop */}
      <div
        className="hidden md:block absolute w-72 h-72 bg-sky-400/10 rounded-full blur-3xl"
        style={{
          top: '60%',
          left: '1%',
        }}
      />
    </div>
  );
}
