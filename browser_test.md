### FB Cookies

<p id="fb_cookies"></p>


<script>
  function readCookies(): string {
    return document.cookies;
  }
  
  function displayCookies() {
    document.getElementById('fb_cookies').innerHTML = readCookies();
  }
  
  document.addEventListener('load', displayCookies);
</script>
