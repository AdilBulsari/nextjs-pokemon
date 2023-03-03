import Link from "next/link";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="bg-white relative h-40 place-content-center flex items-center flex-row border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokemon Logo"
        />
      </div>

      <Component {...pageProps} />
    </>
  );
}
