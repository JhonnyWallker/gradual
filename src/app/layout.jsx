import { Inter } from "next/font/google";
import "./globals.css";
import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Corrientes Gradual",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-w-screen h-auto p-5 bg-gradual-yellow fixed top-0 left-0 right-0 z-40">
          <div className="flex flex-col mx-auto gap-3 md:flex-row md:justify-between w-full 2xl:mx-80">
            <Link
            href="/">
              <img
                src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1710094097/ctes-gradual-dark-30x117_a7z5f0.png"
                alt="Corrientes Gradual"
                title="Corrientes Gradual"
                className="w-44 md:w-44 mx-auto 3xl:w-64"
              />
            </Link>
            <Link href="https://www.corrientes.gob.ar/" target="blank" className="hidden md:inline-flex">
              <img
                src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1710108318/ctes-somos-todos_mlqdal.png"
                alt="Corrientes Somos Todos"
                title="Corrientes Somos Todos"
                className="w-52 mx-auto"
              />
            </Link>
            <div className="mx-auto md:mx-0">
              <Clock />
            </div>
          </div>
        </div>
        <main>{children}</main>

        <footer className="md:bottom-0">
          <Footer />
        </footer>
        </body>
    </html>
  );
}
