import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/Searchbar/SearchBar";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Resource() {
    const [resource, setResource] = useState()
  const { name } = useParams();

  useEffect(() => {
    const importResource = async () => {
      const resource = await import(/* @vite-ignore */ `../../resources/${name}/${name}.ts`);
      setResource(resource.default);
    };
    importResource();
  }, [name]);

  return (
    <>
      <Sidebar />
      <SearchBar />
      {resource && <Header cardImage={resource[0].resourceImage} cardTittle={resource[0].resourceName}/>}
      {resource && <Main resources={resource[1]} />}
    </>
  );
}

