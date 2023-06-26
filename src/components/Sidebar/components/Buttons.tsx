import { Link } from "react-router-dom";

type ButtonsProps = {
  buttonIcon: any;
  buttonName: string;
  buttonLinkTo: string;
};

export default function Buttons({
  buttonIcon,
  buttonName,
  buttonLinkTo,
}: ButtonsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Link to={"/" + buttonLinkTo}>{buttonIcon}</Link>
      <div>
        <Link to={"/" + buttonLinkTo}>
          <p className="text-black text-xs font-medium">{buttonName}</p>
        </Link>
      </div>  
    </div>
  );
}
