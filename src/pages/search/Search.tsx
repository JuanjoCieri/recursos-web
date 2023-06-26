import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../../components/Searchbar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "./components/Main";
import Footer from "../../components/Footer";
import resources from "../../resources/resources";
import { CategoryResource } from "../../resources/interfaces";

function findResources(resourceName: string): CategoryResource[] {
  const matchingResources: CategoryResource[] = [];

  for (const resource of resources) {
    for (const category of resource.resourceCategories ?? []) {
      for (const categoryResource of category.categoryResources) {
        if (
          categoryResource.resourceName
            .toLowerCase()
            .includes(resourceName.toLowerCase()) ||
          categoryResource.resourceDesc
            .toLowerCase()
            .includes(resourceName.toLowerCase())
        ) {
          matchingResources.push(categoryResource);
        }
      }
    }
  }

  return matchingResources;
}

export default function Search() {
  const [foundedResults, setFoundedResults] = useState<CategoryResource[]>([]); 
  const { name } = useParams();

  useEffect(() => {
    setFoundedResults(findResources(name || ""));
  }, [name]);

  return (
    <>
      <Sidebar />
      <SearchBar />
      <Main searchValue={name || ""} matchedResults={foundedResults} />
      <Footer />
    </>
  );
}
