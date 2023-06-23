import Category from "./Category";

export default function Main({ resources }) {
  return (
    <>
      <main className="w-full py-16">
        {resources.resourceCategories.map((category) => (
          <Category
            categoryName={category.categoryName}
            categoryResources={category.categoryResources}
          />
        ))}
      </main>
    </>
  );
}
