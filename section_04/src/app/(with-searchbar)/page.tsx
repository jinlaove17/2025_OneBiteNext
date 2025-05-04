import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

export const AllBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {
      cache: "no-cache",
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const allBooks = await response.json();

  return (
    <div>
      {allBooks.map((book: BookData) => (
        <BookItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
};

export const RecoBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      next: {
        revalidate: 3,
      },
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const recoBooks = await response.json();

  return (
    <div>
      {recoBooks.map((book: BookData) => (
        <BookItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
};

const HomePage = async () => {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
};

export default HomePage;
