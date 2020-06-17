const students=[{name: "Rafi",id:101, dept:"CSE"},
{name: "Noman",id:505, dept:"EEE"},
{name: "Rayhan",id:18401, dept:"ME"},
{name: "Shaon",id:9099, dept:"Civil"},
{name: "Habib",id:19401, dept:"Math"},
{name: "Toukir",id:108, dept:"CSE"},
{name: "Timon",id:505, dept:"EEE"},
{name: "Sajid",id:505, dept:"CSE"}]

let depts=students.filter(obj=>obj.dept=="CSE");
console.log(depts);

console.log(" ");

let names=students.map(obj=>obj.name.length);
console.log(names);