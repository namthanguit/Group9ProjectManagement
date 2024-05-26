// Dữ liệu cho biểu đồ
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
        {
            label: 'Project In',
            data: [90, 80, 100, 90, 80],
            backgroundColor: '#e34f54ff',
            hoverBackgroundcolor: '#ff8085',
            borderWidth: 1
        },
        {
            label: 'Project Taken',
            data: [30, 40, 30, 20, 30],
            backgroundColor: '#5f3b7e',
            hoverBackgroundcolor: '#8e71ac',
            borderWidth: 1
        }
    ]
};

// Cấu hình biểu đồ
const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                position: 'bottom' // Di chuyển chú thích xuống phía dưới
            }
        },
        scales: {
            x: {
                barPercentage: 0.5, // Giảm kích thước cột
                categoryPercentage: 0.5, // Tăng khoảng cách giữa các cột
                grid: {
                    display: false // Tắt hiển thị lưới trên trục Y
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    maxTicksLimit: 7 // Chỉ hiển thị 5 giá trị trên trục Y
                },
                grid: {
                    display: false // Tắt hiển thị lưới trên trục Y
                }
            }
        }
    }
};

// Tạo biểu đồ
const barChart = new Chart(
    document.getElementById('bar-chart'),
    config
);