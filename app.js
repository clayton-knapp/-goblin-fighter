// import functions and grab DOM elements
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
        HP: 3
    },
    {
        name: 'Thwapp',
        HP: 3
    },
    {
        name: 'Gary',
        HP: 3
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
    let newGoblinObj = { name: goblinName, HP: 3 };

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
        goblinDiv.addEventListener('click', ()=> {
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
            //         -- add class of dead - disable click, make opaque
            if (eachGoblin.HP === 0) {
                defeatedCount++;
                goblinDiv.classList.add('dead-goblin');
            }

            //     -- Check to see if Hero HP = 0
            //         -- if so alert Game over
            //         -- make class of hero dead - rotate image?
            if (heroHP === 0) {
                alert('You died! GAME OVER!');
                heroImg.classList.add('dead-hero');
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

function renderGoblin(eachGoblin) {
    // -- takes in a goblin object (name + HP)
    // -- creates 4 divs, 1 container, 1 p for HP, 1p for name, 1 for emoji
    const goblinContainer = document.createElement('div');
    const goblinNameEl = document.createElement('p');
    const goblinHPEl = document.createElement('p');
    const goblinEmoji = document.createElement('p');

    // -- add text content of HP and name to p divs
    goblinNameEl.textContent = eachGoblin.name;
    goblinHPEl.textContent = 'HP: ' + eachGoblin.HP;
    goblinEmoji.textContent = '👹';
    // if (Math.random() >= 0.5){
    //     goblinEmoji.textContent = '👹';
    // } else {
    //     goblinEmoji.textContent = '👿';
    // }

    //add classes to style
    goblinContainer.classList.add('goblin-container');
    goblinEmoji.classList.add('emoji');

    // -- append the divs together
    goblinContainer.append(goblinNameEl, goblinHPEl, goblinEmoji);

    // -- return appended node
    return goblinContainer;
}


//runs display function to show goblins on load
displayGoblins();
displayDefeatedCount();
displayHeroHP();