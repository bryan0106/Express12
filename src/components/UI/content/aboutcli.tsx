import {  useRef, useState } from "react";

import { clearcli,helpcli,fecthabout,notfound } from "../CF/cmd";
import { fetchme,fetchschool,fetchexperience,fetchservice } from "../CF/cmdfecth";

interface PropAbout{
name:string,
age:string
}
interface Propschool{
school:string,
address:string
}

interface Propexp{
company:string,
postion:string,
address:string,
jobdesc1:string,
jobdesc2:string,
jobdesc3:string
}

interface Propservice{
No:string,
Title:string
Desc:string
}



function AboutCli (){
 const [commandHistory, setCommandHistory] = useState<string[]>([]);
const [curcmd, setcurcmd] = useState(0);

const {service} = fetchservice<Propservice>('http://localhost:3000/api/service'); 
const {data} = fetchme<PropAbout>('http://localhost:3000/api/data'); 
const {school} = fetchschool<Propschool>('http://localhost:3000/api/school');
 const {exper} = fetchexperience<Propexp>('http://localhost:3000/api/experience');
const inptcli = useRef<HTMLInputElement>(null);

function enterkey(){
  
   if(inptcli.current){
  
switch(inptcli.current.value)
{
case 'clear':
     clearcli('p','cmdcontent')
     break;
case 'help':
     helpcli('p','cmdcontent',inptcli.current.value)
    break;
case 'whoami':
 const contents =   ` 
    ${data.map(abt => abt.name ).join('\n')}
    ${data.map(abt => abt.age ).join('\n')}`;
    fecthabout('p','cmdcontent',inptcli.current.value,contents)
  break;
case 'education':
 const educ =   `${school.map(abt1 => abt1.school +"  \n("+ abt1.address +")").join('\n \n')}`;
    fecthabout('p','cmdcontent',inptcli.current.value,educ)
  break;

  case 'experience':
 const exp =   `${exper.map(abt1 => abt1.company +"  \n("+ abt1.postion +")\n\n"
+"*     "+abt1.address +"\n"
+"*     "+abt1.jobdesc1 +"\n"
+"*     "+abt1.jobdesc2 +"\n"
+"*     "+abt1.jobdesc3 +"\n"

 ).join('\n \n')}`;
    fecthabout('p','cmdcontent',inptcli.current.value,exp)
  break;

    case 'services':
 const ser =   `${service.map(abt1 =>"("+ abt1.No +") "+ abt1.Title +"\n"
+"=>  "+abt1.Desc 
 ).join('\n \n')}`;
    fecthabout('p','cmdcontent',inptcli.current.value,ser)
  break;

  
    default: 
    notfound('p','cmdcontent',inptcli.current.value)
    break;

}

const inpt =inptcli?inptcli.current.value:"";
 setCommandHistory(prev => [...prev, inpt]);
inptcli.current.value="";

setcurcmd(commandHistory.map(ad=>ad).length);

}}



function keyupa(){

    if(inptcli.current&&curcmd>=0){
    inptcli.current.value = commandHistory[curcmd] ;
setcurcmd(curcmd-1);
curcmd===0&&setcurcmd(0);
    }
    
}

function keydowna(){
   
  if(inptcli.current&&curcmd<commandHistory.map(ad=>ad).length){
 
    inptcli.current.value = commandHistory[curcmd] ;
   setcurcmd(curcmd+1);
    }
}

    return(<>



    
<div className="cmdcontent" id="cmdcontent"
onClick={()=>{
    if(inptcli.current){inptcli.current.focus();}
}}
>
 <p style={{}}>Welcome to my interactive portfolio CLI!</p>
<p style={{color:'white'}}>Type '<span style={{color:'#26C6DA'}}>help</span>' to see available commands.</p>
            <br></br>

</div>

<div className="cmdcli">
  <span id="terminalPrompt" className="text-green-400 terminal-text">user@portfolio-cli:~$</span>
            <input type="text" id="terminalInput"
            ref={inptcli}
      
            autoFocus
            style={{background:'transparent', border:'none', outline:'none', color:'#F5F5F5', padding:'5px', fontFamily:'Inter, monospace'}}
            onKeyDown={(e)=>{
                
                e.key  === "Enter"? enterkey():
                e.key  === "ArrowUp"? keyupa():
                 e.key  === "ArrowDown"? keydowna():
                ''}}
                spellCheck="false" autoComplete="off"></input>
   </div>

</>);
}
export default AboutCli;