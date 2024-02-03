
interface darkThemeProps{
    toggleShavi:()=>void;
    darkTheme:()=>void;
    shavi:string;
}


const Dark = ({toggleShavi,darkTheme,shavi}:darkThemeProps) => {
  return (
    <div>
<div className='h-[35px] w-[90px] bg-white mt-[30px] ml-4 md:w-[156px] md:h-[56px]
         flex justify-end md:ml-[64px]  items-center pr-[2px] rounded-[20px] xl:ml-[116px]
          xl:relative xl:right-[10%]  dark:bg-black'>
          <div className='
          h-[29px] w-[29px] bg-black rounded-[50%] md:w-[50px] md:h-[50px] 
           dark:mr-[55px] dark:bg-white absolute dark:md:mr-[100px]' style={{transition:'1s'}} onClick={darkTheme}>
            <div onClick={toggleShavi}  
            className='text-white cursor-pointer
             flex justify-center pt-[2.5px] md:text-[30px]  dark:text-black'>{shavi}</div>
          </div>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Dark