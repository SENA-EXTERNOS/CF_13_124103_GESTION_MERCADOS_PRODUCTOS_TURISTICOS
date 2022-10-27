export default {
  global: {
    componenteFormativo: 'Perfiles de audiencia y <br>comunidad virtual',
    descripcionCurso:
      'Este componente formativo aborda temas relacionados con la perfilación de audiencias considerando técnicas, cultura de masas, segmentación, gestión de clientes, igualmente presenta aspectos para la gestión de comunidades virtuales, el marketing digital y los patrones de conducta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Audiencia ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de identificación de audiencia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Perfiles de audiencia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'La cultura de masas',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'La gestión de clientes',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comunidad virtual ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estructura',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Funciones',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Usuarios de comunidades virtuales',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Cómo crear una comunidad virtual',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'La Net etiqueta',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marketing digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'THerramientas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'THerramientas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'THerramientas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Audiencia ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Características',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Clasificación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Herramientas para medir el comportamiento',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
      tema: 'Audiencia',
      referencia:
        'David Soler Freixas [David Soler Freixas]. 2019, 27 de abril. Qué es audiencia. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=j16nOBQahRI ',
    },
    {
      tema: 'Comunidad virtual',
      referencia:
        'Ana Laura López [Ana Laura López]. 2021, 9 de junio. Estructura y dinámica de la comunidad virtual. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=K_vATJKWltc',
    },
    {
      tema: 'Marketing digital',
      referencia:
        'Núñez Cudriz, Enrique Carlos; Miranda Corrales, Jesús David (2020). El marketing digital como un elemento de apoyo estratégico a las organizaciones.',
      tipo: 'Artículo',
      link:
        'https://www.redalyc.org/journal/4096/409663283006/409663283006.pdf',
    },
    {
      tema: 'Patrones de conducta',
      referencia:
        'Cinconoticias (2022). Patrones de conducta: qué son, cómo se originan, tipos y ejemplos de patrones de comportamiento en psicología.',
      tipo: 'Sitio web',
      link: 'https://www.cinconoticias.com/patrones-de-conducta/',
    },
  ],
  glosario: [
    {
      termino: 'Analítica web',
      significado:
        'conjunto de técnicas que dan la posibilidad de recopilar, analizar y reportar datos estadísticos de la web para comprender y  optimizar su uso.',
    },
    {
      termino: 'Audiencia',
      significado:
        'individuos que reciben información con medios de comunicación masivos, como, por ejemplo la televisión, la prensa, la radio, y el cine; o que tienen interacción con medios de comunicación alternativos como redes sociales, blogs, sitio web, chat y correo electrónico, entre otros.',
    },
    {
      termino: 'Buyer persona',
      significado: 'es el cliente ideal de una marca.',
    },
    {
      termino: 'Comunidad virtual',
      significado:
        'es una plataforma donde se pueden reunir muchos individuos que tienen gustos y objetivos en común y que utilizan la misma forma de comunicación para tener interacción entre ellos mismos.',
    },
    {
      termino: 'Experiencia del cliente',
      significado:
        'es el resultado de la percepción del cliente luego de una interacción física, emocional, racional o psicológica con una marca.',
    },
    {
      termino: 'Feedback',
      significado:
        'es la opinión que tiene el público objetivo, o posibles clientes de una marca, resultado de una campaña publicitaria o esfuerzo publicitario.',
    },
    {
      termino: 'Net etiqueta',
      significado:
        'grupo de normas de conducta general en la web y que son un ajuste de las reglas de etiqueta del mundo físico al digital.',
    },
    {
      termino: 'Patrón de comportamiento',
      significado:
        'corresponden a normas determinadas, que sirven de guía para orientar la respuesta o acción que tiene un individuo ante situaciones o circunstancias concretas.',
    },
    {
      termino: 'Spamer',
      significado:
        'miembro de una comunidad virtual que publica de manera masiva información que no tiene nada que ver con la filosofía de la plataforma.',
    },
    {
      termino: 'Troll',
      significado:
        'individuo que aprovecha una comunidad virtual para hacer comentarios que generen controversia y fomentan el enfrentamiento entre los demás y tiene como fin molestar y captar la atención.',
    },
  ],
  referencias: [
    {
      referencia:
        'Libro | Abruzzese, A. (2004). <i>Cultura de masas. Madrid:</i> CIC.',
      link: '',
    },
    {
      referencia:
        'Libro | Benitez Márquez, M. (2020). <i>Gestión de comunidades virtuales.</i> España: Editorial eLearning S.L.',
      link: '',
    },
    {
      referencia:
        'Libro | Casanova Ríspoli, E. (2009). <i>Bioética, Cultura Y Patrones De Conducta.</i> Bogotá: Universidad de la Sabana.',
      link: '',
    },
    {
      referencia:
        'Libro | Kotler, P., & Keller, K. L. (2012). <i>Dirección de marketing.</i> México: Pearson.',
      link: '',
    },
    {
      referencia:
        'Libro | Mitchell, J. (2012). <i>Abrace a sus clientes.</i> Granica.',
      link: '',
    },
    {
      referencia:
        'Libro | Ponjuán, G. (2007). <i>Gestión de la información.</i> Gijón: Ediciones Trea.',
      link: '',
    },
    {
      referencia:
        'Libro | Rodríguez, I., Montes, G., & López, Ó. y. (2006). <i>Principios y estrategias de marketing.</i> Barcelona: Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Libro | Saavedra Llamas, M. (2016). <i>Audiencia social : Estrategias de comunicación para medios y marcas.</i> Madrid: Primo.',
      link: '',
    },
    {
      referencia: 'Libro | Shea, V. (1994). <i>Netiquette.</i> Albion Books.',
      link: '',
    },
    {
      referencia:
        'Libro | Xie, S., & Min, Y. (2019). <i>Marketing Digital: Navegando En Aguas Digitales. Sumérgete Conmigo.</i> Bogotá: Ediciones de la U.',
      link: '',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
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
