import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

interface AdviceProps{
    advice:string;
    fetchData:()=>void;
    rotateIcon2:()=>void;
    rotate2: boolean;
}

const Advice = ({advice,fetchData,rotate2,rotateIcon2}:AdviceProps) => {
  return (
    <div>
         <div className='
          flex p-4 gap-9 items-center max-w-[350px]
          max-h-[50px] mt-[25px] text-[white] md:pl-[64px]
          md:text-[18px] xl:text-[20px] xl:ml-[56px]
          xl:relative xl:right-[10%]
          xl:mt-[56px] xl:max-w-[650px] '>
          <h1>{advice}</h1>
          <button
            className='text-2xl flex  min-w-[35px] min-h-[35px] rounded-[50%] justify-center items-center cursor-pointer '
            onClick={fetchData}
          >
           <FontAwesomeIcon icon={faRotate} onClick={rotateIcon2}
           style={{transform: rotate2 ? 'rotate(360deg)':'rotate(0deg)',  transition:'1s'}}
           className=' dark:text-black'
           />
          </button>
        </div>
    </div>
  )
}

export default Advice