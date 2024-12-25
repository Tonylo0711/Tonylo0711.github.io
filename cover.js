let submit=document.querySelector("#submit");
let hint=document.querySelector("#hint");
let myname=document.querySelector("#text");
let hyperlink=document.querySelector("a");

//submit(fake)
submit.addEventListener("click",()=>
{   
    if (myname.value!=""&&myname.value!=null)
    {
        submit.setAttribute("disabled",true);
        hint.textContent="Well, it appears that pressing this \"submit\" is of no use, please try other ones.";
        hyperlink.setAttribute("href","1.html");
        localStorage.setItem("name",myname.value);
    }
    else
    {
        submit.setAttribute("disabled",true);
        hint.textContent="Please input your name before submission!";
        setTimeout(enable_submit,1000);
    }
});

//refresh website
window.addEventListener("beforeunload",()=>
{
    enable_submit();
});

function enable_submit()
{
    submit.removeAttribute("disabled");
}



