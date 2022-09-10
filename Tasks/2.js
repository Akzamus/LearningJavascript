"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let film = prompt("Один из последних просмотренных фильмов?", ""),
        evaluation = prompt("На сколько оцените его?");

    if(
        film == null || evaluation == null ||
        film === ""   || evaluation === ""   ||
        film.length > 50
    ) { i--;}
    else { personalMovieDB.movies[film] = +evaluation;}
}

if (numberOfFilms < 10) {
    alert("Просмотренно довольно мало фильмов");
} else if (10 <= numberOfFilms && numberOfFilms < 30) {
    alert("Вы класический зритель");
} else if (numberOfFilms >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка!");
}
console.log(personalMovieDB);