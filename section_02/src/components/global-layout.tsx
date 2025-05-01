import Link from "next/link";
import { ReactNode } from "react";
import style from "./global-layout.module.css";

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout = (data: GlobalLayoutProps) => {
  const { children } = data;

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📚 ONE BITE BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @JongWoo</footer>
    </div>
  );
};

export default GlobalLayout;
