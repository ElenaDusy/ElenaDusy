
let name = document.querySelector('#name');

let telefon = document.querySelector('#telefon');



let message= document.querySelector('#message');

let submit = document.querySelector('#submit');



let users = {};

function User(name, telefon, message) {
    this.name = name;
    this.telefon = this.telefon;
    this.message = message;

}
function createId(users){
    return Object.keys(users).length;
}
submit.addEventListener( 'click', ()=>{
    const nameUser = name.value;
    const telefonUser = telefon.value;
    const messageUser = message.value;

    const user = new User(nameUser, telefonUser, messageUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    alert(`${nameUser}, спасибо за Ваше сообщение, мы его прочитаем и oбязательно свяжемся с Вами`)

})