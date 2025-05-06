import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { BookData } from "@/types";
import { delay } from "@/utils/delay";
import { Suspense } from "react";

const SearchResult = async ({ q }: { q: string }) => {
  // 강제로 딜레이 설정
  await delay(1500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    {
      cache: "force-cache",
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const books = await response.json();

  return (
    <div>
      {books.map((book: BookData) => (
        <BookItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
};

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) => {
  const { q } = await searchParams;

  return (
    <Suspense
      key={q || ""}
      fallback={<BookListSkeleton count={3} />}
    >
      <SearchResult q={q || ""} />
    </Suspense>
  );
};

export default SearchPage;
