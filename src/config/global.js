export default {
  global: {
    componenteFormativo:
      '<em>If I won the lottery, I would travel all over the world. </em> <br> Si yo ganara la lotería, viajaría por todo el mundo.',
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
        titulo: '<em>Second conditional</em> / Segundo condicional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              '<em>Use of was/were with the pronoun “I”</em> / Uso de <em>was/were</em> con el pronombre <em>“I”</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Use of “would”</em> / Uso de <em>“would”</em>',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Third conditional</em> / Tercer condicional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Past perfect</em> / Pasado perfecto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em>Use of “would have”</em> / Uso del “would have”',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Time expressions</em> / Expresiones de tiempo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'If we hadn&#x27t been busy, we would have gone to the fashion show / Si no hubiéramos estado ocupados, habríamos ido al desfile de moda ',
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
      tema: '<em>Introduction: Conditionals</em>',
      referencia:
        'Woodward English. (2020). Conditionals - IF clauses in English - Introduction [Video]. YouTube.  ',
      tipo: 'Video      ',
      link: 'https://www.youtube.com/watch?v=z_L80p8WbLM',
    },
    {
      tema: '<em> Second conditional</em> / Segundo condicional.        ',
      referencia:
        'BBC Learning English. (2020). The second conditional - 6 Minute Grammar [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3OuqzHxlrHc',
    },
    {
      tema: ' <em>Second conditional</em> / Segundo condicional.        ',
      referencia:
        'BBC Learning English. (2018). Second Conditional: The Grammar Gameshow Episode 20 [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7_LCu92sk8k',
    },
    {
      tema: '<em>Third conditional</em> / Tercer condicional        ',
      referencia:
        'BBC Learning English. (2019). The 3rd conditional: What is it? How to use it! - English In A Minute [Video]. YouTube.  ',
      tipo: 'Video      ',
      link: 'https://www.youtube.com/watch?v=YdCsmuBXahw',
    },
    {
      tema: ' <em>Third conditional</em> / Tercer condicional',
      referencia:
        'British Council | LearnEnglish Teens. (2017). Grammar Snacks: Third conditional [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uyIoPpVbOhc',
    },
  ],
  glosario: [
    {
      termino: '<em>Conditional clause</em> / Cláusula condicional',
      significado:
        'oraciones que expresan un resultado, el cual depende de que una condición se cumpla.        ',
    },
    {
      termino: '<em>Modal verb</em> / Verbo modal',
      significado:
        'verbo auxiliar que no tiene patrones verbales como la forma infinitiva, el gerundio o los participios, tampoco se conjuga con las personas gramaticales sino que acompaña al verbo principal modificándolo, para expresar ideas como posibilidad, intención o necesidad.',
    },
    {
      termino: '<em>Past perfect</em> / Pasado perfecto',
      significado:
        'tiempo verbal que se utiliza cuando se está hablando de dos situaciones que ocurrieron en el pasado; generalmente, la acción que ocurrió primero se narra en pasado perfecto y la más reciente se narra en pasado simple.',
    },
    {
      termino: '<em>Second conditional</em> / Segundo condicional',
      significado:
        'oración condicional que habla de situaciones hipotéticas, irreales o poco probables, en el presente o en el futuro, que ocurrirían si cierta condición se cumpliera.',
    },
    {
      termino: '<em>Third conditional</em> / Tercer condicional',
      significado:
        'oración condicional con la que una persona imagina un pasado diferente, que hubiera ocurrido si cierta condición se hubiera cumplido.',
    },
  ],
  referencias: [
    {
      referencia:
        ' British Council. (s. f.-a). <em>will and would</em>. British Council LearnEnglish. ',
      link:
        'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/will-and-would',
    },
    {
      referencia:
        'British Council. (s. f.-b). <em>will have and would have.</em> British Council LearnEnglish. ',
      link:
        'https://learnenglish.britishcouncil.org/es/grammar/english-grammar-reference/will-have-and-would-have',
    },
    {
      referencia:
        'Collins. (s. f.). Definición de <em>subjunctive.</em> Diccionario de inglés.  ',
      link:
        'https://www.collinsdictionary.com/es/diccionario/ingles/subjunctive',
    },
    {
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia [CUAED]. (s. f.). <em>Past time expressions (yesterday, last week, last night, two years ago).</em> Ambiente Virtual de Idiomas.  ',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1987/mod_resource/content/17/contenido/index.html',
    },
    {
      referencia:
        ' Equipo académico. (2021). <em>Past perfect</em>: claves para usarlo como nativo. British Council México.',
      link: 'https://www.britishcouncil.org.mx/blog/past-perfect',
    },
    {
      referencia:
        'Traffis, C. (s. f.). <em>Was vs. Were? Grammarly blog</em>. ',
      link:
        'https://www.grammarly.com/blog/was-vs-were/?gclid=Cj0KCQjw852XBhC6ARIsAJsFPN22qPdwdPHto28fI3gtSotn1YQSktBmKSiQPEAIHwm9htqwqbKY8Q4aArVsEALw_wcB&gclsrc=aw.ds',
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
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios – CIES - Regional Santander',
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
