import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var State = {
    'Home': {
        'links': [ 'Blog', 'Contact', 'Projects' ],
        'title': 'Kai Idris\' Project'
    },
    'Blog': {
        'links': [ 'Home', 'Contact', 'Projects' ],
        'title': 'My Blog'
    },
    'Contact': {
        'links': [ 'Home', 'Blog', 'Projects' ],
        'title': 'Contact Me'
    },
    'Projects': {
        'links': [ 'Home', 'Blog', 'Contact' ],
        'title': 'Da Projects'
    },
};


var root = document.querySelector('#root');

function render(state){
    var greeting;
    var input;
    var links;
    var i = 0;

    root.innerHTML = `
        ${Navigation(state)}
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

    while(i < links.length){
        links[i].addEventListener(
            'click',
            (event) => {
                var page = event.target.textContent;

                event.preventDefault();
      
                render(State[page]);
            }
        );
        i++;
    }
}

render(State['Home']);