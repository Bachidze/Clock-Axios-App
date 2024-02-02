

interface TimeProps{
    time:string;
    time2:string;
    time3:string;
}

const Time = ({time,time2,time3}:TimeProps) => {
  return (
    <div className="md:pl-[58px] xl:ml-[36px] xl:relative xl:right-[10%] xl:top-[30px] ">
         <div className='pl-4 pt-[220px] md:text-[22px] text-[white] flex gap-[5px] xl:text-[48px] dark:text-black'><img className="dark:hidden md:w-[28px] xl:w-[48px]" src="/assets/Combined Shape 1.svg" alt="mze" />
         <img className="hidden text-[10px] md:w-[28px] xl:w-[48px] dark:text-black  dark:flex" src="/assets/Path (12).svg" alt="mtvare" />
         {time}</div>
        <div className='pl-4 text-xl pt-3 text-[white] md:text-[28px] xl:text-[48px] xl:pt-[30px] dark:text-black'>{time2}</div>
        <div className='pl-4 pt-3 text-xl text-[white] md:text-[28px] xl:text-[48px] xl:pt-[35px] dark:text-black'>{time3}</div>
    </div>
  )
}

export default Time