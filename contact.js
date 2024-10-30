var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav1 = document.getElementById("closenav")



menuicon.addEventListener("click",function(){
  sidenav.style.right=0
}
)


closenav1.addEventListener("click",function(){
  sidenav.style.right="-50%"
})
