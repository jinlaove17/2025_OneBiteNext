import BookPage from "@/app/book/[id]/page";
import Modal from "@/components/modal";

const InterceptingPage = (props: any) => {
  return (
    <Modal>
      <BookPage {...props} />
    </Modal>
  );
};

export default InterceptingPage;
