import Header from "./Header";
import Results from "./Results";

type MainProps = {
  searchValue: string;
  matchedResults: any;
};

export default function Main({ searchValue, matchedResults }: MainProps) {
  return (
    <>
      <Header searchValue={searchValue} />
      <Results matchedResources={matchedResults} />
    </>
  );
}
