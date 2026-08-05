// main.js — small interactive behavior
document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.main-nav');
  if(btn && nav){
    btn.addEventListener('click',function(){
      var isHidden = nav.style.display === '' || nav.style.display === 'none';
      nav.style.display = isHidden ? 'flex' : 'none';
    });
  }
});
