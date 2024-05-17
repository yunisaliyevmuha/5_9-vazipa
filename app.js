const formEl = document.querySelector("form")
const template = document.querySelector("template")
const ul = document.querySelector("ul")
const data = []
const updateUI = (users) => {
    ul.innerHTML = ''
    data.forEach(user => {
        const clone = template.content.cloneNode(true)
        const image = clone.querySelector ("img");
        const name = clone.querySelector ("h3");
        const email = clone. querySelector (".email");
        const tel = clone.querySelector(".tel");
        image.src = user.image
        name.textContent = `Name: ${user.name}`
        email.textContent = `Email: ${user.mail}`
        tel.textContent = `Tel: ${user.number}`
        email.setAttribute("href", `mailto:${user.mail}`)
        tel.setAttribute("href", `tel:${user.number}`)
        ul.appendChild(clone)
    });
}
formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const userInfo = {
        id:Math.random() * new Date().getMilliseconds(),
        name:formEl.name.value,
        image:formEl.image.value,
        number:formEl.phone.value,
        mail:formEl.email.value,
    }
    data.push(userInfo);
    updateUI(data)
    formEl.reset()
})