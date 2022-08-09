// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats
}

function prependCat(name) {
    const newCats = [name,...cats];
    return newCats
}

function removeLastCat(name) {
    const newCats = cats.slice(0,-1);
    return newCats
}

function removeFirstCat(name) {
    const newCats = cats.slice(1);
    return newCats
}