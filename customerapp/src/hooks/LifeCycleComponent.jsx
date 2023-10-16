import { useEffect, useState } from "react";

export default function LifeCycleComponent() {
    let [users, setUsers] = useState([]);
    let [username, setName] = useState();
    let [details, setDetails] = useState(null);
    // similar to componentDidMount();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            response.json().then(data => setUsers(data));
        });

        return () => console.log("Component destroyed!!!");
    }, []); //empty dependency

    // similar to componentDidUpdate()
    useEffect(() => {
        // executes whenever props or state change
    });

    // similar to componentDidUpdate()
    useEffect(() => {
        // executes whenever userName change
        fetch('https://jsonplaceholder.typicode.com/users?username=' + username)
            .then(response => {
                response.json().then(data => setDetails(data[0]));
            });
    }, [username]);

    return (
        <div>
            <div>
                <h1>Details</h1>
                {
                    details &&
                    <div>
                        Name : {details.name} <br />
                        Company : {details.company.name} <br />
                        Website : {details.website} <br />
                    </div>
                }
            </div>
            <hr />
            {
                users.map(user => <div>
                    <span onMouseEnter={() => setName(user.username)}>
                        UserName : {user.username} <br />
                    </span>
                    Email : {user.email} <br />
                </div>)
            }
        </div>
    )
}