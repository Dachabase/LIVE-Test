document.addEventListener('DOMContentLoaded', function() {
    const disclaimerModal = document.getElementById('disclaimerModal');
    const agreeBtn = document.getElementById('agreeBtn');
    const reportForm = document.getElementById('reportForm');
    const reportList = document.getElementById('reportList');

    // Show the disclaimer modal when the page loads
    disclaimerModal.style.display = 'block';

    // Handle user agreement
    agreeBtn.addEventListener('click', function() {
        disclaimerModal.style.display = 'none'; // Hide the modal
    });

    // Handle form submission
    reportForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const reportHeadline = document.getElementById('reportHeadline').value;
        const reportText = document.getElementById('reportText').value;
        const state = document.getElementById('state').value;
        const crimeCategory = document.getElementById('crimeCategory').value;

        const reportData = {
            reportHeadline,
            reportText,
            state,
            crimeCategory
        };

        // Send reportData to backend using fetch
        fetch('https://localhost:5000/api/addreport', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(reportData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Report submitted successfully!');
            // Clear form fields after successful submission
            reportForm.reset();
            // Refresh report list
            fetchReports();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to submit report. Please try again.');
        });
    });

    // Function to fetch and display reports
    function fetchReports() {
        fetch('https://localhost:5000/api/getreports')
        .then(response => response.json())
        .then(reports => {
            reportList.innerHTML = ''; // Clear existing report list
            reports.forEach(report => {
                const reportElement = document.createElement('div');
                reportElement.classList.add('report');
                reportElement.innerHTML = `
                    <h3>${report.reportHeadline}</h3>
                    <p>${report.reportText.substring(0, 100)}...</p>
                    <a href="#" onclick="showFullReport('${report._id}')" style="color: #ccc;">Read More</a>
                `;
                reportList.appendChild(reportElement);
            });
        })
        .catch(error => {
            console.error('Error fetching reports:', error);
        });
    }

    // Function to show full report details
    function showFullReport(reportId) {
        fetch(`/api/reports/${reportId}`)
        .then(response => response.json())
        .then(report => {
            alert(`Full Report: ${JSON.stringify(report)}`);
            // You can display the full report details as needed
        })
        .catch(error => {
            console.error('Error fetching report:', error);
        });
    }

    // Fetch reports on page load
    fetchReports();
});
