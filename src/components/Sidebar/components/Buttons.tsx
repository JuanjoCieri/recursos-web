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
    <div className="flex flex-col items-center justify-center">
      {buttonIcon}
      <div>{buttonName}</div>
    </div>
  );
}
