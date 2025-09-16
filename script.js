const targets = document.querySelectorAll(
    'section h1, section p, .intro, header .flex h1, .grid'
);

const keyframes = {
    opacity: [0, 1],
};

const options = {
    duration: 2000,
    easing: "ease",
    fill: "forwards"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.animate(keyframes, options);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

targets.forEach(target => {
    target.style.opacity = 0;
    observer.observe(target);
});
