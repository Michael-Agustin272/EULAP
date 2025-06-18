export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
              <p className="text-lg text-gray-700 mb-4">
                A description of the first project, what technologies you used, and the problem it solves.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
  
            {/* Project 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
              <p className="text-lg text-gray-700 mb-4">
                A description of the second project, what technologies you used, and the problem it solves.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
  
            {/* Project 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Project 3</h3>
              <p className="text-lg text-gray-700 mb-4">
                A description of the third project, what technologies you used, and the problem it solves.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  