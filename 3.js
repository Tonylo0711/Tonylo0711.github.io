let alphabet_order=[];
let player_order=[];
let player2_order=[];
let challenge_start=false;
let challenge2_start=false;
let success=true;
let success_2=true;
let checkboxes=document.querySelectorAll("input");
let hint=document.querySelector("h3");
let portal=document.querySelector("#portal");
let portal_hint=document.querySelector("#portal_hint");

checkboxes.forEach((item,index)=>
{
    item.addEventListener("click",()=>
    {      
        if (challenge_start==false||(challenge_start==true&&success==false&&challenge2_start==false))
        {
            let valid=true;
            for (let indices=0; indices<alphabet_order.length; indices++)
            {
                if (alphabet_order[indices]==index) //remove the check
                {
                    valid=false;
                    alphabet_order.splice(indices,1);
                }
            }
            if (valid==true)
            {
                alphabet_order.push(index);
                if (alphabet_order.length==10)
                {
                    for (indices of alphabet_order)
                    {
                        checkboxes[indices].checked=false;
                    }
                    if (success==true)
                    {
                        hint.textContent="Now, please check the alphabets in the same order as how you checked them just now.";
                        challenge_start=true;
                    }
                    else
                    {
                        hint.textContent="Now, please check the alphabets in the \"reverse\" order as how you checked them just now.";
                        challenge2_start=true;
                    }         
                }
            }      
        }
        else if (challenge_start==true&&challenge2_start==false) //normal order
        {
            let valid=true;
            for (let indices=0; indices<player_order.length; indices++)
            {
                if (player_order[indices]==index) 
                {
                    valid=false;
                    player_order.splice(indices,1);
                }
            }
            if (valid==true)
            {
                player_order.push(index);
                if (player_order.length==10)
                {
                    for (let i=0; i<10; i++)
                    {
                        if (player_order[i]!=alphabet_order[i])
                        {
                            success=false;
                            break;
                        }
                    }
                    if (success==true)
                    {
                        hint.textContent="The order is correct. You succeed!";
                        setTimeout(change_website,3000);
                    }
                    else
                    {
                        hint.textContent="The order is wrong. You fail! Give you a chance to try again!";
                        setTimeout(give_hint,3000);
                        for (indices of player_order)
                        {
                            checkboxes[indices].checked=false;
                        }
                        alphabet_order.length=0;
                    }
                }
            }
        }
        else if (challenge_start==true&&challenge2_start==true) //reverse order
        {
            let valid=true;
            for (let indices=0; indices<player2_order.length; indices++)
            {
                if (player2_order[indices]==index) 
                {
                    valid=false;
                    player2_order.splice(indices,1);
                }
            }
            if (valid==true)
            {
                player2_order.push(index);
                if (player2_order.length==10)
                {
                    for (let i=0; i<10; i++)
                    {
                        if (player2_order[i]!=alphabet_order[9-i])
                        {
                            success_2=false;
                            break;
                        }
                    }
                    
                    if (success_2==true)
                    {
                        hint.textContent="The order is finally correct. You succeed!";
                        setTimeout(change_website,3000);
                    }
                    else
                    {
                        hint.textContent="The order is wrong again. You lose the game!";
                        setTimeout(change_website_2,3000);
                    }
                }
            }
        }
    });
});

function give_hint()
{
    hint.textContent="Please randomly check ten alphabets below and press submit.(You should know that randomly picking is a trap now XD.)";
}
function change_website()
{
    window.location.assign("4.html");
}
function change_website_2()
{
    localStorage.setItem("challenge",3);
    window.location.assign("fail.html");
}

//portal
if (localStorage.getItem("have_portal")=="yes")
{
    portal.setAttribute("type","submit");
    portal.style.width="30px";
    portal.style.height="15px";
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


