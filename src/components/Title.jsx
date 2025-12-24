
const Title = ({text1,text2}) => {
  return (
    <div className="inline-flex items-center gap-2  ">
      <p className="text-black font-semibold mb-5">{text1}</p>
      <p className="text-gray-700 font-medium mb-5">{text2}</p>
       <p className="w-8 sm:w-12 h-px sm:h-0.5 bg-gray-800 "></p>
        
    </div>
  )
}

export default Title