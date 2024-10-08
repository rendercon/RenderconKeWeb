import { Container } from "../components/Container";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

export default function MediaPolicyPage() {
  return (
    <Container className="text-center lg:text-left">
      <Header/>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-medium text-center tracking-tighter text-slate-300 sm:text-5xl">
            Rendercon Media Policy
          </h2>

          <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
            At Rendercon, we are committed to creating an engaging and memorable experience for all participants. As part of this effort, we will be capturing photos and videos throughout the event. These images and recordings will be used for marketing and promotional purposes, including but not limited to social media posts, website content, newsletters, and other marketing materials.
          </p>

          <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
            By attending Rendercon and entering the event venue, you acknowledge and agree that:
          </p>

            <ul className="mt-4 font-mono text-2xl tracking-tight text-slate-400 list-decimal list-inside">
                <li><b>Use of Photos and Videos:</b><br/>Rendercon may capture photographs and video footage during the event, which will be used for marketing and promotional purposes. These may include but are not limited to our website, social media channels, newsletters, and other marketing materials.</li>
                <br/>
                <li><b>Consent to Be Filmed or Photographed:</b><br/>By entering the event venue, you are giving your consent to be filmed, photographed, and recorded. These media assets may feature you, along with other attendees, in both group and individual settings.</li>
                <br/>
                <li><b>No Compensation:</b><br/>Rendercon does not offer compensation for the use of any media in which you may appear, as participation in the event constitutes permission to use these images or recordings.</li>
                <br/>
                <li><b>Use of Media:</b><br/>Rendercon reserves the right to use any media captured during the event for marketing and promotional purposes. This may include sharing images and recordings on our website, social media channels, newsletters, and other marketing materials.</li>
                <br/>
                <li><b>Opting Out:</b><br/>If you prefer not to be included in any media assets, please notify a Rendercon crew member at the registration desk, and we will do our best to accommodate your request. However, we cannot guarantee that you will not appear in any photos or footage, particularly in group settings.</li>
            </ul>



          <p className="mt-20 italic font-mono text-2xl tracking-tight text-slate-400 break-words">
          By choosing to attend Rendercon and being present at the venue, you are providing your consent to this media policy.
          If you have any questions or concerns about the media policy, please contact us at{" "}
            <span className="font-black text-slate-300">
              media@rendercon.org
            </span>
          </p>
        </div>
      </div>
      <Footer/>

    </Container>
  );
}
