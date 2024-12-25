let sound=document.querySelector("audio");
let img_quieter=document.querySelector("#quieter");
let img_louder=document.querySelector("#louder");
let img_mute=document.querySelector("#mute");
let text=document.querySelector("#text");
let submit=document.querySelector("#submit");
let player_name=document.querySelector("#name");
let incrememt=0.005;
let portal=document.querySelector("#portal");
let portal_hint=document.querySelector("#portal_hint");

//addname
player_name.textContent=`${localStorage.getItem("name")}`;

//sound
sound.volume=0;
img_quieter.addEventListener("click",()=>
{
    if (sound.volume>=0.05) 
    {
        sound.volume-=0.05;
    }   
});
img_louder.addEventListener("click",()=>
{
    if (sound.volume<=0.95) 
    {
        sound.volume+=incrememt;
        incrememt+=0.005;
    }
});
img_mute.addEventListener("click",()=>
{
    sound.volume=0;
});
submit.addEventListener("click",()=>
{
    if(text.value==="711"){window.location.assign("2.html")}
})

//portal
if (localStorage.getItem("have_portal")=="yes")
{
    portal.setAttribute("type","submit");
    portal.style.width="10px";
    portal.style.height="5px";
}

portal.addEventListener("mouseover",()=>{
    portal_hint.textContent="What is this stuff?";
})

portal.addEventListener("mouseout",()=>{
    portal_hint.textContent="";
})

portal.addEventListener("click",()=>{
    localStorage.setItem("have_portal","no");
    portal_hint.textContent="Great, you find a portal to the challenge you failed just now!";
    setTimeout(return_website,3000);
})

function return_website()
{
    let challenge_choose=localStorage.getItem("challenge");
    if (challenge_choose==3)
        {
            window.location.assign("3.html");
        }
        else if (challenge_choose==5)
        {
            window.location.assign("5.html");
        }
        else if (challenge_choose==7)
        {
            window.location.assign("7.html");
        }
}


