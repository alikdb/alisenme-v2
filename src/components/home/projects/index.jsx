import ProjectItem from "~/components/projects/item";
const Projects = () => {
  return (
    <div className="my-5">
      <h3 className="text-xl md:text-3xl font-bold">Projelerim</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
       
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
       <ProjectItem />
        
      </div>
    </div>
  );
};

export default Projects;
