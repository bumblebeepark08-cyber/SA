const data = [
    {area:"4-4", type:"Fault", detail:"Part List ไม่ตรง"},
    {area:"4-5", type:"Fault", detail:"Part List ไม่ตรง"},
    {area:"5-7", type:"Fault", detail:"โต๊ะไม่ตรง Lay Out"},
    {area:"5-8", type:"Fault", detail:"ฟิล์มและม่านบังแสงกระจกชำรุด"},
    {area:"7-3", type:"Fault", detail:"ตู้วางไม่ตรง Lay Out"}
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
