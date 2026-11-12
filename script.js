document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

const years = ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'];
const growth = [4.9,5.0,5.1,5.2,5.0,-2.1,3.7,5.3,5.0,5.0];
const inflation = [3.4,3.5,3.8,3.2,2.7,1.7,1.9,5.9,3.7,2.3];
const unemployment = [6.2,5.6,5.5,5.3,5.3,7.1,6.5,5.9,5.4,4.9];

if (typeof Chart !== 'undefined') {
  const growthCanvas = document.getElementById('growth');
  if (growthCanvas) new Chart(growthCanvas, {
    type: 'line',
    data: { labels: years, datasets: [{ label: 'Зростання реального ВВП, %', data: growth, borderColor: '#153c67', backgroundColor: 'rgba(36,91,143,.12)', fill: true, tension: .25 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
  });
  const macroCanvas = document.getElementById('macro');
  if (macroCanvas) new Chart(macroCanvas, {
    type: 'bar',
    data: { labels: years, datasets: [
      { label: 'Інфляція, %', data: inflation, backgroundColor: '#2c6e9f' },
      { label: 'Безробіття, %', data: unemployment, backgroundColor: '#9ab8d2' }
    ] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
  });
}
