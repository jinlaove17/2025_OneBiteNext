import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

interface SearchableLayoutProps {
  children: ReactNode;
}

const SearchableLayout = (data: SearchableLayoutProps) => {
  const { children } = data;
  const [search, setSearch] = useState("");
  const router = useRouter();
  const q = router.query.q as string;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    if (!search || search === q) {
      return;
    }

    router.push(`/search?q=${search}`);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          type="text"
          placeholder="검색어를 입력해 주세요"
          onChange={handleChange}
          onKeyDown={handleKeydown}
        />
        <button
          type="button"
          onClick={handleClick}
        >
          검색
        </button>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
