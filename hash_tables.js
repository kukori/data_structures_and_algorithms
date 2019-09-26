let user = {
age: 54,
name: 'Kylie',
magic: true,
scream: function() {
    console.log('ahhhhhh!');
}
};
  
//   user.age;
//   user.spell = 'abra kadabra';
//   user.scream()
  
  //Map --> Gives you some order
  //Set --> No duplicate keys
  
class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }
    
    keys(){
      const keysArray = [];
      console.log(this.data.length);
      for (let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          keysArray.push(this.data[i][0][0])
        }
      }
      return keysArray;
    }
}
  
// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000)
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
// myHashTable.set('apples', 9)
// myHashTable.get('apples')
// myHashTable.keys()

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    const map = {};
    for(let i = 0; i < input.length; i++) {
        let currentValue = input[i];
        if(!map[currentValue]) {
            map[currentValue] = true;
        } else {
            return currentValue;
        }
    }
    return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter([2,3,4,5]));
 console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));