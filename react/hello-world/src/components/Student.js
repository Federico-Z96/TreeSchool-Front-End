import React from "react";

function Student(){
    const name = "Student";
    
  
    return (
      <>
        <h1 className="my-class">Student 1</h1>
      <img 
      onClick={function(){
        alert("ciao ho cliccato")
        console.log(name)
      }}
      src="https://picsum.photos/id/237/200/300"
       alt="profile-pic" />
      <ul className = "hobbies">
        <li>hobby 1</li>
        <li>hobby 2</li>
        <li>hobby 3</li>
      </ul>
      </>
    )
  }

  export default Student;