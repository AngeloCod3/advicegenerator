
function getAdvice() {
    try {
        const data = fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const number = document.getElementById('number-advice');
        number.innerText = "A D V I C E #" + data.slip.id;

        const p = document.getElementById('main-advice');
        p.innerText =  data.slip.advice;
    });
    } catch {
        const p = document.getElementById('main-advice');
        p.innerText =  "An Error has happends try again to get your advice";
    }
}

getAdvice();

// const adviceButton = document.getElementById("icon-dice");
// adviceButton.addEventListener("click", console.log('hice click'));