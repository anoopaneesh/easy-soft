import { FeatureCard } from "./FeatureCard"
import {IoMdSettings} from 'react-icons/io'
import {AiOutlineUser} from 'react-icons/ai'
export const FeaturesLeft:React.FC = () => {
    return (
        <div className="grid grid-cols-2 flex-1 gap-6">
            <FeatureCard Icon={IoMdSettings} color="red" desc="" title="Easy Settings"/>
          <FeatureCard Icon={AiOutlineUser} color="green" desc="" title="User Friendly"/>
          <FeatureCard Icon={IoMdSettings} color="yellow"  desc="" title="Full secured"/>
          <FeatureCard Icon={IoMdSettings} color="purple" desc="" title="Clean Code"/>
        </div>
    )
}
