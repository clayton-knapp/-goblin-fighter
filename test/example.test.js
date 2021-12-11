// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGoblin } from '../render-utils.js';

const test = QUnit.test;

test('tests if renderGoblin returns correct DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="goblin-container"><p>Meep!</p><p class="stats">Health: 3</p><p class="stats">Strength: 3</p><p class="stats">Agility: 9</p><p class="stats">Dexterity: 9</p><p class="emoji">👺</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin({
        name: 'Meep!',
        HP: 3,
        type: '👺',
        strength: 3,
        agility: 9,
        dexterity: 9,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'successfully returns "<div class="goblin-container"><p>Meep!</p><p class="stats">Health: 3</p><p class="stats">Strength: 3</p><p class="stats">Agility: 9</p><p class="stats">Dexterity: 9</p><p class="emoji">👺</p></div>"');


    //Arrange
    // Set up your arguments and expectations
    const expected2 = '<div class="goblin-container"><p>Gary</p><p class="stats">Health: 3</p><p class="stats">Strength: 2</p><p class="stats">Agility: 5</p><p class="stats">Dexterity: 6</p><p class="emoji">👻</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = renderGoblin({
        name: 'Gary',
        HP: 3,
        type: '👻',
        strength: 2,
        agility: 5,
        dexterity: 6,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2.outerHTML, expected2, 'successfully returns "<div class="goblin-container"><p>Gary</p><p class="stats">Health: 3</p><p class="stats">Strength: 2</p><p class="stats">Agility: 5</p><p class="stats">Dexterity: 6</p><p class="emoji">👻</p></div>"');


});
