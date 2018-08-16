var checkEnd = false;
var output = document.querySelector('#cyoaoutput');

var story = {
    'start': 'You walk up to the table and see a young man in front of you. ENGAGE or DISENGAGE',
    'DISENGAGE': 'You chose not to delve any further but the young man wishes to leave you with a gift! Please accept it.',
    'ENGAGE': 'Congrats! You\'ve chosen to embark on a journey that very few have selected to partake in. CITY or SUBURB',
    'CITY': 'The young man was born into humble, windy beginnings. Hailing from the great city known as \"Chicago\" & before delving any further\; the answer is \"no\" he is not a baseball fan. SUBURB',
    'SUBURB': 'The young man\'s formative years started in the Village of Romeoville. NIGERIA or USAF',
    'NIGERIA': 'Wanting to him to understand his roots, his family sent him to Nigeria for middle school, where he stayed for 2 years. PRESENT or FUTURE',
    'USAF': 'Yearning for a desire to travel the world, the young man enlisted into the Air Force. Travel he did! Ohio, Italy and STL are a few places he\'s been to. PRESENT or FUTURE',
    'PRESENT': 'The young man is currently transitioning from the Air Force back to civilian sector and wishes to bestow upon you parchment if you ever wish to summon him for his services.',
    'FUTURE': 'The young man seeks to put his skills and knowledge to use with future employers. He is eager to learn and become a better developer. He hopes that you give him an opportunity to.'


};

var selection = prompt(story['start']);


var storyTime = function(selection){
    while(checkEnd === false){
        if(selection === 'ENGAGE' || selection === 'SUBURB'){
            selection = prompt(story[selection]);
            output.textContent = (story[selection]);
            if(selection === 'CITY' || selection === 'USAF'){
                selection = prompt(story[selection]);
                output.textContent = (story[selection]);
            }
        }
        else{
            checkEnd = true;
            output.textContent = (story[selection]);
        }
    }
};

storyTime(selection);

// ORIGINAL CODE
// var story = {
//     'start': 'You\'re walking down the street and come across 3 young men. They call out to you. What do you do? RUN or REPLY',
//     'RUN': 'You run for your life as they begin to chase you down the street. They catch you, rob you for eveything you have. The End\!',
//     'REPLY': 'You reply with a jovius smile exclaiming \"What\'s up youngblood?!\" HEY or WHAT',
//     'HEY': '\"Hey, what can i do for ya?"',
//     'WHAT': '\"What yall lil knuckleheads want\?"'

// };

// var selection = prompt(story['start']);


// var storyTime = function(selection){
//     while(checkEnd === false){
//         if(selection === 'REPLY' || selection === 'HEY'){
//             selection = prompt(story[selection]);
//             output.textContent = (story[selection]);
//         }
//         else{
//             checkEnd = true;
//             output.textContent = (story[selection]);
//         }
//     }
// };

// storyTime(selection);


// if(choice != ''){
//     if(choice === 'RUN' || choice === 'run'){
//         alert(story['RUN']);
//     }
//     else if(choice === 'REPLY' || choice === 'reply'){
//         var newChoice = prompt(story['REPLY']);
                        
//         if(newChoice === 'HEY' || newChoice === 'hey'){
//             alert(story['HEY']);
//         }
//         else if(newChoice === 'WHAT' || newChoice === 'what'){
//             alert(story['WHAT']);
//         }
//         else{
//             alert('Try again madasucka.');
//         }
//     }
//     else{
//         alert('I didn\'t get that');
//     }
// }
// else{
//     alert('No entry received!');
// }