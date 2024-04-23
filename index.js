// run `node index.js` in the terminal

const students = [
  { name: 'Alice', chemistryMarks: 85, biologyMarks: 90, dob: '01-05-2000' },
  { name: 'Bob', chemistryMarks: 75, biologyMarks: 95, dob: '03-02-2001' },
  { name: 'Charlie', chemistryMarks: 80, biologyMarks: 90, dob: '05-10-2000' },
];

students.sort((a, b) => {
  if (a.chemistryMarks + a.biologyMarks === b.chemistryMarks + b.biologyMarks) {
    if (a.biologyMarks === b.biologyMarks) {
      return 0;
    }
    return b.biologyMarks - a.biologyMarks;
  }
  return (
    b.chemistryMarks + b.biologyMarks - (a.chemistryMarks + a.biologyMarks)
  );
});

console.log(students);
