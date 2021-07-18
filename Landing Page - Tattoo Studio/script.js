const form = document.querySelector('.email-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('e-mail').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)


    document.getElementById('enviado').innerText = "Cadastro realizado com sucesso!";
})
