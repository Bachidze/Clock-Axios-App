
interface ConditionalProps{
    gaqroba:boolean;
    time3:string;
    dayOfTheY:string;
    dayOfTheW:string;
}

const Conditional = ({gaqroba,time3,dayOfTheY,dayOfTheW}:ConditionalProps) => {
  return (
    <div>
          {gaqroba && <div className=' w-auto h-auto pl-5 pr-5 bg-white bg-opacity-75 
          backdrop-blur-[40.77px]  p-[26px]  flex-col gap-2.5
            md:grid grid-cols-2 md:w-[768px] md:h-[440px] md:pl-[64px]  lg:w-[1024px] xl-[1280px] xl:pl-[120px] 2xl:[1536px]
             dark:bg-black text-[white]'>
          <div className='flex justify-between items-center md:grid grid-cols-1 '>
            <div className="text-[14px] ">
            CURRENT TIMEZONE
            </div>
            <div className="text-2xl font-bold md:text-[40px] xl:text-[56px]">
            {time3}
            </div>
          </div>
          <div className='flex justify-between items-center md:grid grid-cols-1'>
            <div className="text-[14px] ">
            DAY OF THE YEAR
            </div>
            <div  className="text-2xl font-bold md:text-[40px] xl:text-[56px]">
            {dayOfTheY}
            </div>
          </div>
          <div className='flex justify-between items-center md:grid grid-cols-1'>
            <div className="text-[14px] ">
            DAY OF THE WEEK
            </div>
            <div  className="text-2xl font-bold md:text-[40px] xl:text-[56px]">
            {dayOfTheW}
            </div>
          </div>
          <div className='flex justify-between items-center md:grid grid-cols-1'>
            <div className="text-[14px]">
            WEEK NUMBER
            </div>
            <div  className="text-2xl text font-bold md:text-[40px] xl:text-[56px]">
            {dayOfTheW}
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Conditional