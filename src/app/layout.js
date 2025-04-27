import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
})

export const metadata = {
  title: "Satya Sai Nagubathula",
  description: "Product Designer and Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
       className={bricolage.variable}
      >
        {children}
      </body>
    </html>
  );
}
