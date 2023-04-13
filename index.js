let mainImage = document.querySelector('#mainImage')//imagem principal//
let thumb1 = document.querySelector('#thumb1')
let thumb2 = document.querySelector('#thumb2')
let thumb3 = document.querySelector('#thumb3')

function changeImage1(path) {
    mainImage.src = path

    thumb1.classList.add('main'); //function própria//
    thumb2.classList.remove('main');
    thumb3.classList.remove('main');

}

function changeImage2(path) {
    mainImage.src = path

    thumb2.classList.add('main');
    thumb3.classList.remove('main');
    thumb1.classList.remove('main');

}

function changeImage3(path) {
    mainImage.src = path

    thumb3.classList.add('main');
    thumb1.classList.remove('main');
    thumb2.classList.remove('main');

}
