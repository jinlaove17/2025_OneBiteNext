import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

const Footer = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const allBooks = await response.json();
  const bookCount = allBooks.length;

  return (
    <footer>
      <div>제작 @JongWoo</div>
      <div>총 {bookCount}권의 도서가 등록되어 있습니다.</div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
