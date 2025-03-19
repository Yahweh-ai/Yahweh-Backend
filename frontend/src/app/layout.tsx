import React from "react";
import Sidebar from "../components/ui/sidebar";
 // ✅ Ensure correct import

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar /> {/* ✅ Sidebar component added */}
        <main className="flex-grow p-4">{children}</main>
      </body>
    </html>
  );
}
