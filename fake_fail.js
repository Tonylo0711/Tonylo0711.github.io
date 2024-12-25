let button=document.querySelector("#button");
let hint=document.querySelector("h1");
let image=document.querySelector("img"); 
let num=1;
image.style.opacity=1;

button.addEventListener("click",()=>
{
    button.setAttribute("disabled",true);
    hint.textContent="Are you sure you want to retry? You didn't fail in the previous challenge!";
})


image.addEventListener("click",()=>{
    setInterval(adjust_opacity,600);
    setTimeout(()=>{
        image.setAttribute("src","victory.jpg");
        hint.textContent="Actually, you have finished all the challenges! Congrats!!!";
    },3000);
    setTimeout(change_website,8000);
})

function adjust_opacity()
{
    if (num<=5)
    {
        num++;
        image.style.opacity-=0.2;
        console.log(image.style.opacity);
    }
    else if (num==6)
    {
        num++;
        image.style.opacity=0.2;
        console.log(image.style.opacity);
    }
    else if (num==7)
    {
        num++;
        image.style.opacity=0.4;
        console.log(image.style.opacity);
    }
    else if (num==8)
    {
        num++;
        image.style.opacity=0.6;
        console.log(image.style.opacity);
    }
    else if (num==9)
    {
        num++;
        image.style.opacity=0.8;
        console.log(image.style.opacity);
    }
    else if (num==10)
    {
        num++;
        image.style.opacity=1;
        console.log(image.style.opacity);
    }
}

