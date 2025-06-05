const User = ({name, location}) => {
    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <h1>Name : {name} </h1>
        <p>Location : {location}</p>
        </div>
    );
}
export default User;