// Object for the scrolling text
const scrollingText = {

    /* Keycaps modelization, if pressed isUpperCase = true */
    isUpperCase: false,

    /**
     * App initialization
     */
    init: function() {
        let keys = document.getElementsByClassName('key');
        let majKey = document.querySelector('.maj');
        majKey.addEventListener('click', scrollingText.handleClickOnMaj);
        for (let key of keys) {
            key.addEventListener('click', scrollingText.handleClickOnLetter);
        }

    },

    /**
     * Retrieve the event target and insert it into the scrolling text (check for uppercase or lowercase)
     * @param {*} event 
     */
    handleClickOnLetter: function(event) {
        let message = document.querySelector('.text');
        let letter = event.currentTarget;

        /* Is the keycaps pressed or not */
        if (scrollingText.isUpperCase == true) {
            letter.textContent = letter.textContent.toUpperCase();
        }

        message.textContent = message.textContent + letter.textContent;
    },

    /**
     * Handler for keycaps that changes the value of isUpperCase if need be
     */
    handleClickOnMaj: function() {
        let majKey = document.querySelector('.maj');
        majKey.classList.toggle('pressed');

        if (majKey.classList.contains('pressed')) {
            scrollingText.isUpperCase = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', scrollingText.init);