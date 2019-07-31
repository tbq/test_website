function alertBuy() {
  var products = document.getElementsById("productInput");
  var product = "A";
  for (var i = 0, length = products.length; i < length; i++) {
    if (products[i].checked) {
      product = products[i].value;
      break;
    }
  }
  
  var productNum = document.getElementById("numSelect").value;
  
  alert("You've just bought " + productNum + " " + product + "(s)!");
}
