const heading = document.querySelector("#home");

const keyframes = {
    opacity: [0, 1],
};

const options = {
    duration: 2000,
    easing: "ease",
};

heading.animate(keyframes, options);
