import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface InfoProps{
    gaqroba:boolean;
    setGaqroba:React.Dispatch<React.SetStateAction<boolean>>;
    rotate:boolean;
    rotateIcon:()=>void;
}

const Info = ({gaqroba,setGaqroba,rotate,rotateIcon}:InfoProps) => {
  return (
    <div>
        <div className='w-[100px] h-[35px] rounded-[20px] bg-[white] ml-4 flex justify-end items-center pr-1 mt-[90px] mb-[35px]'>
          <h3 className='pr-[7px] text-[gray] text-[14px]'>MORE</h3>
          <div className='w-[30px] h-[30px] bg-black rounded-[50%] flex justify-center items-center'
          onClick={()=>setGaqroba(!gaqroba)}>
            <FontAwesomeIcon style={{transform: rotate ? 'rotate(180deg)':'rotate(0deg)', color:'white', transition:'1s'}}
             icon={faChevronDown} 
             onClick={rotateIcon}
             />
          </div>
        </div>
    </div>
  )
}

export default Info