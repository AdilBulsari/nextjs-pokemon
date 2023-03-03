import Link from "next/link";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="bg-black relative h-32 justify-items-center flex-row border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <Link href="/" className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Pokemon Logo"
          />
        </Link>
      </div>

      <Component {...pageProps} />
    </>
  );
}
