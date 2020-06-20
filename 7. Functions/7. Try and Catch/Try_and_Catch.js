const person ={
    firstName: 'Mosh',
    lastName: 'Hamedani',
    // get fullName(){
    //     return `${person.firstName} ${person.lastName}`;
    // },

    
    set fullName(value){
        
        if(typeof value !== 'string')
            throw new Error('Value is not String');
            
        const parts = value.split(' ');
        if(parts.length!=2)
            throw new Error('Enter First and Last Name');

        //console.log(parts.length);
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = 'Sayan';
    
} catch (e) {
    alert(e);
    //console.log(e);
}

//Using setters we can set it from the outside.

console.log(person.firstName, person.lastName);//using getter we can read the fullname
// like a property 



