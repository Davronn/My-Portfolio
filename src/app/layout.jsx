import { Inter } from "next/font/google";
import "../styles/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div>{children}</div>
      </body>
    </html>
  );
}
