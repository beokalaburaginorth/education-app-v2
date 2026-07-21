function showSchools() {

  const clusters = [...new Set(schools.map(s => s.cluster))].sort();

  let html = `
    <h2>School Master</h2>

    <label><b>Select Cluster</b></label><br>

    <select id="cluster" onchange="loadSchools()">
      <option value="">-- Select Cluster --</option>
  `;

  clusters.forEach(cluster => {
    html += `<option value="${cluster}">${cluster}</option>`;
  });

  html += `
    </select>

    <br><br>

    
    <br><br>

    <label><b>Select School</b></label><br>

    <select id="school" onchange="showSchoolDetails()">
      <option value="">-- Select School --</option>
    </select>

    <br><br>

    <div id="schoolDetails"></div>
<hr>
<div id="clusterCount"></div>
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

  document.getElementById("clusterCount").innerHTML =
    "<b>Total Schools in Cluster :</b> " +
    schools.filter(s => s.cluster === cluster).length;

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

      school.innerHTML +=
      `<option value="${s.dise}">
        ${s.name}
      </option>`;

    });

}

function showSchoolDetails() {

  const dise = document.getElementById("school").value;

  if (!dise) {
    document.getElementById("schoolDetails").innerHTML = "";
    return;
  }

  const school = schools.find(s => s.dise === dise);

  if (!school) return;

  document.getElementById("schoolDetails").innerHTML = `

    <hr>

    <h3>School Details</h3>

    <p><b>🏫 School :</b> ${school.name}</p>

    <p><b>🏢 Cluster :</b> ${school.cluster}</p>

    <p><b>🆔 DISE :</b> ${school.dise}</p>

    <p><b>📚 Type :</b> ${school.type}</p>

  `;

}
function searchDISE() {

  const dise = prompt("Enter DISE Code");

  if (!dise) return;

  const school = schools.find(s => s.dise === dise);

  if (school) {

    document.getElementById("output").innerHTML = `
      <h2>School Details</h2>

      <p><b>🏫 School :</b> ${school.name}</p>
      <p><b>🏢 Cluster :</b> ${school.cluster}</p>
      <p><b>🆔 DISE :</b> ${school.dise}</p>
      <p><b>📚 School Type :</b> ${school.type}</p>
    `;

  } else {

    document.getElementById("output").innerHTML =
      "<h3 style='color:red'>School Not Found</h3>";

  }

}

function showTeachers() {

  document.getElementById("output").innerHTML = `
    <h2>Teacher Master</h2>
    <p>Coming Soon...</p>
  `;

}

function searchKGID() {

  const kgid = prompt("Enter KGID Number");

  if (!kgid) return;

  document.getElementById("output").innerHTML = `
    <h2>KGID Search</h2>
    <p>Entered KGID : <b>${kgid}</b></p>
  `;

}
function showDashboard() {

  const totalSchools = schools.length;
  const totalClusters = [...new Set(schools.map(s => s.cluster))].length;
  const lps = schools.filter(s => s.type === "LPS").length;
  const hps = schools.filter(s => s.type === "HPS").length;
  const hs = schools.filter(s => s.type === "HS").length;

  document.getElementById("output").innerHTML = `
    <h2>📊 Dashboard</h2>

    <p><b>🏫 Total Schools:</b> ${totalSchools}</p>
    <p><b>🏢 Total Clusters:</b> ${totalClusters}</p>
    <p><b>📚 LPS:</b> ${lps}</p>
    <p><b>🏫 HPS:</b> ${hps}</p>
    <p><b>🎓 HS:</b> ${hs}</p>
  `;
}
