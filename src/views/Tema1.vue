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

        .cajon-b.color-acento-botones.p-3.mb-5
          p.mb-0 Los atributos de calidad son parte de los requisitos del sistema no funcionales y son características que se deben expresar de forma cuantitativa. No tienen sentido si se expresan de forma subjetiva, dado que esto no va a ser posteriormente evaluable; por ejemplo, decir que el sistema al recibir una petición #[strong “debe ser rápido”] o que una página #[strong “debe ser ligera al cargar”], esto no se podría evaluar objetivamente. Por lo cual, podríamos decir que, si en un sistema estructurado la información debe pasar por muchos componentes antes de devolver el resultado, esto incurre en aumentar la latencia y su desempeño puede llegar a ser pobre. Otro ejemplo es que si los componentes de un #[i software] presentan un alto acoplamiento y una baja cohesión entre ellos se limita altamente la modificabilidad.


      .col-lg-5.mb-4.mb-lg-0(data-aos="slide-right")
        img.img-a(src='@/assets/curso/tema_1/img_1.png', alt='Texto que describa la imagen')

    p(data-aos="flip-up") El definir la estructura de un sistema de información, representa un impacto menor ante los requisitos funcionales por el sistema. Un producto software que contiene una estructura en espagueti puede ser totalmente funcional, dado que da respuestas a las necesidades del cliente, pero puede ser un caos su mantenimiento dado que sus componentes no contendrán patrones fáciles de identificar para la realización de cambios o mejoras.

    .bloque-texto-b.color-secundario.mb-5(data-aos="flip-up")
      .bloque-texto-b__texto
        p Las propiedades de calidad y la arquitectura son fundamentales para orientar el desarrollo de un producto software, pues a su vez permiten establecer un cronograma acertado de las tareas a implementar por el equipo de desarrollo, los diseños arquitectónicos que se definen para un proyecto en específico se pueden reutilizar, sin importar el core de negocio al que pertenezcan; en otras palabras no importa si el sistema es diferente, si inicialmente era un sistema bancario y el otro una plataforma de streaming, la arquitectura se podrá aprovechar en los diferentes modelos de negocio. 

    p.BorTit.mb-5(data-aos="flip-up") #[strong Figura 1] #[br] #[i Representación de la arquitectura por capas]
    figure.mb-5(data-aos="flip-up")
      img.img-a(src='@/assets/curso/tema_1/img_2.svg', alt='Texto que describa la imagen')
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
          p Contiene los componentes, clases o archivos que interactúan con la capa de datos, se puede encontrar ORM o Frameworks especializados que facilitan la conexión con el motor de base de datos.
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
          p Es la responsable de intermediar la comunicación desde cualquier interfaz de acceso hacia la lógica de negocio, en ella se establecen adaptadores y proxies (servidores intermediarios de acceso) que permiten el acceso desde diferentes consumidores o canales.
          img.img-a(src='@/assets/curso/tema_1/img_6.png', alt='Texto que describa la imagen')
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex(data-aos="slide-right")
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 5
          h4 Capa de presentación
          p Representa las interfaces de usuario, vistas o pantallas que están de cara al usuario, lo que también es conocido como GUI (Graphical User Interfaces) por sus siglas en inglés.
          img.img-a(src='@/assets/curso/tema_1/img_7.png', alt='Texto que describa la imagen')
      .col-md-6.col-xl.mb-4.mb-xl-0

    separador
    #t_1_1.titulo-segundo(data-aos="flip-up")
      .h2 1.1 Tipos de arquitectura de aplicación

    p(data-aos="flip-up") Es necesaria al decidir la arquitectura que se debe usar en el desarrollo de un sistema de información, aplicación o sitio web, permitiendo evaluar y definir los objetivos estratégicos, esto ayudará que la arquitectura a diseñar respalde la finalidad del proyecto y que los componentes encajen adecuadamente. 
    p(data-aos="flip-up")
      strong Entre las arquitecturas más conocidas y empleadas para el desarrollo de sitios, aplicaciones o sistemas de información web están las siguientes:

    .bg_01.p-5.mb-5
      h3 Arquitectura en capas y N-tier

      p Es un tipo de arquitectura tradicional que suele emplearse en el diseño de aplicaciones ON-Premise (Infraestructura de software local) y empresariales, por lo general se asocia con aplicaciones heredadas.

      h4.mb-5 Representación de arquitectura por capas

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg_02")
        .row.justify-content-center(titulo="Capa de presentación")
          .col-md-4.mb-4.mb-md-0
            .bg_03.p-4
              h5.mb-0.text-center.txt_01 Componente
          .col-md-4.mb-4.mb-md-0
            .bg_03.p-4
              h5.mb-0.text-center.txt_01 Componente
        .row.justify-content-center(titulo="Capa de negocio")
          .col-md-4.mb-4.mb-md-0
            .bg_03.p-4
              h5.mb-0.text-center.txt_01 Componente
          .col-md-4.mb-4.mb-md-0
            .bg_03.p-4
              h5.mb-0.text-center.txt_01 Componente
        .row.justify-content-center(titulo="Capa de persistencia")
          .col-md-4.mb-4.mb-md-0
            .bg_03.p-4
              h5.mb-0.text-center.txt_01 Componente
          .col-md-4.mb-4.mb-md-0
            .bg_03.p-4
              h5.mb-0.text-center.txt_01 Componente
        .row.justify-content-center(titulo="Capa de bases de datos")
          .col-md-4.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/tema_1/img_8.png', alt='Texto que describa la imagen')
          .col-md-4.mb-4.mb-md-0
            img.img-a(src='@/assets/curso/tema_1/img_8.png', alt='Texto que describa la imagen')

      .row.mb-5
        .col-lg-6.mb-4.mb-lg-0(data-aos="slide-left")
          .bg_04.p-4
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | En esta arquitectura se definen diferentes capas o niveles
              li 
                i.fas.fa-check
                | Cada una de las capas componen la aplicación y tienen una función específica
              li 
                i.fas.fa-check
                | Permite la gestión de dependencias y el diseño de funciones lógicas de acuerdo con el nivel de cada capa
              li 
                i.fas.fa-check
                | Segregando las responsabilidades, evitando la duplicación o redundancia en la creación de código
              li 
                i.fas.fa-check
                | Permite crear validaciones, reglas de negocio o conexiones a drivers (adaptadores). 
        .col-lg-6(data-aos="slide-right")
          img.img-a(src='@/assets/curso/tema_1/img_9.png', alt='Texto que describa la imagen')

      .bg_02.rounded.p-4
        p.mb-0 Estas arquitecturas se organizan de forma horizontal por lo que la comunicación entre ellas debe ser de una capa superior a una inferior
 

    .bg_01.p-5.mb-5
      h3.mb-5 Arquitectura monolítica: 

      .tarjeta.bg_04.p-4.mb-5
        SlyderA
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Es un tipo de arquitectura tradicional asociada a los sistemas heredados, estas contemplan toda la funcionalidad en sí, en la cual hay conexión directa a la interacción de servicios como a la construcción de estos.
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_10.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Esto significa que al hacer algún tipo de ajuste o cambio funcional el impacto es bastante alto y crítico,  pues hay afectaciones en la aplicación y en la infraestructura subyacente.
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_11.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Un solo cambio implica volver a desplegar toda la infraestructura, hay empresas que optan por lanzar actualizaciones 1 o 2 veces al año, y muchas veces sin incluir nuevas funcionalidades y solo es soporte de mantenimiento.
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_12.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            h4.text-center.mb-5 Representación de una Arquitectura Monolítica:
            img.img-a.mb-2(src='@/assets/curso/tema_1/img_13.png', alt='Texto que describa la imagen')
            figcaption.mb-4 Nota. Adaptada de Blancarte (2020)

    .bg_01.p-5.mb-5
      h3.mb-5 Arquitectura orientada a servicios (SOA): 
      .tarjeta.bg_04.p-4.mb-5
        SlyderA
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p En esta se definen las funcionalidades en estructuras de servicios independientes y reutilizables que se utilizan por medio de un bus de servicios empresarial (ESB). 
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_14.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Los servicios se organizan en torno a un proceso empresarial específico que se denomina “dominio”, estos servicios deben cumplir con un protocolo de comunicación como SOAP, REST, ActiveMQ. 
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_15.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Una aplicación Front-end puede consumir estos servicios por medio de una integración hacia el bus y presentarla al cliente.  
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_16.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            h4.text-center.mb-5 Representación de arquitectura orientada a servicios (SOA)
            img.img-a.mb-4(src='@/assets/curso/tema_1/img_17.png', alt='Texto que describa la imagen')

    .bg_01.p-5.mb-5
      h3.mb-5 Arquitectura de microservicios (MSI): 
      .tarjeta.bg_04.p-4.mb-5
        SlyderA
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Representa un modo de abordar la construcción del software y la estructuración del mismo, en este tipo de implementación el producto software se divide en elementos más pequeños, que se representan en muchos productos de software (aplicaciones), los cuales son independientes entre sí. 
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_18.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p A cada uno de estos elementos individuales se le denomina microservicio, que por lo general están distribuidos por dominio de negocio y tiene la particularidad de manejar un bajo acoplamiento, de tal manera que no influyen entre sí.  
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_19.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Este marco de trabajo es apropiado para dar soporte oportuno a la escalabilidad dinámica y la tolerancia a fallos, dado que se puede ampliar su función utilitaria sin tener que recurrir a una infraestructura compleja, se pueden realizar cambios rápidos y no afectar de esta manera a los demás dominios funcionales representados en los microservicios.
            .col-md-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_20.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            h4.text-center.mb-5 Representación de arquitectura orientada a servicios (SOA)
            img.img-a.mb-2(src='@/assets/curso/tema_1/img_21.png', alt='Texto que describa la imagen')
            figcaption.mb-3 Nota. Adaptado de Blancarte (2018).

            p.mb-4 Como se refleja en la figura, el contenedor 1, 2, 3, n, representan los microservicios (aplicaciones pequeñas), en las cuales se contienen una serie de servicios, estos se pueden orquestar entre sí y ser liberados directamente a un cliente, que puede ser un sitio web, una aplicación móvil o el backend de otro producto software.  

    p(data-aos="slide-left") El objetivo de implementar este tipo de arquitecturas es distribuir el software de calidad con mayor rapidez, dado que se facilita el proceso de crear diversos servicios al mismo tiempo y desplegarlos, sin la necesidad de tener que construir una sola aplicación monolítica inmensa que al final puede llegar a ser insostenible. Gracias a esto cada desarrollador puede trabajar en sus servicios o funcionalidades al mismo tiempo sin afectar toda la aplicación y permitiendo de esta manera lanzar nuevas características de forma frecuente. 

    p.mb-5(data-aos="slide-right") Es importante destacar la diferencia entre las arquitecturas tradicionales y las modernas, de las cuales nos encontramos con la monolítica y la orientada a microservicios. En la siguiente figura, se puede observar que mientras el primer apartado gráfico indica que todos los componentes de software están inmersos en un solo componente y realizar un cambio suele ser un proceso crítico que se realiza 1 a 2 veces por año, la segunda parte presenta la segregación y distribución de funcionalidades de tal manera que corregir o crear nuevas funcionalidades es sencillo sin repercutir en generar caos al desplegar una nueva funcionalidad o mejora, esto permite que haya un despliegue continuo. Para describir un poco mejor las diferencias entre las dos vertientes se presenta la siguiente figura:

    p.BorTit(data-aos="flip-up") #[strong Figura 2] #[br] #[i Arquitectura monolítica vs arquitectura orientada a microservicios]
    figure(data-aos="flip-up")
      img.img-a.mb-3(src='@/assets/curso/tema_1/img_22.png', alt='Texto que describa la imagen')
      figcaption Nota. Adaptado de Decide Soluciones (2019)






  
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
