$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Portfolio vinit Pol";
            $("#favicon").attr("href", "/assets/images/favicon.jpg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });


// fetch projects start
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}


function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // vanilla tilt.js
    // VanillaTilt.init(document.querySelectorAll(".tilt"), {
    //     max: 20,
    // });
    // // vanilla tilt.js  

    // /* ===== SCROLL REVEAL ANIMATION ===== */
    // const srtop = ScrollReveal({
    //     origin: 'bottom',
    //     distance: '80px',
    //     duration: 1000,
    //     reset: true
    // });

    // /* SCROLL PROJECTS */
    // srtop.reveal('.work .box', { interval: 200 });

    // isotope filter products
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Email_js
// (function () {
//     emailjs.init("aA5gRhnjkC_X33100");
// })();

// Contact form
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.elements['name'].value;
    const email = contactForm.elements['email'].value;
    const phone = contactForm.elements['phone'].value;
    const message = contactForm.elements['message'].value;

    // Send email to yourself
    emailjs.send("service_zlv2ko1", "template_6ue6t79", {
        from_name: name,
        from_email: email,
        phone: phone,
        message: message
    }).then(
        function (response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error);
        }
    );

    // Send confirmation email to user
    emailjs.send("service_zlv2ko1", "template_6ue6t79", {
        to_name: name,
        to_email: email,
        message: "Thank you for contacting us. We will get back to you soon!"
    }).then(
        function (response) {
            console.log("SUCCESS", response);
            contactForm.reset(); // Reset form
            alert('Thank you for your message. We will get back to you soon!');
        },
        function (error) {
            console.log("FAILED", error);
            alert('Oops! There was a problem sending your message. Please try again later.');
        }
    );
});

// Contact form
// const contactForm = document.querySelector('#contact-form');
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const name = contactForm.elements['name'].value;
//     const email = contactForm.elements['email'].value;
//     const phone = contactForm.elements['phone'].value;
//     const message = contactForm.elements['message'].value;

//     // Disable submit button and show loading state
//     const submitButton = contactForm.querySelector('button[type="submit"]');
//     const originalButtonText = submitButton.innerHTML;
//     submitButton.disabled = true;
//     submitButton.innerHTML = 'Sending...';

//     // Send email to yourself
//     emailjs.send("service_zlv2ko1", "template_6ue6t79", {
//         from_name: name,
//         from_email: email,
//         phone: phone,
//         message: message
//     }).then(
//         function (response) {
//             console.log("SUCCESS", response);
//             // Send confirmation email to user
//             return emailjs.send("service_zlv2ko1", "template_6ue6t79", {
//                 to_name: name,
//                 to_email: email,
//                 message: "Thank you for contacting us. We will get back to you soon!"
//             });
//         }
//     ).then(
//         function (response) {
//             console.log("SUCCESS", response);
//             contactForm.reset(); // Reset form
//             alert('Thank you for your message. We will get back to you soon!');
//         }
//     ).catch(
//         function (error) {
//             console.log("FAILED", error);
//             alert('Oops! There was a problem sending your message. Please try again later.');
//         }
//     ).finally(
//         function () {
//             // Re-enable submit button and restore original text
//             submitButton.disabled = false;
//             submitButton.innerHTML = originalButtonText;
//         }
//     );
// });
