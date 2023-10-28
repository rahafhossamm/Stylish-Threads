let hiddenText=document.getElementsByClassName("hidden-text")[0]

let readMore=document.getElementsByClassName("read-more")[0]
let moreButton=document.getElementsByClassName("button")[0].onclick=()=>
{
  if(readMore.innerHTML==="Read More")
  {
    hiddenText.classList.remove('hidden-text')
    hiddenText.classList.add('show-text')
    readMore.innerHTML="Read Less"
  }
  else
  {
    hiddenText.classList.add('hidden-text')
    hiddenText.classList.remove('show-text')
    readMore.innerHTML="Read More"
  }  


}
