let navBtn = document.querySelector('nav button')
let sidebar = document.querySelector('.sidebar')
let cancelBtn = document.querySelector('.sidebarcnt button')
function openSidebar(){
    sidebar.classList.add('show')
}

navBtn.addEventListener('click',openSidebar)

function closeSidebar(){
    sidebar.classList.remove('show')
}


cancelBtn.addEventListener('click',closeSidebar)
sidebar.addEventListener('click',closeSidebar)


let cursor = document.querySelector('.cursor')
let cursorSm = document.querySelector('.cursorsm')

function moveCursor(event){
    let top = event.clientY
    let left = event.clientX

    cursor.style.top = `${top}px`
    cursor.style.left = `${left}px`
    cursorSm.style.top = `${top}px`
    cursorSm.style.left = `${left}px`
}

window.addEventListener('mousemove', moveCursor)