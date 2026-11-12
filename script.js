document.querySelectorAll('[data-year], #year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
const growth = [4.9, 5.0, 5.1, 5.2, 5.0, -2.1, 3.7, 5.3, 5.0, 5.0];
const inflation = [3.4, 3.5, 3.8, 3.2, 2.7, 1.7, 1.9, 5.9, 3.7, 2.3];
const unemployment = [6.2, 5.6, 5.5, 5.3, 5.3, 7.1, 6.5, 5.9, 5.4, 4.9];

function showChartError(canvasId, message) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const notice = document.createElement('p');
  notice.className = 'chart-fallback';
  notice.textContent = message;
  canvas.replaceWith(notice);
}

const chartConfigs = [
  {
    id: 'gdpChart',
    config: {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Зростання реального ВВП, %',
          data: growth,
          borderColor: '#153c67',
          backgroundColor: 'rgba(36, 91, 143, .12)',
          fill: true,
          tension: 0.25
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
        scales: { y: { title: { display: true, text: '%' } } }
      }
    }
  },
  {
    id: 'macroChart',
    config: {
      type: 'bar',
      data: {
        labels: years,
        datasets: [
          { label: 'Інфляція, %', data: inflation, backgroundColor: '#2c6e9f' },
          { label: 'Безробіття, %', data: unemployment, backgroundColor: '#9ab8d2' }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
        scales: { y: { title: { display: true, text: '%' } } }
      }
    }
  }
];

chartConfigs.forEach(({ id, config }) => {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  if (typeof Chart === 'undefined') {
    showChartError(id, 'Графік тимчасово недоступний. Перевірте підключення до інтернету та оновіть сторінку.');
    return;
  }
  new Chart(canvas, config);
});
