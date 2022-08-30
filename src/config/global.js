export default {
  global: {
    componenteFormativo:
      '<em>If I won the lottery, I would travel all over the world. </em> <br> Si yo ganara la lotería, viajaría por todo el mundo',
    descripcionCurso:
      'En este componente, aprenderá cómo formar y usar cláusulas condicionales, más exactamente, las del segundo y el tercer condicional. Después, vamos a aprender diferentes expresiones de tiempo que nos ayudan a ubicar en el pasado cosas que pudieron haber ocurrido (muy útiles en el tercer condicional); y por último, se expondrá vocabulario sobre actividades de ocio, noticias, estilos de vida y tendencias, para complementar la temática.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/adorno.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flag.svg'),
      },
    ],
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
        titulo:
          '<em>Present perfect vs past simple</em> (Presente perfecto vs pasado simple)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          '<em>Discourse markers: sequential past time linkers</em> (Marcadores de discurso: conectores secuenciales de tiempo pasado)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '<em>Present perfect continuous</em> (Presente perfecto continuo)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              '<em>Verbs ending in “-ing”</em> (Verbos con terminación “-ing”)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              '<em>Affirmative, negative and interrogative structures</em> (Estructuras afirmativas, negativas e interrogativas) ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em>We have been enjoying our free time a lot</em> (Hemos estado disfrutando mucho de nuestro tiempo libre)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema:
        ' <em>Present perfect vs past simple</em> (Presente perfecto vs pasado simple)',
      referencia:
        'BBC Learning English. (2020). <em>Present perfect and past simple - 6 Minute Grammar [Video].</em> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jwmKjgwlMk8',
    },
    {
      tema:
        '<em>Present perfect vs past simple</em> (Presente perfecto vs pasado simple)',
      referencia:
        'BC Learning English. (2018). <em>Present Perfect and Past Simple: The Grammar Gameshow Episode 29 [Video].</em> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XgLdOI6UsJY',
    },
    {
      tema:
        '<em>Present perfect vs past simple</em> (Presente perfecto vs pasado simple)',
      referencia:
        'BBC Learning English. (2018). <em>The past simple and past perfect tenses - Learners Questions [Video].</em> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jwmKjgwlMk8',
    },
    {
      tema:
        '<em>Present perfect vs past simple</em> (Presente perfecto vs pasado simple)',
      referencia:
        'BBC. (s. f.). <em>Unit 26: It must be love. Present perfect and past simple. Learning English.</em> ',
      tipo: 'Artículo',
      link:
        'https://www.bbc.co.uk/learningenglish/course/lower-intermediate/unit-26/session-2',
    },
    {
      tema: '<em>Present perfect continuous</em> (Presente perfecto continuo)',
      referencia:
        'Equipo académico. (2021). ¿Se te dificulta el present perfect continuous? Conoce aquí las bases para perfeccionarlo. British Council México. ',
      tipo: 'Artículo',
      link: 'https://www.britishcouncil.org.mx/blog/present-perfect-continuous',
    },
  ],
  glosario: [
    {
      termino: 'Discourse markers / Marcadores de discurso',
      significado:
        'palabras que ayudan a organizar un discurso o un texto de forma que tenga una estructura más sencilla de entender.',
    },
    {
      termino: 'Leisure activities / Actividades de ocio',
      significado: 'actividades de ocio o que se realizan en el tiempo libre.',
    },
    {
      termino: 'Past simple tense / Tiempo pasado simple:',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en un momento o tiempo previo al ahora.',
    },
    {
      termino: 'Present perfect tense / Tiempo presente perfecto:',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en algún momento del pasado, pero siguen teniendo relevancia o están conectadas, de alguna forma, con el presente.',
    },
    {
      termino:
        'Present perfect continuous tense / Tiempo presente perfecto continuo:',
      significado:
        'tiempo verbal que resalta la acción que se ha estado realizando durante un tiempo.',
    },
  ],
  referencias: [
    {
      referencia:
        'British Council. (s. f.). Present perfect. British Council LearnEnglish. ',
      link:
        'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect#:~:text=Again%2C%20if%20we%20say%20when,started%20going%20to%20the%20gym',
    },
    {
      referencia:
        'Cambridge University Press. (s. f.). Discourse markers (so, right, okay). Cambridge Dictionary. ',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/discourse-markers-so-right-okay',
    },
    {
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia UNAM. (s. f.). Sequence connectors (and, or, but, so, first, then, later, before, finally, after that). Ambiente Virtual de Idiomas.',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/3622/mod_resource/content/14/Contenido/index.html',
    },
    {
      referencia:
        'McLellan, C. (2020). El presente perfecto continuo. British Council España. ',
      link: 'https://www.britishcouncil.es/blog/presente-perfecto-continuo',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta Temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres ',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
