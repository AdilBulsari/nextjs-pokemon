import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="bg-black relative h-32 flex justify-center flex-row border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <Link href="/" className="flex items-center">
          <Image
            priority
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            alt="Pokemon Logo"
            height={150}
            width={150}
          />
        </Link>
      </div>

      <Component {...pageProps} />
    </>
  );
}
