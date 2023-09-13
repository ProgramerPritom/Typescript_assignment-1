function checkString(input: unknown) {
    if (typeof input === 'string') {
      console.log(input);
    } else {
      console.error('Error: Input is not a string.');
    }
  }
  
  checkString("WEB Dev. 2.0");
  checkString(42); 