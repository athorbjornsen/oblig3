import resources from "../Resources/ressurser";

const Resources = ({ category }) => {
  const filteredResources = resources.filter((resource) => resource.category === category);

  return (
    <div className="resources">
      
      {filteredResources.map((resource, index) => (
        
        <div key={index}>
          <p><h2>{resource.t}</h2></p>
          <p>{resource.b}</p>
          <a href={resource.url}>{resource.title}</a>
          
          
        </div>
      ))}
    </div>
  );
};

export default Resources;


