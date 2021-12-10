// import functions and grab DOM elements

import { renderGoblin } from './render-utils.js';
import { generateGoblin } from './utils.js';

const defeatedCountSpan = document.querySelector('#defeated-count-display');
const newGoblinForm = document.querySelector('#new-goblin-form');
const heroHPEl = document.querySelector('#hero-HP-display');
const heroImg = document.querySelector('.hero-image');
const goblinListEl = document.querySelector('.goblin-list');


// let state

let heroHP = 100;
let defeatedCount = 0;

let goblinArr = [
    generateGoblin('Meep!'),
    generateGoblin('Thwapp'),
    generateGoblin('Gary')
];
console.log(goblinArr);
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//   -- Enter New Goblin Submit
newGoblinForm.addEventListener('submit', (e)=>{
    //     -- default form behavior
    e.preventDefault();
    //     -- Grabs name input value and calls generateGoblin
    const data = new FormData(newGoblinForm);

    let newGoblinName = data.get('new-goblin-name');

    if (newGoblinName === '') {
        newGoblinName = `New Goblin #${Math.ceil(Math.random() * 100)}`;
    }

    const newGoblinObj = generateGoblin(newGoblinName);

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
            if (Math.random() > eachGoblin.agility) {
                eachGoblin.HP--;
                alert('You hit the Goblin and did 1 Damage!');
            } else {
                alert('You missed the Goblin and dealt no Damage');
            }

            //     -- Run math to see if Goblin hit Hero. if so decremenent hero HP by generated strength of goblin
            //     -- Display alert if Goblin hit Hero
            if (eachGoblin.dexterity > Math.random()) {
                heroHP = heroHP - eachGoblin.strength;
                alert(`The Goblin hit you and did ${eachGoblin.strength} Damage!`);
            } else {
                alert('The Goblin missed you and dealt no Damage');
            }

            //     -- Check to see if Goblin HP = 0
            //         -- if so increment defeated Goblin count
            //         -- add class of dead - disable click, make opaque -- has to happen in render function????
            if (eachGoblin.HP === 0) {
                // console.log(eachGoblin);
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

            // update the hero HP/Image
            displayHero();
        });
        
        
        // -- appends the returned node to the goblin list
        goblinListEl.append(goblinDiv);
    }
}


function displayHero() {
    heroHPEl.textContent = heroHP;
    if (heroHP > 5) {
        heroImg.classList.add('young');
    }
    if (heroHP > 0 && heroHP <= 5) {
        heroImg.classList.add('old');
    }
    if (heroHP === 0){
        heroImg.classList.add('dead-hero');
    }
}

function displayDefeatedCount() {
    defeatedCountSpan.textContent = defeatedCount;
}

//runs display function to show goblins, count, hp on load
displayGoblins();
displayDefeatedCount();
displayHero();