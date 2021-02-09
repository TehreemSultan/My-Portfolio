import '../background.css';
import Snow from './snow';

function creatingSnowflakes(){
let snowArr;
 
}

function snowMoving(){
 
}
 
function Background(){
    return(
    <div className='background'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span></span>
      <div id="snowContainer">
        <Snow/>
      </div>
    </div>);
}

export default Background;