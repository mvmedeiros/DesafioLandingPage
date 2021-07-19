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
    let loading = `<p class="info">Carregando...</p>`
    let registered = `<p class="info">Obrigado, ${nameInput}!</p>`
    card.innerHTML = loading
    setTimeout(()=>{
        card.innerHTML = registered
    },1000)
})