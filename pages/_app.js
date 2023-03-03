import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  function searchValueHandler(value) {
    router.push("/pokemon/" + value);
  }
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
      <SearchBar searchedPokemon={searchValueHandler} />
      <Component {...pageProps} />
    </>
  );
}
