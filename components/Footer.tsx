export const Footer:React.FC = () => {
    return (
        <div className="w-2/3 mx-auto flex justify-between py-5 flex-wrap space-y-4 md:space-y-0">
            <div className="w-52 flex flex-col space-y-4">
                <h1 className="text-xl font-bold text-green-600">Easy Soft</h1>
                <p className="text-sm text-gray-500">Software with new look.Live the life that you expect.</p>
            </div>
            <div className="flex flex-col space-y-4">
                <h1 className="text-lg">Useful link</h1>
                <ul className="text-sm text-gray-800">
                    <li>Behance</li>
                    <li>Dribble</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-4">
                <h1 className="text-lg">Support</h1>
                <ul className="text-sm text-gray-800">
                    <li>Conditions</li>
                    <li>Privacy & policy</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-4">
                <h1 className="text-lg">Contact us</h1>
                <ul className="text-sm text-gray-800">
                    <li>(773) 217-8810</li>
                    <li>Downers Grove, IL 60515</li>
                </ul>
            </div>
        </div>
    )
}
