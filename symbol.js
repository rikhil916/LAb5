const MyClass = {
    [Symbol.hasInstance](obj) {
      return obj.type === 'Custom';  
    }
  };
  
  const obj1 = { type: 'Custom' };
  const obj2 = { type: 'Normal' };
  
  console.log(obj1 instanceof MyClass);  
  console.log(obj2 instanceof MyClass);   
  

  const myObj = {
    [Symbol.toPrimitive](hint) {
      if (hint === 'string') {
        return 'Hello, I am a string';
      }
      return 10;  
    }
  };
  
  console.log(String(myObj));  
  console.log(Number(myObj));  
    
  

  const myIterable = {
    items: [1, 2, 3],
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.items.length) {
            return { value: this.items[index++], done: false };
          }
          return { done: true };
        }
      };
    }
  };
  
  for (let num of myIterable) {
    console.log(num);  
  }
  


  
  const myArray = {
    [Symbol.isConcatSpreadable]: true,  
    0: 'apple',
    1: 'banana',
    length: 2,
   
 
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.length) {
            return { value: this[index++], done: false };
          }
          return { done: true };
        }
      };
    }
  };
  
  const result = ['fruit', ...myArray];  
  console.log(result);   
  