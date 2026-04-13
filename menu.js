const menuIcon = document.getElementById('menuIcon')
const menuContainer = document.getElementById('menuContainer')
const menuItems = document.querySelectorAll('.menu-text')

let isMenuOpen = false
let isAnimating = false

const items = Array.from(menuItems)

menuIcon.addEventListener('click',function(e){

  e.stopPropagation()

  if(isAnimating) return

  if(isMenuOpen){
    closeMenu()
  }else{
    openMenu()
  }

})

function openMenu(){

  isAnimating = true
  isMenuOpen = true

  const randomOrder = generateRandomOrder(items.length)

  items.forEach((item,index)=>{

    const orderIndex = randomOrder[index]
    const delay = orderIndex * 0.08

    item.style.setProperty('--drop-delay',`${delay}s`)
  })

  menuContainer.classList.add('open')

  setTimeout(()=>{

    isAnimating = false

  },800)

}

function closeMenu(){

  isAnimating = true

  menuContainer.classList.remove('open')

  setTimeout(()=>{

    isAnimating = false
    isMenuOpen = false

  },300)

}

function generateRandomOrder(n){

  const arr = Array.from({length:n},(_,i)=>i)

  for(let i = arr.length-1;i>0;i--){

    const j = Math.floor(Math.random()*(i+1))

    ;[arr[i],arr[j]] = [arr[j],arr[i]]
  }

  return arr
}

document.addEventListener('click',function(e){

  if(
    isMenuOpen &&
    !isAnimating &&
    !menuContainer.contains(e.target) &&
    e.target !== menuIcon &&
    !menuIcon.contains(e.target)
  ){
    closeMenu()
  }

})

menuItems.forEach(item=>{

  item.addEventListener('click',function(){

    if(isMenuOpen && !isAnimating){
      closeMenu()
    }

  })

})