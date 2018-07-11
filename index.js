import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var Home = {
    'title': 'Kai Idris\' Project'
};

var Blog = {
    'title': 'My Blog'
};

var Contact = {
    'title': 'Contact Me'
};

var Project = {
    'title': 'Da Projects'
};

var root = document.querySelector('#root');

function render(state){
    var greeting;
    var input;
    var links;

    root.innerHTML = `
        ${Navigation}
        ${Header(state)}
        ${Content}
        ${Footer}
        `;

    greeting = document.querySelector('#greeting');
    input = document.querySelector('#header input');
        
    input.addEventListener(
        'keyup',
        (event) =>  greeting.innerHTML = `
            <div>
                <h3>Welcome to my world,</h3>
                <h4>${event.target.value}</h4>
            </div>
            `
    );

    links = document.querySelectorAll('#navigation a');

    links[0].addEventListener(
        'click',
        (event) => {
            event.preventDefault();
        
            render(Blog);
        }
    );

    links[1].addEventListener(
        'click',
        (event) => {
            event.preventDefault();
        
            render(Contact);
        }
    );

    links[2].addEventListener(
        'click',
        (event) => {
            event.preventDefault();
        
            render(Project);
        }
    );
}
    

render(Home);