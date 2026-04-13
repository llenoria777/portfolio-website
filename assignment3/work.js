const image7 = document.querySelector('.trigger-image')
const overlay = document.getElementById('overlay')

const imageofwork = document.querySelector('.imageofwork')

const backIcon = document.getElementById('backIcon')
const cancelIcon = document.getElementById('cancelIcon')

const workText = document.querySelector('.work-text')
const workText2 = document.querySelector('.work-text-2')

if(backIcon){
  backIcon.addEventListener('click',function(){
    window.location.href = 'index.html'
  })
}

function openPanel(){

  overlay.classList.add('active')

  backIcon.classList.add('hidden-icon')
  cancelIcon.classList.remove('hidden-icon')

  imageofwork.classList.add('active')
  workText.classList.add('active')
  workText2.classList.add('active')
}

function closePanel(){

  overlay.classList.remove('active')

  backIcon.classList.remove('hidden-icon')
  cancelIcon.classList.add('hidden-icon')

  imageofwork.classList.remove('active')
  workText.classList.remove('active')
  workText2.classList.remove('active')
}

image7.addEventListener('click',openPanel)

cancelIcon.addEventListener('click',closePanel)

overlay.addEventListener('click',closePanel)