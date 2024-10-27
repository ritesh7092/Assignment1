import localFont from "next/font/local";
import "./globals.css";

// Importing custom fonts with variables for each
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata configuration
export const metadata = {
  title: "Better.com Clone", // Updated title for your project
  description: "A clone of Better.com built using Next.js", // Updated description
};

// Root layout for the app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: '#004731', // Dark green background
          color: 'white',             // White text color
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
