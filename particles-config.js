
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 250, // High density for a richer, immersive effect
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#ffffff", "#d3d3d3", "#87CEFA", "#f0f8ff"] // White, light gray, sky blue, and a very light blue
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0
                }
            },
            opacity: {
                value: 0.6,
                random: true // Adds misty depth to particles
            },
            size: {
                value: 3,
                random: true // Varied sizes to give layered effect
            },
            line_linked: {
                enable: false // Disabling lines for a cleaner visual
            },
            move: {
                enable: true,
                speed: {
                    min: 0.5,
                    max: 3 // Particles fall at varied speeds, mimicking real weather
                },
                direction: "bottom-right", // Diagonal drift to mimic wind
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "attract" // Pulls particles together briefly, simulating a gust
                },
                onclick: {
                    enable: true,
                    mode: "remove" // Removes particles on click, like "popping" raindrops
                },
                resize: true
            },
            modes: {
                attract: {
                    distance: 120,
                    duration: 0.5 // Briefly pulls particles together on hover
                },
                remove: {
                    particles_nb: 4 // Removes a few particles on each click for interactivity
                }
            }
        },
        retina_detect: true
    });

