const renderAbout = () => {
  const content = document.getElementById("content")
  content.innerHTML = `
  <div class="aboutBackground">
    <div class="aboutContent">
      Christie's Bakery specializes in custom cakes and pastries for any occasion.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex tellus, porta 
      at magna nec, ornare cursus felis. Cras tortor nibh, fringilla vestibulum auctor
       commodo, interdum ac orci. Mauris placerat odio nec fringilla pharetra. Cras 
       metus dolor, vehicula ac commodo vitae, laoreet ac lacus. Donec nulla dolor, 
       imperdiet vel dolor vitae, lacinia luctus odio. Fusce ac vulputate turpis.
        Aenean ut arcu sit amet nisi interdum accumsan eu et mi. Integer consectetur 
        leo massa, eget volutpat turpis feugiat eget. Maecenas in placerat orci, sit 
        amet congue leo. Proin consequat urna at velit tristique, in fermentum metus pharetra. Nam non purus ac libero faucibus congue.


    </div>
  </div>`
}

export {renderAbout}