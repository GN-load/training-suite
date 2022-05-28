const headerUl = document.querySelector('.header_ul');


headerUl.addEventListener("mouseover", (elem) => {

    const hoveredLi = document.getElementById(elem.srcElement.id);

    if (hoveredLi.hasAttribute("class", "unhovered")) {

        hoveredLi.classList.remove("unhovered")

    };

    hoveredLi.classList.add("hovered")
});

headerUl.addEventListener("mouseout", (elem) => {

    const unHoveredLi = document.querySelector(`#${elem.srcElement.id}`)

    unHoveredLi.classList.remove("hovered")

    unHoveredLi.classList.add("unhovered")
});

const contactButton = document.querySelector('.contact_button');

contactButton.addEventListener('mouseover', () => {
    if (contactButton.hasAttribute("class", "unhovered_button")) {
        contactButton.classList.remove("unhovered_button")
    }
    contactButton.classList.add("hovered_button")
});

contactButton.addEventListener("mouseout", () => {
    contactButton.classList.remove("hovered_button")
    contactButton.classList.add("unhovered_button")
});

const video = document.querySelector('.video');

video.addEventListener('mouseover', () => {

    if (video.hasAttribute("class", "unhovered_video")) {
        video.classList.remove('unhovered_video')
    }
    video.classList.add("hovered_video")

});

video.addEventListener('mouseout', () => {

    video.classList.remove('hovered_video')
    video.classList.add('unhovered_video')

});

// begining of the form

