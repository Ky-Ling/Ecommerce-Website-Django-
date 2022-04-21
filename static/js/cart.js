var updateButtons = document.getElementsByClassName("update-cart");


for(var i = 0; i < updateButtons.length; i++) {
    updateButtons[i].addEventListener("click", function() {
        var productId = this.dataset.product;
        var action = this.dataset.action;

        console.log(productId, action);

        console.log(user);

        if(user == "AnonymousUser") {
            console.log("Not logged it!");
        } else {
            updateUserOrder(productId, action);
        }
    })
}


function updateUserOrder(productId, action) {
    console.log("User is logged in, sending data.....");

    var url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({
            'productId': productId,
            'action': action
        })
    })

    // We will get the response after we send this data to the view(updateItem)
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log(data);
        location.reload()
    })
}