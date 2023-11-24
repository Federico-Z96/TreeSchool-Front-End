import React from 'react';

/*const ComponentWithChildren = ({ children, additionalText }) => {
  return (
    <div>
      {children && (
        <div>
          {children}
          <p>{additionalText}</p>
        </div>
      )}
    </div>
  );
};

export default ComponentWithChildren;*/

function Solution(props) {
  return <div>
    {props.children}
    {props.children ? <p>{props.additionalText}</p> : null}
    </div>;
}


export default Solution;
