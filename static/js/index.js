$(()=>{
    if ($(".typed-word").length == 1) {

        var typed = new Typed(".typed-word", {
            strings: ['Full-stack Web Developer', 'Web Designer', 'UI/UX Designer'],
            typeSpeed: 50,
            loop: true,
            backDelay: 900,
            backSpeed: 30,
        });
    }
    
    $('.hire-me').submit(()=>{
        let name = $('#hirer-name').val()
        alert(`Hello ${name}, Your submission has been received succeessfully. Thank you for contacting Dev Okunzo`)
    })

    $('.feedback').submit(()=>{
        let name = $('#fb-name').val()
        alert(`Hello ${name}, Your feedback has been received succeessfully. Thank you for contacting Dev Okunzo`)
    })
})