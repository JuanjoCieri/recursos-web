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
    <div className="flex flex-col items-center justify-center gap-2">
      <Link to={"/" + buttonLinkTo}>{buttonIcon}</Link>
      <div>
        <p className="text-black text-xs font-medium">{buttonName}</p>
      </div>
    </div>
  );
}
