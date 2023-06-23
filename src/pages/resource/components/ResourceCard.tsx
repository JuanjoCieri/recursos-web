type ResourceCardProps = {
  resourceName: string;
  resourceImage: string;
  resourceDesc: string;
  resourceBackLink: string;
};

export default function ResourceCard({
  resourceName,
  resourceImage,
  resourceDesc,
  resourceBackLink,
}: ResourceCardProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-between w-80 h-48 p-2 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm lg:bg-opacity-20 rounded-xl">
        <div className="w-full flex justify-center items-center h-1/2">
          <div className="w-1/3 flex justify-center items-center">
            <img src={resourceImage} className="w-16 h-16 object-cover" />
          </div>
          <div className="w-2/3 flex justify-center items-center px-4">
            <h3 className="text-black font-semibold">{resourceName}</h3>
          </div>
        </div>
        <div className="w-full h-1/2 flex justify-center items-center">
          <h4>{resourceDesc}</h4>
        </div>
      </div>
    </>
  );
}
