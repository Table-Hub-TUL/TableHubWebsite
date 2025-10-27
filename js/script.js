document.addEventListener('DOMContentLoaded',function(){
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  const items = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      })
    },{threshold:0.12});
    items.forEach(i=>obs.observe(i));
  } else {
    items.forEach(i=>i.classList.add('visible'))
  }

  const btn = document.getElementById('learnBtn');
  if(btn){
    btn.addEventListener('click', ()=>{
      btn.animate([
        {transform:'translateY(0)'},
        {transform:'translateY(-4px)'},
        {transform:'translateY(0)'}
      ],{duration:240, easing:'ease-out'})
    })
  }
});