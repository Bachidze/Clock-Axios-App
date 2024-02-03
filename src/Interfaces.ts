export interface ConditionalProps{
    gaqroba:boolean;
    time3:string;
    dayOfTheY:string;
    dayOfTheW:string;
}
export interface darkThemeProps{
    toggleShavi:()=>void;
    darkTheme:()=>void;
    shavi:string;
}
export interface InfoProps {
    gaqroba: boolean;
    setGaqroba: React.Dispatch<React.SetStateAction<boolean>>;
    rotate: boolean;
    rotateIcon: () => void;
}
export interface TimeProps{
    time:string;
    time2:string;
    time3:string;
}
export interface AdviceProps{
    advice:string;
    fetchData:()=>void;
    rotateIcon2:()=>void;
    rotate2: boolean;
}
