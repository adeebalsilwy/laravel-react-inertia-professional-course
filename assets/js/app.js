
function toggleMenu(){document.getElementById('mobileMenu')?.classList.toggle('hidden')}
function initLessonSearch(){
 const input=document.getElementById('lessonSearch'); const items=[...document.querySelectorAll('[data-search-item]')];
 if(!input||!items.length)return;
 input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();items.forEach(el=>{const text=el.dataset.searchText.toLowerCase();el.style.display=(!q||text.includes(q))?'':'none';});});
}
function initQuickJump(){const select=document.getElementById('quickJump'); if(!select)return; select.addEventListener('change',()=>{if(select.value) location.href=select.value;});}
function copyText(id){const el=document.getElementById(id); if(el) navigator.clipboard?.writeText(el.innerText);}
document.addEventListener('DOMContentLoaded',()=>{initLessonSearch();initQuickJump();});
