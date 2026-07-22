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
<div style="background:#f8f9fa;padding:20px;border-radius:10px;border:1px solid #ddd; margin-top:15px;">

<h2>🏫 School Profile</h2>
<hr>

<p><b>🏫 School Name :</b> ${school.name}</p>
<p><b>🆔 DISE Code :</b> ${school.dise}</p>
<p><b>🏢 Cluster :</b> ${school.cluster}</p>
<p><b>📚 School Type :</b> ${school.type}</p>

<hr>

<p><b>👨‍🏫 HM Name :</b> Coming Soon</p>
<p><b>📞 HM Mobile :</b> Coming Soon</p>
<p><b>🎓 Medium :</b> Coming Soon</p>
<p><b>👨‍🎓 Total Students :</b> Coming Soon</p>
<p><b>👨‍🏫 Total Teachers :</b> Coming Soon</p>

</div>
`;
}
function searchDISE() {

  const dise = prompt("Enter DISE Code");

  if (!dise) return;

  const school = schools.find(s => s.dise === dise);

  if (school) {

    document.getElementById("output").innerHTML = `
<div style="background:#f8f9fa;padding:20px;border-radius:10px;border:1px solid #ddd;">

<h2>🏫 School Profile</h2>
<hr>

<p><b>🏫 School Name :</b> ${school.name}</p>

<p><b>🆔 DISE Code :</b> ${school.dise}</p>

<p><b>🏢 Cluster :</b> ${school.cluster}</p>

<p><b>📚 School Type :</b> ${school.type}</p>

<hr>

<p><b>👨‍🏫 HM Name :</b> Coming Soon</p>

<p><b>📞 HM Mobile :</b> Coming Soon</p>

<p><b>🎓 Medium :</b> Coming Soon</p>

<p><b>👨‍🎓 Total Students :</b> Coming Soon</p>

<p><b>👨‍🏫 Total Teachers :</b> Coming Soon</p>

</div>
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
alert("Dashboard Working");
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
    <hr>

<h3>📋 Cluster-wise School Count</h3>

<table border="1" style="width:100%; border-collapse:collapse;">
<tr>
  <th>Cluster</th>
  <th>Schools</th>
</tr>

${
  [...new Set(schools.map(s => s.cluster))]
    .sort()
    .map(cluster => `
      <tr>
        <td>${cluster}</td>
        <td>${schools.filter(s => s.cluster === cluster).length}</td>
      </tr>
    `).join("")
}

</table>
  `;
}
function showDownloads() {

  document.getElementById("output").innerHTML = `
    <h2>📥 Downloads</h2>

    <ul>
      <li><a href="#">📄 School List PDF</a></li>
      <li><a href="#">📊 School List Excel</a></li>
      <li><a href="#">📝 Teacher Forms</a></li>
      <li><a href="#">📢 Government Circulars</a></li>
    </ul>

    <p>Downloads coming soon...</p>
  `;
}
function showCirculars() {

  document.getElementById("output").innerHTML = `
    <h2>📢 Government Circulars</h2>

    <ul>
      <li>📄 BEO Office Circular - Coming Soon</li>
      <li>📄 DSERT Circular - Coming Soon</li>
      <li>📄 School Education Department Orders - Coming Soon</li>
      <li>📄 UDISE+ Instructions - Coming Soon</li>
    </ul>

    <p><b>Note:</b> ನಂತರ ಇಲ್ಲಿ PDF links ಸೇರಿಸಬಹುದು.</p>
  `;

}
function showContact() {

  document.getElementById("output").innerHTML = `
    <h2>☎️ Contact Details</h2>

    <p><b>🏢 Office:</b> Block Education Office, Kalaburagi North</p>

    <p><b>📍 Address:</b> Kalaburagi, Karnataka</p>

    <p><b>📞 Phone:</b> Coming Soon</p>

    <p><b>📧 Email:</b> Coming Soon</p>

    <p><b>🌐 Website:</b> Coming Soon</p>
  `;

}
function showGallery() {

  document.getElementById("output").innerHTML = `

  <h2>📸 Photo Gallery</h2>

  <div class="container">

    <div class="card" onclick="showTraining()">
      <h2>🎓 Teacher Training</h2>
      <p>View Photos</p>
    </div>

    <div class="card" onclick="showMeetings()">
      <h2>📢 Meetings</h2>
      <p>View Photos</p>
    </div>

    <div class="card" onclick="showSchoolVisit()">
      <h2>🏫 School Visits</h2>
      <p>View Photos</p>
    </div>

    <div class="card" onclick="showFestivals()">
      <h2>🇮🇳 National Festivals</h2>
      <p>View Photos</p>
    </div>

  </div>

  `;

}
function showTraining() {

  document.getElementById("output").innerHTML = `
    <h2>🎓 Teacher Training</h2>

    <img src="./images/training.jpg?v=1"
         style="width:100%;max-width:700px;border-radius:10px;">

    <br><br>

    <button onclick="showGallery()">⬅ Back to Gallery</button>
  `;

}

function showMeetings() {
  document.getElementById("output").innerHTML = `
    <h2>📢 Meetings</h2>
    <p>Photos Coming Soon...</p>
    <button onclick="showGallery()">⬅ Back to Gallery</button>
  `;
}

function showSchoolVisit() {
  document.getElementById("output").innerHTML = `
    <h2>🏫 School Visits</h2>
    <p>Photos Coming Soon...</p>
    <button onclick="showGallery()">⬅ Back to Gallery</button>
  `;
}

function showFestivals() {
  document.getElementById("output").innerHTML = `
    <h2>🇮🇳 National Festivals</h2>
    <p>Photos Coming Soon...</p>
    <button onclick="showGallery()">⬅ Back to Gallery</button>
  `;
}
function showAdmin() {

  document.getElementById("output").innerHTML = `

  <h2>🔐 Admin Panel</h2>

  <div class="container">

    <div class="card">
      <h2>📸 Upload Photos</h2>
      <p>Gallery Management</p>
    </div>

    <div class="card">
      <h2>📄 Upload Circular</h2>
      <p>PDF & Orders</p>
    </div>

    <div class="card">
      <h2>📥 Upload Downloads</h2>
      <p>Forms & Files</p>
    </div>

    <div class="card">
      <h2>📰 Latest News</h2>
      <p>Portal Updates</p>
    </div>

  </div>

  `;
}
function showAdmin() {

document.getElementById("output").innerHTML = `

