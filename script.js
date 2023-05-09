let name = '';
let email = '';
let subject = '';
let message = '';

function fetchMessage() {
    getMessage();
    clearFields();
};

function getMessage() {
    this.name = document.getElementById('name').value;
    console.log(this.name);
    this.email = document.getElementById('email').value;
    console.log(this.email);
    this.subject = document.getElementById('subject').value;
    console.log(this.subject);
    this.message = document.getElementById('message').value;
    console.log(this.message);
};



function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
};


function sendMail() {
    let btn = document.getElementById('send');
    btn.addEventListener('click', function(e){
        e.preventDefault();
        console.log('hi');
    }) 
};