contactButton.addEventListener('click', () => {

    const body = document.querySelector('.background-off')

    body.classList.add('background-on')
    document.querySelector('body').style.overflow = "hidden"

    body.insertAdjacentHTML('afterbegin', `<div class="form">
       <div class="close_wrapper">
       <span class="form-text">Fill out the form to contact us</span>
       <div class="close"></div>
       </div>
        <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div id="1-input" class="first-input__form input__form">
        <input placeholder="Enter your name" type="text" class="first-name input">
        </div>
        <div id="2-input" class="input__form">
        <input placeholder="Enter your surname" type="text" class="last-name input">
        </div>
        <div id="input-3" class="input__form">
        <input placeholder="Enter your email" type="text" class="email">
        <span id="error-3" class="error-span"></span>
        </div>
        <div id="4-input" class="input__form">
        <textarea placeholder="Leave a comment" class="form-input comment"></textarea>
        </div>

        <div class="send_wrapper"><button class="send">Send</button></div>
    </div>`);

    const form = document.querySelector('.form');
    if (window.innerHeight >= 651 && window.innerWidth > 800) {
        form.style.marginTop = `${(window.innerHeight - 650) / 2}px`
    } else if (window.innerHeight < 651 && window.innerWidth > 800){
        form.style.height = "500px";
        document.querySelector('.comment').style.margin = "20px 0 0 0";
        document.querySelector('.arrow').style.display = "none";
        document.querySelector('.send_wrapper').style.margin = "15px 0 0 0"
        form.style.marginTop = `${(window.innerHeight - 500) / 2}px`
    }

    form.addEventListener('click', (elem) => {

        if (elem.target.localName == "input") {
            const input = document.querySelector(`.${elem.target.className}`);
            input.style.border = "2px solid #ff3f40";

            input.addEventListener('mouseout', () => {
                input.style.border = "none"
            });
        };
    });

    const sendButton = document.querySelector('.send');

    sendButton.addEventListener('mouseover', () => {
        sendButton.style.backgroundColor = "#ffffff"
        sendButton.style.border = "2px solid #ff3f40"
        sendButton.style.color = "#ff3f40"
        sendButton.style.transition = ".3s"
    });

    sendButton.addEventListener('mouseout', () => {
        sendButton.style.backgroundColor = "#ff3f40"
        sendButton.style.border = "none"
        sendButton.style.color = "#ffffff"
        sendButton.style.transition = ".3s"
    });

    const textArea = document.querySelector('.comment');

    textArea.addEventListener('click', () => {
        textArea.style.border = "2px solid #ff3f40"

        textArea.addEventListener('mouseout', () => {
            textArea.style.border = "none"
        });
    })

    const close = document.querySelector('.close');

    close.addEventListener('click', () => {
        document.querySelector('body').style.overflowY = "scroll";
        body.classList.remove('background-on')
        body.removeChild(form)
    })


    // sending part
    sendButton.addEventListener('click', () => {
        const email = document.querySelector('.email');
        let inputs = document.querySelectorAll('.input');

        for (let i = 0; i < 2; i++) {
            if (inputs[i].value.length > 0) {
                inputs[i].style.border = "none"
                if (inputs[i].parentElement.children.length > 1) {
                    inputs[i].parentElement.removeChild(document.querySelector('.error-span'))
                }
                inputs[i].classList.add('correct-form')
            } else {
                inputs[i].style.border = "2px solid #ff3f40";
                inputs[i].parentElement.style.display = "flex";
                inputs[i].parentElement.style.flexDirection = "column";

                switch (inputs[i].classList[0]) {
                    case "first-name":
                        inputs[i].parentElement.insertAdjacentHTML('beforeend', '<span id="error-1" class="error-span">all fields must be filled</span>');
                        break;

                    case "last-name":
                        inputs[i].parentElement.insertAdjacentHTML('beforeend', '<span id="error-2" class="error-span">all fields must be filled</span>');
                        break;
                }

                if (inputs[i].parentElement.children.length > 2) {
                    inputs[i].parentElement.removeChild(document.getElementById(inputs[i].parentElement.children[1].id))
                }
            }
        };

        const errorEmail = document.getElementById('error-3');
        const errorEmailArr = email.value.split('');

        if (email.value == '') {
            email.style.border = "2px solid #ff3f40";
            errorEmail.style.width = "auto"
            errorEmail.innerHTML = "all fields must be filled"
            if (window.innerWidth <= 800) {
                errorEmail.style.marginRight = "60%"
            }
        };

        errorEmailArr.forEach((el) => {
            if (errLetter.includes(el)) {
                email.style.border = "none";
                errorEmail.innerHTML = "";

                email.classList.add('correct-form');
            } else {
                errorEmail.style.width = "72%"
                errorEmail.innerHTML = "You can use only English letters, dot and @";
                if (window.innerWidth <= 800) {
                    errorEmail.style.marginRight = "26%"
                }
                email.style.border = "2px solid #ff3f40";

                email.addEventListener('focus', () => {
                    email.style.border = "none";
                    errorEmail.innerHTML = "";
                })
            }
        });


        if (textArea.value.length > 0) {
            textArea.style.border = "none"
            if (textArea.parentElement.children.length > 1) {
                textArea.parentElement.removeChild(document.querySelector('#error-4'))
            }
            textArea.classList.add('correct-form')
        } else {
            textArea.style.border = "2px solid #ff3f40";
            textArea.parentElement.style.display = "flex";
            textArea.parentElement.style.flexDirection = "column";
            textArea.parentElement.insertAdjacentHTML('beforeend', '<span id="error-4" class="error-span">all fields must be filled</span>');
            if (textArea.parentElement.children.length > 2) {
                textArea.parentElement.removeChild(document.querySelector('#error-4'))
            }

        }

        const correctInputs = document.querySelectorAll('.correct-form');

        const formObj = {};


        if (correctInputs.length == 4) {
            const dataArr = []
            for (let f = 0; f < 4; f++) {
                dataArr.push(correctInputs[f].value)
            }

            const confirmData = confirm(`Are all items correct?
        name: ${dataArr[0]}
        surname: ${dataArr[1]}
        email: ${dataArr[2]}
        `)

            if (confirmData == true) {

                for (let j = 0; j < 4; j++) {
                    switch (correctInputs[j].classList[0]) {
                        case "first-name":
                            formObj.firstName = correctInputs[j].value;
                            break;

                        case "last-name":
                            formObj.lastName = correctInputs[j].value;
                            break;

                        case "email":
                            formObj.email = correctInputs[j].value;
                            break;

                        case "form-input":
                            formObj.comment = correctInputs[j].value;
                            break;
                    }
                };

                alert(`Your form has been sent!
            wait for an answer
            `)

                for (let d = 0; d < 4; d++) {
                    correctInputs[d].value = '';
                };

                body.classList.remove('background-on')
                body.removeChild(form)

                console.log(formObj)
            } else {
                console.log(formObj)
            }
        }



    });

    // end of the sanding part

});

// end of the form


const learnButton = document.querySelector('.learn_button');

