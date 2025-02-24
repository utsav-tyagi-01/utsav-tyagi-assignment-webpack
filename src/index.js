import './styles.scss';
import { Header } from "./components/header/header.js";
import { Footer } from "./components/footer/footer.js";
import { Home } from "./components/home/home.js";
import { About } from "./components/about/about.js";
import { Contact } from "./components/contact/contact.js";

const routes = {
    "/": Home,
    "/about": About,
    "/contact": Contact,
};
 function navigate(url) {
    history.pushState(null, '', url);
    render();
}

document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigate(e.target.href);
    }
});


function render() {
    const app = document.getElementById("app");
    const path = window.location.pathname;
  
    const page = routes[path] ?  routes[path]() : "<h1>404 - Page Not Found</h1>";


    app.innerHTML = Header() + page + Footer();
}

window.addEventListener("popstate", render);

 render();