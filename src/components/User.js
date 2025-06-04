const User = ({name, location}) => {
    return (
        <div className="user-card">
        <h1>Name : {name} </h1>
        <p>Location : {location}</p>
        </div>
    );
}
export default User;