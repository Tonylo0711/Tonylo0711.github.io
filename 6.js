let box=document.querySelector("#box2");
let hint1=document.querySelector("#hint1");
let hint2=document.querySelector("#hint2");
let button1=document.querySelector("#button1");
let button2=document.querySelector("#button2");
let button3=document.querySelector("#button3");
let state=1;
let gethint1=setTimeout(scroll1,30000);
let gethint2=setTimeout(scroll2,60000);
let click=0;
button1.style.backgroundColor="aqua";
let portal=document.querySelector("#portal");
let portal_hint=document.querySelector("#portal_hint");

document.addEventListener("keydown",(e)=>
{
    if(e.key=="F12"&&click==0)
    {
        box.style.overflowX="scroll";
        click++;
    }
    else if (e.key=="F12"&&click==1)
    {
        box.style.overflowY="scroll";
        let gethint3=setTimeout(button_press,30000);
    }
})

button1.addEventListener("click",()=>
{
    if (state==3)
    {
        button3.setAttribute("value","");
        button1.setAttribute("value","Go");
        button3.style.backgroundColor="";
        button1.style.backgroundColor="aqua";
        hint2.textContent="Good of you, you catch up with the tricky button!";
        setTimeout(change_website,2000);
    }
    else
    {
        button1.setAttribute("value","");
        button2.setAttribute("value","Go");
        button1.style.backgroundColor="";
        button2.style.backgroundColor="aqua";
        state=2;
    }
});

button2.addEventListener("click",()=>
{
    if (state==1)
    {
        button1.setAttribute("value","");
        button2.setAttribute("value","Go");
        button1.style.backgroundColor="";
        button2.style.backgroundColor="aqua";
        hint2.textContent="Good of you, you catch up with the button!";
        setTimeout(change_website,2000);
    }
    else
    {
        button2.setAttribute("value","");
        button3.setAttribute("value","Go");
        button2.style.backgroundColor="";
        button3.style.backgroundColor="aqua";
        state=3;
    } 
});

button3.addEventListener("click",()=>
{
    if (state==2)
    {
        button2.setAttribute("value","");
        button3.setAttribute("value","Go");
        button2.style.backgroundColor="";
        button3.style.backgroundColor="aqua";
        hint2.textContent="Good of you, you catch up with the button!";
        setTimeout(change_website,2000);
    }
    else
    {
        button3.setAttribute("value","");
        button1.setAttribute("value","Go");
        button3.style.backgroundColor="";
        button1.style.backgroundColor="aqua";
        state=1;
    }
});

function scroll1()
{
    hint1.textContent=`Maybe you should check \n something on keyboard \n related to "scroll".`;
}

function scroll2()
{
    hint1.textContent=`Please press "Scr Lk" \n which represents \n "Scroll Lock".`;
}

function button_press()
{
    hint2.textContent=`You seems to fail to press the button, are there any other ways to catch up with it?`;
}

function change_website()
{
    window.location.assign("7.html");
}

//portal
if (localStorage.getItem("have_portal")=="yes")
{
    portal.setAttribute("type","submit");
    portal.style.width="60px";
    portal.style.height="30px";
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

