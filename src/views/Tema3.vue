<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comunicación entre componentes de un sitio #[i web]

    p.mb-5(data-aos="flip-up") En un producto #[i software] es posible que muchos de los componentes se desarrollen de forma independiente, de tal manera que no tengan comunicación e interacción con otros elementos del sistema de información. Por lo cual se presentan algunas técnicas y protocolos para establecer una correcta comunicación entre los diferentes componentes #[i web] y las características del diseño #[i web].

    separador
    #t_3_1.titulo-segundo(data-aos="flip-up").mb-4
      .h2 3.1 Técnicas y protocolos de comunicación

    p.mb-5(data-aos="flip-up")
      strong A continuación, se listan los conceptos claves relacionados con técnicas y protocolos de comunicación en los sitios #[i web]:

    .row.align-items-end.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="slide-left") 
        AcordionAA.mb-5.acordion(tipo="a" clase-tarjeta="tarjeta bg_05")(data-aos="flip-up")
          .row.justify-content-center(titulo="Protocolos de comunicación de red:")
            p TCP/IP (tcp, que indica protocolo de transmisión de datos e ip, protocolo de internet) y HTTP, son los protocolos encargados de establecer la comunicación y llevar a de un punto a otro paquete básicos de datos. Se consideran los más importantes dado que estos permiten establecer una conexión entre los equipos que están inmersos en la red. 
            p HTTP, POP o SMTP, son otros protocolos usados en internet, los cuales se usan a diario, los cuales permiten navegar por la red, escuchar en línea videos o música o enviar correos electrónicos. 
          .row.justify-content-center(titulo="Número de participantes en la comunicación:")
            p Podemos diferenciar los protocolos por el número de ordenadores que participan de la comunicación. Por ejemplo, se denomina #[i unicast] si solo se tiene un destinatario en la comunicación, si se habla de dos o más se considera un #[i multicast], si el paquete de datos implica a todos los participantes se considera un #[i broadcasting], este último es una conexión se asemeja a la de radio o televisión.
          .row.justify-content-center(titulo="Modo de transmisión de los datos:")
            p La dirección en cómo se transmiten los datos también nos brinda criterios para poder diferenciar entre los diferentes protocolos de red, los protocolos de comunicación unilateral, o sea son del tipo tal que, solo se envía el mensaje desde un emisor y no se recibe interacción por el receptor este se denomina simplex (sx), por otro lado podemos tener el escenario donde el rol del emisor y receptor cambia, y existe una interacción por decirlo así, A envía mensaje a B, y luego B envía mensaje a A, a este tipo de interacción se le denomina semidúplex (half-duplex, hdx), teniendo en cuenta que este cambio no es en simultáneo y por último el modo dúplex completo (full-duplex, fdx), este permite el envío de datos en ambas direcciones en simultáneo. 
          .row.justify-content-center(titulo="Jerarquía de los participantes:")
            p El modelo cliente-servidor es un tipo de conexión que se basa en una estructura jerárquica. Por decirlo de esta manera muchos clientes (ordenadores/aplicaciones) se conectan a un servidor, el cual recepciona, gestiona y procesa las peticiones. Este es un tipo de comunicación asimétrica, pero en su contraparte tenemos en cuenta la comunicación simétrica, la cual consiste en la comunicación de red por iguales peer to peer, en este caso todos los ordenadores están en igual disposición de proporcionar servicios y ser usados. 
          .row.justify-content-center(titulo="Sincronización de la comunicación:")
            p Teniendo en cuenta la sincronización de los datos entre emisor y receptor, también se puede denotar el término de comunicación asíncrona o síncrona. Todo esto en función de la conexión con los bits transmitidos entre los puntos.
          .row.justify-content-center(titulo="Tipo de conexión:")
            p También podemos encontrar una clasificación orientada a conexión o aquellos que no, por decirlo así, hay una conexión entre emisor y receptor, que durante la comunicación se intenta asegurar que los paquetes de datos lleguen al destino, verificando que los paquetes lleguen en el mismo orden emitidos, dado el caso que esto no sea así, la transmisión fallará y se intentará enviar nuevamente. Por otro lado, los segundos no establecen un orden de envío ni se interrumpe la conexión, en este caso los paquetes de datos tienen mucha menos metadata y su llegada puede ser en desorden, dado el caso no se vuelven a enviar ante una conexión errónea. 

      .col-lg-6.mb-4.mb-lg-0(data-aos="slide-right") 
        img(src='@/assets/curso/tema_2/img_23.png', alt='Texto que describa la imagen')

    separador
    #t_3_2.titulo-segundo(data-aos="flip-up").mb-4
      .h2 3.2. Características del diseño #[i web]

    p.mb-5(data-aos="flip-up") Los elementos de un sitio #[i web] pueden cambiar, esto de acuerdo con las Necesidades de comunicación que se hayan especificado, aunque siempre contendrá unos componentes característicos que por lo general siempre están presentes en los sitios #[i web], esto con la finalidad de tener referente de navegación y facilitar la accesibilidad y usabilidad del usuario. Sabiendo lo anterior, las siguientes son las características que debe tener un sitio #[i web]:

    .row.align-items-end.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="slide-right") 
        img.img-a(src='@/assets/curso/tema_2/img_24.png', alt='Texto que describa la imagen')
      .col-lg-6.mb-4.mb-lg-0(data-aos="slide-left") 
        AcordionAA.mb-5.acordion(tipo="a" clase-tarjeta="tarjeta bg_05")(data-aos="flip-up")
          .row.justify-content-center(titulo="Contenidos de utilidad:")
            p El tema y elementos establecidos en el sitio #[i web] deben estar acordes al usuario final, dado que de no ser la información coherente con el objetivo (#[i target]) este abandonara rápidamente el sitio. 
          .row.justify-content-center(titulo="Debe ser intuitivo:")
            p Debe ser intuitivo, de fácil acceso, fácil navegación, que los elementos definidos cumplan el objetivo, sin necesidad de dar mucha vuelta, además de fácil recordación, esto con la finalidad de evitar abandonos del sitio rápidamente. 
          .row.justify-content-center(titulo="Diseño atractivo:")
            p La calidad de imágenes y contenido, impactaran de mejor manera que el texto. Por lo cual es de suma importancia que las imágenes, color de texto, contenido multimedia, paleta de colores, concuerden con el negocio o finalidad que se pretende plasmar, esto permitirá generar un vínculo con el usuario y se quedara por más tiempo, además de generar confianza de marca con la empresa.
          .row.justify-content-center(titulo="Contenido bien estructurado:")
            p El contenido establecido debe ser lo más simple, sencillo y claro posible, donde se haya realizado un proceso de explicación con miras al beneficio del usuario, la importancia de una estructura clara y objetiva es lo que permitirá que el usuario esté conectado y que el producto sea exitoso. 
          .row.justify-content-center(titulo="Importancia de la velocidad de la <em>web</em>:")
            p Uno de los factores más relevantes es la carga de contenido en la #[i web], dado que las páginas que tardan mucho en renderizar tienen un alto porcentaje de abandono y los usuarios pierden la confianza en este tipo de productos. Muchas veces este tipo de problemas no dependen solamente de la red o el ancho de banda del servidor, si no, que se ven implícitamente afectados por los recursos usados para la construcción de la misma, donde se establecen recursos como imágenes, vídeos, fuentes, entre otros que no están optimizados para la #[i web], y representan una sobrecarga en la renderización; en otros casos puede ser tema de programación, dado que puede haber algún tipo de funcionalidad o programación que impida que esta renderice rápidamente. 
          .row.justify-content-center(titulo="Información de contacto:")
            p Este espacio en el sitio #[i web] es muy valioso y debe estar siempre disponible, en un lugar visible para los usuarios, es en esta zona donde se deberá ubicar la información de contacto, dirección, teléfono y cualquier tipo de dato que permita establecer comunicación con el propietario o los administradores del sitio. Un ejemplo de ello es invitarlos a la acción, como por ejemplo poner #[i links] de #[u #[strong contacto con nosotros, solicitar más información]], etc. Si el contenido le parece interesante y le genera valor, el usuario no dudará en ponerse en contacto. 

      


</template>

<script>
import AcordionAA from '../components/AcordionAA'
export default {
  name: 'Tema3',
  components: {
    AcordionAA,
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
