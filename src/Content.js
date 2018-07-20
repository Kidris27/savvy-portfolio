import * as Pages from './Pages';

export default function Content(state){
    return `
<div id="content">
    <div class="container">
    ${Pages[state.body]}
    </ul>
    </div>
</div>
`;
}