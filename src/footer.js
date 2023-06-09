const renderFooter = () => {
  const footer = document.getElementById("footer");
  footer.innerHTML = `<div class="cta-area">
  <div class="cta">
    <div class="cta-content">
      <div class="cta-header">
        Contact Christie's Bakery today!
      </div>
      <div class="cta-text">
        Click to schedule an online consultation with Christie to discuss your needs
        and be one step closer to having the dessert of your dreams!
      </div>
    </div>
    <button>Contact</button>
  </div>
</div>
<footer>
  Copywrite © The Odin Project
</footer>`
}

export {renderFooter};