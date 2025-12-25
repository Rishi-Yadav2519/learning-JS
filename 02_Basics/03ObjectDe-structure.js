const course = {
    courseName : "React Basics",
    coursePrice : "999",
    courseTeacher : "Rishi"
}

console.log(course.coursePrice); // We can get a value from an object like this and it's absolutely fine but it's sometime messy process for using it multiple places

// So we can de-structure the object
const {courseTeacher} = course // It automatically extract the courseTeacher value from course object and put it an const named courseTeacher so we can use it directly

console.log(courseTeacher);


const {courseName: name} = course // We can also give a new variable name to store the extracted value like this

console.log(name);
