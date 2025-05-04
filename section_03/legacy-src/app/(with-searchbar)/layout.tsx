import SearchBar from "../../components/search-bar";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
};

export default SearchLayout;
