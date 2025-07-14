const materias = [
  {
    nombre: "Taller de Lectoescritura",
    semestre: 1,
    tipo: "taller",
    carga: 32,
    correlativas: [],
    estado: "desbloqueado"
  },
  {
    nombre: "Introducción a la Comunicación",
    semestre: 1,
    tipo: "teórica",
    carga: 64,
    correlativas: [],
    estado: "desbloqueado"
  },
  {
    nombre: "Concepciones de la Comunicación",
    semestre: 2,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Introducción a la Comunicación"],
    estado: "bloqueado"
  }
];

// Utilidad para buscar materias por nombre
function buscar(nombre) {
  return materias.find(m => m.nombre === nombre);
}

// Verifica si están cumplidas todas las correlativas
function correlativasCumplidas(curso) {
  return curso.correlativas.every(nombre => buscar(nombre).estado === "completado");
}

// Renderiza toda la malla
function render() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  // Agrupamos por semestre
  const semestres = [...new Set(materias.map(m => m.semestre))].sort();
  semestres.forEach(sem => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem}`;
    contenedor.appendChild(titulo);

    materias
      .filter(m => m.semestre === sem)
      .forEach(m => {
        const div = document.createElement("div");
        div.classList.add("curso", `tipo-${m.tipo}`, m.estado);
        div.textContent = m.nombre;

        // Tooltip con carga horaria y correlativas
        div.title = `Carga horaria: ${m.carga} hs\nCorrelativas: ${m.correlativas.join(", ") || "Ninguna"}`;

        // Interacción
        div.addEventListener("click", () => {
          if (m.estado === "desbloqueado") {
            m.estado = "completado";
            actualizarEstados();
            render();
          }
        });

        contenedor.appendChild(div);
      });

    malla.appendChild(contenedor);
  });
}

// Actualiza qué materias se desbloquean según las completadas
function actualizarEstados() {
  materias.forEach(m => {
    if (m.estado !== "completado") {
      m.estado = correlativasCumplidas(m) ? "desbloqueado" : "bloqueado";
    }
  });
}

actualizarEstados();
render();
