function sendMail() {

    emailjs.init({
        publicKey: "tHaRpa4FEQdfTHpsd",
    });

    var params = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }


    const serviceID = "service_o6v3f69";
    const templateID = "template_5oiz818";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);

    }).catch((err) => console.log(err));

}