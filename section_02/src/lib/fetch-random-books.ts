import { Book } from "@/type";

const fetchRandomBooks = async (): Promise<Book[]> => {
  const url = "https://onebite-books-server-ten-mocha.vercel.app/book/random";

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

export default fetchRandomBooks;
