<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Arquitectura web

    p(data-aos="flip-up") Es la estructura funcional de un sitio web, creando un mapa jerárquico de todas las páginas y la relación entre ellas, de una forma lógica y coherente.

    p(data-aos="flip-up") La estructura de un sitio web cuenta con varias páginas y se distribuyen en forma de mapa, agrupando de forma lógica y jerárquica las páginas que comparten un mismo criterio para facilidad de navegación de los usuarios o clientes.

    p.mb-5(data-aos="flip-up") 
      strong En el siguiente recurso de aprendizaje se presentan los conceptos y representación de la estructura de navegación:

    .tarjeta.bg_04.p-4.mb-5(data-aos="flip-up")
      SlyderA
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Link Juice
            p Se le denomina a la estructura interna y robusta que puede tener un sitio web, dado que este contiene el valor SEO (Search Engine Optimization) de cada una de las páginas. 
            p Esto permite que los sitios web se puedan clasificar y sean indexados por los usuarios en los motores de búsqueda.

          .col-md-4
            figure
              img.img-a(src='@/assets/curso/tema_1/img_36.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 Fundamentos de la arquitectura web
            figure.mb-3
              img.img-a(src='@/assets/curso/tema_1/img_37.png', alt='Texto que describa la imagen')
            p En esta figura se puede observar la representación de la estructura de navegación de un sitio web, el cual refleja las interconexiones de las páginas para poder realizar una interacción adecuada. 
        .row.align-items-center.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 Ejemplo de página Sofia Plus
            figure.mb-3
              img.img-a(src='@/assets/curso/tema_1/img_38.png', alt='Texto que describa la imagen')
            p En este ejemplo de búsqueda en el motor de búsqueda de Google, donde se puede observar que el sitio fue indexado y muestra la información inmersa en su metadata. 

    separador
    #t_2_1.titulo-segundo(data-aos="flip-up")
      .h2 2.1. Conceptos y características

    p.mb-5(data-aos="flip-up") La arquitectura web es el ordenamiento y jerarquización del contenido de un sitio web, en el cual se trabaja bajo los estándares de los sitios web y las categorías que conforman la optimización y cara al posicionamiento en los buscadores, interacción y experiencia de usuarios (UX). El objetivo es resolver las necesidades del cliente, que posiblemente necesite o busque un producto #[i software] online y se dé respuesta por medio de una implementación web. 

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema_1/img_39.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Algunos de los conceptos base para desglosar la arquitectura web son la taxonomía web y la ontología web, donde la primera hace referencia a los diferentes términos que dividen un sitio web y la segunda nos habla de las relaciones entre los diferentes ítems de navegación. 

    p.mb-5(data-aos="flip-up") En la arquitectura web también se incluye el diseño de interfaz de usuario, el diseño de la aplicación y la estructura de la información, con lo cual hay un enfoque del aspecto visual, colores, tamaños de letra, estructura de las diferentes secciones, las funcionalidades segregadas en cada una de las vistas del sitio web y por último, se determina la información que debe existir en cada una de las secciones del sitio web y que se verá reflejado en un ambiente productivo. 

    .cajon.color-secundario.p-4.mb-5(data-aos="flip-up")
      p #[strong.recua_bg2.p-1 Arquitectura de aplicación o arquitectura de #[i software]:] en la arquitectura de aplicación se pueden encontrar métodos, técnicas, diseños y patrones para desarrollar un producto #[i software], la cual provee una guía y una serie de prácticas recomendadas para construir un producto #[i software], de tal modo que se obtenga una solución bien estructurada y siguiendo estándares. 

    .row.mb-5(data-aos="flip-up")
      .col-lg-6
        p En un producto #[i software] se puede encontrar diferentes tipos de soluciones, como por ejemplo una 
          strong solución #[i front-end] o una solución #[i back-end]. 

    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="slide-left")
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_2/img_1.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center.text-white #[i Front-end]
              p Es la solución del lado del cliente, son las aplicaciones instaladas en máquina del usuario y también se hace referencia a las aplicaciones web que se acceden desde un navegador que está en el ordenador del usuario. En el #[i Front-end] se pueden encontrar todo lo relacionado a la experiencia de usuario (UX).
      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="slide-right")
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_2/img_2.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h3.text-center #[i Back-end] 
              p Hace referencia al desarrollo del producto #[i software] que no está en el lado del cliente, es el #[i software] que está alojado en los servidores de una empresa o en la nube, en esta parte del desarrollo incluye el acceso a datos, los servicios y todo lo relacionado con infraestructura para que todo esté operativo. 

    p.mb-5(data-aos="flip-up") La arquitectura es un punto de partida que permite tomar decisiones de desarrollo, como por ejemplo el tipo de estructura, el lenguaje de programación y la infraestructura que se deberá tener en cuenta para su despliegue. En la actualidad se cuenta con diferentes lenguajes de programación, entre los cuales encontramos Swift, Kotlin, JavaScript, Java, Python, Php, entre otros, los cuales son usados para un tipo de programación en específico. 

    .cajon.color-secundario.p-4.mb-5(data-aos="flip-up")
      p #[strong.recua_bg2.p-1 Desarrollo Frontend:] se puede traducir como frente o fachada final, esta vertiente del desarrollo de #[i software] es una especialidad para el desarrollo web y concentra lo que se define como interfaz de usuario (GUI - Graphical User Interface), esta es la parte del sitio web con la cual los usuarios interactúan y este se despliega del lado del cliente; está orientado al lenguaje de marcas o etiquetas, todo lo visual de un sitio web, tamaños, colores, formas, formatos y renderizado de información al usuario. 

    p.mb-5(data-aos="flip-up") #[strong Entre las tecnologías que son usadas del lado #[i Front-end] podemos indicar las siguientes:]

    ul.lista-ul--color.mb-5
      li(data-aos="slide-left") 
        i.fas.fa-check
        | Html5 / Html / XHTML
      li(data-aos="slide-right") 
        i.fas.fa-check
        | XML, SVG
      li(data-aos="slide-left")  
        i.fas.fa-check
        | JavaScript, Json, Canvas
      li(data-aos="slide-right") 
        i.fas.fa-check
        | Css3

    .cajon.color-acento-botones.p-4.mb-5(data-aos="flip-up")
      p #[strong.recua_bg1.p-1 Desarrollo Backend:] está enfocado a lenguajes de programación y hace referencia a la lógica interna del sistema, se le conoce también como el desarrollo del lado del servidor, dado que los componentes están en un espacio servidor que normalmente está conectado al internet (nube) o algún tipo de red que permita acceder a sus funcionalidades. 

    p.mb-5(data-aos="flip-up") #[strong Entre las tecnologías que son usadas del lado #[i Back-end] podemos indicar las siguientes:]

    ul.lista-ul--color.li_1.mb-5
      li(data-aos="slide-left") 
        i.fas.fa-check
        | Servidores de aplicaciones como Apache Friends, Apache Tomcat, Glassfish, Spark, Heroku. 
      li(data-aos="slide-right") 
        i.fas.fa-check
        | Lenguajes como PHP, Java, JavaScript, Python.

    p.mb-5(data-aos="flip-up") #[strong El desarrollo #[i Front-end] y #[i Back-end]] se complementan y convergen, un #[i Front-end] sin #[i Back-end] no tendría una utilidad significativa en el ámbito del desarrollo de aplicaciones, y un #[i Back-end] sin un #[i Front-end] estaría incompleto dado que no tendríamos un interfaz de comunicación que permita ejecutar o desencadenar las acciones relacionadas a la lógica de negocio. En la siguiente figura se presenta la relación entre estas. 

    p.BorTit.mb-5(data-aos="flip-up") #[strong Figura 3] #[br] #[i Sinergia entre Front-end y Back-end]
    figure.mb-5(data-aos="flip-up") 
      img.img-a(src='@/assets/curso/tema_2/img_3.png', alt='Texto que describa la imagen')

    separador
    #t_2_2.titulo-segundo(data-aos="flip-up")
      .h2 2.2 Tipos de arquitectura web

    p.mb-5(data-aos="flip-up") Los diferentes tipos de arquitecturas web se pueden catalogar dada su profundidad, cantidad de interacciones con el usuario al dar clic, como las siguientes: 

    .cajon.color-acento-botones.p-4.mb-5(data-aos="flip-up")
      p.mb-0 #[strong.recua_bg1.p-1 Arquitectura vertical:] son aquellos sitios web que emplean una gran cantidad de categorías, para organizar la información, dejando una gran distancia entre el home y la última página posible, este distanciamiento se mide en clics realizados por el usuario al momento de efectuar la navegación en el sitio.
        p.mb-0 Un ejemplo claro de este tipo de arquitectura se puede presentar las páginas web de las tiendas online, en la siguiente grafica puede visualizar este tipo de arquitectura.

    p.BorTit.mb-5(data-aos="flip-up") #[strong Figura 4] #[br] #[i Arquitectura vertical]
    figure.mb-5(data-aos="flip-up") 
      img.img-a.mb-4(src='@/assets/curso/tema_2/img_4.png', alt='Texto que describa la imagen')
      .row
        .col-lg-4
          figcaption Nota. Adaptado de Idital (2020) 

    .cajon.color-acento-botones.p-4.mb-5(data-aos="flip-up")
      p.mb-0 #[strong.recua_bg1.p-1 Arquitectura Horizontal:] la arquitectura web horizontal o plana, es aquella que tiene la posibilidad de acceder a todo el contenido del sitio web, con uno o dos clics nada más; se trata del método de distribución de información ideal, además los bots (programa informático que actúa como un robot) podrán leer los patrones presentes el sitio web más rápido y esto resulta muy positivo. En la siguiente gráfica se puede visualizar este tipo de arquitectura:

    p.BorTit.mb-5(data-aos="flip-up") #[strong Figura 5] #[br] #[i Estructura horizontal]
    figure.mb-5(data-aos="flip-up") 
      img.img-a(src='@/assets/curso/tema_2/img_5.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="flip-up") Para este tipo de arquitectura se debe aplicar la regla de los tres clics, basada en la forma que los usuarios utilizan las páginas web, lo que permite ayudar al desarrollador sitios webs más intuitivos y con estructuras lógicas jerárquicas; aplicar esta regla se considera cómo una buena práctica en el diseño web.
 
    separador
    #t_2_3.titulo-segundo(data-aos="flip-up")
      .h2 2.3. Mapas de navegación del sitio web

    p.mb-5(data-aos="flip-up") El mapa de navegación es un recurso, esquema o elemento gráfico por lo general en forma de árbol, que representa la estructura o arquitectura del sistema. Este tipo de recursos es usado para poder optimizar los diseños y tener una adecuada estructuración de los contenidos, previamente a desarrollar los contenidos de la aplicación web buscando que el usuario siempre acceda de forma sencilla a lo que está buscando. Sabiendo esto, ahora podrás conocer información relevante sobre los mapas de navegación:

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left") 
        img.img-a.mb-3(src='@/assets/curso/tema_2/img_6.png', alt='Texto que describa la imagen')
        h4.text-center Mapas Hipertextuales
        p Son artefactos que representan gráficamente los documentos, elementos,  hipervínculos  y las conexiones existentes entre los mismos.
      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-up")
        img.img-a.mb-3(src='@/assets/curso/tema_2/img_7.png', alt='Texto que describa la imagen')
        h4.text-center Mapas de Navegación en Acción
        p Describe las categorías implementadas en el menú de navegación.
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right") 
        img.img-a.mb-3(src='@/assets/curso/tema_2/img_8.png', alt='Texto que describa la imagen')
        h4.text-center Software para crear mapas 
        p Se utilizan herramientas de generación de código, por lo general basados en JavaScript, el cual permite la exportación de un menú activo, que utiliza imágenes como iconos y estándares en los archivos generados. 

    p.mb-5(data-aos="flip-up")
      strong A continuación, se presenta un ejemplo grafico de un mapa de navegación con la herramienta Mindmeister:

    p.BorTit.mb-5(data-aos="flip-up") #[strong Figura 6] #[br] #[i Mapa de navegación]
    figure.mb-5(data-aos="flip-up") 
      img.img-a.mb-4(src='@/assets/curso/tema_2/img_9.png', alt='Texto que describa la imagen')
      .row
        .col-lg-4
          figcaption Nota. Adaptado de Eniun (s.f)

    separador
    #t_2_3.titulo-segundo(data-aos="flip-up")
      .h2 2.4. Procedimientos para diseñar un sitio web

    p.mb-5(data-aos="flip-up") En el proceso del diseño y desarrollo de un sitio web, es importante tener presente los siguientes aspectos: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg_05")(data-aos="flip-up")
      .row.justify-content-center(titulo="Realizar una planificación adecuada:")
        p es importante tener claro cuál es el objetivo y que se quiere construir antes de iniciar. Un producto #[i software] puede tener muchas utilidades y según las especificaciones de los requisitos de #[i software] habrá una u otra estructura que se acople mejor a la necesidad. Teniendo en cuenta características como el objetivo (#[i target]), la información a presentar, las palabras clave, formulario de acceso, recursos multimedia, gama de colores, tipografía, entre otros. 

        p Algunas categorizaciones:
        ul.lista-ul--color.li_1
          li(data-aos="slide-left") 
            i.fas.fa-check
            | Aplicaciones web
          li(data-aos="slide-right") 
            i.fas.fa-check
            | #[em Landing page]
          li(data-aos="slide-left") 
            i.fas.fa-check
            | #[em E-Commerce]
          li(data-aos="slide-right") 
            i.fas.fa-check
            | Página web de servicios
          li(data-aos="slide-left") 
            i.fas.fa-check
            | Porfolios / Pagina web personal 
      .row.justify-content-center(titulo="Establece el dominio y selecciona el hosting:")
        p sin estos dos elementos es muy poco probable que tu producto #[i software] web pueda estar en línea, dado que el #[i hosting] es el espacio donde se aloja el producto y todos los recursos que lo conforman, en pocas palabras es el espacio en el cual está desplegado el producto. Dependiendo de la complejidad del proyecto se podrá escoger un #[i hosting] básico u otro más complejo que dé respuesta a las necesidades de infraestructura. 

        p Mientras, el dominio es el nombre que asignamos a la web este también es conocido como DNS (#[i Domain Name Server]) por sus siglas en inglés y su función consiste en traducir la dirección IP para encontrarla fácilmente en internet. Es importante que el nombre del dominio sea una insignia del sitio web, dado que será un identificador para que los usuarios tengan mayor recordación. Algunos ejemplos de dominio son ‘google.com’, ‘facebook.com’, ‘gmail.com’, ‘instagram.com’, ‘gov.com’, entre otros. 
      .row.justify-content-center(titulo="Elige el lenguaje de programación para el desarrollo de tu sitio web:")
        p si tu sitio web es un sistema de información a la medida, lo más probable es que el desarrollo se realice desde cero, por eso es importante identificar cual es la arquitectura de aplicación más apropiada para la solución, identificar los pro y contra del uso de uno u otro lenguaje y de ser necesario explorar un #[i framework] que se adapte a la necesidad. 

        p Después de realizar la identificación de la arquitectura de aplicación, se debe seleccionar un lenguaje de programación, explorar los posibles #[i frameworks], comenzar la instalación del entorno de desarrollo, lo que incluye instalar los sdks (#[i Software Development Kit]) necesarios, instalar un servidor de aplicaciones, seleccionar un motor de base de datos para almacenar la información requerida, instalar el IDE y #[i plugins], configurar una herramienta el control de las versiones de código y comenzar a codificar la solución.

        p Si se identifica que la necesidad es genérica y que en el mercado se cuenta con herramientas que permitan construir un sitio web por medio de un CMS (#[i Content Management System]), los pasos descritos previamente no serán necesarios y el enfoque estará en escoger bien qué componentes usar para iniciar el sitio web.
      .row.justify-content-center(titulo="Elige el CMS idóneo para tu página web y realiza la instalación: ")
        p estas herramientas de diseño “en tres clics”, se encuentran una serie de gestores de contenidos que permiten crear páginas webs desde cero con buenos resultados, entre ellos se puede destacar WordPress como una de las mejores opciones para crear una página web.

        p Drupal y magneto son CMS, reconocidos y potentes con los cuales se pueden crear sitios web. Otro ejemplo son Prestashop o Shopify que están enfocados en la creación de tiendas #[i online]. Un CMS bastante usado es WordPress, ya que es un gestor sencillo al momento de implementar los componentes web con una amplia documentación y comunidad.

        p Un valor agregado de los CMS, es que cuentan con una comunidad de desarrolladores que construyen #[i plugins] y componentes para diferentes necesidades, con lo cual el propietario del sitio solo es ir al panel de control y añadir el componente que desea para comenzar a agregar nuevas funcionalidades a su sitio web. 
      .row.justify-content-center(titulo="Establece la estructura web:")
        p en este apartado se hace referencia a la estructuración, distribución y organización de los elementos que compondrán la estructura visual del componente web, de la cual se crea la diagramación del sitio y se establece como verá la información el usuario, también se incluye la relación de las diferentes páginas entre sí, cuáles serán las superiores, cuales tendrán dependencias de otras, cuáles serán públicas, cuáles requerirán de un inicio de sesión, cuáles tendrán su representación en la parte superior (header) o en la parte inferior (footer). Al hablar de diseño web, no solo se hace referencia a la parte visual, dado que la arquitectura interna también es importante y dentro de esa arquitectura se puede tener una arquitectura específica por el #[i front-end], por el #[i back-end] y una genérica de sistema. 
      .row.justify-content-center(titulo="Establece la estructura web:")
        p en este punto es requerido definir varios elementos que están relacionados con las plantillas web, es importante tener como referencia el tipo de información que se refleja y el tipo de usuario que tendrá acceso a la información. Imagina que estás diseñando un producto #[i software] para una escuela donde se orientan clases a niños de primero hasta quinto de primaria, donde las edades oscilan entre los 7 a 12 años, el requisito es que se construya una aplicación web que por medio de juegos y se pueda tener un recurso didáctico adicional. 

        p Por lo cual jugar con colores llamativos, letra grande, tipografía animada, muchas imágenes hará que los niños olviden que están estudiando y se enfoquen en aprender jugando, pero si al contrario viras ese diseño a sitios empresariales orientado a personas mayores, posiblemente no se le sacará el mayor provecho. 

    separador
    #t_2_4.titulo-segundo(data-aos="flip-up")
      .h2 2.5 Procedimientos para diseñar un sitio web

    p(data-aos="flip-up") Un lenguaje de programación es un lenguaje formal, en pocas palabras es un lenguaje con reglas gramaticales bien definidas, que proporciona a una persona la capacidad de escribir una serie de instrucciones (programar) con el fin de controlar el comportamiento de un componente informático, tales como: los computadores, smartphones, microcontroladores, Smart Tv, entre otros. 

    .cajon-b.color-secundario.p-2.mb-5(data-aos="flip-up")
      p.mb-0 En la actualidad, hay una serie de lenguajes que se usan en diferentes frentes o áreas de la programación; por ejemplo, para desarrollar front-end existe JavaScript en conjunto con HTML5 y Css3, para el desarrollo Mobile dependiendo si es iOS se usa Swift, y en su contraparte Android se usa Java o Kotlin, en el desarrollo back-end podemos encontrar lenguajes como Java, PHP, Python, C#, C++. 

    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="slide-left") 
        p Por otro lado, los Frameworks (Marcos de trabajo) son una serie de librerías, paquetes y clases, que buscan optimizar el proceso de desarrollo, por ejemplo, en JavaScript podemos encontrar a Angular, VueJs, ReactJs, en PHP encontramos a Yii, Cake, Laravel, Java a Spring MVC, Spring Boot, PrimeFaces. Estos fueron diseñados con la finalidad de implementar patrones identificados y maximizar el proceso de configuración y desarrollo inicial de los productos #[i software], de tal manera que los equipos de trabajo se enfocarán explícitamente en la lógica de negocio relacionada al problema. 
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right") 
        img.img-a(src='@/assets/curso/tema_2/img_10.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="flip-up")
      strong A continuación, se presentan los lenguajes de programación más reconocidos con sus respectivos Frameworks:

    TabsB.color-secundario.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo=" " :icono="require('@/assets/curso/tema_2/img_11.png')")
        .row
          .col-md-8.mb-4.mb-md-0.bg_06.p-4
            h4 JavaScript
            p Fue desarrollado en 1995 por Netscape, su objetivo inicial era maximizar los lenguajes HTML y CSS para que los programadores sepan cómo interactúan los usuarios dentro de una página web y así poder presentar el contenido de forma más dinámica. El crecimiento de JavaScript dentro del sector ha sido tan grande que su uso no se limitó a los navegadores web, sino que también se aplica a nivel de servidor. #[strong Frameworks]: Angular, Vue.js, ReactJs, Ember.js, Meteoro, Mithril, Node.js, Polímero, Aurelia, Backbone.js.
      .py-4.py-md-5(titulo=" " :icono="require('@/assets/curso/tema_2/img_12.png')")
        .row
          .col-md-8.mb-4.mb-md-0.bg_06.p-4
            h4 PHP
            p Este lenguaje gratuito sirve para aquellos programadores que empiezan a manejarse en la creación de páginas web y aplicaciones web dinámicas, gracias a su facilidad de comprensión y compatibilidad con el lenguaje estático HTML, está muy vinculado a la creación y mantenimiento de bases de datos y, por supuesto, sirve de soporte a WordPress, el CMS más usado en la actualidad por los desarrolladores web para crear sus proyectos o gestionar las webs de sus clientes. Frameworks: Aura, FuelPHP, Slim, Phalcon, CakePHP, Zend Framework, Yii, Codeigniter.
      .py-4.py-md-5(titulo=" " :icono="require('@/assets/curso/tema_2/img_13.png')")
        .row
          .col-md-8.mb-4.mb-md-0.bg_06.p-4
            h4 Java
            p Es un lenguaje de programación comercializado en 1995 por Sun Microsystems y desde aquella época ha crecido hasta consolidarse en pleno siglo XXI como la referencia a la hora de crear páginas web, de hecho, si no tienes Java instalado en tu ordenador seguramente no podrás ver por completo la gran mayoría de webs que visitas hoy en día. Frameworks: Spring, Spring-boot, Puntales, Primefaces, Hibernate, Apache Wicket, JSF (Java Server Faces), Dropwizard, Griales, ATG, Apache Hadoop.
      .py-4.py-md-5(titulo=" " :icono="require('@/assets/curso/tema_2/img_14.png')")
        .row
          .col-md-8.mb-4.mb-md-0.bg_06.p-4
            h4 Ruby
            p Es un lenguaje de programación que ofrece escritura dinámica y un recolector de basura automático, es decir, es el propio #[i software] el que utiliza de forma eficiente la memoria, liberando espacio cuando ya no tiene sentido mantener todo aquello que está dentro de dicho espacio. Una gran ventaja que ofrece Ruby es que es muy fácil de leer, pero hay que tener cuidado a la hora de cometer errores cuando se está programando, porque cualquier palabra mal escrita puede derivar en tiempos de carga muy lentos. #[strong Frameworks]: Sinatra, Hobbit, Ramaze, Nancy, Padrino, Crepe, NYNY, Ruby Grape,Celluloid, Hanami, Scorched.
      .py-4.py-md-5(:icono="require('@/assets/curso/tema_2/img_15.png')")
        .row
          .col-md-8.mb-4.mb-md-0.bg_06.p-4
            h4 Python
            p Es otro lenguaje gratuito que no reporta gran dificultad para programar en cualquier sistema operativo, es dinámico y se utiliza como lenguaje de scripting. Es además ampliamente reconocido en el sector tecnológico porque diversos servicios del gigante Google como YouTube usan Python, al igual que muchos videojuegos incluyen en su programación parte de código escrito en Python. #[strong Frameworks]: Django, CherryPy, Pirámide, Grok, TurboGears, Web2Py, Matraz, Flask 
      .py-4.py-md-5(:icono="require('@/assets/curso/tema_2/img_16.png')")
        .row
          .col-md-8.mb-4.mb-md-0.bg_06.p-4
            h4 C#
            p Está considerado como uno de los lenguajes obligatorios que todo desarrollador o programador debe conocer si quiere tener proyectos a su cargo en todo momento. A pesar de recibir ciertas críticas con base a la vinculación entre C# y .NET Framework, la gran ventaja es que aprender y empezar a programar en C# permite estar presente en Windows, el sistema operativo más usado del mundo, además de poder aprovechar las sinergias que Microsoft ha creado entre Windows y su consola de sobremesa Xbox. #[strong Frameworks:] .Net MVC, .Net Core

    p.mb-5(data-aos="flip-up") Por su parte, un IDE (Integrated Developer Environment) o entorno de desarrollo integrado, es una aplicación especial diseñada para programar, la cual cuenta con una interfaz gráfica (GUI), con un editor de texto que permite escribir las sentencias u órdenes en el lenguaje de programación seleccionado para construir el producto #[i software]. Este tipo de herramientas vienen con una serie de pasos de configuración para que al realizar el proceso de programación, compilación y ejecución todo esté acorde y se pueda probar y desplegar el producto de manera local (en la máquina del desarrollador). Sabiendo esto, las siguientes son algunas de las características de los IDE:

    .cajon.color-acento-botones.p-4.mb-5(data-aos="slide-left") 
      p.mb-0 #[strong.recua_bg1.p-1 Editor de código fuente:] es la herramienta que permite al desarrollador escribir el código fuente del producto #[i software], esta herramienta por lo general contiene indicadores visuales, que ayudan a identificar los errores de sintaxis, autocompletado, comprobación de errores a la medida que se van escribiendo las sentencias. En esta herramienta se hace plena validación de las reglas semánticas del lenguaje en el cual se está construyendo el producto #[i software].

    .cajon.color-secundario.p-4.mb-5(data-aos="slide-right") 
      p.mb-0 #[strong.recua_bg2 Automatización de compilaciones locales:] herramienta que sirve para automatizar tareas sencillas y repetitivas como parte de la comisión local, esto permite crear el código binario, ejecución de prueba automatizadas, verificación de cobertura, verificación de estilos en la programación para el código fuente. 

    .cajon.color-acento-botones.p-4.mb-5(data-aos="slide-left") 
      p.mb-0 #[strong.recua_bg1.p-1 Depurador:] es la herramienta que sirve para probar los programas, en el cual se realiza una inspección y se ubican los errores en el código de forma visual o en un reporte en texto plano, esto es de mucha utilidad para los desarrolladores ya que permite encontrar problemas rápidamente y dar solución. 

    .row.mb-5
      .col-lg-5
        h3 Estos son algunos de los IDE’s más empleados en el ámbito del desarrollo web: 

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        ul.lista-ul--color.mb-5
          li(data-aos="slide-left") 
            i.fas.fa-check
            | IntelliJ Idea
          li(data-aos="slide-right") 
            i.fas.fa-check
            | Visual Studio Code / Visual Studio
          li(data-aos="slide-left") 
            i.fas.fa-check
            | Sublime Text 3 
          li(data-aos="slide-right") 
            i.fas.fa-check
            | Atom
          li(data-aos="slide-left") 
            i.fas.fa-check
            | Netbeans
          li(data-aos="slide-right") 
            i.fas.fa-check
            | Notepad++
          li(data-aos="slide-left") 
            i.fas.fa-check
            | Eclipse
      .col-lg-4(data-aos="flip-up")
        img.img-a(src='@/assets/curso/tema_2/img_17.png', alt='Texto que describa la imagen')

    p.mb-5 A su vez, los #[strong #[i plugins]] son componentes que permiten habilitar nuevas características a los IDE y entornos de desarrollo. Utilizar #[i plugins] implica asumir cierto riesgo en la seguridad, ya que los hackers pueden usar estas ampliaciones como puerto de entrada para un ataque en el computador del desarrollador, esto se puede dar, dado que los #[i plugins] son parches de #[i software] desarrollados por agentes externos al propietario del IDE, por lo cual podría contener en su código fuente un malware que se use con fines adversos al inicialmente definido por el entorno de desarrollo. Tener en cuenta que cada IDE tiene su propia línea de #[i plugins], con lo cual el desarrollador dispondrá de una amplia gama de opciones para definir cuál será la mejor herramienta para poder desempeñar sus funciones. 

    h4.mb-5 Estos son algunos plugins:

    .bg_07.p-4.mb-0(data-aos="slide-left") 
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          p #[strong PhpStorm, Plugins:] Material Theme UI for Jetbrains, IntelliJ IDEA / PhpStorm Laravel Plugin, Php Inspections (EA Extended), IntelliJ Bash Plugin.
        .col-lg-4
          img.img-a(src='@/assets/curso/tema_2/img_18.png', alt='Texto que describa la imagen')
    .bg_08.p-4.mb-0(data-aos="slide-right") 
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          p #[strong Sublime Text 3, Plugins:] Seti UI, Emmet, Auto Filename, SFTP, LiveReload, ColorPicker, Alignment, BracketHighlighter, Advanced New File.
        .col-lg-4
          img.img-a(src='@/assets/curso/tema_2/img_19.png', alt='Texto que describa la imagen')
    .bg_07.p-4.mb-0(data-aos="slide-left") 
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          p #[strong Atom, plugins:] file-icons, minimap, pigments, color-picker, highlight-selected, goto-definition, git-plus, git-time-machine, merge-conflicts, todo-show.
        .col-lg-4
          img.img-a(src='@/assets/curso/tema_2/img_20.png', alt='Texto que describa la imagen')
    .bg_08.p-4.mb-0(data-aos="slide-right") 
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          p #[strong Coda 2, plugins:] Importador, Kara, Ficha desplegable, Microformatos, WakaTime, Blanqueamiento.
        .col-lg-4
          img.img-a(src='@/assets/curso/tema_2/img_21.png', alt='Texto que describa la imagen')
    .bg_07.p-4.mb-0(data-aos="slide-left") 
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          p #[strong NetBeans, plugins:] easyUML, EasyPmd, JSLint, Complemento Gluon, Darcula LAF para netbeans, Barra de herramientas de Git, Sugerencias adicionales de Java.
        .col-lg-4
          img.img-a(src='@/assets/curso/tema_2/img_22.png', alt='Texto que describa la imagen')





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
