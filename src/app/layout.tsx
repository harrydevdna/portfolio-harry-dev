import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Portfolio Harry Dev",
  description: "Portfolio Harry Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-right" expand={false} richColors toastOptions={{
            classNames: {
              title: "md:text-lg font-semibold",
              description: "md:text-lg text-muted-foreground",
              actionButton: "!px-5 !py-4",
            }
          }}/>
        </ThemeProvider>
      </body>
    </html>
  );
}
