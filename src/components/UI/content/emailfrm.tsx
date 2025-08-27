import axios from "axios";
import { useRef, useState } from "react";

function Emailme (){
    const[namem , setnames] = useState('');
    const[emailm , setemailm] = useState('');
    const[mess , setmess] = useState('');


    
const createmeassge = async()=>{


    try{
        await axios.post('http://localhost:3000/api/addMessage',
            {name:namem , email:emailm ,message:mess},
            {
            headers: 
              {"Content-Type":"application/json"}
            }
        );
        
        setemailm('');setnames('');setmess('');
alert("message sent");
    } catch{alert("message failed to send");}
}



const tooltip =useRef<HTMLDivElement>(null);    
function shwtl(){
if(tooltip.current){
    tooltip.current.style.display = 'flex';
}
}

function sdetl(){
if(tooltip.current){
    tooltip.current.style.display = 'none';
}
}
return(<>


<div className="emailcontainer">
    
    <span className="toltipem"
    onMouseEnter={()=>shwtl()}
    onMouseLeave={()=>sdetl()}
    >?</span>
    <div ref={tooltip} className="contactme">
Phone: +63-994-1639-501 <br/>
Email: dalawampubryan06@gmail.com <br/>
Base: Naujan, Oriental Mindoro 


    </div>


<label htmlFor="">Your Name</label>
<input type="text" name="" id="" 
onChange={(e)=>{setnames(e.target.value)}}/>


<label htmlFor="">Your Email</label>
<input type="text" name="" id="" 
onChange={(e)=>{setemailm(e.target.value)}}/>


    <input type="text" onChange={(e)=>{setmess(e.target.value); }}/>







 <div className="frmgroup">
<button className="embtn">cancel</button>
<button  className="embtn"
onClick={()=>{createmeassge();}}
>send</button>
</div>






</div>

</>);}export default Emailme;