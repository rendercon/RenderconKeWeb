import { Container } from "../components/Container";

export default function Page() {
    return (
    <Container 
    className="text-center lg:text-left"
    >

        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div>
                    <h2 className="font-display text-4xl font-medium text-center tracking-tighter text-slate-300 sm:text-5xl">
                        Code of Conduct
                    </h2>

                    <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
                    All attendees, speakers, sponsors and volunteers at RenderCon are required to follow this Code of Conduct. Organisers will strictly enforce it throughout the events and community gatherings. We expect cooperation from all participants to help ensure a safe environment for everybody.

                    <br/><br/>
                    In case you have identified a breach of our CoC, please approach our crew (look for SUDO or CREW tags on crew members, or purple reflector jackets labeled &quot;CREW&quot;) immediately or contact our CoC enforcement team — <span className="font-black text-slate-300">coc@rendercon.org</span>.
                    </p>

                    <h4 className="font-display mt-12 text-xl font-medium tracking-tighter text-slate-300 sm:text-2xl">
                        The Short Version
                    </h4>
                    <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">

                    Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.
                    </p>

                    <h4 className="font-display mt-12 text-xl font-medium tracking-tighter text-slate-300 sm:text-2xl">
                        The Long Version
                    </h4>
                    <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">

                    Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
                     <br/><br/>
                    Participants asked to stop any harassing behavior are expected to comply immediately.
                    <br/><br/>
                    Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.
                    <br/><br/>
                    If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
                    <br/><br/>
                    If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they&#39;ll be wearing branded clothing and/or badges.
                    <br/><br/>
                    Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.
                                        
                    </p>

                    <p className="mt-20 italic font-mono text-2xl tracking-tight text-slate-400 break-words">
                        We expect participants to follow these rules at all conference venues and conference-related social events.
                        <br/><br/>
                        Original source and credit: <a className="underline" href="http://2012.jsconf.us/#/about" target="_blank" rel="noopener noreferrer">http://2012.jsconf.us/#/about</a> &amp; The Ada Initiative 
                        <br/><br/>
                        Please help by translating or improving: <a className="underline" href="https://github.com/confcodeofconduct/confcodeofconduct.com" target="_blank" rel="noopener noreferrer">https://github.com/confcodeofconduct/confcodeofconduct.com</a>
                        <br/><br/>
                        This work is licensed under a <a className="underline" href="http://creativecommons.org/licenses/by/3.0/deed.en_US" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 3.0 Unported License</a>
                    </p>

                </div>
            </div>
    </Container>
    
    )
  }