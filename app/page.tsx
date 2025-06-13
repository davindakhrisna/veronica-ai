import VoiceChat from "./components/voiceChat";

export default function Main() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* bakcground*/}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-700/15" />

      {/* main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-evenly p-4 md:p-8">
        <div className="w-full h-full max-w-4xl mx-auto flex flex-col items-center gap-8">
          {/* header */}
          <header className="w-full flex justify-between items-center py-6">
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
                Veronica
              </h1>
              <p className="text-sm md:text-base text-gray-400 mt-2">
                Prototype Real-time AI Voice Chat
              </p>
            </div>
          </header>

          {/* main feature */}
          <VoiceChat />

          {/* support me please */}
          <footer className="w-full flex items-center justify-center gap-4 mt-8 text-sm text-gray-500">
            <a
              href="https://www.paypal.com/paypalme/DavindaKhrisna"
              className="hover:text-purple-400 transition-colors"
              target="_blank"
            >
              Paypal
            </a>
            <span className="hidden md:inline text-gray-700">•</span>
            <a
              href="#"
              className="hover:text-purple-400 transition-colors"
              target="_blank"
            >
              Repository
            </a>
            <span className="hidden md:inline text-gray-700">•</span>
            <a
              href="https://www.linkedin.com/in/davinda-khrisna-adyatma-6534432b2/"
              className="hover:text-purple-400 transition-colors"
              target="_blank"
            >
              LinkedIn
            </a>
          </footer>
        </div>
      </div>
    </main>
  );
}
