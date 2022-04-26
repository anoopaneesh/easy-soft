
export const HeroLeft : React.FC = () => {
    return (
        <div className="flex flex-col w-full md:w-2/5 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Develop Your Life With <span className="text-green-500">One Step..</span></h1>
            <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque dolor nihil, eius quam aliquid.</p>
            <div className="flex w-full p-1 rounded-md bg-white" style={{boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)"}}>
                <input className="outline-none flex-1" type="text" placeholder="Enter your email"/>
                <button className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600">Send</button>
            </div>
        </div>
    )
}
