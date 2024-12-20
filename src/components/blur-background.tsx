export default function BlurBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Purple circle */}
      <div
        className="absolute w-3/6 h-3/6 bg-purple-600/55 md:w-2/6 md:h-2/6 md:bg-purple-600/45 rounded-full blur-[9rem]"
        style={{
          top: '-10%',
          right: '-10%',
        }}
      />

      {/* Pink circle */}
      <div
        className="absolute w-3/6 h-3/6 bg-pink-600/45 md:w-2/6 md:h-2/6 rounded-full blur-[9rem]"
        style={{
          top: '-25%',
          left: '-25%',
        }}
      />

      {/* Green circle */}
      <div
        className="absolute w-3/6 h-3/6 bg-green-600/45 md:w-2/6 md:h-2/6 rounded-full blur-[12rem]"
        style={{
          bottom: '-25%',
          left: '5%',
        }}
      />
    </div>
  );
}
