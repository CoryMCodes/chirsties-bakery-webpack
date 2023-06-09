console.log("hello from index")
import './styles.css';
import { renderHome } from "./home"
import { renderHeader } from './header';
import { renderAbout } from "./about"
import { renderFooter } from './footer';
import { renderGallery } from './gallery';
import { renderContact } from './contact';

renderHeader();
renderHome();
renderFooter();

const aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener("click", renderAbout);

const logo = document.querySelector(".logo")
logo.addEventListener("click", renderHome);

const galleryBtn = document.getElementById("galleryBtn");
galleryBtn.addEventListener("click", renderGallery);

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", renderContact);