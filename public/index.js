import Human from 'js/models/human'

let bob = new Human("Bob", "Morane");

document.querySelector("h1").innerHTML = `Hello ${bob.toString()}`;