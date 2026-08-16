/* ==========================================
   OPENING SCREEN
========================================== */

const openButton =
    document.getElementById("openButton");

const openingScreen =
    document.getElementById("openingScreen");


openButton.addEventListener("click", () => {

    openingScreen.classList.add("hidden");

    createConfetti();

});



/* ==========================================
   SMOOTH SCROLL
========================================== */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth"
    });

}



/* ==========================================
   BIRTHDAY COUNTDOWN + UNLOCK
========================================== */

/*
    CHANGE THIS DATE.

    Format:

    YYYY-MM-DDTHH:MM:SS

    Example:

    2026-09-06T00:00:00
*/

const birthdayDate =
    new Date("2026-09-06T00:00:00");


let isBirthday = false;

function updateCountdown() {

    const now =
        new Date();

    const difference =
        birthdayDate - now;


    if (difference <= 0) {

        document.getElementById("days")
            .textContent = "00";

        document.getElementById("hours")
            .textContent = "00";

        document.getElementById("minutes")
            .textContent = "00";

        document.getElementById("seconds")
            .textContent = "00";


        document.getElementById("birthdayMessage")
            .textContent =
            "🎉 IT'S YOUR BIRTHDAY! 🎉";

        // Unlock everything if not already unlocked
        if (!isBirthday) {
            unlockAllContent();
            isBirthday = true;
            createConfetti();
        }

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


function unlockAllContent() {
    // Unlock message
    const messageLock = document.getElementById("messageLock");
    if (messageLock) messageLock.style.display = "none";
    
    // Unlock memories
    const memoriesLock = document.getElementById("memoriesLock");
    if (memoriesLock) memoriesLock.style.display = "none";
    
    // Unlock timeline
    const timelineLock = document.getElementById("timelineLock");
    if (timelineLock) timelineLock.style.display = "none";
    
    // Unlock question
    const questionLock = document.getElementById("questionLock");
    if (questionLock) questionLock.style.display = "none";
    
    // Unlock gift
    const giftLock = document.getElementById("giftLock");
    if (giftLock) giftLock.style.display = "none";
    
    // Unlock secret
    const secretLock = document.getElementById("secretLock");
    if (secretLock) secretLock.style.display = "none";
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);



/* ==========================================
   YES / NO QUESTION
========================================== */

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const questionResponse =
    document.getElementById(
        "questionResponse"
    );


yesButton.addEventListener("click", () => {

    questionResponse.textContent =
        "yan, dapat masaya ka";

    createConfetti();

});


noButton.addEventListener("click", () => {

    questionResponse.textContent =
        "nuh uh, di pwede 😂";

    noButton.style.position =
        "relative";

    noButton.style.left =
        Math.random() * 100 - 50 + "px";

});



/* ==========================================
   GIFT
========================================== */

const giftButton =
    document.getElementById("giftButton");

const giftContent =
    document.getElementById("giftContent");


giftButton.addEventListener("click", () => {

    giftContent.classList.add("show");

    giftButton.textContent = "🎉";

    createConfetti();

});



/* ==========================================
   SECRET MESSAGE
========================================== */

const secretButton =
    document.getElementById(
        "secretButton"
    );

const secretMessage =
    document.getElementById(
        "secretMessage"
    );


secretButton.addEventListener("click", () => {

    secretMessage.classList.add("show");

    secretButton.textContent =
        "Okay okay, you found it 😂";

    createConfetti();

});



/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    const symbols = [
        "🎉",
        "✨",
        "💖",
        "🎊",
        "⭐",
        "💕"
    ];


    for (let i = 0; i < 70; i++) {

        const particle =
            document.createElement("div");


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.position =
            "fixed";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            "-30px";

        particle.style.fontSize =
            Math.random() * 20 + 12 + "px";

        particle.style.zIndex =
            "99999";

        particle.style.pointerEvents =
            "none";


        document.body.appendChild(
            particle
        );


        const animation =
            particle.animate(

                [

                    {

                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1

                    },

                    {

                        transform:
                            `translateY(110vh)
                             rotate(${Math.random() * 720}deg)`,

                        opacity: 0

                    }

                ],

                {

                    duration:
                        Math.random() *
                        2500 +
                        2000,

                    easing:
                        "cubic-bezier(.2,.8,.3,1)"

                }

            );


        animation.onfinish = () => {

            particle.remove();

        };

    }

}



/* ==========================================
   FINAL CELEBRATION
========================================== */

const celebrateButton =
    document.getElementById(
        "celebrateButton"
    );


celebrateButton.addEventListener(
    "click",
    () => {

        for (let i = 0; i < 3; i++) {

            setTimeout(
                createConfetti,
                i * 500
            );

        }

    }
);



/* ==========================================
   MUSIC
========================================== */

const musicButton =
    document.getElementById(
        "musicButton"
    );

const birthdayMusic =
    document.getElementById(
        "birthdayMusic"
    );


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    () => {

        if (!musicPlaying) {

            birthdayMusic.play();

            musicPlaying = true;

            musicButton.textContent =
                "🔊";

        } else {

            birthdayMusic.pause();

            musicPlaying = false;

            musicButton.textContent =
                "🎵";

        }

    }
);



/* ==========================================
   POLAROID CLICK
========================================== */

const polaroids =
    document.querySelectorAll(
        ".polaroid"
    );


polaroids.forEach(
    (polaroid) => {

        polaroid.addEventListener(
            "click",
            () => {

                polaroid.classList.toggle(
                    "selected"
                );

            }
        );

    }
);