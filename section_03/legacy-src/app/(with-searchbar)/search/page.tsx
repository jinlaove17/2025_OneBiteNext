import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  return (
    <div>
      검색 페이지 {q}
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
};

export default SearchPage;
