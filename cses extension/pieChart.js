var yValues = [90, 10];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("chart", {
    type: "doughnut",
    data: {
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues,
            },
        ],
    },
    options: {
        cutout: "80%",
        title: {
            display: true,
            text: "World Wide Wine Production 2018",
        },
    },
});
