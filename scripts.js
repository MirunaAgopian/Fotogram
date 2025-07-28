let gridImgsSrc = [
    "./img/img1.jpg", "./img/img2.jpg","./img/img3.jpg", 
    "./img/img4.jpg", "./img/img5.jpg", "./img/img6.jpg", 
    "./img/img7.jpg", "./img/img8.jpg", "./img/img9.jpg", 
    "./img/img10.jpg", "./img/img11.jpg", "./img/img12.jpg"];

 let gridImgsAlt = [
    "a photo of Peles Castle, Romania",
    "a photo of Constanta Casino, Romania",
    "a photo of Transfagarasan mountain road, Romania",
    "a photo of a parachuter waving Romania's flag",
    "a photo of pelikans in the Danube Delta",
    "a photo the mountain sculpture of Decebal, the first king of the Dacians",
    "a photo of the merry graveyard in Sapanta, Romania",
    "a photo of the Romanian Palace of Parliament",
    "a photo of the Huniazilor Castle, Romania",
    "a photo of the Sphinx Rock from Bucegi Mountains, Romania",
    "a photo of two fishermen on a boat at the sunset in the Danube Delta, Romania",
    "a photo of a brown bear"];

let photosDescriptions = [
    'Das Peleș Schloss war die Residenz des Königs Karl I. Er stammte aus der deutschen königlichen Familie Hohenzollern-Sigmaringen.Das Schloss verbindet deutsche und rumänische Architekturelemente und befindet sich in der Stadt Sinaia.', 
    "Das Casino von Constanța wurde auf Wunsch von König Karl II., dem Sohn von Karl I., gebaut. Er war ein eifriger Spieler und hatte eine Leidenschaft für Freu­den­mäd­chen, was ihn vom Thron ausschloss. Das Casino befindet sich in der Stadt Constanța, an der Küste des Schwarzen Meers.",
    "Die Transfăgărășan-Straße führt durch die höchsten Berge Rumäniens und bietet atemberaubende Landschaften. Es ist eine besondere Attraktion für Motorradfahrer und Nervenkitzel-Suchende. Top Gear hat Transfăgărășan als die beste Straße der Welt bezeichnet.",
    "Die Farben der rumänischen Flagge haben folgende Bedeutungen: Rot steht für das Blut, das für das Vaterland vergossen wurde, Gelb für Gold und Blau für das Meer und die Donau.",
    "Pelikane sind eine der vielen Tierarten, die im Donaudelta, dem zweitgrößten und am besten erhaltenen europäischen Deltagebiet, vorkommen. Das Donaudelta wurde 1991 in die Liste des UNESCO-Welterbes aufgenommen.",
    "Die Skulptur „Das Gesicht des Decebalus“ stellt den dakischen Herrscher dar, der die dakischen Stämme, die Vorfahren der Rumänen, vereinte und gegen die Römer kämpfte. Das Gesicht des Decebalus ist 55 Meter hoch und 25 Meter breit und damit die höchste Steinskulptur in Europa und die zweithöchste der Welt. Die Skulptur befindet sich in der Nähe der Stadt Orșova.",
    "Der „Fröhliche Friedhof” (Cimitirul Vesel) ist ein Friedhof in dem Dorf Săpânța, Kreis Maramureș, der für seine farbenfrohen Kreuze bekannt ist. Auf den Kreuzen stehen Geschichten über das Leben und den Beruf der begrabenen Personen. Auf einigen Kreuzen finden sich sogar Verse, oft mit einem Hauch von Humor, in denen an die Menschen erinnert wird.",
    "Der Parlamentspalast ist der Sitz der rumänischen Legislative und befindet sich in Bukarest. Er ist nach dem Pentagon das zweitgrößte Gebäude der Welt. Aufgrund seiner Größe wird hier jedes Jahr das weltweit größte Video-Mapping-Event organisiert - iMapp, bei dem die Videos auf dem Parlamentspalast im Rahmen einer Kompetition ausgestellt werden.",
    "Das Huniazilor Schloss ist die mittelalterliche Festung von Hunedoara, eines der wichtigsten Denkmäler der gotischen Architektur in Rumänien. Hier wurde der Horrorfilm „The nun” gedreht.",
    "Die Sphinx im rumänischen Bucegi-Gebirge ist zwar nicht so berühmt wie die ägyptische Sphinx, aber sie ist der Felsen, der der ägyptischen Statue ähnelt. Der Felsen ist auf natürliche Weise durch Erosion entstanden.",
    "In Rumänien mündet die Donau in das Schwarze Meer und bildet das zweitgrößte Delta Europas und das Gebiet mit der größten biologischen Vielfalt in Europa. Die Fischerei ist der wichtigste Wirtschaftszweig in diesem Gebiet.",
    "Rumänien hat die größte Braunbärenpopulation in Europa. Sie leben frei im Wald und besuchen jedes Jahr Städte am Waldrand wie Brașov und Sibiu. Der Braunbär wird seit der Zeit der barbarischen Stämme, der Daker, verehrt und ist in Rumänien immer noch ein beliebtes Tier."
]


