const fs = require('fs');
const colors = require('colors');

handleData = (type, title) => {
    // 1 to add, 2to remove, 3 to list
    // const data = fs.readFileSync('datadb.json', 'utf8') też dobrze;
    const data = fs.readFileSync('datadb.json', 'utf8');
    const tasks = JSON.parse(data)
    // console.log(tasks)

    if (type === 1 || type === 2) {
        const isExist = tasks.find(task =>
            task.title === title) ? true : false;
        if (type === 1 && isExist) {
            return console.log('takie zadanie istnieje')
        }
        if (type === 2 && !isExist) {
            return console.log('nie ma czegoś takiego')
        }
    }
    let dataJson = '';
    switch (type) {
        case 1:
            console.log('dodaje zadanie')
            const id = tasks.length + 1;
            tasks.push({
                id: id,
                title: title
            })
            console.log(tasks)
            dataJson = JSON.stringify(tasks)
            fs.writeFileSync('datadb.json', dataJson)
            console.log(`dodaje zadanie: ${title}`.white)
            break;
        case 2:
            const index = tasks.findIndex(task => task.title === title)
            tasks.splice(index, 1)
            console.log(tasks)
            dataJson = JSON.stringify(tasks)
            fs.writeFile('datadb.json', dataJson, 'utf8', (err) => {
                if (err) {
                    'BŁĄD'
                }
            })
            console.log(`${title} zostało usunięte`)
            break;
        case 3:
            console.log(`lista zadań zawiera ${tasks.length} pozycji`);
            if (tasks.length) {
                tasks.forEach((task, index) => {
                    if (index % 2) {
                        console.log(task.title.red)
                    } else {
                        console.log(task.title.blue);
                    }

                })
            }
            break;

    }
}

module.exports = handleData;