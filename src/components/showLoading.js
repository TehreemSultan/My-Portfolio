import Loading from './loading';
import {useState} from 'react';

function ShowLoading(){
    const [loading, setLoading]=useState(true);
    let clear=setTimeout(()=>{
    setLoading(false);
    },2000);
    
   
    return(loading?<Loading/>:<div></div>);
}

export default ShowLoading;