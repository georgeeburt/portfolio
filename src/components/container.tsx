export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full w-full mx-auto px-4 md:px-[14%] lg:px-[24%] py-12">
      {children}
    </div>
  );
}