
const slideNext = document.querySelector('.slide-next')

slideNext.addEventListener("click", (e => {
    // e.preventDefault()

    const origin = e.path[5].location.origin
    const path = e.path[5].location.pathname
    console.log(origin)
    console.log(path)
    console.log(path.split('/')[2])
    
    // e.target.href = 'http://localhost:8080/slides/slide_001/'
    // console.log(e.target.href)
}))