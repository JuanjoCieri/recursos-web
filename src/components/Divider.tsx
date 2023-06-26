type DividerProps = {
    dividerText: string
}
export default function Divider({dividerText}: DividerProps) {
  return (
    <>
      <div className="py-10">
        <p className="font-medium text-4xl text-black">{dividerText}</p>
      </div>
    </>
  );
}
