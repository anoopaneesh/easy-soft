import google from '../assets/images/google.png'
import avast from '../assets/images/avast.png'
import ebay from '../assets/images/ebay.png'
import hubspot from '../assets/images/hubspot.png'
import paypal from '../assets/images/paypal.png'
import Image from "next/image"

export const Companies:React.FC = () => {
    return (
        <div className="bg-green-100 py-2">
            <div className="px-16 md:px-0 md:w-2/3 mx-auto flex justify-between flex-wrap">
            <Image width="100" height="100" objectFit="contain" src={google} alt="Google logo" />
            <Image width="100" height="100" objectFit="contain" src={avast} alt="Avast logo" />
            <Image width="100" height="100" objectFit="contain" src={ebay} alt="Ebay logo" />
            <Image width="100" height="100" objectFit="contain" src={paypal} alt="Paypal logo" />
            <Image width="100" height="100" objectFit="contain" src={hubspot} alt="Google logo" />
            </div>
        </div>
    )
}
