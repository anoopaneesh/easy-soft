

export const Navbar : React.FC = () => {
    return (
        <div className="flex w-full px-8 md:px-0 md:w-2/3 justify-between mx-auto items-center py-4">
            <h1 className="font-bold text-green-600 font-sans">EASY SOFT</h1>
            <ul className="hidden md:flex space-x-8 text-gray-500">
                <li>Feature</li>
                <li>Download</li>
                <li>Pricing</li>
            </ul>
            <div className="flex space-x-8 items-center">
                <p>Login</p>
                <button className="px-2 md:px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition ease">Sign up</button>
            </div>
        </div>
    )
}
