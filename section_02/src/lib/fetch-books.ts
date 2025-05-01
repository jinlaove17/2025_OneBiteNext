import { Book } from "@/type";

const fetchBooks = async (q?: string): Promise<Book[]> => {
  let url = "https://onebite-books-server-ten-mocha.vercel.app/book";
  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchBooks;
