window.addEventListener('scroll',(e)=>{
  const nav = document.querySelector('.nav-custom');
  if(window.pageYOffset>80){
    nav.classList.add("add-shadow");
  }else{
    nav.classList.remove("add-shadow");
  }
});