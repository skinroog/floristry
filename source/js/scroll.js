let anchors = [document.querySelector('.intro__button'), document.querySelector('.intro__arrow-down')];

if (anchors[0] != null && anchors[1] != null) {

    anchors.forEach(function(anchor) {

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

