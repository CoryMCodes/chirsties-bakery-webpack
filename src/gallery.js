import chocolateCake from './images/chocolate-cake-pexels-polina-tankilevitch-4109998.jpg';
import fruitCake from './images/fruit-cake-pexels-nataliya-vaitkevich-5426071.jpg';
import peanutButterCake from './images/peanut-butter-cake-pexels-anastasia-ilinamakarova-10510747.jpg';
import weddingCake from './images/wedding-cake-pexels-avonne-stalling-3923555.jpg';

const renderGallery = () => {
  const content = document.getElementById("content");
  content.innerHTML = `<div class="information">
  <div class="information-header">
    Recent Creations
  </div>
  <div class="card-container">
    <div class="card">
      <div><img class="card-img" src="${chocolateCake}" alt=""></div>
      <div class="card-info">Chocolate Delight - Custom made chocolate cake with 
        chocolate cake ball decoration on top!
      </div>
    </div>
    <div class="card">
      <div>
        <img class="card-img" src="${weddingCake}" alt="">
      </div>
      <div class="card-info">Moody Wedding Cake - Tiered wedding cake with dark 
        colors and gold decorations made to pop.
      </div>
    </div>
    <div class="card">
      <div><img class="card-img" src="${fruitCake}" alt=""></div>
      <div class="card-info">Fruitful Masterpiece - This beautiful cake top withe delicious
        fresh fruit was a perfect way to celebrate spring. 
      </div>
    </div>
    <div class="card">
      <div><img class="card-img" src="${peanutButterCake}" alt=""></div>
      <div class="card-info">Peanut Butter Beauty - This cake was made with
        whipped peaunut butter frosting, giving it light and airy feeling.
      </div>
    </div>
  </div>   
</div>`
}

export {renderGallery}