<h2>🔐 Admin Panel</h2>

<div class="container">

<div class="card" onclick="showGalleryManager()">
<h2>📸 Gallery Manager</h2>
<p>Manage Photos</p>
</div>

<div class="card" onclick="showCircularManager()">
<h2>📄 Circular Manager</h2>
<p>Manage Circulars</p>
</div>

<div class="card" onclick="showDownloadManager()">
<h2>📥 Download Manager</h2>
<p>Manage Downloads</p>
</div>

<div class="card" onclick="showNewsManager()">
<h2>📰 News Manager</h2>
<p>Latest Updates</p>
</div>

<div class="card" onclick="showSettings()">
<h2>⚙️ Settings</h2>
<p>Portal Settings</p>
</div>

</div>

`;

}
function showGalleryManager(){
document.getElementById("output").innerHTML="<h2>📸 Gallery Manager</h2><p>Coming Soon...</p>";
}

function showCircularManager(){
document.getElementById("output").innerHTML="<h2>📄 Circular Manager</h2><p>Coming Soon...</p>";
}

function showDownloadManager(){
document.getElementById("output").innerHTML="<h2>📥 Download Manager</h2><p>Coming Soon...</p>";
}

function showNewsManager(){
document.getElementById("output").innerHTML="<h2>📰 News Manager</h2><p>Coming Soon...</p>";
}

function showSettings(){
document.getElementById("output").innerHTML="<h2>⚙️ Settings</h2><p>Coming Soon...</p>";
}
function adminLogin() {

document.getElementById("output").innerHTML = `

<h2>🔐 Admin Login</h2>

<input type="text" id="username" placeholder="Username">

<br><br>

<input type="password" id="password" placeholder="Password">

<br><br>

<button onclick="checkLogin()">LOGIN</button>

`;

}

function checkLogin() {

const user = document.getElementById("username").value.trim();
const pass = document.getElementById("password").value;

if(user === "beoadmin" && pass === "KLB2026@BEO") {

showAdmin();

} else {

alert("❌ Wrong Username or Password");

}

}
function galleryManager(){

document.getElementById("output").innerHTML = `

<h2>📸 Gallery Manager</h2>

<input type="file" id="galleryPhoto">

<br><br>

<input type="text" id="photoTitle" placeholder="Photo Title">

<br><br>

<button onclick="uploadPhoto()">📤 Upload Photo</button>

<hr>

<div id="galleryStatus"></div>

`;

}
function uploadPhoto(){

const file=document.getElementById("galleryPhoto").files[0];

const title=document.getElementById("photoTitle").value;

if(!file){

alert("Please Select Photo");

return;

}

document.getElementById("galleryStatus").innerHTML=

"✅ Photo Selected : <b>"+file.name+"</b><br><br>Title : "+title;

}
