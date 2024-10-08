import Contacts from "./Contacts";
import EventsInfo from "./EventsInfo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contacts"
      aria-label="Contacts"
      className="py-6 bg-[#240046] flex flex-col"
    >
      <div className="flex flex-col justify-center gap-9">
        <EventsInfo />
        <Contacts />
      </div>
      <div className="flex items-center justify-center font-mono flex-col">
        <p className="mt-6 text-base text-slate-200 md:mt-0 text-center">
          Copyright &copy; {new Date().getFullYear()} RenderCon Kenya
        </p>
        <div className="flex gap-4 mt-4 md:ml-4 text-slate-200 text-sm">
          <Link
            href="/code-of-conduct"
            className=" text-yellow-300 hover:underline underline hover:text-yellow-500"
          >
            Code of Conduct
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:underline text-yellow-300 underline hover:text-yellow-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/media-policy"
            className="hover:underline text-yellow-300 underline hover:text-yellow-500"
          >
            Media Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
