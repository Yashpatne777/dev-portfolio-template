const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const counters = document.querySelectorAll('.counter');

let started = false;

window.addEventListener('scroll', () => {

    const stats = document.querySelector('.stats');

    if (!stats || started) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const step = target / 80;

            const update = () => {

                if (count < target) {

                    count += step;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;
                }
            };

            update();

        });

    }

});

