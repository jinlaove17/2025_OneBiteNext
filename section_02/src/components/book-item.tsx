import { Book } from "@/type";
import Link from "next/link";
import style from "./book-item.module.css";

interface BookItemProps {
  book: Book;
}

const BookItem = (data: BookItemProps) => {
  const { id, title, subTitle, author, publisher, coverImgUrl } = data.book;

  return (
    <Link
      href={`/books/${id}`}
      className={style.container}
    >
      <img
        src={coverImgUrl}
        alt=""
      />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
