let index = 1;
let avgMath = 0, avgEnglish = 0, avgAvg = 0;

function calculateAverages() {
    let math = parseFloat(document.getElementById("math").value);
    let english = parseFloat(document.getElementById("english").value);
    document.getElementById("math").value = "";
    document.getElementById("english").value = "";
    if (isNaN(math) || isNaN(english)) {
        alert("只能輸入數字");
        return;
    }
    let avg = (math + english) / 2;

    avgMath = (avgMath * (index - 1) + math) / index;
    avgEnglish = (avgEnglish * (index - 1) + english) / index;
    avgAvg = (avgAvg * (index - 1) + avg) / index;

    let tableBody = document.getElementsByTagName("tbody")[0];
    let newRow = tableBody.insertRow(); 
    newRow.innerHTML = `
        <td>${index}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${avg.toFixed(2)}</td>
    `;

    document.getElementById("avgMath").innerHTML = avgMath.toFixed(2);
    document.getElementById("avgEnglish").innerHTML = avgEnglish.toFixed(2);
    document.getElementById("avgAvg").innerHTML = avgAvg.toFixed(2);

    index++;
}
