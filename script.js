const toggles=document.querySelectorAll('label');

toggles.forEach(toggle=>{
  toggle.addEventListener('click',()=>{
    document.body.classList.toggle('darkmode');
  })
}
)
