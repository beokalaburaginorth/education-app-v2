import { db, storage } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
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

window.showGallery = async function () {

    setContent("<h2>🖼 Gallery</h2><div id='galleryContainer'>Loading...</div>");

    const container = document.getElementById("galleryContainer");

    try {

        const snapshot = await getDocs(collection(db, "gallery"));

        let html = "<div class='gallery-grid'>";

        snapshot.forEach((doc) => {
            const data = doc.data();

            html += `
                <div class="gallery-card">
                    <img src="${data.image}" alt="">
                    <h3>${data.title}</h3>
                </div>
            `;
        });

        html += "</div>";

        container.innerHTML = html;

    } catch (error) {

        console.error(error);
        container.innerHTML = "<h3>Gallery loading failed.</h3>";

    }

};


// =======================
// CIRCULARS
// =======================

window.showCirculars = async function () {

    setContent(`
        <h2>📢 Circulars</h2>
        <div id="circularContainer">Loading...</div>
    `);

    const container = document.getElementById("circularContainer");

    try {

        const snapshot = await getDocs(collection(db, "circulars"));

        let html = "";

        snapshot.forEach((doc) => {
            const data = doc.data();

            html += `
                <div class="gallery-card">
                    <h3>${data.title}</h3>
                    <br>
                    <a href="${data.pdf}" target="_blank">
                        📄 Open Circular
                    </a>
                </div>
                <hr>
            `;
        });

        container.innerHTML = html;

    } catch (error) {

        console.error(error);
        container.innerHTML = "<h3>Failed to load circulars.</h3>";

    }

};


// =======================
// PAGE LOAD
// =======================

window.onload = function () {

    showHome();

};
