const menuToggle=document.getElementById('menuToggle'),mainNav=document.getElementById('mainNav'),themeToggle=document.getElementById('themeToggle'),backToTop=document.getElementById('backToTop');
menuToggle?.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open))});
mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
document.querySelectorAll('.faq-question').forEach(b=>b.addEventListener('click',()=>{const a=b.nextElementSibling,open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));a.hidden=open;b.querySelector('span:last-child').textContent=open?'+':'−'}));
const filterButtons=document.querySelectorAll('.filter-btn'),tips=document.querySelectorAll('.tip-card');filterButtons.forEach(b=>b.addEventListener('click',()=>{filterButtons.forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;tips.forEach(t=>t.hidden=!(f==='todos'||t.dataset.category===f))}));
themeToggle?.addEventListener('click',()=>document.body.classList.toggle('dark'));
window.addEventListener('scroll',()=>backToTop?.classList.toggle('show',window.scrollY>500));backToTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
