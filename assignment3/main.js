const container = document.getElementById("container")

const images = [
  "img/img1.png",
  "img/img2.png",
  "img/img3.png",
  "img/img4.png",
  "img/img5.png",
  "img/img6.png",
  "img/img7.png",
  "img/img8.png",
  "img/img9.png",
  "img/img10.png"
]

const COPIES_PER_IMAGE = 60

const MIN_SIZE_W = 10
const MAX_SIZE_W = 50

const MIN_SIZE_H = 150
const MAX_SIZE_H = 250

const overlay = document.getElementById("overlay")
const highlightImages = document.querySelectorAll('[data-highlight="true"]')

highlightImages.forEach(img => {

  img.addEventListener("mouseenter", () => {
    overlay.style.opacity = "1"
  })

  img.addEventListener("mouseleave", () => {
    overlay.style.opacity = "0"
  })

})

function createRects(){

  const screenW = window.innerWidth
  const screenH = window.innerHeight

  images.forEach((src) => {

    for(let i = 0; i < COPIES_PER_IMAGE; i++){

      const rect = document.createElement("img")
      rect.src = src
      rect.className = "rect"
      rect.style.position = "absolute"

      rect.onload = () => {

        const rectW = Math.random()*(MAX_SIZE_W - MIN_SIZE_W) + MIN_SIZE_W
        const rectH = Math.random()*(MAX_SIZE_H - MIN_SIZE_H) + MIN_SIZE_H

        rect.style.width = rectW + "px"
        rect.style.height = rectH + "px"

        let x, y
        let r = Math.random()

        do{
          x = Math.random()*(screenW + rectW) - rectW*0.5
          y = r*r*(screenH + rectH) - rectH*0.5
        }while(
          (x > screenW - 700 && y > screenH - 300) ||
          (x > screenW - 400 && y > screenH - 400) ||
          (x > screenW - 200 && y > screenH - 600)
        )

        rect.style.left = x + "px"
        rect.style.top = y + "px"

        const duration = 1.5 + Math.random()*2
        const delay = Math.random()*1.5

        rect.style.animationDuration = duration + "s"
        rect.style.animationDelay = delay + "s"

        container.appendChild(rect)
      }

    }

  })

}

function resetRects(){
  container.innerHTML = ""
  createRects()
}

resetRects()

window.addEventListener("resize", resetRects)