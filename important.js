document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("Complete");
        initApp();
    }
})

function initApp(){
    console.log("App initialized");
}

event.preventDefault(); // it helps to not refresh when we click or enter 