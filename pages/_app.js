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
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2273a93f-836e-4ba7-9245-615da889cc91/daabtts-7c835802-47f7-4259-af2b-2610b9e0aa05.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyNzNhOTNmLTgzNmUtNGJhNy05MjQ1LTYxNWRhODg5Y2M5MVwvZGFhYnR0cy03YzgzNTgwMi00N2Y3LTQyNTktYWYyYi0yNjEwYjllMGFhMDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0Ulw7PuNVOxLS9KRleY6TTex8KHd36pJOMnTv2SVLH4"
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
