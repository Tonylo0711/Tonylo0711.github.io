let checkbox1=document.querySelector("#checkbox1");
let checkbox2=document.querySelector("#checkbox2");
let checkbox3=document.querySelector("#checkbox3");
let text1=document.querySelector("#text1");
let text2=document.querySelector("#text2");
let text3=document.querySelector("#text3");
let submit=document.querySelector("#submit");
let hint=document.querySelector("#hint");
let right_answer=0;
let submit_times=0;
let hint1=setTimeout(get_hint1,60000);
let hint2=setTimeout(get_hint2,120000);
let portal=document.querySelector("#portal");
let portal_hint=document.querySelector("#portal_hint");

checkbox1.addEventListener("click",()=>
{
    checkbox1.checked=!checkbox1.checked;
})

checkbox2.addEventListener("click",()=>
{
    checkbox2.checked=!checkbox2.checked;
})

checkbox3.addEventListener("click",()=>
{
    checkbox3.checked=!checkbox3.checked;
})

submit.addEventListener("click",()=>
{
    submit_times++;
    if (text1.value=="居住"&&checkbox1.checked==false)
    {
        checkbox1.checked=true;
        right_answer++;
    }
    if (text2.value=="拿走"&&checkbox2.checked==false)
    {
        checkbox2.checked=true;
        right_answer++;
    }
    if (text3.value=="古早味"&&checkbox3.checked==false)
    {
        checkbox3.checked=true;
        right_answer++;
    }
    if (right_answer==3)
    {
        hint.textContent="Fabulous! You have discovered the relation between alphabets and Chinese words!";
        let change_website=setTimeout(change_website1,3000);
    }
    else if (submit_times==3)
    {
        hint.textContent="Well...You have already tried too much times...";
        let change_website=setTimeout(change_website2,3000);
    }
})

function get_hint1()
{
    hint.textContent="Look at your keyboard again, maybe those alphabets represent something...";
}

function get_hint2()
{
    hint.textContent="Those alphabets represent the Chinese words on the left down corner!";
}

function change_website1()
{
    window.location.assign("8.html");
}

function change_website2()
{
    localStorage.setItem("challenge",7);
    window.location.assign("fail.html");
}

//portal
if (localStorage.getItem("have_portal")=="yes")
{
    portal.setAttribute("type","submit");
    portal.style.width="70px";
    portal.style.height="35px";
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





