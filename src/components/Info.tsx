import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface InfoProps {
  gaqroba: boolean;
  setGaqroba: React.Dispatch<React.SetStateAction<boolean>>;
  rotate: boolean;
  rotateIcon: () => void;
}

const Info = ({ gaqroba, setGaqroba, rotate, rotateIcon,  }: InfoProps) => {
  return (
    <div>
      <div className='w-[100px] h-[35px] rounded-[20px] md:ml-[64px] md:w-[156px] md:h-[56px]  bg-[white] ml-4 flex justify-end items-center pr-1 mt-[90px] mb-[35px] xl:ml-[116px] xl:text-[25px] xl:relative xl:left-[70%] dark:bg-black'>
        <h3 className=' pr-[7px] text-black text-[14px] md:text-[16px] md:font-bold md:pr-[18px] dark:text-white'>MORE</h3>
        <div className='w-[30px] h-[30px] bg-black rounded-[50%] md:w-[50px] md:h-[50px] cursor-pointer flex justify-center items-center dark:bg-white'
          onClick={() => { setGaqroba(!gaqroba)}}>
          <FontAwesomeIcon className={`transform ${rotate ? 'rotate-180' : 'rotate-0'}  text-white  transition duration-1000 md:text-[30px] xl:text-[35px] dark:text-black`}
            icon={faChevronDown}
            onClick={rotateIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
