const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let company = document.getElementById('company');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        company: company.value,
        email: email.value,
        message: message.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            openPopup();
            name.value = '';
            company.value = '';
            email.value = '';
            message.value = '';
        }else{
            notSend()
        }
    }

    xhr.send(JSON.stringify(formData))
    
})