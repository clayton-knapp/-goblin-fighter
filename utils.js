export function generateGoblin(newGoblinName) {

    //roll to determine if super goblin is created
    if (Math.random() > .1) {
        //generate random goblin type
        let goblinType = '';
        //generate random number between 1-4
        let randomNumberType = Math.ceil(Math.random() * 6);
        
        if (randomNumberType === 1) {
            goblinType = '👹';
        } else if (randomNumberType === 2) {
            goblinType = '😈';
        } else if (randomNumberType === 3) {
            goblinType = '👺';
        } else if (randomNumberType === 4) {
            goblinType = '👾';
        } else if (randomNumberType === 5) {
            goblinType = '👻';
        } else if (randomNumberType === 6) {
            goblinType = '👽';
        }

        //generate random Strength 1-3
        const randomStrength = Math.ceil(Math.random() * 3);
        const randomAgility = Math.ceil(Math.random() * 9);
        const randomDexterity = Math.ceil(Math.random() * 9);

        const newGoblin = {
            name: newGoblinName,
            HP: 3,
            type: goblinType,
            strength: randomStrength,
            agility: randomAgility,
            dexterity: randomDexterity,
        };
        return newGoblin;
    } else {
        const newGoblin = {
            name: 'SUPER GOBLIN',
            HP: 5,
            type: '💀',
            strength: 5,
            agility: 9,
            dexterity: 9,
        };
        return newGoblin;
    }

}