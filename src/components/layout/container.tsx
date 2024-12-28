export default function Container({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full px-4 md:px-[14%] lg:px-[24%]">
      {children}
    </div>
  );
}