function render(){
   let contentRef = document.getElementById('content');
    for(let index = 0; index < gridImgsSrc.length; index++){
        contentRef.innerHTML += getImgsHtml(index);    
    }
}

function getImgsHtml(index){
    return `<img onclick='initModal(${index})' id='modal_img' class ='grid-img' src=${gridImgsSrc[index]} alt=${gridImgsAlt[index]}>`;
}

//Functions to display the pop-up and and each img in the pop-up

function initModal(index){
    let initDialog = document.getElementById('dialog');
    let overlayRef = document.getElementById('overlay');
    initDialog.innerHTML = displayModalContent(index);
    initDialog.style.display = 'flex';
    overlayRef.style.display= 'block';
}

function displayModalContent(index){
    return `<div id="dialog_content" class="dialog-box">
            <img onclick='closeDialog()' id="close" class="close-btn" src="./img/close.png" alt="close button">
                <p>Dreh das Bild um, um mehr zu erfahren!</p>
                    <img id="dialog_img" class="popup-img" src="${gridImgsSrc[index]}" alt="${gridImgsAlt[index]}">
                    <p id="photo_description${index + 1}" class="description d-none">${photosDescriptions[index]}</p>
                        <div class="arrow-box">
                            <img onclick='moveToLeft(${index})' id="left_btn" class="arrow-btn" src="./img/left_arrow.png" alt="arrow pointing to the left">
                            <img onclick='flipImg(${index})' id="flip_btn" class="arrow-btn" src="./img/flip_arrow.png" alt="two curled arrows indicating to flip the content">
                            <img onclick='moveToRight(${index})' id="right_btn" class="arrow-btn" src="./img/right_arrow.png" alt="arrow pointing to the right">
                        </div>
        </div>` 
}


function closeDialog(){
    document.getElementById('dialog').style.display='none';
    document.getElementById('overlay').style.display='none';
}

document.addEventListener('keyup', function(event) {
    if(event.key === 'Escape' || event.key === ' ') {
        closeDialog();
    }
    });

function moveToRight(imageIndex){
    // console.log('move to right');
    imageIndex++;
    if(imageIndex >= gridImgsSrc.length){
        imageIndex = 0;
    }
    initModal(imageIndex);
}


function moveToLeft(imageIndex){
    // console.log('move to left');
    imageIndex--;
    if(imageIndex <= 0){
        imageIndex = gridImgsSrc.length - 1;
    }
    initModal(imageIndex);
    
}

function flipImg(index){
   let imgToBeFlipped =  document.getElementById('dialog_img');
   imgToBeFlipped.classList.toggle('flip-hide');
   let imgDescription = document.getElementById(`photo_description${index + 1}`);

    if (imgToBeFlipped.classList.contains('flip-hide')) {
        setTimeout(() => {
            imgDescription.classList.remove('d-none');
        }, 1000);
    } else {
        imgDescription.classList.add('d-none');
    }
}










