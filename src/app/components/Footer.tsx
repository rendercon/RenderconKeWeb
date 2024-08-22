import Contacts from "./Contacts"
import { Container } from "./Container"


const Footer = () => {
  return (
    <footer id="contacts" aria-label="Contacts" className="py-16 bg-[#141414] border-t-2">
      <Contacts/>
      <Container className="flex flex-col items-center justify-center font-mono md:flex-row">
        <p className="mt-6 text-base text-slate-200 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} RenderCon. 
        </p>
      </Container>
    </footer>
  )
}

export default Footer