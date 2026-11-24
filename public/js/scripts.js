const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.email = $('#email').val();
    formData.coffee = $('#coffee').val();
    formData.quantity = $('#quantity').val();

    console.log("Form Data Submitted: ", formData);

    // Send the order to the server using the POST endpoint
    $.ajax({
        url: '/api/orders',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: (result) => {
            console.log("Server response: ", result);
            M.toast({ html: 'Thanks ' + formData.first_name + ', your order has been placed!' });
            $('#modal1').modal('close');
        }
    });
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '</span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)

        // also add each coffee to the order form dropdown
        $("#coffee").append('<option value="' + item.title + '">' + item.title + '</option>')
    });
    $('select').formSelect();
}

// Get the coffee cards from the server using the GET endpoint
const getCoffees = () => {
    $.get('/api/coffees', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    getCoffees();
    $('.modal').modal();
});
