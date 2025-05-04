import BookItem from "@/components/book-item";
import { BookData } from "@/types";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) => {
  const { q } = await searchParams;
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

export default SearchPage;
