const Grafico = (ctx, contenedorPadre) => {
  const { municipio, medicion, fechaInicio, fechaFin } = ctx;

  const canvasId = `${municipio}_${medicion}_${fechaInicio}_${fechaFin}`;

  if (document.getElementById(canvasId) !== null) return false;

  const canvasElement = document.createElement('canvas');
  canvasElement.id = canvasId;
  contenedorPadre.appendChild(canvasElement);

  const canvasContext = canvasElement.getContext('2d');

  new Chart(canvasContext, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      responsive: true,
    },
  });
};
