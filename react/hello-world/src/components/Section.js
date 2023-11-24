import React from 'react'

function Section(props){

    // per evitare undefined, mettiamo stringa vuota come valore alternativo
    const additionalClass = props.className || ""

    function checkIsFavouriteSection(){
           return props.title === "React Props"
    }

    return (
        <section 
            className={"reusable-section " + props.className}
            onClick={function(){
                if(checkIsFavouriteSection()){
                    alert("ottimo argomento")
                }
                props.onClick()
            }}
            style={{ border: "3px solid red"}}
        >
            {checkIsFavouriteSection() ? <h1>Sezione preferita</h1> : null}
            <h1>{props.title}</h1>
            {props.children}
        </section>
    )

}

export default Section