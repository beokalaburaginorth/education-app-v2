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
// ==========================
// GALLERY ADMIN
// ==========================

let galleryItems = [];

function showGalleryAdmin() {

    let html = `
        <h2>🖼 Gallery Management</h2>

        <input type="file" id="galleryFile" accept="image/*">

        <br><br>

        <input
            type="text"
            id="galleryTitle"
            placeholder="Photo Title"
            style="width:100%;padding:10px;">

        <br><br>

        <button onclick="uploadGallery()">
            Upload Photo
        </button>

        <hr>

        <div id="galleryList"></div>
    `;

    setAdmin(html);

    renderGallery();

}

function uploadGallery() {

    const file = document.getElementById("galleryFile").files[0];
    const title = document.getElementById("galleryTitle").value;

    if (!file) {
        alert("Select Photo");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        galleryItems.unshift({
            title: title || "Untitled",
            image: e.target.result
        });

        renderGallery();

    };

    reader.readAsDataURL(file);

}

function renderGallery() {

    const box = document.getElementById("galleryList");

    if (!box) return;

    box.innerHTML = "";

    galleryItems.forEach(item => {

        box.innerHTML += `
            <div style="margin-bottom:20px;border:1px solid #ddd;padding:10px;border-radius:8px;">

                <img
                    src="${item.image}"
                    style="width:220px;border-radius:8px;">

                <h4>${item.title}</h4>

            </div>
        `;

    });

}