learnButton.addEventListener('mouseover', () => {
    learnButton.style.backgroundColor = "#ffffff"
    learnButton.style.border = "2px solid #ff3f40"
    learnButton.style.color = "#ff3f40"
    learnButton.style.transition = ".3s"
});

learnButton.addEventListener("mouseout", () => {
    learnButton.style.backgroundColor = "#ff3f40"
    learnButton.style.border = "none"
    learnButton.style.color = "#ffffff"
    learnButton.style.transition = ".3s"
});

// second section of the main

const liWrapper = document.querySelector('.li_wrapper');

liWrapper.addEventListener('mouseover', (elem) => {
    const elemA = document.getElementById(elem.srcElement.id)

    elemA.style.color = "#ff2d2d"
    elemA.style.transition = ".3s"

    elemA.addEventListener('mouseout', () => {
        elemA.style.color = "#4c4c4c"
        elemA.style.transition = ".3s"
    })
});

// for example: server's answer

const films = [
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/92/Requiem_for_a_dream.jpg/207px-Requiem_for_a_dream.jpg",
        sort: "user interface",
    },
    {
        imgSrc: "https://www.themoviedb.org/t/p/original/9ylAaVs3MZV4ogaFPDzQcwu0Xb8.jpg",
        sort: "web template",
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/ru/2/2e/The_Midnight_Man_%28film%2C_2017%29.jpg",
        sort: "all",
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/ru/3/32/The_Hobbit._An_Unexpected_Journey.jpg",
        sort: "all",
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg",
        sort: "web template",
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/ru/7/72/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%92%D0%BE%D0%BB%D0%BA_%D1%81_%D0%A3%D0%BE%D0%BB%D0%BB-%D1%81%D1%82%D1%80%D0%B8%D1%82%C2%BB.jpg",
        sort: "mock-up",
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/ru/f/f1/%D0%90%D1%81%D1%82%D1%80%D0%B0%D0%BB-_%D0%93%D0%BB%D0%B0%D0%B2%D0%B0_3.jpeg",
        sort: "print template",
    },
    {
        imgSrc: "https://upload.wikimedia.org/wikipedia/ru/8/8f/Babadook-poster.jpg",
        sort: "mock-up",
    }

];

let filmsHTML = films.reduce((acc, el, i) =>
    acc + `<div id="img-${i}" class="film_wrapper"><img class="film-img" src="${el.imgSrc}" alt="${el.sort}"></div>`
    , ``);

const productWrapper = document.querySelector('.product_wrapper');

productWrapper.insertAdjacentHTML('afterbegin', filmsHTML)


liWrapper.addEventListener('click', (clickedEl) => {
    const deletedFilms = document.querySelectorAll('.film_wrapper');
    clickedEl.preventDefault()

    const sortOnClick = (comparedStr) => {
        deletedFilms.forEach((el) => {
            productWrapper.removeChild(el)
        });

        let sortedFilms = films.filter((elem) => { return elem.sort == comparedStr });
        let sortedFilmsHTML = sortedFilms.reduce((acc, el, i) => acc + `<div id="img-${i}" class="film_wrapper"><img class="film-img" src="${el.imgSrc}" alt="${el.sort}"></div>`, ``)

        productWrapper.insertAdjacentHTML('afterbegin', sortedFilmsHTML);

        sortedFilms = "";
        sortedFilmsHTML = "";
    }

    switch (clickedEl.target.innerHTML) {
        case "mock-up":
            sortOnClick('mock-up')
            break;

        case "user interface":
            sortOnClick('user interface')
            break;

        case "web template":
            sortOnClick("web template");
            break;

        case "print template":
            sortOnClick("print template")
            break;

        case "all":
            deletedFilms.forEach((el) => {
                productWrapper.removeChild(el)
            });
            productWrapper.insertAdjacentHTML('afterbegin', filmsHTML)
            break;
    };

});

// workers section

const socialMediaWrapper = document.querySelector('.social-media_ul');

socialMediaWrapper.addEventListener('mouseover', (elem) => {
    const elemA = document.getElementById(elem.srcElement.id)

    elemA.style.color = "#ff2d2d"
    elemA.style.transition = ".3s"

    elemA.addEventListener('mouseout', () => {
        elemA.style.color = "black"
        elemA.style.transition = ".3s"
    })
});

