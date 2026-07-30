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
function showCircularManager(){

document.getElementById("output").innerHTML = `

<h2>📄 Circular Manager</h2>

<input type="file" id="circularFile" accept=".pdf">
<input type="file" id="editCircularFile" accept=".pdf" style="display:none;">
<br><br>

<input type="text" id="circularTitle" placeholder="Circular Title">

<br><br>

<button onclick="uploadCircular()">📤 Upload Circular</button>
<hr>

<h3>Manage Circulars</h3>

<div id="manageCirculars"></div>
<hr>

<div id="circularStatus"></div>

`;
showManageCirculars();
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

const gallery = JSON.parse(localStorage.getItem("galleryImages")) || [];

let html = `
<h2>🎓 Teacher Training</h2>
`;

const training = gallery.filter(photo => photo.category === "Teacher Training");

if(training.length === 0){

html += "<p>No Photos Available</p>";

}else{

training.forEach(photo => {

html += `

<div class="card" style="margin-bottom:20px;">

<h3>${photo.title}</h3>

<p>📅 ${photo.date}</p>

<img src="${photo.image}"
style="width:100%;max-width:700px;border-radius:10px;">
<br><br>

<button
<button onclick="deletePhoto('${photo.image}'); return false;">
style="background:red;color:white;padding:8px 15px;border:none;border-radius:6px;cursor:pointer;">
🗑 Delete Photo
</button>
</div>

`;

});

}

html += `

<br>

<button onclick="showGallery()">⬅ Back to Gallery</button>

`;

document.getElementById("output").innerHTML = html;

}

function showMeetings() {

const gallery = JSON.parse(localStorage.getItem("galleryImages")) || [];

const meetings = gallery.filter(photo => photo.category === "Meetings");

let html = `
<h2>📢 Meetings</h2>
`;

if(meetings.length === 0){

html += "<p>No Photos Available</p>";

}else{

meetings.forEach(photo => {

html += `
<div class="card" style="margin-bottom:20px;">
<h3>${photo.title}</h3>
<p>📅 ${photo.date}</p>
<img src="${photo.image}"
style="width:100%;max-width:700px;border-radius:10px;">
</div>
`;

});

}

html += `
<br>
<button onclick="showGallery()">⬅ Back to Gallery</button>
`;

document.getElementById("output").innerHTML = html;

}

function showSchoolVisit() {

const gallery = JSON.parse(localStorage.getItem("galleryImages")) || [];

const visits = gallery.filter(photo => photo.category === "School Visits");

let html = `<h2>🏫 School Visits</h2>`;

if(visits.length === 0){

html += "<p>No Photos Available</p>";

}else{

visits.forEach(photo => {

html += `
<div class="card" style="margin-bottom:20px;">
<h3>${photo.title}</h3>
<p>📅 ${photo.date}</p>
<img src="${photo.image}" style="width:100%;max-width:700px;border-radius:10px;">
</div>
`;

});

}

html += `<br><button onclick="showGallery()">⬅ Back to Gallery</button>`;

document.getElementById("output").innerHTML = html;

}

function showFestivals() {

const gallery = JSON.parse(localStorage.getItem("galleryImages")) || [];

const festivals = gallery.filter(photo => photo.category === "National Festivals");

let html = `<h2>🇮🇳 National Festivals</h2>`;

if(festivals.length === 0){

html += "<p>No Photos Available</p>";

}else{

festivals.forEach(photo => {

html += `
<div class="card" style="margin-bottom:20px;">
<h3>${photo.title}</h3>
<p>📅 ${photo.date}</p>
<img src="${photo.image}" style="width:100%;max-width:700px;border-radius:10px;">
</div>
`;

});

}

html += `<br><button onclick="showGallery()">⬅ Back to Gallery</button>`;

document.getElementById("output").innerHTML = html;

}

