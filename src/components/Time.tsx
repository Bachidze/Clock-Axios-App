

interface TimeProps{
    time:string;
    time2:string;
    time3:string;
}

const Time = ({time,time2,time3}:TimeProps) => {
  return (
    <div>
         <div className='pl-4 pt-[220px] text-[white]'>{time}</div>
        <div className='pl-4 text-xl pt-3 text-[white]'>{time2}</div>
        <div className='pl-4 pt-3 text-xl text-[white]'>{time3}</div>
    </div>
  )
}

export default Time