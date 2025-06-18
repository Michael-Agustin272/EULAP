export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full">
              <img
                src="/image_resources/profile.jpg"
                alt="Your Image"
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-lg text-gray-700">
                I'm a passionate web developer who loves building things that solve problems. My journey
                in tech started when I discovered the world of coding, and I've been hooked ever since. I'm
                experienced in both front-end and back-end technologies, with a strong focus on user experience.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                My goal is to create seamless, beautiful, and accessible web experiences that users love.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }