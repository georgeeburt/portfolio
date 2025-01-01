export default function Tooltip({ label }: { label: string }) {
  return (
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary/90 px-2 py-1 text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      {label}
    </span>
  );
}
