let body=document.body;
let a=1;
let order;
setInterval(()=>{
    if (a<10)
    {
        order=`0${a}`;
    }
    else
    {
        order=`${a}`;
    }
    body.style.backgroundImage = `url(time_travel/${order}.bmp)`;
    //image.setAttribute("src",`time_travel/${order}.bmp`)
    a++;
},30)
