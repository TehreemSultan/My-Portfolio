const SnowFlake=(props)=>{
    return(
        <p className='snowflake' id={props.id} style={props.style}></p>
    )
}

function Snow(){
    let animationDelay='0s';
    let width='5px';
    let height='5px';
    let x=0;
    let arr=Array.from('Snowfall in winter!!!!! Snowfall in winter!!!!!');
return arr.map((item,i)=>{
    animationDelay=`${(Math.random()*16).toFixed(2)}s`;
    width=`${(Math.floor(Math.random()*7))}px`;
    
    height=width;
    let style={
        animationDelay,
        width,
        height
    }
    return(<SnowFlake key={i} id={i} style={style}/>)
});
}

export default Snow;