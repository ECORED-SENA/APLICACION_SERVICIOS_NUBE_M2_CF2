export default {
  global: {
    componenteFormativo:
      'Análisis y solución de problemas aplicando algoritmos',
    descripcionCurso:
      'El avance tecnológico lleva implícito la frontera del conocimiento, esto a su vez genera nuevos conceptos, terminologías, notaciones, nomenclaturas y su representación a través diagramas, planos o artefactos que terminan convirtiéndose en un lenguaje natural de la tecnología en cuestión. <br/><br/> En este componente se presentan los artefactos diagramas y nomenclaturas con los que se describen los algoritmos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Metodologías de algoritmos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diseño',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diagramas de flujo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elaborar diagramas de flujo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Herramientas digitales para creación y prueba de algoritmos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Uso de identificadores y palabras reservadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Operadores y jerarquía en los operadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Estructuras de control secuencial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Ejemplo estructura de control secuencial',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Estructura condicional',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Estructuras de iteración o de repetitivas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Estructura de datos (arreglos, matrices)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Vectores',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Matrices',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Programación modular',
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Gloria Matilde Lee Mejía',
        cargo: 'Responsable del equipo',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'López, J. (2009). Algoritmos y programación (guía para docentes).',
      link:
        'https://libros.metabiblioteca.org/bitstream/001/169/8/AlgoritmosProgramacion.pdf ',
    },
    {
      referencia:
        'Resnick, M. (2007). Sembrando semillas para una sociedad más creativa.',
      link: 'http://www.eduteka.org/ScratchResnickCreatividad.php.',
    },
    {
      referencia:
        'Rojas, A., V. y Ñacato C., J. (1980). Técnica de flujogramas I. Editora Andina.',
      link:
        'https://biblioteca.epn.edu.ec/cgi-bin/koha/opac-detail.pl?biblionumber=27333',
    },
    {
      referencia: 'Vázquez, J. (2012). Análisis y diseño de algoritmos. ',
      link:
        'http://www.aliat.org.mx/BibliotecasDigitales/sistemas/Analisis_y_disenio_de_algoritmos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Modularidad',
      significado:
        'consiste en dividir un programa en módulos, cada uno de ellos debe poder ejecutarse por separado, pero están diseñados para trabajar con otros módulos.',
    },
    {
      termino: 'Iteración',
      significado:
        'es repetir sucesivas veces un proceso con la finalidad de lograr una meta resultado u objetivo. A cada repetición del proceso también se le denomina "iteración", generalmente, y los resultados obtenidos en una iteración se emplean como punto de partida hacia la siguiente iteración.',
    },
    {
      termino: 'Concatenar',
      significado: 'unir o enlazar dos o más cosas (RAE, 2021).',
    },
  ],
  complementario: [
    {
      texto:
        'Material_Audiovisual_100319633. (6 de enero de 2021). App Diagrams.net (básico para diagramas de flujo). [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/jdnqmFpqTvo ',
    },
    {
      texto:
        'Enrique Olivares. (23 de febrero de 2016). Introducción a utilizar el programa DIA para diagramas de flujo a nivel bachillerato. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/DnRx9D7QWg8',
    },
    {
      texto:
        'DiscoDurodeRoer. (27 de abril de 2015). Ejercicios PseInt - Básicos #1 - Empezando por lo básico. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/DHIi4dcaMEc ',
    },
    {
      texto:
        'Insituto de Informática Uach. (08 de septiembre de 2020). Cómo descargar Draw.io 2 para dibujar diagramas de flujo. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=encz3h8TLWA',
    },
  ],
}
