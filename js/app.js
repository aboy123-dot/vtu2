const burger = document.getElementById('burger')
const burgerclose = document.getElementById('burgerclose')
const navbar = document.getElementById('work')

burger.addEventListener('click', function(){
  if(burger.style.display ="none"){
    burgerclose.style.display ="block"
    navbar.classList.add('d-none')
    
    
    
   
  }
})
burgerclose.addEventListener('click', function(){
    if(burgerclose.style="block"){
        burger.style.display="block"
        navbar.classList.remove('d-none')
    }
})
