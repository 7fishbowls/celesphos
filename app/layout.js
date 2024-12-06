import "./globals.css";

export const metadata = {
  title: "Celesphos",
  description: "A perfect website for space researches and space explores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
