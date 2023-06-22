import SearchBar from "../../components/Searchbar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "./components/Main";
import MainCards from "./components/MainCards";

export default function Home() {
  return (
    <>
      <Sidebar />
      <SearchBar />
      <Main />
      <MainCards />
    </>
  );
}
