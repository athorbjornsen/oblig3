import resources from "../Resources/ressurser";

const Resources = ({ category }) => {
  const filteredResources = resources.filter((resource) => resource.category === category);

  return (
    <div className="resources">
      
      {filteredResources.map((resource, index) => (
        
        <div key={index}>
          <p>{resource.t}</p>
          <a href={resource.url}>{resource.title}</a>
          
          
        </div>
      ))}
    </div>
  );
};

export default Resources;





/*import React from 'react';
import resources from './Resources/ressurser';

function Resources(props) {
  const { match } = props;
  const category = match.params.tab;
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <div className="resources">
      <h2>{category.toUpperCase()} Resources</h2>
      {filteredResources.map(resource => (
        <div key={resource.url}>
          <h3>
            <a href={resource.url} target="_blank" rel="noreferrer">
              {resource.title}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Resources;
*/