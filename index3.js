const express = require("express");
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Ashish", age: 20 },
    { id: 2, name: "Karthik ", age: 25 }
];

// GET all students
app.get("/students", (req, res) => {
    res.json(students);
});

// POST new student
app.post("/students", (req, res) => {
    students.push(req.body);
    res.json({ message: "Student added" });
});

// PUT update student
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        Object.assign(student, req.body);
        res.json({ message: "Updated" });
    } else {
        res.status(404).json({ message: "Not found" });
    }
});

// DELETE student
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    students = students.filter(s => s.id !== id);
    res.json({ message: "Deleted" });
});

// GET a student by ID
app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Not found" });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
