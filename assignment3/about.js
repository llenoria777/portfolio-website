document.addEventListener("DOMContentLoaded",function(){

    const container = document.getElementById("rainContainer")
  
    const texts = ["唯","た","髙","か","ゆ","田"]
    const colors = ["#eb3042","#ec8bc7","#1999e6","#0b888f","#f9f722","#ef8832","#204bae","#54e218"]
    const groundY = 800
  
    function createRain(){
  
      const el = document.createElement("div")
      el.className = "rain-text"
  
      const span = document.createElement("span")
      span.innerText = texts[Math.floor(Math.random()*texts.length)]
      span.style.background = colors[Math.floor(Math.random()*colors.length)]
      el.appendChild(span)
  
      const windowWidth = window.innerWidth
      const minX = 500
      const maxX = 900
  
      let leftPos
      do{
        leftPos = Math.random()*windowWidth
      }while(leftPos>=minX && leftPos<=maxX)
  
      el.style.left = leftPos + "px"
      el.style.top = "-50px"
      container.appendChild(el)
  
      let startTime = null
      const duration = 2500
  
      function fall(t){
  
        if(!startTime) startTime = t
  
        const elapsed = t - startTime
        const progress = Math.min(elapsed/duration,1)
  
        const y = -50 + progress*(groundY+50)
        el.style.transform = `translateY(${y}px)`
  
        if(progress<1){
          requestAnimationFrame(fall)
        }else{
          startBounce(el)
        }
      }
  
      requestAnimationFrame(fall)
    }
  
    function startBounce(el){
  
      let count = 0
  
      function bounce(){
  
        if(!el.parentNode) return
  
        if(count===0){
          el.style.transform = `translateY(${groundY}px)`
        }else if(count===1){
          el.style.transform = `translateY(${groundY-10}px)`
        }else if(count===2){
          el.style.transform = `translateY(${groundY}px)`
          el.remove()
          return
        }
  
        count++
        setTimeout(bounce,150)
      }
  
      bounce()
    }
  
    setInterval(createRain,200)
  
  })
  
  
  if(backIcon){
    backIcon.addEventListener("click",function(){
      window.location.href = "index.html"
    })
  }