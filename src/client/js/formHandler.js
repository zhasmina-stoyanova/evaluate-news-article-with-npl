function handleSubmit(event) {
    event.preventDefaults();

    let formText = document.getElementById("name").value;
    checkForName(formname);

    console.log("Form Submitted")
    fetch("http://localhost:8080/test")
        .then(res => res.json())
        .then(function (res) {
            document.getElementById("results").innerHTML = res.message;
        })

}

export { handleSubmit }