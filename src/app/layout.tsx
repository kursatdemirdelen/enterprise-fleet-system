import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Enterprise Fleet System",
  description: "Professional vehicle tracking and fleet management solution.",
};

import { FeatureProvider } from "@/context/feature-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="antialiased bg-gray-50" suppressHydrationWarning>
        <FeatureProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />

            {/* Main Area */}
            <main className="flex-1 overflow-y-auto pt-16 md:pt-0">
              {/* Centered Content */}
              <div className="mx-auto w-full max-w-350 px-8 py-6">
                {children}
              </div>
            </main>
          </div>
        </FeatureProvider>
      </body>
    </html>
  );
}
