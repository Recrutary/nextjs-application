"use client";

import SearchComponent from "@/app/components/search/searchComponent";

const Search = () => {
  return (
    <main className="bg-[#f9f9f9] flex items-center justify-center min-h-screen">
      <section className="relative w-full sm:w-8/12 bg-white p-6 rounded-lg shadow-lg mx-4 sm:mx-0">
      <SearchComponent/>
      </section>
    </main>
  );
};

export default Search;
