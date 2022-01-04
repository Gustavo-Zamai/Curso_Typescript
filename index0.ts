const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {// define Input Element
    const input = event.currentTarget as HTMLInputElement 

    console.log(input.value);

});

///GENERIC TYPES

function fullfilList<T>(array: any[], value: T) {
    return array.map(item => item + value);
}

fullfilList ([1,2,3,4], 1); 

////////////////////////////////////
 
interface User {
    id: string;
    email: string;
    type?: 'normal'|'gerent' | 'co' |'supervisor';//optional(?)
}
/* FIRST WAY
interface Admin extends User {
    type: 'gerent' | 'co' |'supervisor';
}

function redirect (User: User | Admin) {
    if ('type' in User){//verify props from Admin 
        // redirect to Admin zone 
    }else{
        //redirect to User zone
    }
}
*/

function redirect (User: User){
    if(User.type){
        //redirect (User.type) normal
        //redirect (User.type) gerent
        //redirect (User.type) co
        //redirect (User.type) supervisor
    }else{
        //redirect to User zone
    }
}

interface Animal {
    name: string;
    age: number;
    favoritePlace?: string;
}

type AnimalOnlyRead = {//cant alter and set obligation all values
    +readonly [K in keyof Animal]-?: Animal[K];
}

class myAnimal implements AnimalOnlyRead {
    name ;
    age;
    favoritePlace;
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.favoritePlace = this.favoritePlace;
    }    
} 

const cat = new myAnimal ('Gatin', 2);

/////////////////OMIT
interface Person {
    name: string;
    age: number;
    birthPlace: string;
}


interface Brazilian extends Omit<Person, 'birthPlace'>{

}


const citizen: Brazilian = {//Omit remove duplicate infos
    name: 'Gus',
    age: 26,    
}



