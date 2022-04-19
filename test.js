//onchange - video modification 
//get the seartch parameters 
//"https://www.youtube.com/embed/O2qnKaR9M2Q?autoplay=0&playsinline=1&modestbranding=1&cc_load_policy=1&rel=0"
const params = new URLSearchParams(window.location.search)
const selected_video = params.get('video')
let myIframe = document.getElementById("myIframe")
switch(selected_video){
    case "seaside":
        myIframe.src = "https://www.youtube.com"

    case "beach":
        myIframe.src = "https://www.google.com"

}