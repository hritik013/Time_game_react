import { useState , useRef} from "react";

export default function Player() {

  const playerName = useRef();
  const [enterPlayerName,setEnterPlayerName]=useState('');
  
  function handleClick(){
    setEnterPlayerName(playerName.current.value);
    playerName.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName? enterPlayerName:'unknown person'}🤗</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
