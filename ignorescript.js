
const dialog = document.getElementById('dialog');
const modalImg = document.querySelectorAll('.grid-img');
const dialogImg = document.getElementById('dialog_img');
const closeBtn = document.getElementById('close');

const leftBtn = document.getElementById('left_btn');
const rightBtn = document.getElementById('right_btn');
let myImgs = ["./img/img1.jpg", "./img/img2.jpg","./img/img3.jpg", 
            "./img/img4.jpg", "./img/img5.jpg", "./img/img6.jpg", 
            "./img/img7.jpg", "./img/img8.jpg", "./img/img9.jpg", 
            "./img/img10.jpg", "./img/img11.jpg", "./img/img12.jpg"];
let currentIndex = 0;

modalImg.forEach(function(img){
    img.addEventListener('click', function(){
        dialogImg.src = this.src;
        dialog.showModal();
    });
});

function closeModal(){
    dialog.close();
}
closeBtn.addEventListener('click', closeModal);

dialog.addEventListener('click', function(event){
    if(event.target === dialog){
        dialog.close();
    }
});

// Sa elimin src din dialog img cand dialog.close

function moveToRight(){
    currentIndex++;
    if(currentIndex >= myImgs.length){
        currentIndex = 0;
    }
    dialogImg.src = myImgs[currentIndex];
}
rightBtn.addEventListener('click', moveToRight);
document.addEventListener('keyup', function(event){
    if(event.key === 'ArrowRight' || event.key === ' '){
        moveToRight();
    }
});


function moveToLeft(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = myImgs.length - 1;
    }
    dialogImg.src = myImgs[currentIndex];
}
leftBtn.addEventListener('click', moveToLeft);
document.addEventListener('keyup', function(event){
    if(event.key === 'ArrowLeft' || event === ' '){
        moveToLeft();
    }
});

