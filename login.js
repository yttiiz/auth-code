// =====================| Elements |=====================//

const inputs = [].slice.call(document.querySelector('.code-auth-content form').querySelectorAll('input'))
const errorMsgContainer = document.querySelector('.alert-error span')
const errorMsgTitle = 'Code incorrect', errorMsgContent = 'merci de vérifier votre saisie'

// =====================| Events |=====================//

document.addEventListener('DOMContentLoaded', handleDocument)

// =====================| Functions |=====================//

// Utils
const createElt = (type) => document.createElement(type)
const handleErrorMessageContainer = (el, height = 0) => el.style.top = height > 0 ? `${height}px` : height
const addFocusOnElement = (el) => el.focus()

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
    let elementHeight

    strong.textContent = errorMsgTitle
    span.textContent = errorMsgContent
    
    el.appendChild(strong)
    el.appendChild(span)
    
    elementHeight = el.clientHeight
    handleErrorMessageContainer(el, elementHeight)

    el.parentNode.classList.remove('hide')
}

function handleDocument() {
    inputs.forEach((input, index, inputList) => {
        const lastIndex = inputList.length - 1

        // Put the focus on the first input
        if (index === 0) addFocusOnElement(input)
        
        input.addEventListener('input', () => {

            if (index !== lastIndex) addFocusOnElement(inputList[index + 1])
            else handleErrorMessageContainer(errorMsgContainer)
        })
    })

    insertNoneBreakingSpaceInPhoneNumber()
    creatingErrorMessage(errorMsgContainer)
}