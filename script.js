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
            placeholder="Search School..."
            style="width:100%;padding:10px;margin:15px 0;"
        >

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
