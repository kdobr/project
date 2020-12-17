'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    //preparing variables
    let adv = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        promoText = promoBg.querySelector('.promo__genre'),
        filmListWrapper = document.querySelector('.promo__interactive-list'),
        filmList = movieDB.movies,
        addNewFilmButton = document.querySelector('.add button'),
        addNewFilmInput = document.querySelector('.adding__input');

    //making start operations
    adv.forEach(el => el.remove());
    promoText.textContent = "Драма";
    promoBg.style.backgroundImage = "url('../img/bg.jpg')";
    sortMovies(filmList);

    // 1st film list
    showAllFilms(filmList);

    // add listener to button
    addNewFilmButton.addEventListener('click', (e) => {
        e.preventDefault();
        let input = addNewFilmInput.value;
        if (input == null || input.length == 0) {
            return;
        }
        if (input.length > 21) {
            input = input.substring(0, 21) + "...";
        }
        filmList.push(input);
        sortMovies(filmList);
        showAllFilms(filmList);
        if (document.querySelectorAll('.add input')[1].checked) {
            console.log("мой любимый фильм");
            document.querySelectorAll('.add input')[1].checked = false;
            addNewFilmInput.value='';
        }
    });

    function showAllFilms(filmList) {
        filmListWrapper.innerHTML = '';
        for (let i = 0; i < filmList.length; i++) {
            let li = document.createElement("li");
            li.textContent = `${i + 1}. ${filmList[i]}`;
            li.classList.add('promo__interactive-item');
            let del = document.createElement('div');
            del.classList.add('delete');
            del.addEventListener("click", () => {
                filmList.splice(i, 1);
                showAllFilms(filmList);
            });
            li.appendChild(del);
            filmListWrapper.appendChild(li);

        }
    }
});

function sortMovies(filmList) {
    filmList.sort();
}