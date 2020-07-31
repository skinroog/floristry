let anchors = [document.querySelector('.intro__button'), document.querySelector('.intro__arrow-down')];

if (!anchors.includes(null)) {

    anchors.forEach(anchor => {

        anchor.addEventListener('click', function (event) {
            event.preventDefault();

            let goal = anchor.getAttribute('href');

            document.querySelector(goal).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

    });

}

