var totalNumber=document.querySelectorAll(".icon").length;
for(var i=0;i<totalNumber;i++)
{
  document.querySelectorAll(".icon")[i].addEventListener("click",function(){
    var clickedNumber=this.innerHTML;
    console.log(clickedNumber);
    workingDisplay(clickedNumber);
  });
  
}
document.addEventListener("keypress",function(event)
{
  workingDisplay(event.key);
});
var display="";
function workingDisplay(icon)
{
  if(display.length==30)
  {
    
  }
  else if(icon>='0' && icon<='9')
  {
    display=display+icon+"";
  }
  else if(icon=='(' || icon==')' || icon=='.')
  {
    display+=icon;
  }
  else if (icon=='+' || icon=='-' || icon=='*' || icon=='/' || icon=='%')
  {
    display=display+icon+"";
  }
  else if(icon=='=')
  {
    var ans=eval(display);
    console.log(ans);
    display=ans;
    ans=0;

  }
  else
  {
    console.log("wrong button clicked");

  }
  if(icon=='C' || icon=='c')
  {
    ans=0;
    display="";
    
  }
 
  
  document.querySelector(".answer").innerHTML=display;
}

