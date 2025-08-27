import {  useState } from "react";
import AboutCli from "./content/aboutcli";
import ProjectCenter from "./content/projectApp";
import Emailme from "./content/emailfrm";
import Skillset from "./content/myskills";

function WindowForm (){
  //  const{slectw} = props
    const windowList =[
{windowname:"window" },
{windowname:"window1" },
{windowname:"window2" },
{windowname:"window3" }
    ];
    

 const [man, setman] = useState("dsa"); 
const [Isdrag , setdrag] = useState(false);

 
 function bringToFront(divname:string) {
     const windowElement  = document.getElementById('window');
const windowElement1  = document.getElementById('window1');
const windowElement2  = document.getElementById('window2');
const windowElement3  = document.getElementById('window3');

            if(windowElement && windowElement1 && windowElement2 && windowElement3){
           divname==='window'? windowElement.style.zIndex = `1000`:windowElement.style.zIndex = `99`;
            divname==='window1'?windowElement1.style.zIndex = `1000`:windowElement1.style.zIndex = `99`;
            divname==='window2'?windowElement2.style.zIndex = `1000`:windowElement2.style.zIndex = `99`;
            divname==='window3'?windowElement3.style.zIndex = `1000`:windowElement3.style.zIndex = `99`;
           }
        }



const dragfrm = (event:React.MouseEvent<HTMLDivElement, MouseEvent> ,windoww:string )=>{
    const windm = document.getElementById(windoww);
if(windm && man==='press'&& event.clientY > 40 && Isdrag ){
   windm.style.left = `${event.clientX - 200}px`;
     windm.style.top = `${event.clientY -40}px`;
}
}

function minform (divname:string){
    const windowElement  = document.getElementById(divname);
            if(windowElement){
            windowElement.classList.toggle('min');

           }
}

    
    return(<>
{windowList
.map(wnlis => (<>


 <div id={wnlis.windowname}  className={wnlis.windowname} 
onClick={()=>bringToFront(wnlis.windowname)}
 onMouseMove={(e)=>{dragfrm(e ,wnlis.windowname);}}

 >
  <div className="cmdtab"
  style={{background:
         `${wnlis.windowname==="window"?"#2d3748":
wnlis.windowname==="window1"?"#ffffffff":
wnlis.windowname==="window2"?"#57564F":
wnlis.windowname==="window3"?"#ffffffff":
""
}`
     }}

   onMouseDown={ ()=>{    setdrag(true);setman('press');  } }  
        onMouseUp={ ()=>{ setman('onhu'); bringToFront(wnlis.windowname);}}    
         onMouseMove={(e)=>{dragfrm(e ,wnlis.windowname);}}
        onMouseLeave={(e)=>{dragfrm(e , wnlis.windowname); }}
        >

            {wnlis.windowname==="window"?<div className="dot3"></div>:
wnlis.windowname==="window1"?"Projects":
wnlis.windowname==="window2"?"Email":
wnlis.windowname==="window3"?"Skills":
""
}


<div className='windowtab'
  
> 
{wnlis.windowname==="window"?"bry@portfolio-cli:~$":
wnlis.windowname==="window1"?<div className="serch"><input type="text" /><button>se</button></div>:
wnlis.windowname==="window2"?"Email":
wnlis.windowname==="window3"?"Skills":
""
}



</div>
<button
className='btncls'
onClick={()=>{minform(wnlis.windowname)}}>X</button>
</div>

{wnlis.windowname==="window"?<AboutCli/>:
wnlis.windowname==="window1"?<ProjectCenter/>:
wnlis.windowname==="window2"?<Emailme/>:
wnlis.windowname==="window3"?<Skillset/>:
""
}
 </div>

</>))}

</>);}export default WindowForm;