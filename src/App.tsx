

import './App.css'
import './cmd.css'
import './Styles/projectapp.css'
import './Styles/email.css'
import './Styles/project.css'
import Taskbar from './components/layout/taskbar';
import WindowForm from './components/UI/window';


function App() {
 const sideapp =[
        {appname:'window' ,indx:"",iconapp:"cmdicon"},
        {appname:'window1' ,indx:"1",iconapp:"projicon"},
        {appname:'window2' ,indx:"2",iconapp:"emailcon"},
        {appname:'window3' ,indx:"3",iconapp:"about"}
    ]; 

   
function minform (divname:string){
    const windowElement  = document.getElementById(divname);
            if(windowElement){
              
            windowElement.style.display="flex";
            windowElement.classList.toggle('min');

           }
}
  return (
    <>
   <div id="desktop-container">

       <Taskbar/>

 <div id="sidebar">
    {sideapp.map(sideb => (<>
    <div className="iconcon"
            onClick={()=>{minform(sideb.appname);

             }}
            >
              <div className={sideb.iconapp}>
              </div>
            </div>
    </>))}
        </div>
 <WindowForm />

     

    </div>
    </>
  )
}

export default App

