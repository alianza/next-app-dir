import "./globals.css";
export const metadata = {
  title: "Next.js App with App Directory Template",
  description: "Generated by create next app by J.W.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}