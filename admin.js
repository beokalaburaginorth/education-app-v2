import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const CLOUD_NAME = "ycyleyq2";
const UPLOAD_PRESET = "beo_gallery";

window.adminLogin = function () {

    const username = prompt("Enter Username");
    const password = prompt("Enter Password");

    if (username !== "admin" || password !== "1234") {
        alert("Invalid Username or Password");
        return;
    }

    document.getElementById("content").innerHTML = `

<h2>Admin Panel</h2>

<div class="admin-box">

<h3>Gallery Upload</h3>

<input type="text" id="galleryTitle" placeholder="Image Title"><br><br>

<input type="file" id="galleryFile" accept="image/*"><br><br>

<button onclick="uploadGallery()">Upload Gallery</button>

<hr>

<h3>Circular Upload</h3>

<input type="text" id="circularTitle" placeholder="Circular Title"><br><br>

<input type="file" id="circularFile" accept=".pdf"><br><br>

<button onclick="uploadCircular()">Upload Circular</button>

</div>

`;

};
window.uploadGallery = async function () {
    const file = document.getElementById("galleryFile").files[0];
    const title = document.getElementById("galleryTitle").value;

    if (!file || !title) {
        alert("Please select image and enter title.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        await addDoc(collection(db, "gallery"), {
            title: title,
            image: data.secure_url,
            createdAt: new Date().toISOString()
        });

        alert("✅ Gallery uploaded successfully!");

        document.getElementById("galleryTitle").value = "";
        document.getElementById("galleryFile").value = "";

    } catch (err) {

        console.error(err);
        alert("❌ Upload failed.");

    }

};
window.uploadCircular = async function () {

    const file = document.getElementById("circularFile").files[0];
    const title = document.getElementById("circularTitle").value;

    if (!file || !title) {
        alert("Please select PDF and enter title.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        await addDoc(collection(db, "circulars"), {
            title: title,
            pdf: data.secure_url,
            createdAt: new Date().toISOString()
        });

        alert("✅ Circular uploaded successfully!");

        document.getElementById("circularTitle").value = "";
        document.getElementById("circularFile").value = "";

    } catch (err) {
        console.error(err);
        alert("❌ Circular upload failed.");
    }

};
