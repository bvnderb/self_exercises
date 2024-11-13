/* Build an elf workshop simulator that:
            1. Uses arrow functions for each production stage
            2. Manages scope for workshop sections
 
            Create functions for:
            - paintToy (arrow function)
            - assembleToy (arrow function)
            - qualityCheck (arrow function)
 
            Each function should:
            - Use block-scoped variables for tracking paint colors, parts, etc.
            - Keep track of successful vs failed toys
            */


const paintToy = color => {
    let paintedToys = 0
    // paint toys with given color
    // update paintedToys variable
    return paintedToys;
}

const assembleToys = parts => {
    let assembledToys = 0
    // 
    // 
    return assembledToys;
}

const qualityCheck = toy => {
    if (toy.color !== 'red') {
        throw new Error(`Toy color (${toy.color}) is not approved.`);
    }
    if (toy.parts.length !== 10) {
        throw new Error(`Toy is missing parts (expected 10, got ${toy.parts.length})`);
    }
    return true;
}
