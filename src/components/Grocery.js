const Grocery = () => { 
    return (
        <div className="grocery max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4 text-green-700">Grocery Store</h1>
            <p className="mb-6 text-gray-700">Welcome to the grocery store!</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Fruits</li>
                <li>Vegetables</li>
                <li>Dairy Products</li>
                <li>Snacks</li>
            </ul>
        </div>
    );
}
    export default Grocery;