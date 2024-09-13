import Contacts from "./Contacts";
import { Container } from "./Container";
import EventsInfo from "./EventsInfo";

const Footer = () => {
  return (
    <footer
      id="contacts"
      aria-label="Contacts"
      className="py-6 bg-[#240046] border-t-[2px] border-[#42208c]"
    >
      <div className="flex flex-col justify-center gap-9">
        <EventsInfo />
        <Contacts />
      </div>
      <Container className="flex flex-col items-center justify-center font-mono md:flex-row">
        <p className="mt-6 text-base text-slate-200 md:mt-0 text-center">
          Copyright &copy; {new Date().getFullYear()} RenderCon Kenya
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
