"use strict";

//task#1///Функция которая принимает строку и возвращает количество слов в ней.///
function calculateWord(string) {
    const arrayFrom = string.split(' ');
    const newArray = arrayFrom.filter(function (arrayVar) {
        return arrayVar !== ''
    });
    return newArray.length;
};


//task#2///Функция которая принимает строку и возвращает количество слов в ней.///
function findLongestWord(str) {
    let splitWord = str.split(' ');
    let biggestWord = splitWord[0];
    for (let i = 1; i < splitWord.length; i++) {
        if (splitWord[i].length > biggestWord.length) {
            biggestWord = splitWord[i]
        };
    };
    return biggestWord;
};


