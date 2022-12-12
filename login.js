// =====================| Elements |=====================//
const inputs = [].slice.call(document.querySelector('.code-auth-content form').querySelectorAll('input'))
const phoneNumber = document.querySelector('strong'), errorMsgContainer = document.querySelector('.alert-error span')
const errorMsgTitle = 'Code incorrect', errorMsgContent = 'merci de vérifier votre saisie'

// =====================| Events |=====================//
//Adding none breakable spaces between each numbers.
phoneNumber.innerHTML = phoneNumber.textContent.split(' ').join('&nbsp;')

handleErrorMessage(errorMsgContainer)
document.addEventListener('DOMContentLoaded', handleDocument)

// =====================| Functions |=====================//
function createElt(type) {
    return document.createElement(type)
}

function handleErrorMessage(el) {
    const strong = createElt('strong'), span = createElt('span')
    let elementHeight
    strong.textContent = errorMsgTitle
    span.textContent = errorMsgContent
    
    el.appendChild(strong)
    el.appendChild(span)
    
    elementHeight = el.clientHeight
    el.style.top = `${elementHeight}px`
}

function handleDocument() {
    inputs.forEach((input, i) => {
        if (i === 0) {
            console.log(input)
        }
    })
}