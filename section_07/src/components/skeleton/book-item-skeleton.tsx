import style from "./book-item-skeleton.module.css";

const BookItemSkeleton = () => {
  return (
    <div className={style.container}>
      <div className={style.cover_img}></div>
      <div className={style.info_container}>
        <div className={style.title}></div>
        <div className={style.sub_title}></div>
        <br />
        <div className={style.author}></div>
      </div>
    </div>
  );
};

export default BookItemSkeleton;
