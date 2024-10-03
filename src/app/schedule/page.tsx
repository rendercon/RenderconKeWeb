import Footer from "../components/Footer";
import { Header } from "../components/Header";

export default function SchedulePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-10 px-6">
        <h1 className="text-center text-4xl font-bold text-yellow-500 border-b-2 border-yellow-500 mb-8 pb-3">
          Schedule
        </h1>

        {/* Embed Sessionize Schedule using an iframe */}
        <div className="flex justify-center">
          <iframe
            src="https://renderconke24.sessionize.com/schedule"
            title="RenderCon Schedule"
            className="max-w-[1000px] w-full h-full min-h-[1000px] border-none rounded-lg"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
