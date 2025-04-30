import React from 'react';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error">
        <h1>OOPS Something wrong</h1>
        <p>Page not found</p>
        </div>
    );
}
export default Error;
