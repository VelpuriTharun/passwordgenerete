const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl=document.getElementById("pass1")
let passBl=document.getElementById("pass2")

function generate()
{
    for(let i=0;i<15;i++)
    {
        let randomind=Math.floor(Math.random()*characters.length)   
        passEl.innerText += characters[randomind]
        
    }
    for(let i=0;i<15;i++)
    {
        let randomind2=Math.floor(Math.random()*characters.length)
        passBl.innerText += characters[randomind2]
    }
}




