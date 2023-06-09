import blueberryPie from './images/blueberry-pie-pexels-any-lane-5945569.jpg';
import chocolateCake from './images/chocolate-cake-pexels-polina-tankilevitch-4109998.jpg';
import fruitCake from './images/fruit-cake-pexels-nataliya-vaitkevich-5426071.jpg';
import peanutButterCake from './images/peanut-butter-cake-pexels-anastasia-ilinamakarova-10510747.jpg';
import weddingCake from './images/wedding-cake-pexels-avonne-stalling-3923555.jpg';
const renderHome = () => {
 const content = document.getElementById("content")
 content.innerHTML = `
 <div class="hero">
   <div class="hero-content">
     <div class="hero-header">
       Visit Christie's Bakery for your confectionary needs! 
     </div>
     <div class="hero-text">
       Our head baker, Christie Musick, has years of experience creating beautiful
       and unique baked goods for any occasion. Weddings, baby showers, birthdays,
       no matter the special occasion, Christie will bring your unique vision to life.
     </div>
     <div class="hero-button">
       <a href="#"><button>Contact</button></a>
     </div>
   </div>
   <div><img class="hero-img" src="${blueberryPie}" alt="image of blueberry pie"></div>
 </div>
 <div class="information">
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
 </div>
 <div class="quote">
   <div class="quote-container">
     <div class="quote-text">
       "We came to Christie to create our dream wedding cake, and it was an absolutely
       phenomenal experience. She listened to our ideas, and what she made for us
       exceed even our wildest expectaions. We'll never
       forget the cake we had on our special day!"
     </div>
     <div class="quote-author">
       - Carrie Esparza
     </div>
   </div>
 </div>`

}
export {renderHome}