export default function Title({ children }: { children: string }) {
  return (
    <h1 className="page-title text-center font-coustard-black display-1 text-red py-4">
      {children}
    </h1>
  );
}
