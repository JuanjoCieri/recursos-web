import ResourceCard from "./ResourceCard";

type CategoryProps = {
  categoryName: string;
  categoryResources: Array<any>;
};

export default function Category({
  categoryName,
  categoryResources,
}: CategoryProps) {
  return (
    <>
      <section className="flex flex-col gap-10 mb-10">
        <div className="w-full flex justify-start items-center">
          <h3 className="text-black text-4xl font-medium">{categoryName}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10">
          {categoryResources.map((resource) => (
            <ResourceCard
            key={resource.resourceName}
              resourceBackLink={resource.resourceBackLink}
              resourceName={resource.resourceName}
              resourceDesc={resource.resourceDesc}
              resourceImage={resource.resourceImage}
            />
          ))}
        </div>
      </section>
    </>
  );
}
