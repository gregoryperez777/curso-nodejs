const fs = require('fs');

let listingToDo = [];

const loadDB = () => {
    /* 
        si data.json es un archivo totalmente vacio 
        no es un json valido por ende si falla lo
        inicializamos con [] para que sea valido 
    */
    try {
        listingToDo = require('../db/data.json');
    } catch (error) {
        listingToDo = [];
    }
}

const saveDB = () => {
    const data = JSON.stringify(listingToDo);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error ('No se pudo grabar', err);
        console.log(`Tarea creada con exito`);
    });
};

const create = description => {
    loadDB();

    const task = {
        description,
        completed: false,
    };

    listingToDo.push(task);
    saveDB();
    return task;
};

const getListed = () => {
    loadDB();
    return listingToDo;
};

const update = (description, completed = true) => {
    loadDB();
    const index = listingToDo.findIndex(task => task.description === description);

    if (index < 0) {
        return false;
    } else {
        listingToDo[index].completed = completed;
        saveDB();
        return true;
    }
};

const removeItem = (description) => {
    loadDB();
    let newListingToDo = listingToDo.filter(obj => obj.description !== description)
    
    if (listingToDo.length === newListingToDo.length) {
        return false;
    } 
    listingToDo = newListingToDo;
    saveDB();
    return true;
}

module.exports = {
    create,
    getListed,
    update,
    removeItem,
}