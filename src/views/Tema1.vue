<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Arquitectura de #[i software]

    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="slide-left")
        p Juega un papel muy importante en el proceso del desarrollo de #[i software], ya que desde allí se definen la estructura, componentes, comportamiento e infraestructura requerida para la construcción del #[i software], impactando la capacidad para satisfacer los atributos de calidad del sistema; entre estos están: el desempeño, tiempos de respuesta, usabilidad, accesibilidad, escalabilidad, mantenimiento y cambios de nuevas funcionalidades. 

        .cajon-b.color-acento-botones.p-1.mb-5
          p.mb-0 Los atributos de calidad son parte de los requisitos del sistema no funcionales y son características que se deben expresar de forma cuantitativa. No tienen sentido si se expresan de forma subjetiva, dado que esto no va a ser posteriormente evaluable; por ejemplo, decir que el sistema al recibir una petición #[strong “debe ser rápido”] o que una página #[strong “debe ser ligera al cargar”], esto no se podría evaluar objetivamente. Por lo cual, podríamos decir que, si en un sistema estructurado la información debe pasar por muchos componentes antes de devolver el resultado, esto incurre en aumentar la latencia y su desempeño puede llegar a ser pobre. Otro ejemplo es que si los componentes de un #[i software] presentan un alto acoplamiento y una baja cohesión entre ellos se limita altamente la modificabilidad.


      .col-lg-5.mb-4.mb-lg-0(data-aos="slide-right")
        img.img-a(src='@/assets/curso/tema_1/img_1.png', alt='Texto que describa la imagen')

    p(data-aos="flip-up") El definir la estructura de un sistema de información, representa un impacto menor ante los requisitos funcionales por el sistema. Un producto #[i software] que contiene una estructura en espagueti puede ser totalmente funcional, dado que da respuestas a las necesidades del cliente, pero puede ser un caos su mantenimiento dado que sus componentes no contendrán patrones fáciles de identificar para la realización de cambios o mejoras.

    .bloque-texto-b.color-secundario.mb-5(data-aos="flip-up")
      .bloque-texto-b__texto
        p Las propiedades de calidad y la arquitectura son fundamentales para orientar el desarrollo de un producto #[em software], pues a su vez permiten establecer un cronograma acertado de las tareas a implementar por el equipo de desarrollo, los diseños arquitectónicos que se definen para un proyecto en específico se pueden reutilizar, sin importar el #[em core] de negocio al que pertenezcan; en otras palabras no importa si el sistema es diferente, si inicialmente era un sistema bancario y el otro una plataforma de streaming, la arquitectura se podrá aprovechar en los diferentes modelos de negocio. 

    p.BorTit.mb-5(data-aos="flip-up") #[strong Figura 1] #[br] Representación de la arquitectura por capas
    figure.mb-5(data-aos="flip-up") 
      img.img-a.mb-4(src='@/assets/curso/tema_1/img_2.svg', alt='Texto que describa la imagen')
      .row
        .col-lg-4
          figcaption Nota. Adaptada de Programadorclic (s.f.)

    p.mb-5(data-aos="flip-up")
      strong En la anterior imagen se puede observar el ejemplo de una arquitectura con 5 capas, en la cual cada capa tiene una finalidad específica en la aplicación, las cuales se describen a continuación: 

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex(data-aos="slide-left")
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 1
          h4 Capa de datos
          p Representa el espacio donde se almacenará la información, aquí se pueden encontrar los motores de bases de datos, entre ellos las bases de datos relacionales o no relacionales.
          img.img-a(src='@/assets/curso/tema_1/img_3.png', alt='Texto que describa la imagen')


      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex(data-aos="flip-up")
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          h4 Capa de acceso de datos
          p Contiene los componentes, clases o archivos que interactúan con la capa de datos, se puede encontrar ORM o #[i Frameworks] especializados que facilitan la conexión con el motor de base de datos.
          img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='Texto que describa la imagen')
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex(data-aos="slide-right")
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          h4 Capa de negocio
          p Contiene las reglas de negocio establecidas en los casos de uso, en pocas palabras implementa la lógica de negocio.
          img.img-a(src='@/assets/curso/tema_1/img_5.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex(data-aos="slide-left")
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 4
          h4 Capa de servicio
          p Es la responsable de intermediar la comunicación desde cualquier interfaz de acceso hacia la lógica de negocio, en ella se establecen adaptadores y #[i proxies] (servidores intermediarios de acceso) que permiten el acceso desde diferentes consumidores o canales.
          img.img-a(src='@/assets/curso/tema_1/img_6.png', alt='Texto que describa la imagen')
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex(data-aos="slide-right")
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 5
          h4 Capa de presentación
          p Representa las interfaces de usuario, vistas o pantallas que están de cara al usuario, lo que también es conocido como GUI (#[i Graphical User Interfaces]) por sus siglas en inglés.
          img.img-a(src='@/assets/curso/tema_1/img_7.png', alt='Texto que describa la imagen')
      .col-md-6.col-xl.mb-4.mb-xl-0

    separador
    #t_1_1.titulo-segundo(data-aos="flip-up").mb-4
      .h2 1.1 Tipos de arquitectura de aplicación

    p(data-aos="flip-up") Es necesaria al decidir la arquitectura que se debe usar en el desarrollo de un sistema de información, aplicación o sitio #[i web], permitiendo evaluar y definir los objetivos estratégicos, esto ayudará que la arquitectura a diseñar respalde la finalidad del proyecto y que los componentes encajen adecuadamente. 
    p(data-aos="flip-up").mb-5
      strong Entre las arquitecturas más conocidas y empleadas para el desarrollo de sitios, aplicaciones o sistemas de información #[i web] están las siguientes:

    .bg_01.p-5.mb-5
      h3 Arquitectura en capas y N-tier

      p Es un tipo de arquitectura tradicional que suele emplearse en el diseño de aplicaciones #[i ON-Premise] (Infraestructura de #[i software] local) y empresariales, por lo general se asocia con aplicaciones heredadas.

      h4.mb-5 Representación de arquitectura por capas

      img.img-a.mb-3(data-aos="slide-left")(src='@/assets/curso/tema_1/img_40.png', alt='Texto que describa la imagen')
      img.img-a.mb-3(data-aos="slide-right")(src='@/assets/curso/tema_1/img_41.png', alt='Texto que describa la imagen')
      img.img-a.mb-3(data-aos="slide-left")(src='@/assets/curso/tema_1/img_42.png', alt='Texto que describa la imagen')
      img.img-a.mb-5(data-aos="slide-right")(src='@/assets/curso/tema_1/img_43.png', alt='Texto que describa la imagen')

      .row.mb-5(data-aos="flip-up")
        .col-lg-6.mb-4.mb-lg-0(data-aos="slide-left")
          .bg_04.p-4
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | En esta arquitectura se definen diferentes capas o niveles.
              li 
                i.fas.fa-check
                | Cada una de las capas componen la aplicación y tienen una función específica.
              li 
                i.fas.fa-check
                | Permite la gestión de dependencias y el diseño de funciones lógicas de acuerdo con el nivel de cada capa.
              li 
                i.fas.fa-check
                | Segregando las responsabilidades, evitando la duplicación o redundancia en la creación de código.
              li 
                i.fas.fa-check
                | Permite crear validaciones, reglas de negocio o conexiones a drivers (adaptadores). 
        .col-lg-6(data-aos="slide-right")
          img.img-a(src='@/assets/curso/tema_1/img_9.png', alt='Texto que describa la imagen')

      .bg_02.rounded.p-4
        p.mb-0.txt_02 Estas arquitecturas se organizan de forma horizontal por lo que la comunicación entre ellas debe ser de una capa superior a una inferior.
 

    .bg_01.p-5.mb-5(data-aos="flip-up")
      h3.mb-5 Arquitectura monolítica: 

      .tarjeta.bg_04.p-4.mb-5
        SlyderA
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Es un tipo de arquitectura tradicional asociada a los sistemas heredados, estas contemplan toda la funcionalidad en sí, en la cual hay conexión directa a la interacción de servicios como a la construcción de estos.
            .col-md-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_10.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Esto significa que al hacer algún tipo de ajuste o cambio funcional el impacto es bastante alto y crítico,  pues hay afectaciones en la aplicación y en la infraestructura subyacente.
            .col-md-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_11.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Un solo cambio implica volver a desplegar toda la infraestructura, hay empresas que optan por lanzar actualizaciones 1 o 2 veces al año, y muchas veces sin incluir nuevas funcionalidades y solo es soporte de mantenimiento.
            .col-md-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_12.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            h4.text-center.mb-5 Representación de una Arquitectura Monolítica:
            img.img-a.mb-3(src='@/assets/curso/tema_1/img_13.svg', alt='Texto que describa la imagen')
            .row
              .col-lg-4
                  figcaption.mb-4 Nota. Adaptada de Blancarte (2020)

    .bg_01.p-5.mb-5(data-aos="flip-up")
      h3.mb-5 Arquitectura orientada a servicios (SOA): 
      .tarjeta.bg_04.p-4.mb-5
        SlyderA
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p En esta se definen las funcionalidades en estructuras de servicios independientes y reutilizables que se utilizan por medio de un bus de servicios empresarial (ESB). 
            .col-md-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_14.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Los servicios se organizan en torno a un proceso empresarial específico que se denomina “dominio”, estos servicios deben cumplir con un protocolo de comunicación como SOAP, REST, ActiveMQ. 
            .col-md-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_15.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Una aplicación Front-end puede consumir estos servicios por medio de una integración hacia el bus y presentarla al cliente.  
            .col-md-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_16.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            h4.text-center.mb-5 Representación de arquitectura orientada a servicios (SOA)
            img.img-a.mb-4(src='@/assets/curso/tema_1/img_17.svg', alt='Texto que describa la imagen')

    .bg_01.p-5.mb-5(data-aos="flip-up")
      h3.mb-5 Arquitectura de microservicios (MSI): 
      .tarjeta.bg_04.p-4.mb-5
        SlyderA
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Representa un modo de abordar la construcción del #[i software] y la estructuración del mismo, en este tipo de implementación el producto #[i software] se divide en elementos más pequeños, que se representan en muchos productos de #[i software] (aplicaciones), los cuales son independientes entre sí. 
            .col-md-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_18.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p A cada uno de estos elementos individuales se le denomina microservicio, que por lo general están distribuidos por dominio de negocio y tiene la particularidad de manejar un bajo acoplamiento, de tal manera que no influyen entre sí.  
            .col-md-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_19.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Este marco de trabajo es apropiado para dar soporte oportuno a la escalabilidad dinámica y la tolerancia a fallos, dado que se puede ampliar su función utilitaria sin tener que recurrir a una infraestructura compleja, se pueden realizar cambios rápidos y no afectar de esta manera a los demás dominios funcionales representados en los microservicios.
            .col-md-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_20.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            h4.text-center.mb-5 Representación de arquitectura orientada a servicios (SOA)
            img.img-a.mb-2(src='@/assets/curso/tema_1/img_21.svg', alt='Texto que describa la imagen')
            .row
              .col-lg-4
                figcaption.mb-3 Nota. Adaptado de Blancarte (2018).

            p.mb-4 Como se refleja en la figura, el contenedor 1, 2, 3, n, representan los microservicios (aplicaciones pequeñas), en las cuales se contienen una serie de servicios, estos se pueden orquestar entre sí y ser liberados directamente a un cliente, que puede ser un sitio #[i web], una aplicación móvil o el #[i backend] de otro producto #[i software].  

    p(data-aos="slide-left") El objetivo de implementar este tipo de arquitecturas es distribuir el #[i software] de calidad con mayor rapidez, dado que se facilita el proceso de crear diversos servicios al mismo tiempo y desplegarlos, sin la necesidad de tener que construir una sola aplicación monolítica inmensa que al final puede llegar a ser insostenible. Gracias a esto cada desarrollador puede trabajar en sus servicios o funcionalidades al mismo tiempo sin afectar toda la aplicación y permitiendo de esta manera lanzar nuevas características de forma frecuente. 

    p.mb-5(data-aos="slide-right") Es importante destacar la diferencia entre las arquitecturas tradicionales y las modernas, de las cuales nos encontramos con la monolítica y la orientada a microservicios. En la siguiente figura, se puede observar que mientras el primer apartado gráfico indica que todos los componentes de #[i software] están inmersos en un solo componente y realizar un cambio suele ser un proceso crítico que se realiza 1 a 2 veces por año, la segunda parte presenta la segregación y distribución de funcionalidades de tal manera que corregir o crear nuevas funcionalidades es sencillo sin repercutir en generar caos al desplegar una nueva funcionalidad o mejora, esto permite que haya un despliegue continuo. Para describir un poco mejor las diferencias entre las dos vertientes se presenta la siguiente figura:

    p.BorTit(data-aos="flip-up") #[strong Figura 2] #[br]  Arquitectura monolítica vs arquitectura orientada a microservicios
    figure.mb-5(data-aos="flip-up")
      img.img-a.mb-3(src='@/assets/curso/tema_1/img_22.svg', alt='Texto que describa la imagen')
      .row
        .col-lg-4
          figcaption Nota. Adaptado de Decide Soluciones (2019)

    .bg_01.p-5.mb-5(data-aos="flip-up")
      h3.mb-5 Arquitectura orientada a eventos (EDA):
      .tarjeta.bg_04.p-4.mb-5
        SlyderA
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Esta arquitectura se basa en la captura, transferencia, procesamiento y permanencia de eventos, donde estos son la estructura base de este tipo de soluciones. Esto es totalmente contrario a los métodos tradicionales, los cuales están basados en solicitudes. 
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_23.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Un evento representa los acontecimientos importantes en el estado del hardware o #[i software] directamente en un sistema o producto #[i software], los cuales pueden ser internos o externos. Esta solución permite un acoplamiento mínimo, lo cual es la opción indicada refiriéndonos a las aplicaciones distribuidas y modernas.
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_24.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Se pueden encontrar dos tipos de elementos importantes: los consumidores y los productores de eventos. 

              p Como su nombre lo indica el productor genera o emite los eventos, en su contraparte el consumidor los recibe y los interpreta de tal manera que pueda efectuar alguna acción con base en ellos.

            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_25.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p En este caso el consumidor de los eventos no conoce el productor y ni el productor no conoce el consumidor, ni el resultado obtenido por efectuar alguna acción resultado de procesar la información del evento.
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_26.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Es así como el consumidor después de la recepción de un evento procesa la información de manera asíncrona con algún módulo, componente o plataforma de procesamiento.

              p En la mayor parte de implementaciones orientadas a eventos, se basan en el modelo de publicación / suscripción.
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_27.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            h4.text-center.mb-5 Representación de Arquitectura Orientada a Eventos (EDA):
            img.img-a.mb-2(src='@/assets/curso/tema_1/img_28.svg', alt='Texto que describa la imagen')
            .row
              .col-lg-4
                figcaption.mb-3 Nota. Adaptado de Tovar Casallas (2016)

            p En la figura se pueden observar los diferentes productores, los cuales emiten eventos que son distribuidos por un canal, que a su vez son enviados a los suscriptores/consumidores que estén atentos al tópico del evento.

    .bg_01.p-5.mb-5(data-aos="flip-up")
      h3.mb-5 Arquitectura cliente-servidor: 
      .tarjeta.bg_04.p-4.mb-5
        SlyderA
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Es un modelo de #[i software] en el que las tareas se dividen entre los proveedores de recursos o servicios. Entre los cuales encontramos los llamados de servicios denominados servidores y los demandantes, llamados clientes. 
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_29.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Un cliente realiza peticiones al servidor, quien da respuesta y es procesada para mostrar información al usuario-actor del sistema.
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_30.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            h4.text-center.mb-5.mt-3 Representación de Arquitectura cliente-servidor:
            img.img-a.mb-3(src='@/assets/curso/tema_1/img_31.png', alt='Texto que describa la imagen')
            .row.mb-3
              .col-lg-4
                figcaption.mt-3 Adaptado de CursosGratis (2021)
            p La separación entre cliente y servidor es del tipo lógico, donde el servidor no se ejecuta necesariamente en una sola máquina o ambiente, ni necesariamente es un solo programa.

    separador
    #t_1_2.titulo-segundo(data-aos="flip-up").mb-4
      .h2 1.2 Patrones de diseño 

    p Los patrones son procesos, métodos y técnicas comunes que se utilizan en el proceso de desarrollo de #[i software] entre otros elementos que están directamente relacionados con el diseño de interfaces y soluciones desde el diseño. Para que una solución sea considerada como patrón deben cumplir diferentes particularidades, una de ellas es poderse aplicar afectivamente en otras soluciones, en pocas palabras debe ser reutilizable. 

    p.mb-5
      strong Los patrones de diseño buscan lo siguiente:

    
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img.img-a(src='@/assets/curso/tema_1/img_32.svg', alt='Texto que describa la imagen')
      .tarjeta.tar_bg01.p-3(x="8%" y="56%")
        p #[strong 1.] Proporcionar lista de los componentes reusables en el diseño de #[i software].
      .tarjeta.tar_bg02.p-3(x="31%" y="56%")
        p #[strong 2.] Evitar la reiteración en el planteamiento de soluciones a problemas conocidos previamente y que por medio de un patrón se pueden solucionar. 
      .tarjeta.tar_bg03.p-3(x="51%" y="56%")
        p #[strong 3.] Estandarizar y formalizar el vocabulario común entre diseñadores y desarrolladores.
      .tarjeta.tar_bg04.p-3(x="72%" y="56%")
        p #[strong 4.] Normalizar y estandarizar los métodos para diseñar soluciones. 
      .tarjeta.tar_bg05.p-3(x="94%" y="56%")
        p #[strong 5.] Mejorar el aprendizaje de nuevos ingenieros, diseñadores o desarrolladores, con prácticas y transferencia de conocimientos que ha sido aplicada correctamente.

    .cajon.color-secundario.p-4.mb-5
      h5.mt-5.mb-4 Los patrones de diseño no pretenden:

      ul.lista-ul--color.mb-4
        li 
          i.fas.fa-check
          | Imponer una alternativa de solución ante otra.
        li 
          i.fas.fa-check
          | Eliminar o limitar la creatividad inherente ante el proceso de diseño de soluciones.

      p El usar patrones de diseño no es obligatorio, pero es aconsejable, dado ayuda diseños cumplieron con el objetivo de solucionar algún problema similar; sin embargo, en casos particulares los patrones no pueden ser aplicables y forzar o abusar del uso de patrones puede ser un error. 

    p.mb-5 #[strong Según la escala y el nivel de abstracción podemos encontrar los siguientes tipos:]

    

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg_05")(data-aos="flip-up")
      .row.justify-content-center(titulo="Patrones creacionales")
        p.mb-5 Estos patrones corresponden a los que solucionan problemas de creación de instancias.  Consisten en encapsular y abstraer dicha creación, entre ellos se pueden nombrar:
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul--color.li_1
            li 
              i.fas.fa-check
              | #[em Object Pool]
            li 
              i.fas.fa-check
              | #[em Abstract Factory]
            li 
              i.fas.fa-check
              | #[em Builder]
            li 
              i.fas.fa-check
              | #[em Factory Method]
            li 
              i.fas.fa-check
              | #[em Prototype]
            li 
              i.fas.fa-check
              | #[em Singleton]

        .col-md-6
          img.img-a(src='@/assets/curso/tema_1/img_33.png', alt='Texto que describa la imagen')
      .row.justify-content-center(titulo="Patrones estructurales")
        p.mb-5 Estos patrones corresponden a los que solucionan problemas de composición (agregación) de clases y objetos, entre los cuales se encuentran: 
        .col-md-6.mb-4.mb-md-0
          .row
            .col-lg-6.mb-4.mb-md-0
              ul.lista-ul--color.li_1
                li 
                  i.fas.fa-check
                  | #[em Adapter o Wrapper]
                li 
                  i.fas.fa-check
                  | #[em Bridge]
                li 
                  i.fas.fa-check
                  | #[em Composite]
                li 
                  i.fas.fa-check
                  | #[em Decorator]
                li 
                  i.fas.fa-check
                  | #[em Facade]
            .col-lg-6.mb-4.mb-md-0
              ul.lista-ul--color.li_1
                li 
                  i.fas.fa-check
                  | #[em Flyweight]
                li 
                  i.fas.fa-check
                  | #[em Proxy]
                li 
                  i.fas.fa-check
                  | #[em Module]
                li 
                  i.fas.fa-check
                  | #[em MVC]
        .col-md-6
          img.img-a(src='@/assets/curso/tema_1/img_34.png', alt='Texto que describa la imagen')
      .row.justify-content-center(titulo="Patrones de comportamiento")
        p.mb-5 Estos patrones corresponden a los que solucionan problemas de comportamiento respecto a la interacción y responsabilidades entre clases y objetos, así como los algoritmos que encapsulan, entre los cuales se encuentran: 
        .col-md-6.mb-4.mb-md-0
          .row
            .col-lg-6.mb-4.mb-md-0
              ul.lista-ul--color.li_1
                li 
                  i.fas.fa-check
                  | #[em Chain of Responsibility]
                li 
                  i.fas.fa-check
                  | #[em Command]
                li 
                  i.fas.fa-check
                  | #[em Interpreter]
                li 
                  i.fas.fa-check
                  | #[em Iterator]
                li 
                  i.fas.fa-check
                  | #[em Mediator]
            .col-lg-6.mb-4.mb-md-0
              ul.lista-ul--color.li_1
                li 
                  i.fas.fa-check
                  | #[em Memento]
                li 
                  i.fas.fa-check
                  | #[em Observer]
                li 
                  i.fas.fa-check
                  | #[em State]
                li 
                  i.fas.fa-check
                  | #[em Strategy]
                li 
                  i.fas.fa-check
                  | #[em Template Method] 
                li 
                  i.fas.fa-check
                  | #[em Visitor]
        .col-md-6
          img.img-a(src='@/assets/curso/tema_1/img_35.png', alt='Texto que describa la imagen')

      








  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
