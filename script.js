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
