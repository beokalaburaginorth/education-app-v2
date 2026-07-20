function showSchools() {

  let clusters = [...new Set(schools.map(s => s.cluster))].sort();

  let html = `
    <h2>School Master</h2>

    <label><b>Select Cluster</b></label><br>
    <select id="cluster" onchange="loadSchools()">
      <option value="">-- Select Cluster --</option>
  `;

  clusters.forEach(c => {
    html += `<option value="${c}">${c}</option>`;
  });

  html += `
    </select>

    <br><br>
<input type="text"
id="schoolSearch"
placeholder="Search School..."
onkeyup="filterSchools()"
style="width:100%;padding:8px;margin-bottom:10px;">
    <label><b>Select School</b></label><br>
    <select id="school" onchange="showSchoolDetails()">
      <option value="">-- Select School --</option>
    </select>

    <br><br>

    <div id="schoolDetails"></div>
  `;

  document.getElementById("output").innerHTML = html;
}

function loadSchools() {

  const cluster = document.getElementById("cluster").value;
  const school = document.getElementById("school");

  school.innerHTML =
    '<option value="">-- Select School --</option>';

  schools
    .filter(s => s.cluster === cluster)
    .forEach(s => {
      school.innerHTML +=
      `<option value="${s.dise}">
        ${s.name}
      </option>`;
    });

}

function searchDISE() {
  const dise = prompt("Enter DISE Code");
  const school = schools.find(s => s.dise === dise);

  if (school) {
    document.getElementById("output").innerHTML = `
      <h2>School Details</h2>
      <p><b>Name:</b> ${school.name}</p>
      <p><b>DISE:</b> ${school.dise}</p>
      <p><b>Cluster:</b> ${school.cluster}</p>
      <p><b>Type:</b> ${school.type}</p>
    `;
  } else {
    document.getElementById("output").innerHTML =
      "<h3 style='color:red;'>School Not Found</h3>";
  }
}

function showTeachers() {
  document.getElementById("output").innerHTML =
    "<h2>Teacher Master</h2><p>Coming Soon...</p>";
}

function searchKGID() {
  const kgid = prompt("Enter KGID Number");
  document.getElementById("output").innerHTML =
    `<h2>KGID Search</h2><p>You entered: ${kgid}</p>`;
}

function showSchoolDetails() {

  const dise = document.getElementById("school").value;

  if (dise === "") {
    document.getElementById("schoolDetails").innerHTML = "";
    return;
  }

  const school = schools.find(s => s.dise === dise);

  if (school) {

    document.getElementById("schoolDetails").innerHTML = `
      <hr>
      <h3>School Details</h3>

      <p><b>🏫 School Name:</b> ${school.name}</p>

      <p><b>🏢 Cluster:</b> ${school.cluster}</p>

      <p><b>🆔 DISE Code:</b> ${school.dise}</p>

      <p><b>📚 School Type:</b> ${school.type}</p>

    `;
  }
function filterSchools() {

  const search = document.getElementById("schoolSearch").value.toUpperCase();
  const cluster = document.getElementById("cluster").value;
  const school = document.getElementById("school");

  school.innerHTML = '<option value="">-- Select School --</option>';

  schools
    .filter(s =>
      s.cluster === cluster &&
      s.name.toUpperCase().includes(search)
    )
    .forEach(s => {
      school.innerHTML += `<option value="${s.dise}">${s.name}</option>`;
    });
}

