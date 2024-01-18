const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "shyam";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "abhishek@google.com",
  fullName: {
    userFullName: {
      firstName: "abhishek",
      lastName: "singh",
    },
  },
};

//console.log(regularUser.fullName.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);

const users = [{}, {}, {}, {}];

//console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};
// course.courseInstructor

const { courseInstructor: instructor } = course;

//console.log(courseInstructor);
console.log(instructor);
