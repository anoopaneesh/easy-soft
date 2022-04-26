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
            shadow:'rgba(255,0,0,0.5)',
            bg:'bg-red-500'
        }
        case 'green' : return {
            shadow:'rgba(0,255,0,0.5)',
            bg:'bg-green-500'
        }
        case 'yellow': return {
            shadow:'rgba(255,255,0,0.5)',
            bg:'bg-yellow-500'
        }
        case 'purple': return {
            shadow:'rgba(255,0,255,0.5)',
            bg:'bg-purple-500'
        }
    }
} 

export const FeatureCard:React.FC<FeatureCardProps> =  ({Icon,desc,title,color}) => {
    return (
        <div className=" border-2 border-gray-100 w-full flex flex-col space-y-4 p-4 rounded-md">
            <div style={{boxShadow:`0px 0px 60px 1px ${getColor(color)?.shadow}`}} className={`w-10 h-10 grid place-items-center rounded-md shadow-red-500 ${getColor(color)?.bg}`}>
                <Icon color="white" size={25}/>
            </div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}
