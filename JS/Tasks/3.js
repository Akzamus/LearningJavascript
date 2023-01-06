"use strict";

let numberOfFilms;
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

writeYourGenres();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.private);

function  start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
    }
    while (numberOfFilms === "" || numberOfFilms == null || isNaN(numberOfFilms));
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let film = prompt("Один из последних просмотренных фильмов?", ""),
            evaluation = prompt("На сколько оцените его?");

        if(
            film == null || evaluation == null ||
            film === ""  || evaluation === ""  ||
            film.length > 50
        ) { i--;}
        else { personalMovieDB.movies[film] = +evaluation;}
    }
}

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert("Просмотренно довольно мало фильмов");
    } else if (10 <= numberOfFilms && numberOfFilms < 30) {
        alert("Вы класический зритель");
    } else if (numberOfFilms >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка!");
    }
}

function showMyDB (isPrivate) {
    if(!isPrivate) { console.log(personalMovieDB); }
}

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i + 1}:`, "");

        if(genre === null || genre === "") { i--; }
        else { personalMovieDB.genres[i] = genre; }
    }
}