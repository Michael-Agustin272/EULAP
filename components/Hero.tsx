export default function Hero() {
    return (
      <section className="min-h-screen bg-customGrey text-white flex flex-col justify-center items-center px-6">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Jerald Agustin!</h1>
        <p className="text-xl mb-8">I'm a passionate video editor.</p>
        <a
          href="#projects"
          className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-6 rounded-lg text-lg transition duration-300"
        >
          See My Projects
        </a>
      </section>
    );
  }
  