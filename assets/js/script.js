"use strict";

//task#1///Функция которая принимает строку и возвращает количество слов в ней.///
function calculateWord(string) {
    const arrayFromWord = string.split(' ');
    const newArray = arrayFromWord.filter(function (arrayVar) {
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


//console.log(calculateWord('Anton testtttt test    tetstst         try excccept   sfsdfsdfsdf'))
//console.log(findLongestWord('turns out s bad Antonnnnn Tetst test s    sdadas  tt t t'))