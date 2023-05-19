
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            320: {
                items: 1,
            },
            576: {
                items: 2,

            },
            992: {
                items: 3,
            }
        }
    })
})

let statisticsInfo = document.querySelector('.statistics__info')
let statisticsInfoesTitle = document.querySelectorAll('.statistics__infoes__title')


window.addEventListener('scroll', function scrollTimer() {
    if (this.scrollY >= statisticsInfo.offsetTop - statisticsInfo.offsetHeight * 1.4) {
        timerStop()
        this.removeEventListener('scroll', scrollTimer)
    }
})

function timerStop() {
    for (let i = 0; i < statisticsInfoesTitle.length; i++) {
        let count = +statisticsInfoesTitle[i].getAttribute('data-num')
        function calcNum(k = 0) {
            statisticsInfoesTitle[i].innerHTML = k
            k++;

            if (k < count) {
                setTimeout(() => {
                    calcNum(k)
                }, 50);
            }
        }

        calcNum()
    }
}


// 
let photoImg = [...document.querySelectorAll('.photo__img')]
let view = document.querySelector('.view')

for (let i = 0; i < photoImg.length; i++) {
    photoImg[i].addEventListener('click', function () {
        showImg()
    })
}

function showImg() {
    let x = photoImg.getAttribute('src')
    console.log(x);
}





// for (let i = 0; i < leadershipBtn.length; i++) {
//     leadershipBtn[i].addEventListener('click', function(e){
//        e.preventDefault()
//        if (i == 0) {
//         leadershipBtn[i].style.background = 'rgb(40, 136, 201)'
//         leadershipBtn[i].style.color = '#fff'
//           for (let i = 0; i < leadershipItem.length; i++) {
//              if (i == 0) {
//                 leadershipItem[i].classList.add('active')
//              }

//           }
//        }else if (i == 1) {
//         leadershipBtn[i].style.background = 'rgb(40, 136, 201)'
//         leadershipBtn[i].style.color = '#fff'
//        }
//     })

// }

let contactInfo = document.querySelectorAll('.contact__info')
let contactIcon = document.querySelectorAll('.contact__info-icon')
let contactLink = document.querySelector('.contact__info-link')

for (let i = 0; i < contactInfo.length; i++) {
    if (i == 2) {
        for (let k = 0; k < contactIcon.length; k++) {
            if (k == 2) {
                contactInfo[i].addEventListener('mouseover', function () {
                    contactIcon[k].style.transform = 'translateY(-10px)'
                })
                contactInfo[i].addEventListener('mouseout', function () {
                    contactIcon[k].style.transform = 'translateY(0)'
                })
            }

        }
    }

}

let PhotoImg = [...document.querySelectorAll('.photo__img')];
let body = document.querySelector('body')


for (let i = 0; i < PhotoImg.length; i++) {
    PhotoImg[i].addEventListener('click', function () {
        showImg(this)
    })

}

function showImg(item) {
    let view = document.querySelector('.view')
    let image = document.querySelector('.view img')
    let viewClose = document.querySelector('.view__close')



    view.classList.add('active')

    body.classList.add('active')

    let src = item.getAttribute('src');
    image.removeAttribute('src')

    image.setAttribute('src', `${src}`)

    view.addEventListener('click', function(e){
        if (e.target == e.currentTarget) {
            view.classList.remove('active')
            body.classList.remove('active')
        }
    })
    
    viewClose.addEventListener('click', function(e){
        view.classList.remove('active')
        body.classList.remove('active')

    })
    

}


let ImagesRow = [...document.querySelectorAll('.images__row-img')];
let body2 = document.querySelector('body')


for (let i = 0; i < ImagesRow.length; i++) {
    ImagesRow[i].addEventListener('click', function () {
        showImg(this)
    })

}

function showImg(item) {
    let view = document.querySelector('.view')
   
    let image = document.querySelector('.view img')
    let viewClose = document.querySelector('.view__close')



    view.classList.add('active')

    body2.classList.add('active')

    let src = item.getAttribute('src');
    image.removeAttribute('src')

    image.setAttribute('src', `${src}`)

    view.addEventListener('click', function(e){
        if (e.target == e.currentTarget) {
            view.classList.remove('active')
            body.classList.remove('active')
        }
    })
    
    viewClose.addEventListener('click', function(e){
        view.classList.remove('active')
        body2.classList.remove('active')

    })
    

}


let leadershipBtn = [...document.querySelectorAll('.leadership__btn-link')]
let leadershipItem = [...document.querySelectorAll('.leadership__item')]

