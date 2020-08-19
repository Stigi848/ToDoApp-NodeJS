const fs = require('fs');
const colors = require('colors');
const handleData= require('./handleData')
const handleCommand = ({
    add,
    remove,
    list
}) => {
    // console.log(add, remove, list)
    if (add) {
        if (typeof add !== 'string') {
            return console.log('wpisz text'.red)
        } else if (add.length < 7) {
            console.log('zadanie musi mieć więcej niż 6 znaków'.blue)
        }
        handleData(1, add)
    } else if (remove) {
        if (typeof remove !== 'string') {
            return console.log('wpisz text'.red)
        } else if (remove.length < 7) {
            console.log('wpisz tekst do usunięcia i musi mieć więcej niż 6 znaków'.blue)
        }

        handleData(2, remove)
    } else if (list || list === '') {
        handleData(3, null)
    } else {
        console.log('wpisz coś')
    }

}

module.exports = handleCommand;