function showAdmin() {

document.getElementById("output").innerHTML = `

<h2>🔐 Admin Panel</h2>

<div class="container">

<div class="card" onclick="galleryManager()">
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




function showDownloadManager(){

document.getElementById("output").innerHTML = `

<h2>📥 Download Manager</h2>

<input type="file" id="downloadFile">

<br><br>

<input type="text" id="downloadTitle" placeholder="File Title">

<br><br>

<button onclick="uploadDownload()">📤 Upload File</button>

<hr>

<div id="downloadStatus"></div>

`;

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
const pass = document.getElementById("password").value.trim();

if (user === "beoadmin" && pass === "KLB2026@BEO") {

    alert("✅ Login Successful");

    showAdmin();

} else {

    alert("❌ Invalid Username or Password");

}

}
function galleryManager(){

document.getElementById("output").innerHTML = `

<h2>📸 Gallery Manager</h2>

<input type="file" id="galleryPhoto">

<br><br>

<input type="text" id="photoTitle" placeholder="Photo Title">
<br><br>

<select id="photoCategory">

<option value="Teacher Training">🎓 Teacher Training</option>

<option value="Meetings">📢 Meetings</option>

<option value="School Visits">🏫 School Visits</option>

<option value="National Festivals">🇮🇳 National Festivals</option>

</select>

<br><br>
<br><br>
<br><br>

<h3>📷 Preview</h3>

<img
  id="previewImage"
  style="max-width:300px;border-radius:10px;display:none;">

<br><br>
<button onclick="uploadPhoto()">📤 Upload Photo</button>

<hr>

<div id="galleryStatus"></div>

`;

}
async function uploadPhoto(){
  
const file = document.getElementById("galleryPhoto").files[0];
const title = document.getElementById("photoTitle").value;
const category = document.getElementById("photoCategory").value;
if(!file){
  alert("Please Select Photo");
  return;
}

const formData = new FormData();
formData.append("file", file);
formData.append("upload_preset", "beo_gallery");

document.getElementById("galleryStatus").innerHTML = "Uploading...";

try{

const res = await fetch("https://api.cloudinary.com/v1_1/ycyleyq2/image/upload",{
method:"POST",
body:formData
});

const data = await res.json();
let gallery = JSON.parse(localStorage.getItem("galleryImages")) || [];

gallery.push({
  title: title,
  category: category,
  image: data.secure_url,
  date: new Date().toLocaleDateString()
});

localStorage.setItem("galleryImages", JSON.stringify(gallery));
document.getElementById("galleryStatus").innerHTML = `
✅ Upload Success<br><br>
<b>${title}</b><br>
<a href="${data.secure_url}" target="_blank">View Photo</a>
`;

}catch(e){

document.getElementById("galleryStatus").innerHTML="❌ Upload Failed";

}

}



function uploadDownload(){

const file = document.getElementById("downloadFile").files[0];
const title = document.getElementById("downloadTitle").value;

if(!file){
alert("Please Select File");
return;
}

document.getElementById("downloadStatus").innerHTML =
"✅ File Selected : <b>"+file.name+"</b><br><br>📄 Title : "+title;

}
document.addEventListener("change", function(e){

  if(e.target.id === "galleryPhoto"){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(){

      const img = document.getElementById("previewImage");

      img.src = reader.result;

      img.style.display = "block";

    };

    reader.readAsDataURL(file);

  }

});
function deletePhoto(imageUrl){

if(!confirm("Are you sure you want to delete this photo?")){
    return;
}

let gallery = JSON.parse(localStorage.getItem("galleryImages")) || [];

gallery = gallery.filter(photo => photo.image !== imageUrl);

localStorage.setItem("galleryImages", JSON.stringify(gallery));

alert("✅ Photo Deleted Successfully");

showTraining();

}


function showCirculars() {

let circulars = JSON.parse(localStorage.getItem("circulars")) || [];
  circulars.sort((a, b) => (b.pinned || false) - (a.pinned || false));

let html = `
<h2>📄 Latest Circulars</h2>
<input type="text"
id="searchCircular"
placeholder="Search Circular..."
onkeyup="searchCircular()"
style="width:100%;padding:10px;margin:10px 0;">
`;

if (circulars.length === 0) {

html += "<p>No Circulars Available</p>";

} else {

circulars.forEach((c, index) => {

html += `
<div class="card" style="margin-bottom:20px;">

<h3>${c.pinned ? "📍 " : ""}${c.title} <span style="background:red;color:white;padding:2px 6px;border-radius:5px;font-size:12px;">🆕 NEW</span></h3>
<p style="word-break:break-all;">${c.pdf}</p>
<p>📅 ${c.date}</p>

<a href="${c.pdf}?download=1" target="_blank">
<button>👁 View PDF</button>
</a>

&nbsp;

<a href="${c.pdf}" download>
<button>⬇ Download PDF</button>
</a>

</div>
`;

});

}

html += `
<br>
<button onclick="showHome()">🏠 Home</button>
`;

document.getElementById("output").innerHTML = html;

}
async function uploadCircular() {

  const file = document.getElementById("circularFile").files[0];
  const title = document.getElementById("circularTitle").value;

  if (!file) {
    alert("Please Select PDF");
    return;
  }

  document.getElementById("circularStatus").innerHTML =
    "⏳ Uploading PDF...";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "beo_gallery");

  try {

    const res = await fetch("https://api.cloudinary.com/v1_1/ycyleyq2/raw/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
console.log(data);
alert(JSON.stringify(data));
    if (!data.secure_url) {
      document.getElementById("circularStatus").innerHTML =
        "❌ Upload Failed";
      console.log(data);
      return;
    }

    let circulars =
      JSON.parse(localStorage.getItem("circulars")) || [];

    circulars.push({
      title: title,
      pdf: (data.secure_url || data.url).replace("http://", "https://"),
      date: new Date().toLocaleDateString()
    });

    localStorage.setItem("circulars", JSON.stringify(circulars));

    document.getElementById("circularStatus").innerHTML =
      "✅ Circular Uploaded Successfully";
document.getElementById("circularFile").value = "";
document.getElementById("circularTitle").value = "";
showCirculars();
  } catch (e) {

    document.getElementById("circularStatus").innerHTML =
      "❌ Upload Failed";

    console.log(e);
  }
}
function deleteCircular(index) {
  let circulars = JSON.parse(localStorage.getItem("circulars")) || [];

  if (confirm("Delete this circular?")) {
    circulars.splice(index, 1);
    localStorage.setItem("circulars", JSON.stringify(circulars));
    showCirculars();
    alert("Circular deleted successfully.");
  }
}
function editCircular(index) {
  let circulars = JSON.parse(localStorage.getItem("circulars")) || [];

  let newTitle = prompt("Edit Circular Title", circulars[index].title);

  if (newTitle !== null && newTitle.trim() !== "") {
    circulars[index].title = newTitle.trim();
    localStorage.setItem("circulars", JSON.stringify(circulars));
    showCirculars();
    alert("Circular updated successfully.");
  }
}
function pinCircular(index) {

    let circulars = JSON.parse(localStorage.getItem("circulars")) || [];

    let pinned = circulars.splice(index, 1)[0];
pinned.pinned = true;
    circulars.unshift(pinned);

    localStorage.setItem("circulars", JSON.stringify(circulars));

    alert("📌 Circular pinned successfully.");

    if (document.getElementById("manageCirculars")) {
    showManageCirculars();
}
showCirculars();

}
function searchCircular() {

    let input = document.getElementById("searchCircular").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

    let h3 = card.querySelector("h3");
    if (!h3) return;

    let title = h3.innerText.toLowerCase();

    if (title.includes(input)) {
        card.style.display = "";
    } else {
        card.style.display = "none";
    }

});
}

function showManageCirculars() {


    let circulars = JSON.parse(localStorage.getItem("circulars")) || [];
    let html = "";

    circulars.forEach((c, index) => {

        html += `
        <div class="card" style="margin-bottom:10px;">
            <b>${c.title}</b><br><br>

            <button onclick="editCircular(${index})">✏ Edit</button>
<button onclick="pinCircular(${index})">📌 Pin</button>
            <button onclick="deleteCircular(${index})"
            style="background:red;color:white;">
            🗑 Delete
            </button>

        </div>
        `;

    });

const box = document.getElementById("manageCirculars");
if (box) {
    box.innerHTML = html;
}
}
