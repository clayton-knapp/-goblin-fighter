export function renderGoblin(eachGoblin) {
    // -- takes in a goblin object (name + HP)
    // -- creates 4 divs, 1 container, 1 p for HP, 1p for name, 1 for emoji
    const goblinContainer = document.createElement('div');
    const goblinNameEl = document.createElement('p');
    const goblinHPEl = document.createElement('p');
    const goblinEmoji = document.createElement('p');

    // -- add text content of HP and name to p divs
    goblinNameEl.textContent = eachGoblin.name;
    goblinHPEl.textContent = 'HP: ' + eachGoblin.HP;
    goblinEmoji.textContent = eachGoblin.type;
    // if (Math.random() >= 0.5){
    //     goblinEmoji.textContent = '👹';
    // } else {
    //     goblinEmoji.textContent = '👿';
    // }

    //add classes to style
    goblinContainer.classList.add('goblin-container');
    goblinEmoji.classList.add('emoji');


    // checks if goblin HP is 0 and if so adds dead class
    if (eachGoblin.HP <= 0) {
        goblinContainer.classList.add('dead-goblin');
    }

    // -- append the divs together
    goblinContainer.append(goblinNameEl, goblinHPEl, goblinEmoji);

    // -- return appended node
    return goblinContainer;
}