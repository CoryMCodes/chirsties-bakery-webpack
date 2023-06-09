const renderHeader = () => {
  const headerDiv = document.getElementById("header");
  headerDiv.innerHTML = `<header>
  <div class="logo">
    Christie's Bakery
  </div>
  <div class="right-links">
    <ul>
      <li><a id="aboutBtn" href="#">About</a></li>
      <li><a id="galleryBtn" href="#">Gallery</a></li>
      <li><a id="contactBtn" href="#">Contact</a></li>
    </ul>
  </div>
 </header>`
}

export {renderHeader};