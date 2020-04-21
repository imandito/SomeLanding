const mobile = document.querySelector(".mobile")
const headerLinks = mobile.querySelectorAll(".mobile_item_plus")
const modal = document.querySelector("#myModal")
const span = document.querySelector(".close")

// When the user clicks on the button, open the modal
for (let index = 0; index < headerLinks.length; index++) {
    headerLinks[index].addEventListener('click', (e) => {
        modal.classList.add('modal-open')
    })
}


// When the user clicks on <span>, close the modal
span.onclick = function() {
    modal.classList.remove('modal-open')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('modal-open')
    }
}