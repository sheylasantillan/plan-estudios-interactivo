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
    nombre: "Lenguaje, Comunicación y Cultura Escrita",
    semestre: 1,
    tipo: "teórica",
    carga: 64,
    correlativas: [],
    estado: "desbloqueado"
  },
  {
    nombre: "Problemas Socioeconómicos Contemporáneos",
    semestre: 1,
    tipo: "teórica",
    carga: 64,
    correlativas: [],
    estado: "desbloqueado"
  },
  {
    nombre: "Historia Moderna y Contemporánea",
    semestre: 1,
    tipo: "teórica",
    carga: 64,
    correlativas: [],
    estado: "desbloqueado"
  },
  {
    nombre: "Sociología Clásica",
    semestre: 1,
    tipo: "teórica",
    carga: 64,
    correlativas: [],
    estado: "desbloqueado"
  },
  {
    nombre: "Metodología de la Investigación Cuantitativa",
    semestre: 2,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Introducción a la Comunicación"],
    estado: "bloqueado"
  },
  {
    nombre: "Sociología Contemporánea",
    semestre: 2,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Sociología Clásica"],
    estado: "bloqueado"
  },
  {
    nombre: "Lenguaje, Cultura y Comunicación de la Imagen",
    semestre: 2,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Lenguaje, Comunicación y Cultura Escrita"],
    estado: "bloqueado"
  },
  {
    nombre: "Concepciones de la Comunicación",
    semestre: 2,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Introducción a la Comunicación"],
    estado: "bloqueado"
  },
  {
    nombre: "Organizaciones y Comunicación",
    semestre: 2,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Introducción a la Comunicación"],
    estado: "bloqueado"
  },
  {
    nombre: "Semiótica de los Medios Masivos",
    semestre: 2,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Introducción a la Comunicación", "Lenguaje, Comunicación y Cultura Escrita"],
    estado: "bloqueado"
  },
  {
    nombre: "Taller de Escritura I",
    semestre: 2,
    tipo: "taller",
    carga: 96,
    correlativas: ["Lenguaje, Comunicación y Cultura Escrita"],
    estado: "bloqueado"
  },
  {
    nombre: "Sociología de la Cultura",
    semestre: 2,
    tipo: "teórica",
    carga: 96,
    correlativas: ["Sociología Contemporánea"],
    estado: "bloqueado"
  },
  {
    nombre: "Optativa I",
    semestre: 2,
    tipo: "optativa",
    carga: 64,
    correlativas: ["Historia Moderna y Contemporánea"],
    estado: "bloqueado"
  },
  {
    nombre: "Taller de Diseño y Producción de Medios Gráficos I",
    semestre: 2,
    tipo: "taller",
    carga: 96,
    correlativas: ["Lenguaje, Cultura y Comunicación de la Imagen", "Lenguaje, Comunicación y Cultura Escrita"],
    estado: "bloqueado"
  },
];
materias.push(
  {
    nombre: "Taller de Radio I",
    semestre: 3,
    tipo: "taller",
    carga: 96,
    correlativas: ["Taller de Escritura I"],
    estado: "bloqueado"
  },
  {
    nombre: "Taller de utilitarios",
    semestre: 3,
    tipo: "taller",
    carga: 32,
    correlativas: [],
    estado: "desbloqueado"
  },
  {
    nombre: "Inglés Lectocomprensión I",
    semestre: 3,
    tipo: "idioma",
    carga: 48,
    correlativas: [],
    estado: "desbloqueado"
  },
  {
    nombre: "Inglés Lectocomprensión II",
    semestre: 3,
    tipo: "idioma",
    carga: 48,
    correlativas: ["Inglés Lectocomprensión I"],
    estado: "bloqueado"
  },
  {
    nombre: "Portugués I",
    semestre: 3,
    tipo: "idioma",
    carga: 48,
    correlativas: [],
    estado: "desbloqueado"
  },
  {
    nombre: "Portugués II",
    semestre: 4,
    tipo: "idioma",
    carga: 48,
    correlativas: ["Portugués I"],
    estado: "bloqueado"
  },
  {
    nombre: "Metodología de la Investigación Cualitativa",
    semestre: 4,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Metodología de la Investigación Cuantitativa"],
    estado: "bloqueado"
  },
  {
    nombre: "Planificación y Evaluación de Proyectos Comunicativos",
    semestre: 4,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Concepciones de la Comunicación", "Metodología de la Investigación Cualitativa"],
    estado: "bloqueado"
  },
  {
    nombre: "Historia de las Técnicas y Medios de Comunicación",
    semestre: 4,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Historia Moderna y Contemporánea"],
    estado: "bloqueado"
  },
  {
    nombre: "Comunicación Institucional",
    semestre: 4,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Organizaciones y Comunicación", "Planificación y Evaluación de Proyectos Comunicativos"],
    estado: "bloqueado"
  },
  {
    nombre: "Comunicación Mediática",
    semestre: 4,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Concepciones de la Comunicación"],
    estado: "bloqueado"
  },
  {
    nombre: "Comunicación Masiva y Matrices Culturales",
    semestre: 4,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Concepciones de la Comunicación", "Comunicación Mediática", "Historia de las Técnicas y Medios de Comunicación"],
    estado: "bloqueado"
  },
  {
    nombre: "Optativa II",
    semestre: 4,
    tipo: "optativa",
    carga: 64,
    correlativas: [],
    estado: "bloqueado"
  },
  {
    nombre: "Optativa III",
    semestre: 4,
    tipo: "optativa",
    carga: 64,
    correlativas: [],
    estado: "bloqueado"
  },
  {
    nombre: "Optativa IV",
    semestre: 4,
    tipo: "optativa",
    carga: 64,
    correlativas: [],
    estado: "bloqueado"
  },
  {
    nombre: "Optativa V",
    semestre: 4,
    tipo: "optativa",
    carga: 64,
    correlativas: [],
    estado: "bloqueado"
  },
  {
    nombre: "Optativa VI",
    semestre: 4,
    tipo: "optativa",
    carga: 64,
    correlativas: [],
    estado: "bloqueado"
  }
);
materias.push(
  {
    nombre: "Taller de Producción Audiovisual I",
    semestre: 5,
    tipo: "taller",
    carga: 96,
    correlativas: ["Taller de Diseño y Producción de Medios Gráficos I", "Taller de Radio I"],
    estado: "bloqueado"
  },
  {
    nombre: "Taller de Medios Interactivos",
    semestre: 5,
    tipo: "taller",
    carga: 96,
    correlativas: ["Taller de Diseño y Producción de Medios Gráficos I", "Taller de Producción Audiovisual I"],
    estado: "bloqueado"
  },
  {
    nombre: "Taller de Práctica Profesional",
    semestre: 6,
    tipo: "taller",
    carga: 64,
    correlativas: ["Taller de Producción Audiovisual I"],
    estado: "bloqueado"
  },
  {
    nombre: "Taller de Escritura II",
    semestre: 6,
    tipo: "taller",
    carga: 64,
    correlativas: ["Taller de Escritura I"],
    estado: "bloqueado"
  },
  {
    nombre: "Taller de Diseño y Producción de Medios Gráficos II",
    semestre: 6,
    tipo: "taller",
    carga: 64,
    correlativas: ["Taller de Diseño y Producción de Medios Gráficos I"],
    estado: "bloqueado"
  },
  {
    nombre: "Taller de Radio II",
    semestre: 6,
    tipo: "taller",
    carga: 64,
    correlativas: ["Taller de Radio I"],
    estado: "bloqueado"
  },
  {
    nombre: "Taller de Producción Audiovisual II",
    semestre: 6,
    tipo: "taller",
    carga: 64,
    correlativas: ["Taller de Producción Audiovisual I"],
    estado: "bloqueado"
  },
  {
    nombre: "Medios Masivos y Sistemas Políticos",
    semestre: 6,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Sociología Clásica"],
    estado: "bloqueado"
  },
  {
    nombre: "Derecho y Economía de los Medios",
    semestre: 6,
    tipo: "teórica",
    carga: 64,
    correlativas: ["Historia de las Técnicas y Medios de Comunicación"],
    estado: "bloqueado"
  },
  {
    nombre: "Seminarios",
    semestre: 6,
    tipo: "optativa",
    carga: 64,
    correlativas: [],
    estado: "bloqueado"
  }
);

// ========================
// Funciones de interacción
// ========================

function buscar(nombre) {
  return materias.find(m => m.nombre === nombre);
}

function correlativasCumplidas(curso) {
  return curso.correlativas.every(nombre => buscar(nombre).estado === "completado");
}

function actualizarEstados() {
  materias.forEach(m => {
    if (m.estado !== "completado") {
      m.estado = correlativasCumplidas(m) ? "desbloqueado" : "bloqueado";
    }
  });
}

function render() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

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
        div.title = `Carga horaria: ${m.carga} hs\nCorrelativas: ${m.correlativas.join(", ") || "Ninguna"}`;

        if (m.estado !== "bloqueado") {
          div.addEventListener("click", () => {
            if (m.estado === "desbloqueado") {
              m.estado = "completado";
              actualizarEstados();
              render();
            }
          });
        }

        contenedor.appendChild(div);
      });

    malla.appendChild(contenedor);
  });
}

actualizarEstados();
render();
