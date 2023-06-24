import { HomeIcon, MenuIcon } from "../../utils/icons/Icons";
import { icons } from "../../utils/icons/Icons";
import Buttons from "./components/Buttons";

export default function Sidebar() {
  return (
    <div className="drawer lg:drawer-open fixed top-0 left-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center fixed top-0 left-0 p-8">
        <label htmlFor="my-drawer-2" className="lg:hidden z-40">
          <MenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="w-36 lg:w-[88px] h-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 lg:bg-opacity-20 flex flex-col justify-around items-center">
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
