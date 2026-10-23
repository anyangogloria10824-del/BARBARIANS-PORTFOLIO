function viewprojects(projectName)
{
    alert("Opening projects:\n\n" + projectName);
}
function showprojects()
{
    alert("more Barbarians projects coming soon!");
}
const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (name === "" || email === "" || message === "") {

        alert("Please fill in all the fields.");

        return;
    }


    alert(
        "Thank you, " + name + "! 🎉\n\n" +
        "Your message has been received."
    );


    contactForm.reset();

});


/* =========================================
   NAVIGATION ACTIVE LINK
========================================= */

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

