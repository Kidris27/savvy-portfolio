var checkEnd = false;
var output = document.querySelector('#cyoaoutput');

var story = {
    'start': 'You\'re walking down the street and come across 3 young men. They call out to you. What do you do? RUN or REPLY',
    'RUN': 'You run for your life as they begin to chase you down the street. They catch you, rob you for eveything you have. The End\!',
    'REPLY': 'You reply with a jovius smile exclaiming \"What\'s up youngblood?!\" HEY or WHAT',
    'HEY': '\"Hey, what can i do for ya?"',
    'WHAT': '\"What yall lil knuckleheads want\?"'

};

var selection = prompt(story['start']);


var storyTime = function(selection){
    while(checkEnd === false){
        if(selection === 'REPLY' || selection === 'HEY'){
            selection = prompt(story[selection]);
            output.textContent = (story[selection]);
        }
        else{
            checkEnd = true;
            output.textContent = (story[selection]);
        }
    }
};

storyTime(selection);


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