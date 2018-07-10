import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import Greeter from './src/Greeter';

document
    .querySelector('#root')
    .innerHTML = `
    ${Navigation}
    ${Header()}
    ${Content}
    ${Footer}
    `;

console.log(Navigation);

Greeter();