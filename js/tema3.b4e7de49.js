(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"2bbc":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"acordion"},[e._l(e.elements,(function(t,s){return a("div",{key:t.id,staticClass:"p-3 pb-0 p-md-4 pb-md-0 mb-3",class:e.cardClass(t.id)},[a("div",{staticClass:"acordion__header mb-3 mb-md-4",on:{click:function(a){e.selected=e.selected!=t.id?t.id:0},mouseover:function(t){e.mostrarIndicador=(!e.mostrarIndicador||1!==s)&&e.mostrarIndicador}}},[a("div",{staticClass:"d-flex align-items-center"},["a"===e.tipo?a("div",{staticClass:"acordion__accion"},[a("div",{staticClass:"acordion__accion__btn--a h3 mb-0 me-3"},[e.selected===t.id?a("i",{staticClass:"fas fa-minus"}):a("i",{staticClass:"fas fa-plus"}),e.mostrarIndicador&&1===s?a("div",{staticClass:"indicador__container"},[a("div",{staticClass:"indicador--click indicador--sm"})]):e._e()])]):e._e(),a("div",{staticClass:"acordion__titulo"},[a("h3",{staticClass:"mb-0",domProps:{innerHTML:e._s(t.titulo)}})])]),"b"===e.tipo?a("div",{staticClass:"acordion__accion"},[a("div",{staticClass:"acordion__accion__btn--b h3 mb-0"},[e.selected===t.id?a("i",{staticClass:"fas fa-angle-up"}):a("i",{staticClass:"fas fa-angle-down"}),e.mostrarIndicador&&1===s?a("div",{staticClass:"indicador__container indicador--left"},[a("div",{staticClass:"indicador--click indicador--sm"})]):e._e()])]):e._e()]),a("div",{staticClass:"acordion__contenido",style:{height:e.rendered&&e.selected===t.id?e.getActiveHeight(t.id):0}},[a("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"elm.elm"}],ref:t.id,refInFor:!0,staticClass:"acordion__contenido__item pb-3 pb-md-4"})])])})),a("div",{staticClass:"hidden-slot"},[e._t("default")],2)],2)},i=[],o=a("ab14"),n={name:"AcordionAA",mixins:[o["a"]],props:{claseTarjeta:{type:String,default:""},tipo:{type:String,default:"a"}},data:function(){return{mostrarIndicador:!0}},mounted:function(){var e=this;this.$nextTick((function(){setTimeout((function(){e.domUpdated()}),5e3)}))},methods:{cardClass:function(e){var t=[];return this.claseTarjeta.length?t.push(this.claseTarjeta):t.push("tarjeta tarjeta--blanca"),this.selected===e&&t.push("acordion__activo"),t}}},r=n,c=a("2877"),d=Object(c["a"])(r,s,i,!1,null,null,null);t["a"]=d.exports},"4eb1":function(e,t,a){e.exports=a.p+"img/img_23.d1b5b98b.png"},ab14:function(e,t,a){"use strict";t["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const e=this.elements.map(e=>e.id),t=e.indexOf(this.selected);if(t<0)return{};const a={};return 0===t?a.next=e[t+1]:(t+1===e.length||(a.next=e[t+1]),a.back=e[t-1]),a}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((e,t)=>{const a=e.data&&e.data.attrs?e.data.attrs:[];return{id:this.mainId+t+1,elm:e.elm,...a}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(e){return this.$refs[e][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(e=>e.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},cfad:function(e,t,a){e.exports=a.p+"img/img_24.f6b34a88.png"},eb46:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno"),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[e._m(0),e._m(1),a("separador"),e._m(2),e._m(3),a("div",{staticClass:"row align-items-end mb-5"},[a("div",{staticClass:"col-lg-6 mb-4 mb-lg-0",attrs:{"data-aos":"slide-left"}},[a("AcordionAA",{staticClass:"mb-5 acordion",attrs:{tipo:"a","clase-tarjeta":"tarjeta bg_05","data-aos":"flip-up"}},[a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Protocolos de comunicación de red"}},[a("p",[e._v("TCP/IP (tcp, que indica protocolo de transmisión de datos e ip, protocolo de internet) y HTTP, son los protocolos encargados de establecer la comunicación y llevar a de un punto a otro paquete básicos de datos. Se consideran los más importantes dado que estos permiten establecer una conexión entre los equipos que están inmersos en la red. ")]),a("p",[e._v("HTTP, POP o SMTP, son otros protocolos usados en internet, los cuales se usan a diario, los cuales permiten navegar por la red, escuchar en línea videos o música o enviar correos electrónicos. ")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Número de participantes en la comunicación"}},[a("p",[e._v("Podemos diferenciar los protocolos por el número de ordenadores que participan de la comunicación. Por ejemplo, se denomina "),a("i",[e._v("unicast")]),e._v(" si solo se tiene un destinatario en la comunicación, si se habla de dos o más se considera un "),a("i",[e._v("multicast")]),e._v(", si el paquete de datos implica a todos los participantes se considera un "),a("i",[e._v("broadcasting")]),e._v(", este último es una conexión se asemeja a la de radio o televisión.")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Modo de transmisión de los datos"}},[a("p",[e._v("La dirección en cómo se transmiten los datos también nos brinda criterios para poder diferenciar entre los diferentes protocolos de red, los protocolos de comunicación unilateral, o sea son del tipo tal que, solo se envía el mensaje desde un emisor y no se recibe interacción por el receptor este se denomina simplex (sx), por otro lado podemos tener el escenario donde el rol del emisor y receptor cambia, y existe una interacción por decirlo así, A envía mensaje a B, y luego B envía mensaje a A, a este tipo de interacción se le denomina semidúplex (half-duplex, hdx), teniendo en cuenta que este cambio no es en simultáneo y por último el modo dúplex completo (full-duplex, fdx), este permite el envío de datos en ambas direcciones en simultáneo. ")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Jerarquía de los participantes"}},[a("p",[e._v("El modelo cliente-servidor es un tipo de conexión que se basa en una estructura jerárquica. Por decirlo de esta manera muchos clientes (ordenadores/aplicaciones) se conectan a un servidor, el cual recepciona, gestiona y procesa las peticiones. Este es un tipo de comunicación asimétrica, pero en su contraparte tenemos en cuenta la comunicación simétrica, la cual consiste en la comunicación de red por iguales peer to peer, en este caso todos los ordenadores están en igual disposición de proporcionar servicios y ser usados. ")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Sincronización de la comunicación"}},[a("p",[e._v("Teniendo en cuenta la sincronización de los datos entre emisor y receptor, también se puede denotar el término de comunicación asíncrona o síncrona. Todo esto en función de la conexión con los bits transmitidos entre los puntos.")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Tipo de conexión"}},[a("p",[e._v("También podemos encontrar una clasificación orientada a conexión o aquellos que no, por decirlo así, hay una conexión entre emisor y receptor, que durante la comunicación se intenta asegurar que los paquetes de datos lleguen al destino, verificando que los paquetes lleguen en el mismo orden emitidos, dado el caso que esto no sea así, la transmisión fallará y se intentará enviar nuevamente. Por otro lado, los segundos no establecen un orden de envío ni se interrumpe la conexión, en este caso los paquetes de datos tienen mucha menos metadata y su llegada puede ser en desorden, dado el caso no se vuelven a enviar ante una conexión errónea. ")])])])],1),e._m(4)]),a("separador"),e._m(5),e._m(6),a("div",{staticClass:"row align-items-end mb-5"},[e._m(7),a("div",{staticClass:"col-lg-6 mb-4 mb-lg-0",attrs:{"data-aos":"slide-left"}},[a("AcordionAA",{staticClass:"mb-5 acordion",attrs:{tipo:"a","clase-tarjeta":"tarjeta bg_05","data-aos":"flip-up"}},[a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Contenidos de utilidad"}},[a("p",[e._v("El tema y elementos establecidos en el sitio "),a("i",[e._v("web")]),e._v(" deben estar acordes al usuario final, dado que de no ser la información coherente con el objetivo ("),a("i",[e._v("target")]),e._v(") este abandonara rápidamente el sitio. ")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Debe ser intuitivo"}},[a("p",[e._v("Debe ser intuitivo, de fácil acceso, fácil navegación, que los elementos definidos cumplan el objetivo, sin necesidad de dar mucha vuelta, además de fácil recordación, esto con la finalidad de evitar abandonos del sitio rápidamente. ")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Diseño atractivo"}},[a("p",[e._v("La calidad de imágenes y contenido, impactaran de mejor manera que el texto. Por lo cual es de suma importancia que las imágenes, color de texto, contenido multimedia, paleta de colores, concuerden con el negocio o finalidad que se pretende plasmar, esto permitirá generar un vínculo con el usuario y se quedara por más tiempo, además de generar confianza de marca con la empresa.")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Contenido bien estructurado"}},[a("p",[e._v("El contenido establecido debe ser lo más simple, sencillo y claro posible, donde se haya realizado un proceso de explicación con miras al beneficio del usuario, la importancia de una estructura clara y objetiva es lo que permitirá que el usuario esté conectado y que el producto sea exitoso. ")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Importancia de la velocidad de la <em>web</em>"}},[a("p",[e._v("Uno de los factores más relevantes es la carga de contenido en la "),a("i",[e._v("web")]),e._v(", dado que las páginas que tardan mucho en renderizar tienen un alto porcentaje de abandono y los usuarios pierden la confianza en este tipo de productos. Muchas veces este tipo de problemas no dependen solamente de la red o el ancho de banda del servidor, si no, que se ven implícitamente afectados por los recursos usados para la construcción de la misma, donde se establecen recursos como imágenes, vídeos, fuentes, entre otros que no están optimizados para la "),a("i",[e._v("web")]),e._v(", y representan una sobrecarga en la renderización; en otros casos puede ser tema de programación, dado que puede haber algún tipo de funcionalidad o programación que impida que esta renderice rápidamente. ")])]),a("div",{staticClass:"row justify-content-center",attrs:{titulo:"Información de contacto"}},[a("p",[e._v("Este espacio en el sitio "),a("i",[e._v("web")]),e._v(" es muy valioso y debe estar siempre disponible, en un lugar visible para los usuarios, es en esta zona donde se deberá ubicar la información de contacto, dirección, teléfono y cualquier tipo de dato que permita establecer comunicación con el propietario o los administradores del sitio. Un ejemplo de ello es invitarlos a la acción, como por ejemplo poner "),a("i",[e._v("links")]),e._v(" de "),a("u",[a("strong",[e._v("contacto con nosotros, solicitar más información")])]),e._v(", etc. Si el contenido le parece interesante y le genera valor, el usuario no dudará en ponerse en contacto. ")])])])],1)])],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-principal",attrs:{"data-aos":"flip-up"}},[a("div",{staticClass:"titulo-principal__numero"},[a("span",[e._v("3")])]),a("h1",[e._v("Comunicación entre componentes de un sitio "),a("i",[e._v("web")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mb-5",attrs:{"data-aos":"flip-up"}},[e._v("En un producto "),a("i",[e._v("software")]),e._v(" es posible que muchos de los componentes se desarrollen de forma independiente, de tal manera que no tengan comunicación e interacción con otros elementos del sistema de información. Por lo cual se presentan algunas técnicas y protocolos para establecer una correcta comunicación entre los diferentes componentes "),a("i",[e._v("web")]),e._v(" y las características del diseño "),a("i",[e._v("web")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-segundo mb-4",attrs:{id:"t_3_1","data-aos":"flip-up"}},[a("div",{staticClass:"h2"},[e._v("3.1 Técnicas y protocolos de comunicación")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mb-5",attrs:{"data-aos":"flip-up"}},[a("strong",[e._v("A continuación, se listan los conceptos claves relacionados con técnicas y protocolos de comunicación en los sitios "),a("i",[e._v("web")]),e._v(":")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-lg-6 mb-4 mb-lg-0",attrs:{"data-aos":"slide-right"}},[s("img",{attrs:{src:a("4eb1"),alt:"Texto que describa la imagen"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-segundo mb-4",attrs:{id:"t_3_2","data-aos":"flip-up"}},[a("div",{staticClass:"h2"},[e._v("3.2. Características del diseño "),a("i",[e._v("web")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mb-5",attrs:{"data-aos":"flip-up"}},[e._v("Los elementos de un sitio "),a("i",[e._v("web")]),e._v(" pueden cambiar, esto de acuerdo con las Necesidades de comunicación que se hayan especificado, aunque siempre contendrá unos componentes característicos que por lo general siempre están presentes en los sitios "),a("i",[e._v("web")]),e._v(", esto con la finalidad de tener referente de navegación y facilitar la accesibilidad y usabilidad del usuario. Sabiendo lo anterior, las siguientes son las características que debe tener un sitio "),a("i",[e._v("web")]),e._v(":")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-lg-6 mb-4 mb-lg-0",attrs:{"data-aos":"slide-right"}},[s("img",{staticClass:"img-a",attrs:{src:a("cfad"),alt:"Texto que describa la imagen"}})])}],o=a("2bbc"),n={name:"Tema3",components:{AcordionAA:o["a"]},data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},r=n,c=a("2877"),d=Object(c["a"])(r,s,i,!1,null,"d5b2a912",null);t["default"]=d.exports}}]);
//# sourceMappingURL=tema3.b4e7de49.js.map