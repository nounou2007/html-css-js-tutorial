const nextE1 = document.querySelector(".next")

const imagecontainerE1 = document.querySelector(".image-container")
let currentImg = 1
const imgsE1 = document.querySelectorAll("img");

console.log(imgsE1);
nextE1.addEventListener("click", () => {
    currentImg++
    updateImg()

})

function updateImg() {
    if (currentImg > imgsE1.length) {
        currentImg = 1;
    }
    imagecontainerE1.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

}