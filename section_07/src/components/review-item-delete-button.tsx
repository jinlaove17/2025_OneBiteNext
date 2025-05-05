"use client";

import { deleteReview } from "@/actions/review";
import { useActionState, useEffect, useRef } from "react";

interface ReviewItemDeleteButtonProps {
  reviewId: number;
  bookId: number;
}

const ReviewItemDeleteButton = ({
  reviewId,
  bookId,
}: ReviewItemDeleteButtonProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(deleteReview, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      ref={formRef}
    >
      <input
        type="text"
        name="reviewId"
        value={reviewId}
        hidden
        readOnly
      />
      <input
        type="text"
        name="bookId"
        value={bookId}
        hidden
        readOnly
      />
      {isPending ? (
        <div>...</div>
      ) : (
        <div onClick={() => formRef.current?.requestSubmit()}>삭제하기</div>
      )}
    </form>
  );
};

export default ReviewItemDeleteButton;
