import React, {useEffect, useState} from 'react';

function UseState(props) {
    const [object, setObject] = useState({name:""})

    useEffect(()=>{
        setObject({age: "22"})
    },[])

    // as componentDidMount
    useEffect(()=>{
    },[])

    return(
        <h1>hello {object.age}</h1>
    ) 
}


export default UseState;

