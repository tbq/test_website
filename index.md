## Welcome to the Alphabet Seller

<form onsubmit="alertBuy()">
  <fieldset>
    <legend>The Alphabet:</legend>
  <input id="productInput" type="radio" name="product" value="A" checked> A<br>
  <input id="productInput" type="radio" name="product" value="B"> B<br>
  <input id="productInput" type="radio" name="product" value="C"> C<br>
  
  Number of Products: 
  <select id="numSelect" name="num">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select><br><br>
  
  Please help us click "Buy"! (don't worry, we don't charge you any $ :-) )
  <br>
  <input type="submit" name="submit_btn" value="Buy">
  </fieldset>
</form>

### Go to [Amazon](https://www.amazon.com)

### Go to [Facebook](https://www.facebook.com)

<p id="myLog"></p>

<script>
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("myLog").appendChild(node);
    }
  }
  console.log("Hello World!");
</script>

<script src="script.js"></script>
<script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,"script","https://connect.facebook.net/en_US/fbevents.js");
// If you want to add your own JS, add something like
fbq('init', '144682222847096');
// Don't use fbq('track')! You might interfere with other people's pixels as you browse the web. Instead,
// if you need to experiment with pixel fires, use fbq('trackSingle', '1962619450647008', 'PageView');
fbq('trackSingle', '144682222847096', 'PageView');
</script>
