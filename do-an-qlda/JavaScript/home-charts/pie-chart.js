document.addEventListener('DOMContentLoaded', function () {
    const data = [42, 47, 85, 35];
    const maxOffset = 20; // Độ lệch tối đa (có thể điều chỉnh)

    // Tính toán độ lệch tỉ lệ với giá trị của từng phần
    const offsets = data.map(value => (value / Math.max(...data)) * maxOffset);

    const ctx = document.getElementById('pie-chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Design', 'iOS', 'HR', 'DevOps'],
            datasets: [{
                label: 'Biểu Đồ Tròn',
                data: data,
                backgroundColor: [
                    '#a95fbaff',
                    '#e64c51ff',
                    '#6c468cff',
                    '#724fffff'
                ],
                hoverBackgroundColor: [
                    '#a076bc',
                    '#ff7d82',
                    '#9979bb',
                    '#a180ff'
                ],
                borderWidth: 1,
                offset: offsets
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    usePointStyle: true,
                    position: 'bottom',
                    pointStyle: 'circle'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label = context.parsed;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
});