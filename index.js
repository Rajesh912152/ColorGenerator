let bgEl=document.getElementById("bg");


function clickMe(){
    let randomNumber=Math.ceil(Math.random()*1000000)
    console.log(randomNumber)

    bgEl.style.backgroundColor="#"+randomNumber;
}