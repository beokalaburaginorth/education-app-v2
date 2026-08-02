// ===============================
// BEO ADMIN PANEL - CLOUDINARY
// ===============================

const CLOUD_NAME = "YOUR_CLOUD_NAME";
const UPLOAD_PRESET = "beo_gallery";

async function uploadGallery() {

    const file = document.getElementById("galleryFile").files[0];
    const title = document.getElementById("galleryTitle").value;

    if (!file) {
        alert("Please select an image");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();

    console.log(data);

    alert("Image uploaded successfully");
}

