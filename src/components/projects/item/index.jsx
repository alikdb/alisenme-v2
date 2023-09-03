const ProjectItem = () => {
  return(
    <div className="border-gray-600 hover:border-gray-400 border rounded p-5  ">
          
          <span className="text-yellow-300">2023</span>

          <div className="text-xl mb-1">Habbolar</div>
          <div className="text-sm text-gray-400">Bir online topluluk için haber websitesi</div>
          <div className="mt-2 flex gap-x-5">
            <button className="border rounded text-sm px-2 py-1 border-gray-600 hover:border-gray-400 text-gray-400 hover:text-gray-300">Makale</button>
            <button className="border rounded text-sm px-2 py-1 border-gray-600 hover:border-gray-400 text-gray-400 hover:text-gray-300">Demo</button>
            <button className="border rounded text-sm px-2 py-1 border-gray-600 hover:border-gray-400 text-gray-400 hover:text-gray-300">Source</button>
          </div>
        </div>
  )
};
export default ProjectItem