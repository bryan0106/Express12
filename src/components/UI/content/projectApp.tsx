import { fetchProj, fetchStack } from "../CF/cmdfecth";

interface Projprops{
imgurl:string,
Title:string,
purpose:string,
Desc:string
}

interface Stackprops{
imgurl:string,
Title:string,
name:string
}

function ProjectCenter (){
    const{proj} = fetchProj<Projprops>('http://localhost:3000/api/project');
    const{stack} = fetchStack<Stackprops>('http://localhost:3000/api/stack');
        const boxn = Array.from({length:100},(_,i)=>i+1);
    return(<>
    <div className="maincontainer">
        <div className="leftNav">
    
        <button>All</button>
        <button>Web APp</button>
        <button>Software</button>
        <button>Mobile APp</button>
        <button>About</button>    
       
        </div>
        <div className="rightContent">


        <div className="banner">

            <div className="banner1">

{boxn.map(bx=><>
<div key={bx} className="box"></div>
</>)}
 
                


            </div>


        </div>
        <div className="projContainer">
{proj.map(prj =>(<>

            <div className="project">

                <img className="projicon" src={"src/assets/"+ prj.imgurl} alt="" />
              
              <div className="prco">
                <h1 className="projtitle">{prj.Title}</h1>
                <p className="projp">{prj.purpose}<br/>{prj.Desc}</p>
                   <div className="stacco"> 
                {stack.filter(stac => (stac.Title === prj.Title)).map(prstac =>(<>
                
                    <img className="projstack" src={"src/assets/"+ prstac.imgurl} alt="" />
                <p className="toltip">{prstac.name}</p>
                
                </>))}
                  </div> 
               </div>
                
                </div>

</>))}

        </div>

        </div>
        
    </div>
    
    
    </>);}export default ProjectCenter;