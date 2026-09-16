
window.onload = function () {
    // register a function to close the modal dialogue when the close button is pressed
    document.getElementById('close-form').onclick = function () {
        document.getElementById('modal').style.display = "none" 
    }
    // register a function to open the modal dialogue when the get to know you button is pressed
    document.getElementById('get-to-know-you').onclick = function () {
        document.getElementById('modal').style.display = "block"
    }
}
