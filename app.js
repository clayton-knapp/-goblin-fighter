// import functions and grab DOM elements

import { renderGoblin } from './render-utils.js';

const defeatedCountSpan = document.querySelector('#defeated-count-display');
const newGoblinForm = document.querySelector('#new-goblin-form');
const heroHPEl = document.querySelector('#hero-HP-display');
const heroImg = document.querySelector('.hero-image');
const goblinListEl = document.querySelector('.goblin-list');


// let state

let heroHP = 10;
let defeatedCount = 0;
let goblinArr = [
    {
        name: 'Meep!',
        HP: 3,
        type: '👹'
    },
    {
        name: 'Thwapp',
        HP: 3,
        type: '😈'
    },
    {
        name: 'Gary',
        HP: 3,
        type: '👺'
    }
];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//   -- Enter New Goblin Submit
newGoblinForm.addEventListener('submit', (e)=>{
    //     -- default form behavior
    e.preventDefault();
    //     -- Grabs name input value and stores in a new goblin object
    const data = new FormData(newGoblinForm);
    let goblinName = data.get('new-goblin-name');

    //generate random goblin type
    let goblinType = '';
    //generate random number between 1-4
    let randomNumber = Math.ceil(Math.random() * 4);

    if (randomNumber === 1) {
        goblinType = '👹';
    } else if (randomNumber === 2) {
        goblinType = '😈';
    } else if (randomNumber === 3) {
        goblinType = '👺';
    } else if (randomNumber === 4) {
        goblinType = '👾';
    }


    let newGoblinObj = { name: goblinName, HP: 3, type: goblinType };

    //     -- pushes new goblin object into goblin array
    goblinArr.push(newGoblinObj);

    //     -- updates DOM to display Goblins - call display func which calls render func
    displayGoblins();

    // resets the form
    newGoblinForm.reset();

});

function displayGoblins() {
    // -- clears the DOM
    goblinListEl.textContent = '';

    // -- iterates with for loop through array
    for (let eachGoblin of goblinArr) {
        // -- sends each object to render function which returns a Node for each goblin
        const goblinDiv = renderGoblin(eachGoblin);

        // -- Click on Goblin
        goblinDiv.addEventListener('click', (e)=> {
            //     -- Run math to see if Hero hit Goblin, is so decrement goblin HP
            //     -- Display alert if Hero hit Goblin
            if (Math.random() > 0.25) {
                eachGoblin.HP--;
                alert('You hit the Goblin and did 1 Damage!');
            } else {
                alert('You missed the Goblin and dealt no Damage');
            }

            //     -- Run math to see if Goblin hit Hero. if so decremenent hero HP
            //     -- Display alert if Goblin hit Hero
            if (Math.random() > 0.25) {
                heroHP--;
                alert('The Goblin hit you and did 1 Damage!');
            } else {
                alert('The Goblin missed you and dealt no Damage');
            }

            //     -- Check to see if Goblin HP = 0
            //         -- if so increment defeated Goblin count
            //         -- add class of dead - disable click, make opaque -- has to happen in render function????
            if (eachGoblin.HP === 0) {
                console.log(eachGoblin);
                defeatedCount++;
            }

            //     -- Check to see if Hero HP = 0
            //         -- if so alert Game over
            //         -- make class of hero dead - rotate image?
            if (heroHP === 0) {
                alert('You died! GAME OVER!');
                heroImg.classList.add('dead-hero');
                goblinListEl.classList.add('dead-goblin');
            }

            //     -- Update the Goblin Display
            displayGoblins();

            //     -- Update the defeatedCount Display
            displayDefeatedCount();

            // update the hero HP
            displayHeroHP();
        });
        
        
        // -- appends the returned node to the goblin list
        goblinListEl.append(goblinDiv);
    }
}

function displayHeroHP() {
    heroHPEl.textContent = heroHP;
}

function displayDefeatedCount() {
    defeatedCountSpan.textContent = defeatedCount;
}

//runs display function to show goblins, count, hp on load
displayGoblins();
displayDefeatedCount();
displayHeroHP();