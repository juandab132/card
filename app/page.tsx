export default function ProfileCard() {
  return (
    <main className="min-h-screen flex-col flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 fle">
      <section className="bg-gray-900 text-white rounded-full md:rounded-2xl object-cover transition-all duration-300 hover:scale-105 shadow-lg p-10 max-w-lg flex items-center space-x-6 container mx-auto px-4">
        <figure className="flex-shrink-0 -ml-16 ">
          <img
            className="w-32 h-32 rounded-full md:rounded-2xl object-cover transition-all duration-300 hover:scale-105  "
            src="image.jpg"
            alt="Profile"
          />
        </figure>
        <article>
          <header className="mb-2">
            <h2 className="text-2xl font-semibold">Jess Wilson</h2>
            <p className="text-sm hover:bg-slate-600">UX Enginner </p>
          </header>
          <p className="text-gray-400">
            Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
          </p>
          <footer className="mt-4 flex space-x-3">
            <button className="px-4 py-2 border border-white rounded-full hover:bg-gray-800 object-cover transition-all duration-300 hover:scale-105">Profile</button>
            <button className="px-4 py-2 bg-indigo-50 rounded-full hover:bg-white text-black object-cover transition-all duration-300 hover:scale-105">Follow</button>
          </footer>
        </article>
      </section>
    </main>
  );
}

