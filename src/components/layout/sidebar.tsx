function Sidebar (props: { divname: string; onClick:(name:string)=>void; }){
    const {divname , onClick} = props;
    
    const sideapp =[
        {appname:'cmd' ,indx:"",iconapp:"cmdicon"},
        {appname:'app' ,indx:"1",iconapp:"projicon"},
        {appname:'email' ,indx:"2",iconapp:"emailcon"},
        {appname:'about' ,indx:"3",iconapp:"about"}
    ]; 
    return(<>





 <div id="sidebar">


    {sideapp.map(sideb => (<>
    <div className="iconcon"
            onClick={()=>{onClick(divname+sideb.indx);}}
            >
              <div className={sideb.iconapp}>
              </div>
            </div>
    </>))}
            

      
       
        </div>

</>);} export default Sidebar;