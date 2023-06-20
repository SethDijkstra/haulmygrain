
function sendEmail(){
        Email.send({
        SecureToken : "fe9937ed-febe-4385-97ce-61d03f520141",
        To : 'seth.d87@icloud.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Inquiry",
        Body : "Name: " + document.getElementById("name").value + "<br>Phone Number: " + document.getElementById("Phone").value + "<br>Message: " + document.getElementById("message").value
    }).then(
    message => alert("Message sent successfully")
    );
}
