import { useState ,useRef,useEffect} from "react";
import Result from "./Result";
export default function Timer({title,targetTime}){
    const timer=useRef();
    const dialog=useRef();
   
    const [timeRemaining,setRemainingTime]=useState(targetTime*1000);
  
    const timerActive=timeRemaining>0 && timeRemaining<targetTime*1000;


    const soundRef = useRef(new Audio("/clock-ticking-sound-effect-240503.mp3")); 

    
    useEffect(() => {
      if (timerActive) {
        soundRef.current.loop = true; 
        soundRef.current.play().catch((err) => console.log("Error playing sound:", err));
      } else {
        soundRef.current.pause();
        soundRef.current.currentTime = 0; 
      }
  
      return () => {
        soundRef.current.pause();
        soundRef.current.currentTime = 0;
      };
    }, [timerActive]);

 



    if (timeRemaining<=0){
      clearInterval(timer.current);
      dialog.current.open();
    }
function handleReset(){
  setRemainingTime(targetTime*1000);

}
     function handleStart(){
    timer.current= setInterval(()=>{
    setRemainingTime(prevTimeRemaining=>prevTimeRemaining-10);
    },10);
   }
   
   function handleStop(){
    dialog.current.open();

    clearTimeout(timer.current);
    soundRef.current.pause(); // Stop the sound
    soundRef.current.currentTime = 0; // Reset sound to the start
   }
  
  return(
  <>
  <Result ref={dialog}  targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
  <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-name">
        {targetTime} second{targetTime>1?'s':''}
    </p>
    <p>
        <button onClick={timerActive ? handleStop:handleStart}>
            {timerActive? 'Stop':'Start'} Challenge
        </button>
    </p>
    <p className={timerActive?'active':undefined}>
       {timerActive? 'Timer is running':'Timer stoped'} 
    </p>
    </section>
    </>
  );
}