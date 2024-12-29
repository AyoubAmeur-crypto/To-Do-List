let btn = document.getElementById("btn")
let result = document.getElementById("result")
let objectif = document.getElementById("objectif")
let b = true



btn.addEventListener("click",()=>{

  const d = result.value
  result.value=""

  if(d===""){

    alert("Empty Task 📒!!")
  }

  else{

    let v = document.createElement("li")
    let c = document.createElement("button")

    v.style.transition=".5s ease"
    c.classList="bi bi-x-circle"
    v.style.position="relative"
    c.style.position="absolute"
    c.style.right="2px"
    c.style.bottom="-3px"
    c.style.fontSize="18px"
    c.style.transition=".5s ease"
    


    v.innerHTML=d
    v.appendChild(c)
    objectif.appendChild(v)

    saveData()

    
   
  }

  
})

objectif.addEventListener("mouseover",function(e){


if(e.target.tagName==="BUTTON"){

  e.target.style.color="rgb(51, 54, 255)"
}

},false)

objectif.addEventListener("mouseout",function(e){
  
  
if(e.target.tagName==="BUTTON"){
  
    e.target.style.color="tomato"
  }
  
  },false)

objectif.addEventListener("click",function(e){

  if(e.target.tagName === 'LI'){

   if(b){
     e.target.style.textDecoration="line-through"
     e.target.style.color="rgba(142, 141, 141, 0.64)"
     b=false
     saveData()
   }
   else{

    e.target.style.textDecoration="none"
    e.target.style.color="black"
    b=true
    saveData()
   }
   
  }

  else if (e.target.tagName === "BUTTON"){

    e.target.parentElement.remove()
    saveData()
  }

},false)

function saveData(){

  localStorage.setItem("data",objectif.innerHTML)

}

function getData(){
  objectif.innerHTML=localStorage.getItem("data")
}

getData()