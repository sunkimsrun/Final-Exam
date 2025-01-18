'use strict';

try {
    console.log('SUN KIMSRUN');
    let x = 10;
} catch (error) {
    console.error(error.message);
}

function demo() {
    try {
        let y = 20;
    } catch (error) {
        console.error(error.message);
    }
}

demo();

try {
    eval('var z = 50; delete z;');
} catch (error) {
    console.error(error.message);
}
