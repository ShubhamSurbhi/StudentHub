let students = [], attendance = [], marks = [], assignments = [], notices = [], timetable = [], materials = [];


function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    document.querySelectorAll('.nav div').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
showSection("assignments"); // default

// ===== STUDENTS =====
function addStudent() {
    students.push({ name: sname.value,roll: sroll.value, course: scourse.value });
sname.value="";
sroll.value="";
scourse.value="";

    updateStudents();
}
function updateStudents() {
    studentTable.innerHTML = students.map((s, i) =>
        `<tr>
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td>${s.course}</td>
            <td>
                <button onclick="editStudent(${i})">Edit</button>
                <button onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>`
    ).join('');
}
function editStudent(i) {
    let n = prompt("Enter new name", students[i].name);
    let c = prompt("Enter new course", students[i].course);
    if (n) students[i].name = n;
    if (c) students[i].course = c;
    updateStudents();
}
function deleteStudent(i) {
    students.splice(i, 1);
    updateStudents();
}

// ===== ATTENDANCE =====
function addAttendance() {
    attendance.push({ name: aname.value,roll: aroll.value, status: astatus.value });
    aname.value="";
    aroll.value="";
    astatus.value ="";
    updateAttendance();
}
function updateAttendance() {
    attendanceTable.innerHTML = attendance.map((a, i) =>
        `<tr>
            <td>${a.name}</td>
            <td>${a.roll}</td>
            <td>${a.status}</td>
            <td>
                <button onclick="editAttendance(${i})">Edit</button>
                <button onclick="deleteAttendance(${i})">Delete</button>
            </td>
        </tr>`
    ).join('');
}
function editAttendance(i) {
    let n = prompt("Enter name", attendance[i].name);
    let s = prompt("Present / Absent", attendance[i].status);
    if (n) attendance[i].name = n;
    if (s) attendance[i].status = s;
    updateAttendance();
}
function deleteAttendance(i) {
    attendance.splice(i, 1);
    updateAttendance();
}

// ===== MARKS =====
function addMarks() {
    marks.push({ name: mname.value,roll: aroll.value, subject: msub.value, marks: mmark.value });
    mname.value ="";
    mroll.value="";
    msub.value="";
    mmark.value="";
    updateMarks();
}
function updateMarks() {
    marksTable.innerHTML = marks.map((m, i) =>
        `<tr>
            <td>${m.name}</td>
            <td>${m.roll}</td>
            <td>${m.subject}</td>
            <td>${m.marks}</td>
            <td>
                <button onclick="editMarks(${i})">Edit</button>
                <button onclick="deleteMarks(${i})">Delete</button>
            </td>
        </tr>`
    ).join('');
}
function editMarks(i) {
    let n = prompt("Enter name", marks[i].name);
    let s = prompt("Enter subject", marks[i].subject);
    let m = prompt("Enter marks", marks[i].marks);
    if (n) marks[i].name = n;
    if (s) marks[i].subject = s;
    if (m) marks[i].marks = m;
    updateMarks();
}
function deleteMarks(i) {
    marks.splice(i, 1);
    updateMarks();
}

// ===== ASSIGNMENTS =====
function addAssignment() {
    assignments.push({subject: asub.value, code:acode.value, title: atitle.value, desc: adesc.value });
     asub.value="";
    acode.value="";
    atitle.value="";
   adesc.value ="";
    updateAssignments();
}
function updateAssignments() {
    assignmentList.innerHTML = assignments.map((a, i) =>
        `<li>
            <b>${a.title}</b>: ${a.desc}
            <button onclick="editAssignment(${i})">Edit</button>
            <button onclick="deleteAssignment(${i})">Delete</button>
        </li>`
    ).join('');
}
function editAssignment(i) {
    let t = prompt("Enter title", assignments[i].title);
    let d = prompt("Enter description", assignments[i].desc);
    if (t) assignments[i].title = t;
    if (d) assignments[i].desc = d;
    updateAssignments();
}
function deleteAssignment(i) {
    assignments.splice(i, 1);
    updateAssignments();
}

// ===== NOTICES =====
function addNotice() {
    notices.push({ title: ntitle.value, desc: ndesc.value });
    ntitle.value="";
   ndesc.value  ="";
    updateNotices();
}
function updateNotices() {
    noticeList.innerHTML = notices.map((n, i) =>
        `<li>
            <b>${n.title}</b>: ${n.desc}
            <button onclick="editNotice(${i})">Edit</button>
            <button onclick="deleteNotice(${i})">Delete</button>
        </li>`
    ).join('');
}
function editNotice(i) {
    let t = prompt("Enter title", notices[i].title);
    let d = prompt("Enter details", notices[i].desc);
    if (t) notices[i].title = t;
    if (d) notices[i].desc = d;
    updateNotices();
}
function deleteNotice(i) {
    notices.splice(i, 1);
    updateNotices();
}

// ===== TIMETABLE =====
function addTimeTable() {
    timetable.push({ day: tday.value, sub: tsub.value });
    tday.value="";
    tsub.value="";
    updateTimeTable();
}
function updateTimeTable() {
    timetableTable.innerHTML = timetable.map((t, i) =>
        `<tr>
            <td>${t.day}</td>
            <td>${t.sub}</td>
            <td>
                <button onclick="editTimeTable(${i})">Edit</button>
                <button onclick="deleteTimeTable(${i})">Delete</button>
            </td>
        </tr>`
    ).join('');
}
function editTimeTable(i) {
    let d = prompt("Enter day", timetable[i].day);
    let s = prompt("Enter subject", timetable[i].sub);
    if (d) timetable[i].day = d;
    if (s) timetable[i].sub = s;
    updateTimeTable();
}
function deleteTimeTable(i) {
    timetable.splice(i, 1);
    updateTimeTable();
}

// ===== STUDY MATERIALS =====
function addMaterial() {
    materials.push({ title: mtitle.value, link: mlink.value });
   mtitle.value ="";
    mlink.value="";
    updateMaterials();
}
function updateMaterials() {
    materialList.innerHTML = materials.map((m, i) =>
        `<li>
            <b>${m.title}</b> -
            <a href="${m.link}" target="_blank">Open</a>
            <button onclick="editMaterial(${i})">Edit</button>
            <button onclick="deleteMaterial(${i})">Delete</button>
        </li>`
    ).join('');
}
function editMaterial(i) {
    let t = prompt("Enter title", materials[i].title);
    let l = prompt("Enter link", materials[i].link);
    if (t) materials[i].title = t;
    if (l) materials[i].link = l;
    updateMaterials();
}
function deleteMaterial(i) {
    materials.splice(i, 1);
    updateMaterials();
}
