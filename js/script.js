const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let nameInput = document.getElementById('nameInput').value
    let emailInput = document.getElementById('emailInput').value

    let data = {
        nameInput,
        emailInput,
    }
    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)

    let card = document.getElementById('card')
    let loading = `<p>Carregando...</p>`
    let registered = `<p>Obrigado, ${nameInput}!</p>`
    card.innerHTML = loading
    setTimeout(()=>{
        card.innerHTML = registered
    },1000)
})