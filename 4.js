let submit=document.querySelector("#submit");
let password=document.querySelector("#password");
let hint=document.querySelector("#hint");
let portal=document.querySelector("#portal");
let portal_hint=document.querySelector("#portal_hint");

submit.addEventListener("click",(e)=>
{
    if (password.value=="ENGLISH")
    {
        window.location.assign("5.html");
    }
    else if (password.value.toLowerCase()=="english")
    {
        hint.textContent="Notice the uppercase and lowercase of the alphabets!";
    }
    else
    {
        hint.textContent="Maybe you can take a look at your keyboard(?";
    }
})

password.addEventListener("keydown",(e)=>
{
    hint.textContent=`You have pressed ${e.key}.`;
})

//portal
if (localStorage.getItem("have_portal")=="yes")
{
    portal.setAttribute("type","submit");
    portal.style.width="40px";
    portal.style.height="20px";
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
