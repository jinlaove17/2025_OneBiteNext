const BookPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>books/{id} page입니다.</div>;
};

export default BookPage;
