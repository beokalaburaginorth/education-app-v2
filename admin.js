import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const CLOUD_NAME = "ycyleyq2";
const UPLOAD_PRESET = "beo_gallery";

window.adminLogin = function () {

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
