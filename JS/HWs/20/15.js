"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let group = [];
    let groups = [];
    let numberOfStudentsWithGroups = arr.length - arr.length % 3;
    let studentsWithoutGroups = "Оставшиеся студенты:";

    for (let i = 0; i < arr.length; i++) {
        if(numberOfStudentsWithGroups < i + 1) {
            studentsWithoutGroups += ` ${arr[i]},`;
        } else {
            group.push(arr[i]);
        }

        if((i + 1) % 3 === 0) {
            groups.push(group);
            group = [];
        }
    }
    if (numberOfStudentsWithGroups !== arr.length) {
        groups.push(studentsWithoutGroups.substring(0, studentsWithoutGroups.length - 1));
    } else {
        groups.push(`${studentsWithoutGroups} -`);
    }
    return groups;
}

console.log(sortStudentsByGroups(students));