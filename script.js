function showSchools() {
  let html = "<h2>School List</h2><table border='1' cellpadding='8'>";
  html += "<tr><th>DISE</th><th>School Name</th><th>Cluster</th><th>Type</th></tr>";

  schools.forEach(s => {
    html += `<tr>
      <td>${s.dise}</td>
      <td>${s.name}</td>
      <td>${s.cluster}</td>
      <td>${s.type}</td>
    </tr>`;
  });

  html += "</table>";
  document.getElementById("output").innerHTML = html;
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
