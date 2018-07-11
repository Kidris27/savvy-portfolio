export default function Header(state){
    return `
<div id="header">
    <div class="container">
    <h1>${state.title}</h1>
    <img src="https://avatars0.githubusercontent.com/u/40189344?s=460&v=4" alt="Me">
    <div id="greeting"></div>
    <input type="text"/>
    </div>
</div>
`;
}