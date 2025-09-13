// Chart.js example for storage
const ctx = document.getElementById('storageChart');
if(ctx){
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Used', 'Free'],
      datasets: [{
        data: [45, 455],
        backgroundColor: ['#0078ff','#00f2fe']
      }]
    },
    options: {
      plugins: { legend: { position: 'bottom' } }
    }
  });
}
