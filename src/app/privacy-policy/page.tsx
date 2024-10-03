import { Container } from "../components/Container";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

export default function PrivacyPolicyPage() {
  return (
    <Container className="text-center lg:text-left">
      <Header/>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-medium text-center tracking-tighter text-slate-300 sm:text-5xl">
            Privacy Policy
          </h2>

          <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
            At RenderCon, we are committed to protecting your privacy. This
            privacy policy explains how we collect, use, and safeguard your
            personal information when you attend our event or use our website.
          </p>

          <h4 className="font-display mt-12 text-xl font-medium tracking-tighter text-slate-300 sm:text-2xl">
            Information We Collect
          </h4>
          <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
            We may collect personal data such as your name, email address, and
            other contact details when you register for the event, participate
            in sessions, or engage in our community spaces. We also collect
            technical information when you interact with our website, such as
            your IP address, browser type, and cookies.
          </p>

          <h4 className="font-display mt-12 text-xl font-medium tracking-tighter text-slate-300 sm:text-2xl">
            How We Use Your Information
          </h4>
          <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
            We use your information to manage your event registration, provide
            updates, facilitate your participation, and communicate important
            event information. We may also use your data to improve the user
            experience of our website and events.
          </p>

          <h4 className="font-display mt-12 text-xl font-medium tracking-tighter text-slate-300 sm:text-2xl">
            How We Share Your Information
          </h4>
          <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
            RenderCon will not sell or rent your personal information to third
            parties. We may share your data with our event partners or sponsors
            in the context of event coordination or participation. Any data
            sharing will be in compliance with applicable privacy laws.
          </p>

          <h4 className="font-display mt-12 text-xl font-medium tracking-tighter text-slate-300 sm:text-2xl">
            Data Security
          </h4>
          <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, or alteration. However, no
            internet-based system can guarantee absolute security.
          </p>

          <h4 className="font-display mt-12 text-xl font-medium tracking-tighter text-slate-300 sm:text-2xl">
            Your Rights
          </h4>
          <p className="mt-4 font-mono text-2xl tracking-tight text-slate-400">
            You have the right to access, correct, or delete the personal
            information we hold about you. If you wish to exercise any of these
            rights or have questions about our privacy policy, please contact us
            at{" "}
            <span className="font-black text-slate-300">
              privacy@rendercon.org
            </span>
            .
          </p>

          <p className="mt-20 italic font-mono text-2xl tracking-tight text-slate-400 break-words">
            By attending RenderCon or using our website, you consent to the
            terms of this privacy policy. We may update this policy
            periodically, so please check back for any changes.
          </p>
        </div>
      </div>
      <Footer/>

    </Container>
  );
}
