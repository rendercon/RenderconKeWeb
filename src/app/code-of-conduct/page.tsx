import { Container } from "../components/Container";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

export default function CodeOfConductPage() {
  return (
    <>
      <Header />
      <Container className="text-center lg:text-left">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-4xl font-medium text-center tracking-tighter text-slate-300 sm:text-5xl">
              Code of Conduct
            </h2>

            <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
              All attendees, speakers, sponsors, and volunteers at RenderCon are required to follow this Code of Conduct. Organizers will strictly enforce it throughout the events and community gatherings. We expect cooperation from all participants to help ensure a safe environment for everybody.
              <br/><br/>
              In case you have identified a breach of our CoC, please approach our crew (look for SUDO or CREW tags on crew members, or purple reflector jackets labeled &ldquo;CREW&rdquo;) immediately or contact our CoC enforcement team &mdash; <span className="font-black text-slate-300">coc@rendercon.org</span>.
            </p>

            <h4 className="font-display mt-12 text-xl font-medium tracking-tighter text-slate-300 sm:text-2xl">
              The Short Version
            </h4>
            <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
              Our conference is dedicated to providing a harassment-free experience for everyone, regardless of gender, identity, age, sexual orientation, disability, appearance, race, ethnicity, or technology choices. We do not tolerate harassment of participants in any form. Conference participants violating these rules may be sanctioned or expelled without a refund at the discretion of the organizers.
            </p>

            <h4 className="font-display mt-12 text-xl font-medium tracking-tighter text-slate-300 sm:text-2xl">
              The Long Version
            </h4>
            <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
              Harassment includes offensive comments, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks, inappropriate physical contact, and unwelcome sexual attention.
              <br/><br/>
              Participants asked to stop harassing behavior are expected to comply immediately.
              <br/><br/>
              Sponsors are subject to the same anti-harassment policy. Booth staff should not use sexualized clothing/uniforms or create a sexualized environment.
              <br/><br/>
              If a participant engages in harassing behavior, the organizers may take appropriate action, including expulsion with no refund.
              <br/><br/>
              If you are harassed or notice someone else being harassed, contact conference staff. Staff will be wearing branded clothing and badges, and they will be happy to assist by contacting venue security or local law enforcement, or helping participants feel safe during the conference.
            </p>

            <p className="mt-20 italic font-mono text-2xl tracking-tight text-slate-400 break-words">
              We expect participants to follow these rules at all conference venues and related social events.
              <br/><br/>
              Original source and credit: <a className="underline" href="http://2012.jsconf.us/#/about" target="_blank" rel="noopener noreferrer">http://2012.jsconf.us/#/about</a> & The Ada Initiative
              <br/><br/>
              Help translate or improve this: <a className="underline" href="https://github.com/confcodeofconduct/confcodeofconduct.com" target="_blank" rel="noopener noreferrer">GitHub: Conf Code of Conduct</a>
              <br/><br/>
              Licensed under a <a className="underline" href="http://creativecommons.org/licenses/by/3.0/deed.en_US" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 3.0 Unported License</a>
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
