import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { Book } from "@/type";
import Head from "next/head";

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);

//   return {
//     props: {
//       books,
//     },
//   };
// };

const Search = () => {
  const router = useRouter();
  const q = router.query.q;
  const [books, setBooks] = useState<Book[]>([]);
  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      // 검색 결과를 불러오는 로직
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>한입 북스 - 검색 결과</title>
        <meta
          property="og:image"
          content="/thumbnail.png"
        />
        <meta
          property="og:title"
          content="한입 북스 - 검색 결과"
        />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요."
        />
      </Head>

      {books.map((item) => (
        <BookItem
          key={item.id}
          book={item}
        />
      ))}
    </div>
  );
};

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Search;
