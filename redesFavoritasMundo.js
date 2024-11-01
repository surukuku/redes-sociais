const layout = {
    plot_bgcolor: getCSS("--bg-color"),
    paper_bgcolor: getCSS("--bg-color"),
    height: 700,
    title: {
      text: "Redes sociais que os usuários mais gostam",
      x: 0,
      font: {
        color: getCSS("--primary-color"),
        family: getCSS("--font"),
        size: 30,
      },
    },
    legend: {
      font: {
        color: getCSS("--primary-color"),
        size: 16,
      },
    },
  };
function criarGrafico(data, layout) {
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config);
}
