import { Book } from "@/type";

const fetchOneBook = async (id: number): Promise<Book | null> => {
  const url = `https://onebite-books-server-ten-mocha.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchOneBook;
