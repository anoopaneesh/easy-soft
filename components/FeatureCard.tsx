import { IconType } from "react-icons"
interface FeatureCardProps{
    Icon:IconType,
    title:String,
    desc:String,
    color:String
}

interface Color{
    shadow:String,
    bg:String
}

const getColor = (color:String) => {
    switch(color){
        case 'red': return {
            bg:'bg-red-500'
        }
        case 'green' : return {
            bg:'bg-green-500'
        }
        case 'yellow': return {
            bg:'bg-yellow-500'
        }
        case 'purple': return {
            bg:'bg-purple-500'
        }
    }
} 
// style={{boxShadow:`0px 0px 60px 1px ${getColor(color)?.shadow}`}}

export const FeatureCard:React.FC<FeatureCardProps> =  ({Icon,desc,title,color}) => {
    return (
        <div className="relative border-2 border-gray-100 w-full flex flex-col space-y-4 rounded-md overflow-hidden">
            <div style={{background:'rgba(255,255,255,0.6)',backdropFilter:'blur(40px)'}} className="-z-10 w-full h-full absolute p-4">
            </div>
            <div className="relative px-4">
                <div className={`w-10 h-10 grid place-items-center rounded-md ${getColor(color)?.bg}`}>
                    <Icon color="white" size={25}/>
                </div>
                <div className={`w-10 h-10 grid place-items-center absolute top-5 -z-20 rounded-md ${getColor(color)?.bg}`}>
                    <Icon color="white" size={25}/>
                </div>
            </div>
            <h3 className="font-bold ml-4">{title}</h3>
            <p className="text-sm text-gray-700 p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}
