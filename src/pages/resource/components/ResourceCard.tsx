import { Link } from "react-router-dom";

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
      <a href={resourceBackLink} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col justify-center items-between w-80 h-56 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-xl">
          <div className="w-full flex justify-center items-center h-1/2">
            <div className="w-1/3 flex justify-center items-center">
              <img src={resourceImage} className="w-16 h-16 object-cover rounded-lg" />
            </div>
            <div className="w-2/3 flex justify-start items-center px-4">
              <h3 className="text-[#3E3F47] text-2xl font-bold ">
                {resourceName}
              </h3>
            </div>
          </div>
          <div className="w-full h-1/2 flex justify-center items-center p-6 ">
            <h4 className="text-gray-800 text-center">{resourceDesc}</h4>
          </div>
        </div>
      </a>
    </>
  );
}
