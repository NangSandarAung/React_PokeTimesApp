import React from 'react';

//for higher order component
const Rainbow = (WrappedComponent) => {
    const colour = ['red', 'pink', 'yellow', 'green', 'blue', 'orange'];
    const randomColour = colour[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text'; 

    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;