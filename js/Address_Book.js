$(document).ready(function() {

    $("form#new-contact").submit(function(event) {
        event.preventDefault();
        
        // Assign values of input fields to variables
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var inputtedAddress = $("input#new-address").val();

        // Create variable newContact from input values
        var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress };

        // Add newContact to Contacts list
        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

        // Erase input field after contact is submitted
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input#new-address").val("");

        // Show details of selected contact
        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $(".address").text(newContact.address);
        });
    });
});
