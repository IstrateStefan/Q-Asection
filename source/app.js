// using selectors inside the element
// traversing the dom

// using selectors 

const questions = document.querySelectorAll('.question');

questions.forEach(element => {
    // console.log(element);
    const btn = element.querySelector('.question-btn');
    btn.addEventListener('click', function () {

        questions.forEach(item => {
            if (item !== element) {
                item.classList.remove('show-text');
            }
        })
        element.classList.toggle('show-text');
    })
})



// traversing the dom
/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach(element => {
    element.addEventListener('click', function (event) {
        const question = event.currentTarget.parentNode.parentNode;
        question.classList.toggle('show-text');
    })
});
*/
