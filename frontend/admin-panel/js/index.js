let logOut = document.getElementById("logout")

logOut.addEventListener("click", logout)
function logout() {
    console.log("salom");e



    fetch('http://localhost:5050/logout',
        {
            method: "GET"
        }
    )

        .then(response => response.json())


        .then(response => {
            if (response.success) {
                alert("Bye!")
                return window.location.href = "logIn.html"
            }
        })
        .catch(err => {
            console.log(err);

        })
}


let products = document.querySelector("#products")
products.addEventListener("click", () => {
    window.location.href = "product.html"

})