console.log('Praise The Sun');

//example 
function sum (a : number, b : number) {
    return a + b;
}
sum (1, 2);

//INTERFACES  like a contract 
interface Bands {
    vocal: string;
    members: number;
    types: 'grunge' | 'metal' | 'punk';
}

interface songs extends Bands { // extends class father
    name: string,
}

const nirvana: Bands = {
    vocal: 'Kurt',
    members: 3,
    types: "grunge",
} 

const aliceInChains: songs = {
    vocal: 'Layne',
    members: 4,
    types: "grunge",
    name: 'Would?'
}

////////////////////////////TYPE
//mix of interfaces, or give interface prop to variable
type Grunge = Bands | songs; // can use both props
//type Grunge = Bands && songs; have to use both props
const pearlJam: Grunge = {// can use props from Bands or songs
    vocal: 'Eddie Vedder',
    members: 5,
    types: 'grunge',
    name: 'Once',
}

