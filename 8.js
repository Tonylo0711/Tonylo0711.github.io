let video=document.querySelector("video");
let html=document.querySelector("html");
let hint=document.querySelector("h3");
let click=false;
let opacity=0;
let portal=document.querySelector("#portal");
let portal_hint=document.querySelector("#portal_hint");

setInterval(adjust_opacity,500);

video.addEventListener("click",()=>
{
    if (click==false)
    {
        click=true;
        video.style.margin=`126px 256px 128px 256px`;
        hint.textContent="Great, you find the video!";
        video.play();
        video.style.opacity=1;
        video.style.width="1024px";
        video.style.height="512px";
    }
    else
    {
        click=false;
        video.pause();
        video.currentTime=0;
    }
});

video.addEventListener("timeupdate",()=>
{
    if (video.currentTime>=69)
    {
        window.location.assign("9.html");
    }
});

function adjust_opacity()
{
    if (opacity<=0.995) opacity+=0.005;
    html.style.backgroundColor=`rgba(200,200,200,${opacity})`;
}

//portal
if (localStorage.getItem("have_portal")=="yes")
{
    portal.setAttribute("type","submit");
    portal.style.width="80px";
    portal.style.height="40px";
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
