let hint=document.querySelector("#hint");
let ball=document.querySelector("#ball");
let hint_time=setTimeout(hint_func,30000);
let width=window.matchMedia("(max-width: 40em)");
let found=false;
let portal=document.querySelector("#portal");
let portal_hint=document.querySelector("#portal_hint");

//click ball
ball.addEventListener("click",()=>
{
    hint.textContent="Well, it seems that clicking once is of no use."
})

ball.addEventListener("dblclick",()=>
{
    hint.textContent="Good job! Double click is the right way to trigger it!";
    setTimeout(change_website,2000) 
});
width.addEventListener("change",width_change)

//detect width
function width_change()
{
    if (width.matches) 
    {
        hint.textContent="Congratulation! You have found the ball!";
        found=true;
    }
    else
    {
        hint.textContent="";
    }
}

function hint_func()
{
    if (found==false)
    {
        hint.textContent="Your screen seems to be too big.";
    }
}
function change_website()
{
    window.location.assign("3.html");
}

//portal
if (localStorage.getItem("have_portal")=="yes")
{
    portal.setAttribute("type","submit");
    portal.style.width="20px";
    portal.style.height="10px";
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




