import Category from "./Category";

type MainProps = {
  resources: {
    resourceCategories: Array<object>;
  };
};

export default function Main({ resources }: MainProps) {
  return (
    <>
      <main className="w-full py-16">
        {resources.resourceCategories.map((category: any) => ( 
          <Category
            key={category.categoryName}
            categoryName={category.categoryName}
            categoryResources={category.categoryResources}
          />
        ))}
      </main>
    </>
  );
}
