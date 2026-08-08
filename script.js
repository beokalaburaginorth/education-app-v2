import { db } from "./firebase.js";

import {
  doc,
  getDoc,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

function setContent(html) {
  document.getElementById("content").innerHTML = html;
}


// =======================
// LOAD CHART.JS
// =======================

function loadChartJS() {
  return new Promise((resolve, reject) => {

    if (window.Chart) {
      resolve();
      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/chart.js";

    script.onload = resolve;
    script.onerror = reject;

    document.head.appendChild(script);
  });
}


// =======================
// HOME
// =======================

window.showHome = async function () {

  const dashboardRef =
    doc(db, "dashboard", "statistics");

  const dashboardSnap =
    await getDoc(dashboardRef);

  let stats = {

    govtPrimarySchools: 0,
    govtHighSchools: 0,

    aidedPrimarySchools: 0,
    aidedHighSchools: 0,

    govtPrimaryTeachers: 0,
    govtHighTeachers: 0,

    aidedPrimaryTeachers: 0,
    aidedHighTeachers: 0

  };


  if (dashboardSnap.exists()) {

    stats = {
      ...stats,
      ...dashboardSnap.data()
    };

  }


  setContent(`

    <h2>🏫 Welcome</h2>

    <p>
      Welcome to BEO Kalaburagi North Education Portal
    </p>

    <div class="dashboard">

      <!-- PIE CHART -->

      <div class="card">

        <h3>📊 Schools Distribution</h3>

        <canvas id="schoolPieChart"></canvas>

      </div>


      <!-- SCHOOL CARDS -->

      <div class="card">
        <h3>🏫 Govt Primary Schools</h3>
        <h2>${stats.govtPrimarySchools}</h2>
      </div>

      <div class="card">
        <h3>🏫 Govt High Schools</h3>
        <h2>${stats.govtHighSchools}</h2>
      </div>

      <div class="card">
        <h3>🏫 Aided Primary Schools</h3>
        <h2>${stats.aidedPrimarySchools}</h2>
      </div>

      <div class="card">
        <h3>🏫 Aided High Schools</h3>
        <h2>${stats.aidedHighSchools}</h2>
      </div>


      <!-- TEACHER CARDS -->

      <div class="card">
        <h3>👨‍🏫 Govt Primary Teachers</h3>
        <h2>${stats.govtPrimaryTeachers}</h2>
      </div>

      <div class="card">
        <h3>👨‍🏫 Govt High School Teachers</h3>
        <h2>${stats.govtHighTeachers}</h2>
      </div>

      <div class="card">
        <h3>👨‍🏫 Aided Primary Teachers</h3>
        <h2>${stats.aidedPrimaryTeachers}</h2>
      </div>

      <div class="card">
        <h3>👨‍🏫 Aided High School Teachers</h3>
        <h2>${stats.aidedHighTeachers}</h2>
      </div>

    </div>

  `);


  // =======================
  // CREATE PIE CHART
  // =======================

  await loadChartJS();

  const canvas =
    document.getElementById("schoolPieChart");


  new Chart(canvas, {

    type: "pie",

    data: {

      labels: [

        "Govt Primary",
        "Govt High School",
        "Aided Primary",
        "Aided High School"

      ],

      datasets: [{

        data: [

          Number(stats.govtPrimarySchools) || 0,

          Number(stats.govtHighSchools) || 0,

          Number(stats.aidedPrimarySchools) || 0,

          Number(stats.aidedHighSchools) || 0

        ]

      }]

    },

    options: {

      responsive: true,

      plugins: {

        legend: {

          position: "bottom"

        }

      }

    }

  });

};


// =======================
// GALLERY
// =======================

window.showGallery = async function () {

  setContent(`

    <h2>🖼️ Gallery</h2>

    <p>Loading gallery...</p>

  `);


  try {

    const galleryRef =
      collection(db, "gallery");

    const snapshot =
      await getDocs(galleryRef);


    let html = `

      <h2>🖼️ Gallery</h2>

      <div class="dashboard">

    `;


    if (snapshot.empty) {

      html += `

        <div class="card">

          <h3>No Gallery Images</h3>

          <p>Gallery is empty.</p>

        </div>

      `;

    } else {

      snapshot.forEach((docSnap) => {

        const data =
          docSnap.data();


        const imageUrl =

          data.imageUrl ||

          data.imageURL ||

          data.url ||

          data.photo ||

          data.image;


        const title =

          data.title ||

          data.name ||

          "Gallery Image";


        if (imageUrl) {

          html += `

            <div class="card">

              <img

                src="${imageUrl}"

                alt="${title}"

                style="
                  width:100%;
                  max-width:500px;
                  border-radius:10px;
                  display:block;
                  margin:auto;
                "

              >

              <h3>${title}</h3>

            </div>

          `;

        }

      });

    }


    html += `</div>`;


    setContent(html);


  } catch (error) {

    console.error(
      "Gallery Error:",
      error
    );


    setContent(`

      <h2>🖼️ Gallery</h2>

      <div class="card">

        <h3>Gallery Error</h3>

        <p>${error.message}</p>

      </div>

    `);

  }

};
// =======================
// CIRCULAR
// =======================

window.showCirculars = async function () {

  setContent(`
    <h2>📢 Circulars</h2>
    <p>Loading circulars...</p>
  `);

  try {

    console.log("Circular loading started");

    const circularRef = collection(db, "circulars");

    const snapshot = await getDocs(circularRef);

    console.log("Circular documents:", snapshot.size);

    let html = `
      <h2>📢 Circulars</h2>
    `;

    if (snapshot.empty) {

      html += `
        <div class="card">
          <h3>No Circulars Found</h3>
          <p>Firestore circulars collection is empty.</p>
        </div>
      `;

    } else {

      snapshot.forEach((docSnap) => {

        const data = docSnap.data();

        const title =
          data.title ||
          data.name ||
          data.subject ||
          "Circular";

        const pdfUrl =
          data.pdf ||
          data.pdfUrl ||
          data.pdfURL ||
          data.fileUrl ||
          data.url;

        html += `
          <div class="card">

            <h3>📄 ${title}</h3>

            ${
              pdfUrl
                ? `
                  <a
                    href="${pdfUrl}"
                    target="_blank"
                    style="
                      display:inline-block;
                      padding:10px 20px;
                      background:#1976d2;
                      color:white;
                      border-radius:6px;
                      text-decoration:none;
                    "
                  >
                    📄 View Circular
                  </a>
                `
                : `
                  <p>PDF link not found</p>
                `
            }

          </div>
        `;

      });
    }

    setContent(html);

  } catch (error) {

    console.error("CIRCULAR ERROR:", error);

    setContent(`
      <h2>📢 Circulars</h2>

      <div class="card">

        <h3>❌ Circular loading error</h3>

        <p>${error.message}</p>

      </div>
    `);
  }
};

