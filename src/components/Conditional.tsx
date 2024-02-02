
interface ConditionalProps{
    gaqroba:boolean;
    time3:string;
    dayOfTheY:string;
    dayOfTheW:string;
}

const Conditional = ({gaqroba,time3,dayOfTheY,dayOfTheW}:ConditionalProps) => {
  return (
    <div>
          {gaqroba && <div className='w-[100%] h-auto pl-5 pr-5 bg-white bg-opacity-75 backdrop-blur-[40.77px]  p-[26px] flex flex-col gap-2.5'>
          <div className='flex justify-between items-center'>
            <div className="text-[14px]">
            CURRENT TIMEZONE
            </div>
            <div className="text-2xl font-bold">
            {time3}
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className="text-[14px]">
            DAY OF THE YEAR
            </div>
            <div  className="text-2xl font-bold">
            {dayOfTheY}
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className="text-[14px]">
            DAY OF THE WEEK
            </div>
            <div  className="text-2xl font-bold">
            {dayOfTheW}
            </div>
          </div>
          <div className='flex justify-between items-center '>
            <div className="text-[14px]">
            WEEK NUMBER
            </div>
            <div  className="text-2xl text font-bold">
            {dayOfTheW}
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Conditional