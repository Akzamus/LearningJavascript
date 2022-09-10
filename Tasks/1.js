"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const answerOne = prompt("Один из последних просмотренных фильмов?", "");
const answerTwo = +prompt("На сколько оцените его?", "0");
personalMovieDB.movies[answerOne] = answerTwo;

console.log(personalMovieDB);
