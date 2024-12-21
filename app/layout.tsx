import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Plus_Jakarta_Sans } from "@next/font/google";
import { Toaster } from "@/components/ui/toaster";
import BreadCrumb from "@/components/BreadCrumb";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CarePulse",
  description:
    "Patient management system to book appointments in CarePulse Ireland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <BreadCrumb />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
