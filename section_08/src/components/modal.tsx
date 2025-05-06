"use client";

import { createPortal } from "react-dom";
import style from "./modal.module.css";
import { MouseEvent, ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLDialogElement>) => {
    // 모달의 배경이 클릭 됐을 때, 뒤로가기
    if ((e.target as any).nodeName === "DIALOG") {
      router.back();
    }
  };

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    if (!dialogRef.current.open) {
      dialogRef.current.showModal();
      dialogRef.current.scrollTo({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      className={style.modal}
      onClick={handleClick}
      onClose={() => router.back()}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
