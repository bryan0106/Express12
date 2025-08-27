
import { fetchSkills } from "../CF/cmdfecth";


interface SKillprop
{
name:string,
imgurl:string

}
function Skillset (){
      
     const{skil } = fetchSkills<SKillprop>('http://localhost:3000/api/skills'); 
      return(<>

<div className="skillsearch">
    <input type="text" />
</div>
<div className="skillcontainer">

{skil.map(skl=>(<>
      <div className="iconset">
      <img src= {"./src/assets/"+skl.imgurl} alt=""/>
            <p>{skl.name}</p>
    </div>

</>))}
</div>

</>);} export default Skillset;