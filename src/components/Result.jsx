import { forwardRef, useImperativeHandle ,useRef} from "react";
import {createPortal} from 'react-dom';
const Result =forwardRef(function Result({ targetTime,remainingTime,onReset},ref){
   
  const userLost=remainingTime<=0;
  const formattedTime=(remainingTime/1000).toFixed(2);
  const score=Math.round((1-remainingTime/(targetTime*1000))*100);
  const dialog=useRef();
    useImperativeHandle(ref,()=>{
    return{
    open(){
    dialog.current.showModal();
    }
    };
   }); 
    
    return  createPortal(<dialog  ref={dialog} className="result-modal">
        {userLost &&<h2>You Lost 😩</h2>}
         {!userLost && <h2>Your score-  {score}{score<90? '😃':'😱'}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p> You stopped the timer with <strong>{formattedTime} seconds.</strong></p>
        {userLost &&<h3>Try Again</h3>}
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>

     </dialog>,
    document.getElementById('modal')
    );
});

export default Result;