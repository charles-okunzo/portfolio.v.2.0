if ($(".typed-word").length == 1) {

    var typed = new Typed(".typed-word", {
        strings: ['Full-stack Web Developer', 'Web designer', 'UI/UX Designer'],
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
}