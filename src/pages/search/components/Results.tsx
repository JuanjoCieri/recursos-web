import ResourceCard from "../../resource/components/ResourceCard";

type ResultsProps = {
  matchedResources: any;
};

export default function Results({ matchedResources }: ResultsProps) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10">
        {matchedResources.map((resource) => (
          <ResourceCard
            resourceBackLink={resource.resourceBackLink}
            resourceName={resource.resourceName}
            resourceDesc={resource.resourceDesc}
            resourceImage={resource.resourceImage}
          />
        ))}
      </div>
    </>
  );
}
