const btnContainer = document.querySelector('.btn-container');
const btn = document.getElementById('btn');
btn.disabled = true;

function shiftButton() {
    const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
    const currentPosition = positions.find(dir => btn.classList.contains(dir));
    const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length];
    btn.classList.remove(currentPosition);
    btn.classList.add(nextPosition);
}

btnContainer.addEventListener('mouseover', shiftButton);
btn.addEventListener('mouseover', shiftButton);
form.addEventListener('input',showMsg)
btn.addEventListener('touchstart', shiftButton);


function openGreetingPage() {
    // Get the greeting page element
    var greetingPage = document.getElementById("greetingPage");

    // Show the greeting page
    greetingPage.style.display = "block";
}
