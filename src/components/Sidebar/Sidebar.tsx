import { MenuIcon } from "../../utils/icons/Icons";
import { icons } from "../../utils/icons/Icons";
import Buttons from "./components/Buttons";

export default function Sidebar() {
  return (
    <div className="drawer lg:drawer-open fixed z-10 lg:z-0 top-0 left-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center fixed top-0 left-0 p-8">
        <label htmlFor="my-drawer-2" className="lg:hidden z-40 cursor-pointer">
          <MenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="w-36 lg:w-[88px] h-full  bg-clip-padding backdrop-filter backdrop-blur-lg bg-white lg:bg-gray-400 bg-opacity-80 lg:bg-opacity-40 flex flex-col justify-around items-center">
          {icons.map((icon) => (
            <li key={icon.buttonName}>
              <Buttons
                buttonIcon={icon.buttonIcon}
                buttonName={icon.buttonName}
                buttonLinkTo={icon.buttonLinkTo}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
