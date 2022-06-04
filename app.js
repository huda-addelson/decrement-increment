window.onload = () => {

    function decrementIncrement() {
        let num = 1;
        let result = null;

        const number = document.querySelector(".value");
        const button = document.querySelectorAll(".button");

        button.forEach(btn => {
            btn.addEventListener('click', function (event) {
                const value = this.dataset.type;
                if (value === 'increment') result = num++;
                if (value === 'decrement') {
                    if (num > 1) {
                        result = num--;
                    }
                }

                result = (num < 10) ? `0${num}` : num;
                number.textContent = result;
            });
        });
    }

    decrementIncrement();
}