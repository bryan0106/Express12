

export function clearcli(elem1:string,Pelement:string){

const newDiv = document.createElement(elem1);
const cmdcontnt = document.getElementById(Pelement);
cmdcontnt?cmdcontnt.textContent ='':"";
   
   newDiv.textContent = `Welcome to my interactive portfolio CLI!
   Type 'help' to see available commands.
   `;
   newDiv.style.whiteSpace = 'pre-wrap'; 
   newDiv.style.lineHeight = 'normal'; 
   newDiv.style.textWrap = 'pretty'; 
cmdcontnt?cmdcontnt.appendChild(newDiv):"";
}


export function notfound(elem1:string,Pelement:string,Input:string){

const newDiv = document.createElement(elem1);
const newDiv2 = document.createElement(elem1);
const cmdcontnt = document.getElementById(Pelement);
   
newDiv.textContent = `user@portfolio-cli:/home/user$${Input}`;
cmdcontnt?cmdcontnt.appendChild(newDiv):"";
   
   newDiv2.style.whiteSpace = 'pre-wrap'; 
   newDiv2.style.textWrap = 'pretty'; 
   newDiv2.style.lineHeight = 'normal'; 
   newDiv2.style.color='#e25555ff'
   newDiv2.textContent = `command not found: ${Input}`;
cmdcontnt?cmdcontnt.appendChild(newDiv2):'';
cmdcontnt?cmdcontnt.scrollTo(0,10000):'';
 }

export function helpcli(elem1:string,Pelement:string,Input:string){

const newDiv = document.createElement(elem1);
const newDiv2 = document.createElement(elem1);
const cmdcontnt = document.getElementById(Pelement);
   
newDiv.textContent = `user@portfolio-cli:/home/user$${Input}`;
cmdcontnt?cmdcontnt.appendChild(newDiv):"";
   
   newDiv2.style.whiteSpace = 'pre-wrap'; 
   newDiv2.style.textWrap = 'pretty'; 
   newDiv2.style.lineHeight = 'normal'; 
   newDiv2.style.color='#26C6DA'
   newDiv2.textContent = `
   Available commands:
     help           - Display this help message.
     clear          - Clear the terminal screen.
     ls             - List directory contents.
     cd <directory> - Change the current directory.
     cat <file>     - Display file contents.
     whoami         - Show current user.
     sudo <command> - Execute a command with simulated administrator privileges.
                      (Try 'sudo install_dependencies' or 'sudo deploy_portfolio')
               `;
cmdcontnt?cmdcontnt.appendChild(newDiv2):'';
cmdcontnt?cmdcontnt.scrollTo(0,10000):'';
 }


 
 export function fecthabout(elem1:string,Pelement:string,Input:string,contents:string){


const newDiv = document.createElement(elem1);
const newDiv2 = document.createElement(elem1);
const cmdcontnt = document.getElementById(Pelement);

   newDiv.textContent = `user@portfolio-cli:/home/user$${Input}`;
    cmdcontnt?cmdcontnt.appendChild(newDiv):'';
 
   newDiv2.textContent = `${newDiv2.textContent +contents}`;

   newDiv2.style.whiteSpace = 'pre-wrap'
   newDiv2.style.textWrap = 'pretty'; 
   newDiv2.style.width = `${cmdcontnt?cmdcontnt.offsetWidth-30:20}px`;
   newDiv2.style.lineHeight = 'normal'; 
   newDiv2.style.color='#26C6DA'
       cmdcontnt?cmdcontnt.appendChild(newDiv2):"";
       cmdcontnt?cmdcontnt.scrollTo(0,10000):'';
   

 }






