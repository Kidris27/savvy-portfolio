export default function Header(state){
    return `
<div id="header">
    <div class="container">
    <h1>${state.title}</h1>
    <img src="https://avatars0.githubusercontent.com/u/40189344?s=460&v=4" alt="Me">
    <div id="contact">
    <a href="https://www.linkedin.com/in/kayode-kai-idris-jr-880420163/"><i class="fab fa-linkedin"></i></a>
    <a href="mailto:kayodeidrisjr@gmail.com">
    <i class="fas fa-envelope"></i>
    </a>
    </div>
    <!--
    <div id="greeting"></div>
    <input type="text"/>
    </div>
    -->
</div>
`;
}