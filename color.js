(() => {
const $counter = document.getElementById("js-counter");

    const changeColor = () => {
        const currentCount = parseInt($counter.textContent);

        if(currentCount === 0) {
            $counter.style.color = 'black';
        } else if(currentCount % 2 === 0 && currentCount % 5 === 0) {
            $counter.style.color = 'green'; //10の倍数の時色を緑にする
        } else if(currentCount % 2 === 0 ) {
            $counter.style.color = 'red'; //2の倍数の時色を赤にする
        } else if(currentCount % 5 === 0) {
            $counter.style.color = 'blue'; //5の倍数の時色を青にする
        } else {
            $counter.style.color = 'black';
        }
    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", () => changeColor());
    }
    for (let index = 0; index < document.getElementsByClassName("js-10button").length; index++) {
        document.getElementsByClassName("js-10button")[index].addEventListener("click", () => changeColor());
    }

})();
