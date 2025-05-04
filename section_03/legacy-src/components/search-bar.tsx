"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="검색어를 입력해 주세요"
      />
      <button onClick={handleClick}>검색</button>
    </div>
  );
};

export default SearchBar;
