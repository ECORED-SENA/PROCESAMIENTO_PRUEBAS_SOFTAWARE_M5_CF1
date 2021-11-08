export default {
  global: {
    componenteFormativo: 'Estructura de una aplicación',
    descripcionCurso:
      'En este módulo el aprendiz comprenderá los conceptos fundamentales del diseño y arquitectura de <em>software</em>, cuáles son los tipos de arquitectura de una aplicación <em>web</em>, identificar sus componentes, protocolos, herramientas, entornos y lenguajes de programación. Será capaz de identificar las diferencias entre los diversos tipos de proyectos en el desarrollo de <em>software</em> y tendrá la capacidad de interpretar diagramas de diseño y arquitectura de <em>software</em>.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Arquitectura de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de arquitectura de aplicación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Patrones de diseño',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Arquitectura <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos y características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de arquitectura <em>web</em>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Mapas de navegación del sitio <em>web</em>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Procedimientos para diseñar un sitio <em>web</em>',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Lenguajes de programación, <em>frameworks, IDE’s</em> y <em/>plugins</em> usados en el desarrollo <em>web</em>',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación entre componentes de un sitio <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas y protocolos de comunicación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características del diseño <em>web</em>',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Alarcón, J. M. (2019). <em>Los conceptos fundamentales sobre Programación Orientada Objetos explicados de manera simple</em>. CampusMVP. ',
      link:
        'https://www.campusmvp.es/recursos/post/los-conceptos-fundamentales-sobre-programacion-orientada-objetos-explicados-de-manera-simple.aspx',
    },

    {
      referencia:
        'Blancarte, O. (2018). Arquitectura Orientada a Microservicios (MSI). Blog. ',
      link:
        'https://www.oscarblancarteblog.com/2018/05/22/que-son-los-microservicios/',
    },

    {
      referencia:
        'Blancarte, O. (2020). <em>Arquitectura Monolítica</em>. Programming. ',
      link:
        'https://reactiveprogramming.io/blog/es/estilos-arquitectonicos/monolitico',
    },

    {
      referencia:
        'CursosGratis (2021). <em>Arquitectura cliente-servidor: definición, tipos, ejemplos, ventajas y desventajas</em>. Aprendiendoaprogramar.es. ',
      link:
        'https://aprendiendoaprogramar.es/blog/arquitectura-cliente-servidor-definicion-tipos-ejemplos-ventajas-y-desventajas/',
    },

    {
      referencia:
        'Desarrollos Creativos. (2020). <em>Importancia de la Arquitectura de una página web en el SEO</em>. Desarrolloscreativos.net. ',
      link:
        'http://desarrolloscreativos.net/posicionamiento-web-seo/importancia-de-la-arquitectura-de-una-pagina-web-en-el-seo/',
    },

    {
      referencia:
        'Eniun. (s.f.). <em>Mapas conceptuales, mapas de navegación y sitemaps</em>. Eniun. ',
      link: 'https://www.eniun.com/mapas-conceptuales-navegacion-sitemaps/ ',
    },

    {
      referencia: 'Idital. (2020). <em>Arquitectura página web</em>. Idital. ',
      link: 'https://idital.com/diccionario-seo/arquitectura-pagina-web/',
    },

    {
      referencia:
        'Programadorclic. (s.f.). <em>Arquitectura en capas del patrón de arquitectura de software</em>. Programadorclic. ',
      link: 'https://programmerclick.com/article/338572330/',
    },

    {
      referencia:
        'Reynoso, C. B. (2004). Introducción a la Arquitectura de <em>Software</em>. <em>Universidad de Buenos Aires</em>, 33. ',
      link:
        'http://cic.javerianacali.edu.co/wiki/lib/exe/fetch.php?media=materias:introarq.pdf',
    },

    {
      referencia:
        'Tovar Casallas, A. (2016). <em>Arquitectura de <em>software</em> para la gestión del proceso de validación de núcleos familiares</em>. udistrital. ',
      link:
        'https://repository.udistrital.edu.co/bitstream/handle/11349/5184/TovarCasallasAlvaro2016.pdf;jsessionid=3AF46842DF4FDE64884BA906E3AFA903?sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Aplicación',
      significado:
        'Producto <em>software</em> creado para ejecutar una acción en específico, tales como cálculo de notas, recepción de pagos en línea, gestión de información, entre otros.',
    },
    {
      termino: 'Arquitectura',
      significado:
        'Estructura lógica y física de los componentes de una computadora.',
    },
    {
      termino: 'SEO',
      significado:
        'De sus iniciales en inglés: <em>Search Engine Optimization</em>, que traduce Optimización en el motor de búsquedas, y su objetivo es adecuar el sitio <em>web</em> a desarrollar para ser detectado rápidamente dentro de las búsquedas realizadas, mejorando el orden de aparición.',
    },
    {
      termino: 'Software',
      terminoHtml: '<em>Software</em>',
      significado:
        'Conjunto de algoritmos, reglas, componentes e instrucciones informáticas, para ejecutar una tarea computacional.',
    },
    {
      termino: 'Patrón',
      significado: 'Modelo que sirve de muestra para sacar otra cosa igual.',
    },
    {
      termino: 'UX',
      significado:
        'De sus siglas en inglés: <em>User eXperience</em>, que traducido al español sería Experiencia de Usuario, abarca todos los aspectos de la interacción de un usuario final con un producto o servicio.',
    },
    {
      termino: 'Web',
      terminoHtml: '<em>Web</em>',
      significado: 'Red informática.',
    },
  ],
  complementario: [
    {
      texto: 'IBM. (2006). Concepto: <em>Arquitectura de software</em>. Cgrw.',
      tipo: 'Documento',
      link:
        'https://cgrw01.cgr.go.cr/rup/RUP.es/SmallProjects/core.base_rup/guidances/concepts/software_architecture_4269A354.html',
    },
    {
      texto:
        'Luque, R. (2020). <em>Cómo crear una arquitectura web óptima para SEO</em>. Seoalive.com.',
      tipo: 'Artículo',
      link: 'https://seoalive.com/arquitectura-web/',
    },
    {
      texto:
        'Publisuites. (2020). <em>Arquitectura web: Cómo organizar bien los contenidos de tu web</em>. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/VSXdCHSFHXM',
    },
    {
      texto:
        'Cuesta, D. (2019). <em>Arquitectura Web, Estructura vertical, horizontal y mixta</em>. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/BxZFa9EK028',
    },
    {
      texto:
        'Fernández, A. (2021). <em>Tipos de arquitectura web y eficiencia para SEO</em>. Blog.',
      tipo: 'Documento',
      link: 'https://albertofdez.com/blog/seo-on-page/tipos-arquitectura-web',
    },
    {
      texto:
        'Rodríguez, A. (2020). <em>¿Cuáles son lenguajes de programación web más usados en Internet?</em> Godaddy.',
      tipo: 'Documento',
      link:
        'https://es.godaddy.com/blog/cuales-son-lenguajes-de-programacion-web-mas-usados-en-internet',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Julián Estrada Guzmán',
        cargo: 'Experto temático',
        centro: 'SENA Colombo Alemán',
      },
      {
        nombre: 'Gustavo Rodríguez',
        cargo: 'Experto temático',
        centro: 'SENA Colombo Alemán',
      },
      {
        nombre: 'Giovanna Andrea Escobar Ospina',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Servicios de Salud Regional Antioquia',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Carlos Julián Ramirez Benitez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
