export default function User(props) {
    let user = props.user;
    let {name, username, email} = user;
    return (
        <div>
            <h1>{name}</h1>
            <h3>{username}, {email}</h3>
            <hr />
        </div>
    )
}

