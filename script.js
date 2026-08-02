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
        <h2>⬇ Downloads</h2>

        <button onclick="downloadGovtExcel()">📊 Govt Excel</button>

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
