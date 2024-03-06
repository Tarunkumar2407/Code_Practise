import React, { useState } from 'react';

const State = () => {
    const [name, setName] = useState("Tarun")

    return (
        <>
            <h1>{name}</h1>
            <button onClick={() => setName("Ravi")}>Update Name</button>
        </>
    )
}

export default State