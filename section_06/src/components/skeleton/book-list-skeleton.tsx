import BookItemSkeleton from "./book-item-skeleton";

interface BookListSkeletonProps {
  count: number;
}

const BookListSkeleton = ({ count }: BookListSkeletonProps) => {
  return (
    <div>
      {Array.from({ length: count }).map((_, index) => (
        <BookItemSkeleton key={index} />
      ))}
    </div>
  );
};

export default BookListSkeleton;
