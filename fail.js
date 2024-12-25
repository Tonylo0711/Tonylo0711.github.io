let button=document.querySelector("button");

button.addEventListener("click",()=>
{
    localStorage.setItem("have_portal","yes");
    window.location.assign("cover.html");
})
