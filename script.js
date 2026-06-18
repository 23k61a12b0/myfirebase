function addStudent() {
    let studentName = document.getElementById("studentName").value;

    if(studentName === "") {
        alert("Please enter a student name");
        return;
    }

    let li = document.createElement("li");
    li.textContent = studentName;

    document.getElementById("studentList").appendChild(li);

    document.getElementById("studentName").value = "";
}