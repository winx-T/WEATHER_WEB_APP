particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ["#ffffff", "#ff6347", "#87ceeb"] },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: 5, random: true },
        line_linked: { enable: true, color: "#ffffff", opacity: 0.3 },
        move: { enable: true, speed: 2, random: false, straight: false, bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
