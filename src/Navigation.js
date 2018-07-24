import { lowerCase } from 'lodash';

console.log(lowerCase);

function reduceLinkToHTML(links, link){
    var href = '/';

    if(links !== 'Home'){
        href += lowerCase(links);
    }
    
    return `
        ${links}
        <li>
          <a href="${href}" data-navigo>${link}</a>
        </li>
        `;
}

function buildLinks(links){
    return links.reduce(reduceLinkToHTML, '');
}

export default function Navigation(state){
    return `
<div id="navigation">
    <ul class="container">
        ${buildLinks(state.links)}
    </ul>
</div>
`;
}