// =====================| Elements |=====================//

const errorMsgContainer = document.querySelector('.alert-error span')
const errorMsgTitle = 'Code incorrect', errorMsgContent = 'merci de vérifier votre saisie'

// =====================| Events |=====================//

document.addEventListener('DOMContentLoaded', handleDocument)

// =====================| Functions |=====================//

// Utils
const createElt = (type) => document.createElement(type)
const handleErrorMessageContainer = (el, height = 0) => el.style.top = height > 0 ? `${height}px` : height
const focusOnElement = (el) => el.focus()
const appendChildrenInElement = (el, ...args) => {
    for (const arg of args) {
        el.appendChild(arg)
    }
}

/**
 * Inserts an unbreaking space between each group of numbers in the `strong` tag.
 */
function insertNoneBreakingSpaceInPhoneNumber() {
    const phoneNumber = document.querySelector('.code-auth-content strong')

    phoneNumber.innerHTML = phoneNumber.textContent.split(' ').join('&nbsp;')
}

/**
 * Fills the `span` that contains the error message.
 * @param {HTMLSpanElement} el Error message container
 */
function creatingErrorMessage(el) {
    const strong = createElt('strong'), span = createElt('span')

    strong.textContent = errorMsgTitle
    span.textContent = errorMsgContent
    appendChildrenInElement(el, strong, span)

    handleErrorMessageContainer(el, el.clientHeight)
    el.parentNode.classList.remove('hide')
}

function handleDocument() {
    const inputs = [].slice.call(document.querySelector('.code-auth-content form').querySelectorAll('input'))
    let result = ''

    inputs.forEach((input, index, inputList) => {
        const lastIndex = inputList.length - 1

        // Focus on the first input
        if (index === 0) focusOnElement(input)
        
        input.addEventListener('input', (e) => {

            // Avoids 'e', '-', '+', '.' and other characters that are not numbers
            if (isNaN(+(e.data))) {
                e.target.value = ''
                return
            }

            if (index !== lastIndex) {
                result += e.data
                focusOnElement(inputList.at(index + 1))
                
            } else {
                result += e.data
                
                if (result.length === inputList.length) handleErrorMessageContainer(errorMsgContainer)
            }
        })
    })

    insertNoneBreakingSpaceInPhoneNumber()
    creatingErrorMessage(errorMsgContainer)
}