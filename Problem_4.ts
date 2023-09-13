class Person {
    constructor(private name: string, private age: number) {}
  
    getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }

  const person = new Person("Alice", 30);
  console.log(person.getDetails());
  
  class Student extends Person {
    private grade: string;
  
    constructor(name: string, age: number, grade: string) {
      super(name, age);
      this.grade = grade;
    }
  
    getGrade(): string {
      return `Grade: ${this.grade}`;
    }
  }
  

  const student = new Student("Alice", 20, "A");
  console.log(student.getGrade());  