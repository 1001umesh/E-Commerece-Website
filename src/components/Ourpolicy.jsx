import { assets } from "../assets/assets"

const Ourpolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around text-center gap-4 items-center sm:gap-2 py-10 text-sm" >
        <div>
          <img src={assets.easyExchange} alt="" className="w-32 m-auto mb-5" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-500">We offer hasssel free exchange policy</p>
        </div>
        <div>
          <img src={assets.easyReturn} alt="" className="w-32 m-auto mb-5" />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-500">We provide 7 days free return  policy</p>
        </div>
        <div>
          <img src={assets.cSupport} alt="" className="w-32 m-auto mb-5" />
          <p className="font-semibold">Best Customer Support</p>
          <p className="text-gray-500">We provide 24/7 customer support</p>
        </div>
      
    </div>
  )
}

export default Ourpolicy
