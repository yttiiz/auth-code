const form = document.querySelector('form')
const phoneNumber = document.querySelector('strong')

//Adding none breakable spaces between each numbers.
phoneNumber.innerHTML = phoneNumber.textContent.split(' ').join('&nbsp;')