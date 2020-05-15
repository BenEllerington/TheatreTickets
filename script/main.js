let label;
let label1;
const btnbookTicket = document.getElementById("bookTicket");
var numTickets = document.getElementById("numTickets");
const txtticketOutput = document.getElementById("ticketOutput");
const txtDeliveryOutput = document.getElementById("deliveryOutput");
const txtticketsOrderedOutput = document.getElementById("ticketsOrderedOutput");



// This lets you select a ticket via radio button and input a number to get number of tickets and ticket selected


const allTickets = document.querySelectorAll("input[name='ticket']");

for (let i = 0; i < allTickets.length; i++) {
  allTickets[i].addEventListener("change", checkTicket);
}


function checkTicket() {
  label = this.getAttribute("label");
  txtticketOutput.innerText = "Ticket selected: " + label;
  
}

//This lets you select a delivery option via radio button

const allDelivery = document.querySelectorAll("input[name='delivery']");

for (let i = 0; i < allDelivery.length; i++) {
  allDelivery[i].addEventListener("change", checkDelivery);
}


function checkDelivery() {
  label1 = this.getAttribute("label");
  txtDeliveryOutput.innerText = "Delivery selected: " + label1;
}


// This handles adding the tickets selected and delivery together + calculates discounts and then displays it at the bottom on button press

(function () {
  var getRadioSelectedValue = function (radioGroup) {
    var radios = document.getElementsByName(radioGroup),
      val;

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        val = radios[i].value;
      }
    }
    return val;
  };

 
  var addValues = function () {
    let ticket = parseFloat(getRadioSelectedValue('ticket'), 10)
    let delivery = parseFloat(getRadioSelectedValue('delivery'), 10)
    let div = document.getElementById("totalOutput");
    let currentPrice = (ticket + delivery) * numTickets.value;
    let discount = 0;
    if (numTickets.value >= 6 && numTickets.value < 10) {
        discount = 0.1;
    }  else if (numTickets.value >= 10) {
        discount = 0.15;
    }
    ticketsOrdered = document.getElementById("ticketsOrderedOutput")
    ticketsOrdered.innerText = 'Tickets Selected: ' + label + ' x ' + numTickets.value;
    ticketsOrdered = document.getElementById("deliveryMethodOutput");
    ticketsOrdered.innerText = 'Method of Delivery: ' + label1;
    div.innerText = 'Total Cost: ' + '£' + currentPrice.toFixed(2);
    discountdiv = document.getElementById("discountOutput");
    discountdiv.innerText = 'Discount: ' + '£' + (currentPrice * discount).toFixed(2);
    totaldiv = document.getElementById("totalDiscountOutput");
    totaldiv.innerText = 'Total inc Discount: ' + '£' + (currentPrice - (currentPrice * discount)).toFixed(2);
    

    
  
 }
  
  document.getElementById('bookTicket').addEventListener ("click", addValues) 
  
  
}());

