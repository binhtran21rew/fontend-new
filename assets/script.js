const buybtns= document.querySelectorAll('.js-buy-ticket')
const modal=document.querySelector('.js-modal')
const modalClose=document.querySelector('.js-modal-close')
const modaleContainer=document.querySelector('.js-modal-container')

//khai bao menu bar
var header = document.getElementById('header')
var mobilemenu = document.getElementById('mobile-menu')
var headerheight=header.clientHeight
var menuItems= document.querySelectorAll('#nav li a[href*="#"]')

console.log(buybtns)

function showBuyTick(){
    modal.classList.add('open')
}
function hideBuyTick(){
    modal.classList.remove('open')
}

for (const i of buybtns){
    i.addEventListener('click',showBuyTick)
}
modalClose.addEventListener('click',hideBuyTick)
modal.addEventListener('click',hideBuyTick)

// khi click vao trong khung se khong bi dong
modaleContainer.addEventListener('click', function(event){
    event.stopPropagation()
})
// dong-mo menu bar
mobilemenu.onclick=function(){
    var isOpen= header.clientHeight === headerheight
    if(isOpen){
        header.style.height='auto'
    }else{
        header.style.height=null
        
    }
}
//dong khi chon trong mobile bar
for(var i=0; i<menuItems.length;i++){
    var menuItem= menuItems[i]
    menuItem.onclick=function(event){
        var isParentmenu= this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(isParentmenu){
           event.preventDefault()
        }else{
            header.style.height=null
        }
    }
}
