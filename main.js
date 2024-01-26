document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("Complete");
        initApp();
    }
})

function initApp(){
   const btnClk = document.getElementById("btn");
    console.log(btnClk);
   btnClk.addEventListener("click",(event)=>{
    event.preventDefault();
    btnClk.textContent="Submitted";
    const inputs = document.getElementById("input").value;
    console.log(`they entered ${inputs} in the input field`);
    console.log("button Clicked");
    document.getElementById("body").style.backgroundColor="purple";
   });
    
}


