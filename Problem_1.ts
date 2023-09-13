function testRepeatFunction(name: string, age: number = 3) {
    for (let i = 0; i < age; i++) {
      console.log(name);
    }
  }
  
  
  testRepeatFunction("Pritom", 5); 
  testRepeatFunction("23");      
  testRepeatFunction("35",6);      