"use client";

import style from "./review-editor.module.css";
import { createReview } from "@/actions/review";
import { useActionState, useEffect } from "react";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  const [state, formAction, isPending] = useActionState(createReview, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form
        action={formAction}
        className={style.form_container}
      >
        <input
          type="text"
          name="bookId"
          value={bookId}
          readOnly
          hidden
        />
        <textarea
          name="content"
          placeholder="리뷰 내용을 입력해 주세요"
          required
          disabled={isPending}
        />
        <div className={style.submit_container}>
          <input
            type="text"
            name="author"
            placeholder="작성자"
            required
            disabled={isPending}
          />
          <button disabled={isPending}>리뷰 작성</button>
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
