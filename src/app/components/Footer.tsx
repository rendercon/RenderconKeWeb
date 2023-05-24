import { Container } from "./Container"


const Footer = () => {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-center font-mono md:flex-row">
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} RenderCon. 
        </p>
      </Container>
    </footer>
  )
}

export default Footer