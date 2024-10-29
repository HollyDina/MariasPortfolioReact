import { useParams } from "react-router-dom";

const ProjectPage = ({ projectList }) => {
  const { id } = useParams();
  const project = projectList.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Produkt inte hittad</div>;
  }

  return (
    <div style={{ padding: "20px", border: "1px solid black", margin: "20px" }}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
