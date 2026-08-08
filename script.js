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
// PROFESSIONAL HOME DASHBOARD
// =======================

window.showHome = async function () {

  try {

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


    // =======================
    // TOTALS
    // =======================

    const totalSchools =
      Number(stats.govtPrimarySchools) +
      Number(stats.govtHighSchools) +
      Number(stats.aidedPrimarySchools) +
      Number(stats.aidedHighSchools);


    const totalTeachers =
      Number(stats.govtPrimaryTeachers) +
      Number(stats.govtHighTeachers) +
      Number(stats.aidedPrimaryTeachers) +
      Number(stats.aidedHighTeachers);


    // =======================
    // DASHBOARD HTML
    // =======================

    setContent(`

      <div class="dashboard-home">

        <div class="welcome-box">

          <div>

            <h2>🏫 BEO Kalaburagi North</h2>

            <p>
              Education Department Dashboard
            </p>

          </div>

          <div class="welcome-icon">
            📚
          </div>

        </div>


        <!-- SUMMARY CARDS -->

        <div class="summary-grid">

          <div class="summary-card school-total">

            <div class="summary-icon">
              🏫
            </div>

            <div>

              <span>Total Schools</span>

              <strong>${totalSchools}</strong>

            </div>

          </div>


          <div class="summary-card teacher-total">

            <div class="summary-icon">
              👨‍🏫
            </div>

            <div>

              <span>Total Teachers</span>

              <strong>${totalTeachers}</strong>

            </div>

          </div>


          <div class="summary-card govt-total">

            <div class="summary-icon">
              🏛️
            </div>

            <div>

              <span>Government Schools</span>

              <strong>
                ${
                  Number(stats.govtPrimarySchools) +
                  Number(stats.govtHighSchools)
                }
              </strong>

            </div>

          </div>


          <div class="summary-card aided-total">

            <div class="summary-icon">
              🏢
            </div>

            <div>

              <span>Aided Schools</span>

              <strong>
                ${
                  Number(stats.aidedPrimarySchools) +
                  Number(stats.aidedHighSchools)
                }
              </strong>

            </div>

          </div>

        </div>


        <!-- CHARTS -->

        <div class="charts-grid">


          <div class="chart-card">

            <h3>📊 School Distribution</h3>

            <div class="chart-box">

              <canvas id="schoolPieChart"></canvas>

            </div>

          </div>


          <div class="chart-card">

            <h3>👨‍🏫 Teacher Distribution</h3>

            <div class="chart-box">

              <canvas id="teacherBarChart"></canvas>

            </div>

          </div>


        </div>


        <!-- SCHOOL DETAILS -->

        <h2 class="section-title">
          🏫 School Details
        </h2>


        <div class="detail-grid">


          <div class="detail-card">

            <span>🏫</span>

            <div>

              <h4>Govt Primary Schools</h4>

              <strong>${stats.govtPrimarySchools}</strong>

            </div>

          </div>


          <div class="detail-card">

            <span>🏫</span>

            <div>

              <h4>Govt High Schools</h4>

              <strong>${stats.govtHighSchools}</strong>

            </div>

          </div>


          <div class="detail-card">

            <span>🏢</span>

            <div>

              <h4>Aided Primary Schools</h4>

              <strong>${stats.aidedPrimarySchools}</strong>

            </div>

          </div>


          <div class="detail-card">

            <span>🏢</span>

            <div>

              <h4>Aided High Schools</h4>

              <strong>${stats.aidedHighSchools}</strong>

            </div>

          </div>


        </div>


        <!-- TEACHER DETAILS -->

        <h2 class="section-title">
          👨‍🏫 Teacher Details
        </h2>


        <div class="detail-grid">


          <div class="detail-card">

            <span>👨‍🏫</span>

            <div>

              <h4>Govt Primary Teachers</h4>

              <strong>${stats.govtPrimaryTeachers}</strong>

            </div>

          </div>


          <div class="detail-card">

            <span>👨‍🏫</span>

            <div>

              <h4>Govt High School Teachers</h4>

              <strong>${stats.govtHighTeachers}</strong>

            </div>

          </div>


          <div class="detail-card">

            <span>👨‍🏫</span>

            <div>

              <h4>Aided Primary Teachers</h4>

              <strong>${stats.aidedPrimaryTeachers}</strong>

            </div>

          </div>


          <div class="detail-card">

            <span>👨‍🏫</span>

            <div>

              <h4>Aided High School Teachers</h4>

              <strong>${stats.aidedHighTeachers}</strong>

            </div>

          </div>


        </div>

      </div>

    `);


    // =======================
    // CHART.JS
    // =======================

    await loadChartJS();


    // =======================
    // SCHOOL DOUGHNUT
    // =======================

    new Chart(
      document.getElementById("schoolPieChart"),
      {

        type: "doughnut",

        data: {

          labels: [
            "Govt Primary",
            "Govt High",
            "Aided Primary",
            "Aided High"
          ],

          datasets: [{

            data: [

              Number(stats.govtPrimarySchools) || 0,
              Number(stats.govtHighSchools) || 0,
              Number(stats.aidedPrimarySchools) || 0,
              Number(stats.aidedHighSchools) || 0

            ],

            borderWidth: 2

          }]

        },

        options: {

          responsive: true,

          maintainAspectRatio: false,

          plugins: {

            legend: {

              position: "bottom"

            }

          }

        }

      }
    );


    // =======================
    // TEACHER BAR CHART
    // =======================

    new Chart(
      document.getElementById("teacherBarChart"),
      {

        type: "bar",

        data: {

          labels: [

            "Govt Primary",
            "Govt High",
            "Aided Primary",
            "Aided High"

          ],

          datasets: [{

            label: "Teachers",

            data: [

              Number(stats.govtPrimaryTeachers) || 0,
              Number(stats.govtHighTeachers) || 0,
              Number(stats.aidedPrimaryTeachers) || 0,
              Number(stats.aidedHighTeachers) || 0

            ],

            borderWidth: 1

          }]

        },

        options: {

          responsive: true,

          maintainAspectRatio: false,

          scales: {

            y: {

              beginAtZero: true

            }

          },

          plugins: {

            legend: {

              display: false

            }

          }

        }

      }
    );


  } catch (error) {

    console.error("Dashboard Error:", error);

    setContent(`

      <div class="card">

        <h2>❌ Dashboard Error</h2>

        <p>${error.message}</p>

      </div>

    `);

  }

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
// ======================================
// STEP 4 - SCHOOL SELECTOR
// Cluster → Government / Aided → School
// ======================================

window.showSchoolSelector = async function () {

  setContent(`
    <h2>🏫 School Information</h2>

    <div class="card">

      <label><b>Select Cluster</b></label>
      <select id="clusterSelect" onchange="loadSchoolsByCluster()">
        <option value="">-- Select Cluster --</option>
      </select>

      <br><br>

      <label><b>Government Schools</b></label>
      <select id="govtSchoolSelect">
        <option value="">-- Select Government School --</option>
      </select>

      <br><br>

      <label><b>Aided Schools</b></label>
      <select id="aidedSchoolSelect">
        <option value="">-- Select Aided School --</option>
      </select>

      <br><br>

      <div id="schoolInfo"></div>

    </div>
  `);

  try {

    const snapshot = await getDocs(collection(db, "schools"));

    const clusters = new Set();

    snapshot.forEach((docSnap) => {

      const data = docSnap.data();

      const cluster =
        data.clusterName ||
        data.cluster ||
        data["CLUSTER NAME"] ||
        data["Cluster Name"] ||
        data.CLUSTER ||
        "";

      if (cluster) {
        clusters.add(String(cluster).trim());
      }
    });

    const clusterSelect =
      document.getElementById("clusterSelect");

    [...clusters]
      .sort()
      .forEach((cluster) => {

        const option = document.createElement("option");

        option.value = cluster;
        option.textContent = cluster;

        clusterSelect.appendChild(option);
      });

  } catch (error) {

    console.error("School loading error:", error);

    document.getElementById("schoolInfo").innerHTML =
      `<p style="color:red;">School data loading error: ${error.message}</p>`;
  }
};


// ======================================
// LOAD SCHOOLS AFTER CLUSTER SELECTION
// ======================================

window.loadSchoolsByCluster = async function () {

  const selectedCluster =
    document.getElementById("clusterSelect").value;

  const govtSelect =
    document.getElementById("govtSchoolSelect");

  const aidedSelect =
    document.getElementById("aidedSchoolSelect");

  govtSelect.innerHTML =
    `<option value="">-- Select Government School --</option>`;

  aidedSelect.innerHTML =
    `<option value="">-- Select Aided School --</option>`;

  if (!selectedCluster) return;

  try {

    const snapshot = await getDocs(
      collection(db, "schools")
    );

    snapshot.forEach((docSnap) => {

      const data = docSnap.data();

      const cluster =
        data.clusterName ||
        data.cluster ||
        data["CLUSTER NAME"] ||
        data["Cluster Name"] ||
        data.CLUSTER ||
        "";

      if (
        String(cluster).trim().toLowerCase() !==
        selectedCluster.trim().toLowerCase()
      ) {
        return;
      }

      const schoolName =
        data.schoolName ||
        data.school ||
        data["SCHOOL NAME"] ||
        data["School Name"] ||
        data.name ||
        "";

      const management =
        data.management ||
        data.schoolType ||
        data.type ||
        data["MANAGEMENT"] ||
        data["Management"] ||
        data["SCHOOL TYPE"] ||
        "";

      if (!schoolName) return;

      const option = document.createElement("option");

      option.value = docSnap.id;
      option.textContent = schoolName;

      const managementText =
        String(management).toLowerCase();

      if (
        managementText.includes("aided")
      ) {

        aidedSelect.appendChild(option);

      } else {

        govtSelect.appendChild(option);
      }

    });

  } catch (error) {

    console.error("School filter error:", error);

    document.getElementById("schoolInfo").innerHTML =
      `<p style="color:red;">
        School loading error: ${error.message}
      </p>`;
  }
};