leadershipBtn[0].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[1].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[1].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[2].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[2].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[0].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[0].style.color = '#fff'
    leadershipItem[1].classList.remove('active')
    leadershipItem[2].classList.remove('active')
    leadershipItem[0].classList.add('active')
})
leadershipBtn[1].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[0].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[0].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[2].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[2].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[1].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[1].style.color = '#fff'
    leadershipItem[0].classList.remove('active')
    leadershipItem[2].classList.remove('active')
    leadershipItem[1].classList.add('active')
})
leadershipBtn[2].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[0].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[0].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[1].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[1].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[2].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[2].style.color = '#fff'
    leadershipItem[0].classList.remove('active')
    leadershipItem[1].classList.remove('active')
    leadershipItem[2].classList.add('active')
})


leadershipBtn[3].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[4].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[4].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[5].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[5].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[3].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[3].style.color = '#fff'
    leadershipItem[4].classList.remove('active')
    leadershipItem[5].classList.remove('active')
    leadershipItem[3].classList.add('active')
})
leadershipBtn[4].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[3].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[3].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[5].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[5].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[4].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[4].style.color = '#fff'
    leadershipItem[3].classList.remove('active')
    leadershipItem[5].classList.remove('active')
    leadershipItem[4].classList.add('active')
})
leadershipBtn[5].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[3].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[3].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[4].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[4].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[5].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[5].style.color = '#fff'
    leadershipItem[3].classList.remove('active')
    leadershipItem[4].classList.remove('active')
    leadershipItem[5].classList.add('active')
})

leadershipBtn[6].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[7].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[7].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[8].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[8].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[6].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[6].style.color = '#fff'
    leadershipItem[7].classList.remove('active')
    leadershipItem[8].classList.remove('active')
    leadershipItem[6].classList.add('active')
})
leadershipBtn[7].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[6].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[6].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[8].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[8].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[7].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[7].style.color = '#fff'
    leadershipItem[6].classList.remove('active')
    leadershipItem[8].classList.remove('active')
    leadershipItem[7].classList.add('active')
})
leadershipBtn[8].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[6].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[6].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[7].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[7].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[8].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[8].style.color = '#fff'
    leadershipItem[6].classList.remove('active')
    leadershipItem[7].classList.remove('active')
    leadershipItem[8].classList.add('active')
})


leadershipBtn[9].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[10].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[10].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[11].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[11].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[9].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[9].style.color = '#fff'
    leadershipItem[10].classList.remove('active')
    leadershipItem[11].classList.remove('active')
    leadershipItem[9].classList.add('active')
})
leadershipBtn[10].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[9].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[9].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[11].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[11].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[10].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[10].style.color = '#fff'
    leadershipItem[9].classList.remove('active')
    leadershipItem[11].classList.remove('active')
    leadershipItem[10].classList.add('active')
})
leadershipBtn[11].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[9].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[9].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[10].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[10].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[11].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[11].style.color = '#fff'
    leadershipItem[9].classList.remove('active')
    leadershipItem[10].classList.remove('active')
    leadershipItem[11].classList.add('active')
})


leadershipBtn[12].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[13].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[13].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[14].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[14].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[12].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[12].style.color = '#fff'
    leadershipItem[13].classList.remove('active')
    leadershipItem[14].classList.remove('active')
    leadershipItem[12].classList.add('active')
})
leadershipBtn[13].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[12].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[12].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[14].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[14].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[13].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[13].style.color = '#fff'
    leadershipItem[12].classList.remove('active')
    leadershipItem[14].classList.remove('active')
    leadershipItem[13].classList.add('active')
})
leadershipBtn[14].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[12].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[12].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[13].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[13].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[14].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[14].style.color = '#fff'
    leadershipItem[12].classList.remove('active')
    leadershipItem[13].classList.remove('active')
    leadershipItem[14].classList.add('active')
})


leadershipBtn[15].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[16].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[16].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[17].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[17].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[15].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[15].style.color = '#fff'
    leadershipItem[16].classList.remove('active')
    leadershipItem[17].classList.remove('active')
    leadershipItem[15].classList.add('active')
})
leadershipBtn[16].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[15].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[15].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[17].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[17].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[16].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[16].style.color = '#fff'
    leadershipItem[15].classList.remove('active')
    leadershipItem[15].classList.remove('active')
    leadershipItem[16].classList.add('active')
})
leadershipBtn[17].addEventListener('click', function (e) {
    e.preventDefault()
    leadershipBtn[15].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[15].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[16].style.background = 'rgb(231, 236, 245)'
    leadershipBtn[16].style.color = 'rgb(40, 136, 201)'
    leadershipBtn[17].style.background = 'rgb(40, 136, 201)'
    leadershipBtn[17].style.color = '#fff'
    leadershipItem[15].classList.remove('active')
    leadershipItem[16].classList.remove('active')
    leadershipItem[17].classList.add('active')
});


