"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function () {
        let numberOfFilms;
        do {
            numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
        }
        while (numberOfFilms === "" || numberOfFilms == null || isNaN(numberOfFilms));
        personalMovieDB.count = numberOfFilms;
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let film = prompt("Один из последних просмотренных фильмов?", ""),
                evaluation = prompt("На сколько оцените его?");

            if (
                film == null || evaluation == null ||
                film === "" || evaluation === "" ||
                film.length > 50
            ) {
                i--;
            } else {
                personalMovieDB.movies[film] = +evaluation;
            }
        }
    },

    detectPersonalLevel: function () {
        let numberOfFilms = personalMovieDB.count;
        if (numberOfFilms < 10) {
            alert("Просмотренно довольно мало фильмов");
        } else if (10 <= numberOfFilms && numberOfFilms < 30) {
            alert("Вы класический зритель");
        } else if (numberOfFilms >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка!");
        }
    },

    showMyDB: function (isPrivate) {
        if (!isPrivate) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.private = !personalMovieDB.private;
    },

    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}:`, "").trim();

            if (genre === null || genre === "") {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }

        personalMovieDB.genres.forEach((genre, i) => console.log(`Любимый жанр ${i + 1} - это ${genre}`));
    }
};