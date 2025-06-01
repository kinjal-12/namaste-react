import { useEffect, useState } from "react";

const User = ({name, location, contact}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // API calls
    }, [])

    return(
        <div className="user-card">
            <h1>{count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: @kinjal.chauhan</h3>
        </div>
    );
}

export default User;