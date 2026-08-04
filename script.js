import { db, storage } from "./firebase.js";

function setContent(html) {
    document.getElementById("content").innerHTML = html;
}

// =======================
// HOME
// =======================

window.showHome = function () {

    setContent(`
        <h2>🏫 Welcome</h2>

        <p>
            Welcome to BEO Kalaburagi North Education Portal
        </p>

        <div class="dashboard">

            <div class="card">
                <h3>🏫 Govt Schools</h3>
                <p>Government Schools Information</p>
            </div>

            <div class="card">
                <h3>🏢 Aided Schools</h3>
                <p>Aided Schools Information</p>
            </div>

            <div class="card">
                <h3>👨‍🏫 Teachers</h3>
                <p>Teacher Management</p>
            </div>

            <div class="card">
                <h3>📊 Reports</h3>
                <p>Reports & Statistics</p>
            </div>

        </div>
    `);

};

// =======================
// DOWNLOADS
// =======================

window.showDownloads = function () {

    setContent(`
        <h2>📥 Downloads</h2>

        <p>Downloads will be available here.</p>
    `);

};

// =======================
// GALLERY
// =======================

window.showGallery = function () {

    setContent(`
        <h2>🖼 Gallery</h2>

        <div id="galleryContainer">
            Loading...
        </div>
    `);

};

// =======================
// CIRCULARS
// =======================

window.showCirculars = function () {

    setContent(`
        <h2>📢 Circulars</h2>

        <div id="circularContainer">
            Loading...
        </div>
    `);

};

// =======================
// ADMIN
// =======================

window.adminLogin = function () {

    const password = prompt("Enter Admin Password");

    if (password === "beo123") {

        alert("Login Successful");

    } else {

        alert("Wrong Password");

    }

};

// =======================
// PAGE LOAD
// =======================

window.onload = function () {

    showHome();

};
