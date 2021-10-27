import React from 'react';

function MyComponent() {
    const [,,second] = ["cooking", "art", "history"]

    console.log(second)

    return(
        <Heading/>
    )
}

const Heading = () => {
    return(
        <h1>Hello!</h1>
    )
    
}

export default MyComponent;