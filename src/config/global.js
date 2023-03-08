export default {
  global: {
    componenteFormativo: 'Perfiles de audiencia y comunidad virtual',
    descripcionCurso:
      'Este componente formativo aborda temas relacionados con la perfilación de audiencias considerando técnicas, cultura de masas, segmentación, gestión de clientes, igualmente presenta aspectos para la gestión de comunidades virtuales, el <i>marketing</i> digital y los patrones de conducta.',
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
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comunidad virtual ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<i>Marketing</i> digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Patrones de conducta',
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
        'David Soler Freixas. (2019). <i>Qué es audiencia</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=j16nOBQahRI ',
    },
    {
      tema: 'Comunidad virtual',
      referencia:
        'Ana Laura López. (2021). <i>Estructura y dinámica de la comunidad virtual</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=K_vATJKWltc',
    },
    {
      tema: 'Marketing digital',
      referencia:
        'Núñez Cudriz, E. y Miranda Corrales, J. (2020). <i>El marketing digital como un elemento de apoyo estratégico a las organizaciones</i>.',
      tipo: 'Artículo',
      link:
        'https://www.redalyc.org/journal/4096/409663283006/409663283006.pdf',
    },
    {
      tema: 'Patrones de conducta',
      referencia:
        'Cinconoticias. (2022). <i>Patrones de conducta: qué son, cómo se originan, tipos y ejemplos de patrones de comportamiento en psicología</i>.',
      tipo: 'Sitio <i>web</i>',
      link: 'https://www.cinconoticias.com/patrones-de-conducta/',
    },
  ],
  glosario: [
    {
      termino: 'Analítica <i>web</i>',
      significado:
        'conjunto de técnicas que dan la posibilidad de recopilar, analizar y reportar datos estadísticos de la <i>web</i> para comprender y  optimizar su uso.',
    },
    {
      termino: 'Audiencia',
      significado:
        'individuos que reciben información con medios de comunicación masivos, como, por ejemplo la televisión, la prensa, la radio, y el cine; o que tienen interacción con medios de comunicación alternativos como redes sociales, <i>blogs</i>, sitio <i>web</i>, <i>chat</i> y correo electrónico, entre otros.',
    },
    {
      termino: '<i>Buyer</i> persona',
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
      termino: '<i>Feedback</i>',
      significado:
        'es la opinión que tiene el público objetivo, o posibles clientes de una marca, resultado de una campaña publicitaria o esfuerzo publicitario.',
    },
    {
      termino: '<i>Net</i> etiqueta',
      significado:
        'grupo de normas de conducta general en la <i>web</i> y que son un ajuste de las reglas de etiqueta del mundo físico al digital.',
    },
    {
      termino: 'Patrón de comportamiento',
      significado:
        'corresponde a normas determinadas que sirven de guía para orientar la respuesta o acción que tiene un individuo ante situaciones o circunstancias concretas.',
    },
    {
      termino: '<i>Spamer</i>',
      significado:
        'miembro de una comunidad virtual que publica de manera masiva información que no tiene nada que ver con la filosofía de la plataforma.',
    },
    {
      termino: '<i>Troll</i>',
      significado:
        'individuo que aprovecha una comunidad virtual para hacer comentarios que generen controversia y fomentan el enfrentamiento entre los demás y tiene como fin molestar y captar la atención.',
    },
  ],
  referencias: [
    {
      referencia: 'Abruzzese, A. (2004). <i>Cultura de masas</i>. CIC.',
    },
    {
      referencia:
        'Benitez Márquez, M. (2020). <i>Gestión de comunidades virtuales</i>. Editorial eLearning S.L.',
    },
    {
      referencia:
        'Casanova Ríspoli, E. (2009). <i>Bioética, Cultura Y Patrones De Conducta</i>. Universidad de la Sabana.',
    },
    {
      referencia:
        'Kotler, P. & Keller, K. L. (2012). <i>Dirección de marketing</i>. Pearson.',
    },
    {
      referencia: 'Mitchell, J. (2012). <i>Abrace a sus clientes</i>. Granica.',
    },
    {
      referencia:
        'Ponjuán, G. (2007). <i>Gestión de la información</i>. Ediciones Trea.',
    },
    {
      referencia:
        'Rodríguez, I., Montes, G. & López, Ó. (2006). <i>Principios y estrategias de marketing</i>. Editorial UOC.',
    },
    {
      referencia:
        'Saavedra Llamas, M. (2016). <i>Audiencia social : Estrategias de comunicación para medios y marcas</i>. Primo.',
    },
    {
      referencia: 'Shea, V. (1994). <i>Netiquette</i>. Albion Books.',
    },
    {
      referencia:
        'Xie, S. & Min, Y. (2019). <i>Marketing Digital: Navegando En Aguas Digitales. Sumérgete Conmigo</i>. Ediciones de la U.',
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
        cargo: 'Diseño <i>web</i>',
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
