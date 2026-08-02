// ==========================
// BEO ADMIN PANEL
// ==========================

function setAdmin(html) {
    document.getElementById("adminContent").innerHTML = html;
}

function showAdminDashboard() {

    setAdmin(`
        <h2>🏠 Admin Dashboard</h2>

        <div class="dashboard-grid">

            <div class="card">
                <h3>🖼 Gallery</h3>
                <p>Manage Gallery Photos</p>
            </div>

            <div class="card">
                <h3>📢 Circulars</h3>
                <p>Manage Circular PDFs</p>
            </div>

            <div class="card">
                <h3>👨‍🏫 Teachers</h3>
                <p>Teacher Management</p>
            </div>

            <div class="card">
                <h3>🏫 Schools</h3>
                <p>School Management</p>
            </div>

        </div>
    `);

}

showAdminDashboard();
