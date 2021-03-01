# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer:
  A function allows you to create a set of commands that will alter a given argument in the same way every time.  Instead of having to recode the same thing over and over again for different data, you can simply call on the function for different data and get the result immediately.  It saves a lot of time by reducing the amount you have to retype, and also allows for more sophistication in your code.

  Researched answer:
  A function is a reusable section of code that can be called on any number of times. It serves as instructions to complete a task given the data input.  Functions allow for the elimination of excess lines of code, make your code more readable, helps divide a complex problem into a simpler one, helps reduce the chances for error, and makes it easier to modify a program.

2. What is the difference between .map() and .filter()?

  Your answer:
  Both .map and .filter are higher-order functions that take in an array as an argument and output an array as an argument.  However, .map is used to alter every item in an array and output an array of the same length, while .filter is used to selectively alter the data in an array and output an array of altered length.

  Researched answer:
  .map is a higher order function that acts on an array and returns an array of the same length, doing something to each item in the array.
  .filter is a higher order function that acts on an array and returns a subset of the array, making a decision about each item in the array.



3. What is the difference between console.log() and return?

  Your answer:
  console.log prints something out in the terminal, but has no effect on the rest of the program.
  return signifies what data modified inside of a smaller set of code is necessary to the rest of the program.

  Researched answer:
console.log prints things to your console.
return stops the execution of a function and returns a value from the function.


4. In regards to functions, what is an argument?

  Your answer:
  An argument is what a function acts on, the data that is examined by the function.  An argument can be a variable or any data type, but it depends on the function.

  Researched answer:
  Functions are pieces of outside information used by a function.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:
  Pair programming has one computer, two people, two sets of peripherals, and two monitors.  In pair programming on person is the driver and the other is the navigator.  The driver is responsible for all inputs to the machine, typing the code and running the program.  The navigator is responsible for assisting the driver during this process, helping to think about how to solve problems and generally guide the coding process.  

  Researched answer:
  Pair programming has a driver and a navigator.  The driver has control of the keyboard and is responsible for entering information and following what the navigator says.  Communication between the driver and navigator is critical.  Switching roles occurs every 20-30 minutes.


6. What is iteration?

  Your answer:
  Iteration is when a process is repeated until a specified number of loops have occurred.

  Researched answer:
  Iteration is the process of repeating a section of code over and over again.  It can be executed on iterable datatypes like strings and arrays.  Loops must define a starting location, a condition that will end the loop, and what is executed in every loop.


7. What are advantages and disadvantages for using terminal commands to interact with your computer?

  Your answer:
  Terminal allows you to directly access and alter the files on your computer quickly and efficiently.  In addition, it can be used for creating and accessing git branches, and syncing files via git.  It can be difficult to understand exactly what is going due to the lack of a GUI, and if you aren't careful with your commands you can potentially create errors and problems.  You have to be very exacting in the commands you use.

  Researched answer:
  Terminal gives programmers more extensive control of the programs on their computer and extra functionality not accessible elsewhere.  In addition, git commands and version managers are more usable in git.  However, terminal is completely text-based, so it can be difficult to understand for beginners.


8. What is something we did in class this week you found helpful?  

  Your answer:
  I find all the challenges we do to be very helpful in taking the concepts we learn in class and applying them to solve problems.  I think it would be a lot harder for me to grasp the concepts we are learning without the practice.  In addition, I thought the pacing of the first week was great.  There is a nice balance between lectures, practice, and team building exercises, and I rarely felt like a topic was dragging on too long.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Jest
  Jest is a javascript testing framework.  It is used to ensure your javascript codebase is correct.  Jest uses a three part process to test code.  The three parts include: describe(), test(), and expect().
- Test Driven Development
  Test Driven Development is when the tests for the program are written before writing the program itself. By coding in this manner it forces the programmer to think more critically and logically about their code before they start writing it, resulting in better, faster code.  Breaking the code into a series of tests breaks the problem the programmer is solving down into simpler smaller problems.  In addition, if you make future changes to your program, you can have confidence you aren't breaking your program based on your tests.
- Classes
  Classes in javascript are a specific type of function.  They contain both data and behavior, and serve as the blueprint for objects.  Classes have three major keywords used to create and access information within them including constructor, this, and new.  
- React
  React is a javascript library used to create web pages, mobile web pages, and mobile apps.  It is based on the concept of components, where smaller components are made and then joined together to form applications.  It is useful because it is very scalable.
- React State
  A React state is an object managed within a component.  All react components are one of two categories, those that hold state and those that do not. As an object state stores a components data and determines how the component renders and behaves.
- CRUD
  CRUD is an acronym for the four components of persistent storage.  It represents the four most basic actions necessary for full stack development.  It stands for Create, Read, Update, and Delete.  Create is used when adding information to a database. Read is used when reading information in a database.  Update is used when modifying information in a database. Delete is used when removing information from a database.