const workers = [
    {
        name: "sokina",
        surname: "jue",
        img: "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg",
    },
    {
        name: "john",
        surname: "zoldick",
        img: "https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
    },
    {
        name: "peter",
        surname: "kim",
        img: "https://static.generated.photos/vue-static/face-generator/landing/wall/23.jpg",
    },
    {
        name: "kirill",
        surname: "goncharov",
        img: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
    }
];

const workersHTML = workers.reduce((acc, el, i) => acc + `<div id="w-${i}"><img src="${el.img}" alt=""><div class="clicked-name"><span>${el.name} ${el.surname}</span></div></div>`, ``);

const selectedImg = document.querySelector('.selected-img')
selectedImg.src = workers[0].img;

const workersName = document.querySelector('.workers_name');
workersName.innerHTML = `${workers[0].name} ${workers[0].surname}`;

const workersWrapper = document.querySelector('.workers-img_wrapper');
workersWrapper.insertAdjacentHTML('afterbegin', workersHTML);

workersWrapper.addEventListener('mouseover', (el) => {

    if (el.srcElement.localName == "img") {

        el.srcElement.parentElement.style.position = "relative";
        el.toElement.nextSibling.style.transition = ".3s"
        el.toElement.nextSibling.style.opacity = "1"

    };

    el.srcElement.parentElement.addEventListener('click', () => {
        workersName.innerHTML = el.toElement.nextSibling.children[0].innerHTML;
        selectedImg.src = el.srcElement.src;

    });

    el.srcElement.parentElement.addEventListener('mouseout', () => {
        el.toElement.nextSibling.style.transition = ".3s"
        el.toElement.nextSibling.style.opacity = "0"
    })

});

const subscribeInput = document.querySelector('.subscribe_input');

subscribeInput.addEventListener('click', () => {

    subscribeInput.style.border = "2px solid #ff2d2d";

    subscribeInput.addEventListener('mouseout', () => {

        subscribeInput.style.border = "none"

    });
});

const subscribeButton = document.querySelector('.subscribe_button');

subscribeButton.addEventListener('mouseover', () => {

    subscribeButton.style.border = "2px solid #ff2d2d";
    subscribeButton.style.backgroundColor = "#ffffff";
    subscribeButton.style.color = "#ff2d2d"
    subscribeButton.style.transition = ".3s";

    subscribeButton.addEventListener('mouseout', () => {
        subscribeButton.style.border = "none";
        subscribeButton.style.backgroundColor = "#ff2d2d";
        subscribeButton.style.color = "#fdfcf8"

        subscribeButton.style.transition = ".3s";
    });
});

const errLetter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "@", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

subscribeButton.addEventListener('click', () => {
    const valueArr = subscribeInput.value.split('');
    const errorInput = document.querySelector('.error-input');
    let checkBoolean = 0;
    const errorInputPhone = document.querySelector('.error-input_phone')

    if (subscribeInput.value == '') {
        if (window.innerWidth > 800) {
            errorInput.innerHTML = "This field must be filled";
            errorInput.classList.add('empty-field')
            errorInput.classList.remove('wrong-field')

         } else {
            errorInputPhone.innerHTML = "This field must be filled";
        }
        subscribeInput.style.border = "2px solid #ff2d2d";

        checkBoolean = false;
    }

    valueArr.forEach((el) => {
        if (errLetter.includes(el)) {
            subscribeInput.style.border = "none";
            errorInput.innerHTML = "";
            errorInputPhone.innerHTML = "";

            checkBoolean = true;
        } else {
            if(window.innerWidth < 800) {
                errorInputPhone.innerHTML = "You can use only English letters, dot and @";
            } else {
            errorInput.innerHTML = "You can use only English letters, dot and @";
            errorInput.classList.add('wrong-field')
            errorInput.classList.remove('empty-field')
            }
            subscribeInput.style.border = "2px solid #ff2d2d";

            subscribeInput.addEventListener('focus', () => {
                subscribeInput.style.border = "none";
                errorInput.innerHTML = "";
                errorInputPhone.innerHTML = "";
            })

            checkBoolean = false;
        }
    });

    if (checkBoolean === true) {
        alert(`your request has been sent successfully!

email: ${subscribeInput.value}`);

        subscribeInput.value = '';
    }
});

