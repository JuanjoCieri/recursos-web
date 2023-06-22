import { HomeIcon, MenuIcon } from "../../utils/icons/Icons";
import { icons } from "../../utils/icons/Icons";
import Buttons from "./components/Buttons";

export default function Sidebar() {
  return (
    <div className="drawer lg:drawer-open fixed top-0 left-0 z-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center  fixed top-0 left-0 p-6">
        <label htmlFor="my-drawer-2" className="lg:hidden">
          <MenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="w-36 lg:w-24 h-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 lg:bg-opacity-10 flex flex-col justify-around items-center">
          <li>
            <HomeIcon />
          </li>
          <div className="border border-black w-[70%]"></div>
          {icons.map((icon) => (
            <li>
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
