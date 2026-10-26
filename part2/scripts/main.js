
// NOT USED FOR HOMEWORK 2 DUE TO JS RESTRICTION
/* Extend generic HTMLElement interface
class MainNavbar extends HTMLElement {
    constructor() {
        super();
        // attach shadow DOM to element
        let navbar = document.querySelector("main_navbar");
        let shadow = navbar.attachShadow({mode: "closed"});
        // implement functionality...
        
        const navinfo = document.createElement("nav");
        navinfo.innerHTML = `
            <a href="./index.html">Home</a>
            <a href="./part2/resume.html">Resume</a>
            <a href="./part2/projects.html">Projects</a>
            <a href="./part2/about-me.html">About</a>
            <a href="./part2/experiments.html">Experiments</a>
            <a href="./index.html#contact">Contact Me</a>
        `;

        shadow.appendChild(navinfo);
    }
}
customElements.define("main_navbar", MainNavbar);
*/

// Custom Hello World Element
class HelloWorld extends HTMLElement {
    constructor() {
        super();
        
        console.log("Hello World!");
    }
}
customElements.define("hello_world", HelloWorld);

