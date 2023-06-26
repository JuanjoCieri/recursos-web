import { GithubIcon, LinkedinIcon } from "../utils/icons/Icons";

export default function Footer() {
  return (
    <footer className="w-full h-20 flex flex-col justify-around items-center relative bottom-0">
      <div className="flex items-center justify-center gap-5">
        <a href="https://github.com/JuanjoCieri">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/juan-jose-cieri">
          <LinkedinIcon />
        </a>
      </div>
      <div>
        <h2 className="text-black font-light">Recursos gratuitos 2023</h2>
      </div>
    </footer>
  );
}
