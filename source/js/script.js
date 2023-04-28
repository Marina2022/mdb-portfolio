const nav =  document.querySelector('#nav');
const socials = document.querySelectorAll('.socials i');


window.addEventListener('scroll',()=>{
  const scroll = window.scrollY;
  if(scroll > 5) {
    nav.style.backgroundColor = 'white';
    nav.style.paddingTop = '3px';
    nav.style.paddingBottom = '3px';
    socials.forEach((s)=>{
      s.classList.remove('text-white');
    })

  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.paddingTop = '9px';
    nav.style.paddingBottom = '8px';
    socials.forEach((s)=>{
      s.classList.add('text-white')
    })

  }
})
