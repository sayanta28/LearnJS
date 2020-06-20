const person ={
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        //console.log(parts.length);
        this.firstName = parts[0];
        this.lastName = parts[1];

        let index = 2;

        while(index<parts.length){
            // if(index===1){
            //     this.lastname = parts[index];
            //    // console.log(parts[index]);                
            // }
            //else 
            this.lastName = this.lastName.concat(' '+parts[index]);

            index++;
        }
        //this.lastName = parts[1] +' '+ parts[2];
    }
};

//getter => access properties
//setter => change (mutate) them

person.fullName = 'John Smith Kumar Chowdhury';
//Using setters we can set it from the outside.
console.log(person.fullName);//using getter we can read the fullname
// like a property 



