const Grafico = (ctx, contenedorPadre) => {
  const { municipio, medicion, fechaInicio, fechaFin } = ctx;

  const canvasId = `${municipio}_${medicion}_${fechaInicio}_${fechaFin}`
  let ctxDiv = document.getElementById(canvasId);

  if (ctxDiv !== null) return false;

  contenedorPadre.innerHTML += `<canvas id="${canvasId}"></canvas>`;

  ctxDiv = document.getElementById(`${canvasId}`)

  new Chart(ctxDiv, {
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
    },
  });
};
