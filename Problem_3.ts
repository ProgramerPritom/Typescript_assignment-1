function array<T>(...items: T[]): T[] {
    const reversedArray: T[] = [];
    for (let i = items.length - 1; i >= 0; i--) {
      reversedArray.push(items[i]);
    }
    return reversedArray;
  }
  
  
  const reversedStrings = array("apple", "banana", "cherry");
  console.log(reversedStrings); 