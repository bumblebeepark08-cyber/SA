const data = [
    {area:"-", type:"Fault", detail:"-"},
];

function loadDashboard(){

    const tbody = document.getElementById("alarmTableBody");

    tbody.innerHTML = "";

    data.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.area}</td>
                <td>🔴 ${item.type}</td>
                <td>${item.detail}</td>
            </tr>
        `;
    });

    document.getElementById("alarmCount").innerText = data.length;
}

function updateDateTime(){

    const now = new Date();

    const time = now.toLocaleTimeString("en-GB");

    const day = String(now.getDate()).padStart(2,"0");

    const month = now.toLocaleString("en-US", {
        month:"short"
    });

    const year = String(now.getFullYear()).slice(-2);

    document.getElementById("currentDateTime").innerHTML =
        `${time}<br>${day}-${month}-${year}`;
}

loadDashboard();
updateDateTime();
setInterval(updateDateTime,1000);
