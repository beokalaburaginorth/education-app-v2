const schools = [
  {
    name: "Government High School",
    dise: "29010100101",
    type: "High School"
  },
  {
    name: "Government Primary School",
    dise: "29010100102",
    type: "Primary School"
  }
];

const teachers = [
  {
    name: "Ramesh Kumar",
    kgid: "123456",
    school: "Government High School",
    designation: "Head Teacher"
  }
];

function showSchools() {
  let html = "<h2>Schools List</h2>";

  schools.forEach(school => {
    html += `
      <div class="card">
        <h3>${school.name}</h3>
        <p>DISE: ${school.dise}</p>
        <p>Type: ${school.type}</p>
      </div>
    `;
  });

  document.getElementById("output").innerHTML = html;
}

function searchDISE() {
  const dise = prompt("Enter DISE Code");

  const school = schools.find(s => s.dise === dise);

  if (school) {
    document.getElementById("output").innerHTML = `
      <div class="card">
        <h3>${school.name}</h3>
        <p>DISE: ${school.dise}</p>
        <p>Type: ${school.type}</p>
      </div>
    `;
  } else {
    document.getElementById("output").innerHTML =
      "<h2>School Not Found</h2>";
  }
}

function showTeachers() {
  let html = "<h2>Teachers List</h2>";

  teachers.forEach(t => {
    html += `
      <div class="card">
        <h3>${t.name}</h3>
        <p>KGID: ${t.kgid}</p>
        <p>School: ${t.school}</p>
        <p>Designation: ${t.designation}</p>
      </div>
    `;
  });

  document.getElementById("output").innerHTML = html;
}

function searchKGID() {
  const kgid = prompt("Enter KGID Number");

  const teacher = teachers.find(t => t.kgid === kgid);

  if (teacher) {
    document.getElementById("output").innerHTML = `
      <div class="card">
        <h3>${teacher.name}</h3>
        <p>KGID: ${teacher.kgid}</p>
        <p>School: ${teacher.school}</p>
        <p>Designation: ${teacher.designation}</p>
      </div>
    `;
  } else {
    document.getElementById("output").innerHTML =
      "<h2>Teacher Not Found</h2>";
  }
}
function openGoogleForm() {
  window.open("https://forms.gle/ut8fQEWoJeJkm2mv6", "_blank");
}
function showSchools() {
let html = "<h2>School List</h2>";

schools.forEach(s => {
html += `
<div class="card">
<b>${s.name}</b><br>
DISE: ${s.dise}<br>
Cluster: ${s.cluster}<br>
Type: ${s.type}
</div>`;
});

document.getElementById("output").innerHTML = html;
}
