import Link from "next/link";
import SearchInput from "@/components/block/search/SearchInput";

export default async function KMSearch(props: any) {
  return (
    <div className="bg-gray-400 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header>
          <Link className="" href="/public">
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              Software QA
            </span>
            <span className="block text-3xl font-bold text-white">
              Knowledge Base
            </span>
          </Link>
          {/*<form className="mt-4">*/}
          {/*    <input*/}
          {/*        type="text"*/}
          {/*        className="w-full rounded-lg border-2 border-transparent bg-white bg-white/20 px-4 py-3 text-lg placeholder-white shadow focus:border-rose-400 focus:bg-white focus:placeholder-slate-400 focus:outline-none focus:ring   focus:ring-rose-300"*/}
          {/*        placeholder="Press paws here..."*/}
          {/*    />*/}
          {/*</form>*/}
          <br/>
          <SearchInput />
        </header>
      </div>
    </div>
  );
}

