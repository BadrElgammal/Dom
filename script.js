var imgs=Array.from(document.querySelectorAll(".item img"));
var lightBoxContanir=document.getElementById('lightBoxContanir');
var lightBoxItem=document.getElementById('lightBoxItem');
var index=-1;
imgs.forEach(function(img)
{
    img.addEventListener('click',function(eventinf)
     {
        lightBoxContanir.style.display="flex";
        lightBoxItem.style.backgroundImage="url("+eventinf.target.src+")";
        index=imgs.indexOf(eventinf.target);
        console.log(index)
     })
})
function closeclick()
{
    lightBoxContanir.style.display="none";
}   
function nextclick()
{
    if(index<imgs.length-1)
        index++;
    else
    index=0;
    var sorce= imgs[index].getAttribute("src");
    lightBoxItem.style.backgroundImage="url("+sorce+")";
}
function prevclick()
{
    if(index>0)
        index--;
    else
    {
        index=imgs.length-1;
    }
    var sorce=imgs[index].getAttribute("src");
    lightBoxItem.style.backgroundImage="url("+sorce+")";
}
document.addEventListener("keydown",function(e)
{
    if(e.code==="ArrowRight")
        nextclick();
    else if(e.code === "ArrowLeft")
        prevclick();
    else if(e.code==="Escape")
        closeclick();
})
