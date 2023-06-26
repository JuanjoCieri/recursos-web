import ResourceCard from "../../resource/components/ResourceCard";

type ResultsProps = {
  matchedResources: any[];
};

export default function Results({ matchedResources }: ResultsProps) {
  return (
    <>
      {matchedResources.length === 0 ? (
        <div className="w-full h-80 flex justify-center items-center">
          <p>No se encontraron resultados</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10">
          {matchedResources.map((resource) => (
            <ResourceCard
              key={resource.resourceName}
              resourceBackLink={resource.resourceBackLink}
              resourceName={resource.resourceName}
              resourceDesc={resource.resourceDesc}
              resourceImage={resource.resourceImage}
            />
          ))}
        </div>
      )}
    </>
  );
}
