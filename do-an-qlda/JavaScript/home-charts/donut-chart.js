const ctx = document.getElementById('donut-chart').getContext('2d');

const datasets = {
    labels: ['series-1 - 85', 'series-2 - 44'],
    datasets: [{
        data: [85, 44],
        backgroundColor: ['#5e3b7dff', '#ff933bff'],
        hoverBackgroundColor: ['#7e649e', '#f9b368'],
        borderWidth: 1
    }]
};

const options = {
    cutoutPercentage: 50,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
        labels: {
            fontSize: 14,
            boxWidth: 20
        }
    }
};

new Chart(ctx, {
    type: 'doughnut',
    data: datasets,
    options: options
});
