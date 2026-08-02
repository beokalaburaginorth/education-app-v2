// =============================
// BEO EDUCATION PORTAL
// CLEAN SCRIPT - PART 1
// =============================

function setContent(html) {
    document.getElementById("output").innerHTML = html;
}

function showDashboard() {

    setContent(`
        <h2>🏫 Dashboard</h2>

        <p>Welcome to the BEO Kalaburagi North Education Portal.</p>

        <hr>

        <div class="dashboard-grid">

            <div class="card">
                <h3>Govt Schools</h3>
                <p>Manage Government Schools</p>
            </div>

            <div class="card">
                <h3>Aided Schools</h3>
                <p>Manage Aided Schools</p>
            </div>

            <div class="card">
                <h3>Teachers</h3>
                <p>Teacher Management</p>
            </div>

            <div class="card">
                <h3>Reports</h3>
                <p>School & Teacher Reports</p>
            </div>

        </div>
    `);

}

function showSchools() {

    let html = `
        <h2>🏫 Government Schools</h2>

       <input
    type="text"
    id="schoolSearch"
    placeholder="🔍 Search by School Name / DISE"
    onkeyup="filterGovtSchools()"
    style="
        width:100%;
        padding:12px;
        margin:15px 0;
        border-radius:8px;
        border:1px solid #ccc;
    ">

        <table border="1" width="100%" cellspacing="0" cellpadding="8">

            <tr>
                <th>DISE</th>
                <th>School Name</th>
                <th>Cluster</th>
            </tr>
    `;

    if (typeof schools !== "undefined") {

        schools.forEach(s => {

            html += `
                <tr>
                    <td>${s.dise}</td>
                    <td>${s.name}</td>
                    <td>${s.cluster}</td>
                </tr>
            `;

        });

    }

    html += "</table>";

    setContent(html);

}
// =============================
// CLEAN SCRIPT - PART 2
// =============================

function showAidedSchools() {

    let html = `
        <h2>🏢 Aided Schools</h2>

        <table border="1" width="100%" cellspacing="0" cellpadding="8">

            <tr>
                <th>DISE</th>
                <th>School Name</th>
                <th>Cluster</th>
            </tr>
    `;

    if (typeof aidedSchools !== "undefined") {

        aidedSchools.forEach(s => {

            html += `
                <tr>
                    <td>${s.dise}</td>
                    <td>${s.name}</td>
                    <td>${s.cluster}</td>
                </tr>
            `;

        });

    }

    html += "</table>";

    setContent(html);

}

function showTeachers() {

    setContent(`
        <h2>👨‍🏫 Teacher Management</h2>

        <p>Teacher Master will be available after importing Teacher Excel data.</p>
    `);

}

function showDownloads() {
  setContent(`
    <h2>📥 Downloads</h2>

    <button onclick="downloadGovtExcel()">📊 Govt Excel</button>
    <br><br>

    <button onclick="downloadTeacherExcel()">👨‍🏫 Teacher Excel</button>
  `);
}

function showGallery() {

    setContent(`
        <h2>🖼 Gallery</h2>

        <p>No Images Available.</p>
    `);

}

function showCirculars() {

    setContent(`
        <h2>📢 Circulars</h2>

        <p>No Circulars Available.</p>
    `);

}

function showContact() {

    setContent(`
        <h2>☎ Contact</h2>

        <p><b>Block Education Office</b></p>

        <p>Kalaburagi North</p>
    `);

}
function filterGovtSchools(){

    const txt = document
        .getElementById("schoolSearch")
        .value
        .toLowerCase();

    const rows = document.querySelectorAll("table tr");

    rows.forEach((row,index)=>{

        if(index===0) return;

        row.style.display =
            row.innerText.toLowerCase().includes(txt)
            ? ""
            : "none";

    });

}
// ===============================
// ADMIN LOGIN
// ===============================

let isAdmin = false;

function adminLogin() {

    const password = prompt("Enter Admin Password");

    if (password === "beo123") {

        isAdmin = true;

        alert("Admin Login Successful");

        showAdminPanel();

    } else {

        alert("Wrong Password");

    }

}

function showAdminPanel() {

    setContent(`

        <h2>🔐 Admin Panel</h2>

        <hr>

        <button onclick="showGalleryUpload()">🖼 Gallery Upload</button>

        <button onclick="showCircularUpload()">📢 Circular Upload</button>

        <button onclick="logoutAdmin()">🚪 Logout</button>

        <hr>

        <p>Welcome Admin.</p>

    `);

}

