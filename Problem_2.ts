function getValue(persons: { name: string; age: number }[]): { name: string; age: number }[] 
{
    return persons.filter((person) => person.age >= 18);
  }
  
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
  ];
  
  const adultList = getValue(people);
  console.log(adultList);