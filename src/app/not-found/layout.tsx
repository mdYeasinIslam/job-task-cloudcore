export default function NotFoundLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0f1a] text-white">
        {children}
      </body>
    </html>
  );
}