function logoutAdmin() {

    isAdmin = false;

    alert("Logged Out");

    showDashboard();

}
function showGalleryUpload() {
    setContent(`
        <h2>🖼 Gallery Upload</h2>

        <input type="file" id="galleryFile"><br><br>

        <input type="text" id="galleryTitle" placeholder="Photo Title"><br><br>

        <button onclick="uploadGallery()">Upload Photo</button>

        <div id="galleryStatus"></div>
    `);
}

function showCircularUpload() {
    setContent(`
        <h2>📢 Circular Upload</h2>

        <input type="file" id="circularFile" accept=".pdf"><br><br>

        <input type="text" id="circularTitle" placeholder="Circular Title"><br><br>

        <button onclick="uploadCircular()">Upload Circular</button>

        <div id="circularStatus"></div>
    `);
}
//=============================
// GALLERY UPLOAD
//=============================

async function uploadGallery(){

const file=document.getElementById("galleryFile").files[0];
const title=document.getElementById("galleryTitle").value;

if(!file){
alert("Select Photo");
return;
}

const formData=new FormData();
formData.append("file",file);
formData.append("upload_preset","beo_gallery");

document.getElementById("galleryStatus").innerHTML="Uploading...";

const res=await fetch("https://api.cloudinary.com/v1_1/ycyleyq2/image/upload",{
method:"POST",
body:formData
});

const data=await res.json();

let gallery=JSON.parse(localStorage.getItem("gallery")||"[]");

gallery.unshift({
title:title,
image:data.secure_url,
date:new Date().toLocaleDateString()
});

localStorage.setItem("gallery",JSON.stringify(gallery));

alert("Gallery Upload Success");

showGallery();
}

//=============================
// CIRCULAR UPLOAD
//=============================

async function uploadCircular(){

const file=document.getElementById("circularFile").files[0];
const title=document.getElementById("circularTitle").value;

if(!file){
alert("Select PDF");
return;
}

const formData=new FormData();
formData.append("file",file);
formData.append("upload_preset","beo_gallery");

document.getElementById("circularStatus").innerHTML="Uploading...";

const res=await fetch("https://api.cloudinary.com/v1_1/ycyleyq2/raw/upload",{
method:"POST",
body:formData
});

const data=await res.json();

let circulars=JSON.parse(localStorage.getItem("circulars")||"[]");

circulars.unshift({
title:title,
pdf:data.secure_url,
date:new Date().toLocaleDateString()
});

localStorage.setItem("circulars",JSON.stringify(circulars));

alert("Circular Upload Success");

showCirculars();
}

//=============================
// SHOW GALLERY
//=============================

function showGallery(){

let gallery=JSON.parse(localStorage.getItem("gallery")||"[]");

let html="<h2>🖼 Gallery</h2>";

if(gallery.length==0){
html+="<p>No Images Available.</p>";
}else{

gallery.forEach(g=>{
html+=`
<div style="margin:20px">
<h3>${g.title}</h3>
<img src="${g.image}" width="250">
<p>${g.date}</p>
</div>
`;
});

}

setContent(html);

}

//=============================
// SHOW CIRCULARS
//=============================

function showCirculars(){

let circulars=JSON.parse(localStorage.getItem("circulars")||"[]");

let html="<h2>📢 Circulars</h2>";

if(circulars.length==0){
html+="<p>No Circulars Available.</p>";
}else{

circulars.forEach(c=>{
html+=`
<div style="margin:20px">
<h3>${c.title}</h3>
<p>${c.date}</p>

<a href="${c.pdf}" target="_blank">
<button>View PDF</button>
</a>

<a href="${c.pdf}" download>
<button>Download PDF</button>
</a>

</div>
`;
});

}

setContent(html);

}
// =============================
// DELETE GALLERY
// =============================

function deleteGallery(index){

    if(!confirm("Delete this photo?")) return;

    let gallery = JSON.parse(localStorage.getItem("gallery") || "[]");

    gallery.splice(index,1);

    localStorage.setItem("gallery",JSON.stringify(gallery));

    showGallery();

}

// =============================
// DELETE CIRCULAR
// =============================

function deleteCircular(index){

    if(!confirm("Delete this circular?")) return;

    let circulars = JSON.parse(localStorage.getItem("circulars") || "[]");

    circulars.splice(index,1);

    localStorage.setItem("circulars",JSON.stringify(circulars));

    showCirculars();

}
