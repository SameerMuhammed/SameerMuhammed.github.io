
/* java file */
let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let frontBtn = document.getElementById("frontBtn")

/* for scrolling left and right */
scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.computedStyleMap.scrollBehavior = "auto";
})
/* for smoother scrolling */
frontBtn.addEventListener("click", ()=>{
     scrollContainer.computedStyleMap.scrollBehavior = "smooth";
     scrollContainer.scrollLeft +=800
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.computedStyleMap.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -=800
});