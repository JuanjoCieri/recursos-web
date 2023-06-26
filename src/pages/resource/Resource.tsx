import {useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/Searchbar/SearchBar";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "../../components/Footer";

interface ResourceData {
  resourceName: string;
  resourceImage: string;
  resourceCategories: Array<object>;
}

interface Resource {
  [index: number]: ResourceData;
}

export default function Resource() {
  const navigate = useNavigate();
  const [resourcesName] = useState([
    "colores",
    "backgrounds",
    "iconos",
    "ideas",
    "ilustracion",
    "tipografia",
  ]);
  const [resource, setResource] = useState<Resource | undefined>();
  const { name } = useParams();

  useEffect(() => {
    if (resourcesName.find((resourceName) => resourceName === name)) {
      const importResource = async () => {
        const resource = await import(
          /* @vite-ignore */ `../../resources/${name}/${name}.ts`
        );
        setResource(resource.default);
      };
      importResource();
    } else {
      navigate("/not-found")
    }
  }, [name, resourcesName, navigate]);

  if (!resource) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  return (
    <>
      <Sidebar />
      <SearchBar />
      {resource && (
        <Header
          cardImage={resource[0].resourceImage}
          cardTittle={resource[0].resourceName}
        />
      )}
      {resource && <Main resources={resource[1]} />}
      <Footer />
    </>
  );
}
