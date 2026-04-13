const menuIcon = document.getElementById('menuIcon')
const menuContainer = document.getElementById('menuContainer')
const menuItems = document.querySelectorAll('.menu-text')

let isMenuOpen = false

menuIcon.addEventListener('click', function(e){
  e.stopPropagation()

  if(isMenuOpen){
    closeMenu()
  }else{
    openMenu()
  }
})

function openMenu(){
  isMenuOpen = true


  menuItems.forEach(item => {
    const delay = Math.random() * 0.3
    item.style.setProperty('--drop-delay', `${delay}s`)
  })

  menuContainer.classList.add('open')
}

function closeMenu(){
  isMenuOpen = false
  menuContainer.classList.remove('open')
}


document.addEventListener('click', function(e){
  if(
    isMenuOpen &&
    !menuContainer.contains(e.target) &&
    !menuIcon.contains(e.target)
  ){
    closeMenu()
  }
})

menuItems.forEach(item => {
  item.addEventListener('click', function(){
    if(isMenuOpen){
      closeMenu()
    }
  })
})
