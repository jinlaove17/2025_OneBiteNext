import { ReviewData } from "@/types";
import style from "./review-item.module.css";
import ReviewItemDeleteButton from "./review-item-delete-button";

interface ReviewItemProps {
  data: ReviewData;
}

const ReviewItem = ({ data }: ReviewItemProps) => {
  const { id, content, author, createdAt, bookId } = data;

  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
        <div className={style.delete_button}>
          <ReviewItemDeleteButton
            reviewId={id}
            bookId={bookId}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
