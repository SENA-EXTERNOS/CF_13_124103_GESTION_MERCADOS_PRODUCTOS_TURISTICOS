<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Audiencia 

    .row.justify-content-center
      .col-lg-6
        p Saavedra Llamas (2016) explica que el concepto de audiencia en la actualidad conlleva a pensar en una persona que hace parte de un colectivo que está mediado por las Tecnologías de la Información y la Comunicación (TIC), y en donde se pueden encontrar roles desde los más activos hasta los más pasivos.        
        .cajon.color-acento-contenido.p-4
          p Por su lado, el concepto de “audiencia meta” está relacionado con la función del canal en donde se comunica o se promociona un producto.
      .col-lg-6.my-3
        figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")

    .row.justify-content-center.my-5
      TabsA.color-acento-botones
        .tarjeta.tarjeta--rosa.p-4(titulo="Audiencia meta")
          .row.justify-content-center
            .col-6.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen')
            .col-lg-8
              p.mt-4 Algunos ejemplos pueden ser, jóvenes estudiantes en universidad, niños en guardería, padres de familia con hijos, padres de familia sin hijos, recién casados, ejecutivos con experiencia, entre otros. Una empresa debe encontrar la forma de comunicarse con su audiencia a través de diferentes medios o canales.

        .tarjeta.tarjeta--rosa1.p-4(titulo="Canales de comunicación")
          .row.justify-content-center
            .col-6.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')
            .col-lg-8
              p.mt-4 En la actualidad, estos canales pueden ser los que nos proveen las TIC, como, por ejemplo, el correo electrónico, las redes sociales y el chat, entre otros.  Los jóvenes de hoy escuchan cierta música, según sean sus gustos personales, y eligen plataformas digitales como Spotyfy o Youtube para poder escuchar los artistas preferidos. En estas plataformas les cautivan las ofertas que las diferentes marcas puedan estar promocionando.

        .tarjeta.tarjeta--rosa.p-4(titulo="Público")
          .row.justify-content-center
            .col-6.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')
            .col-lg-8
              p.mt-4 Ahora, se debe entender que los mensajes deben depender de la audiencia, así como también del objetivo de comunicación que tenga la empresa. En cuanto a la audiencia, no es lo mismo dirigirse a un público joven que a unos ejecutivos, igualmente una comunicación que vaya dirigida a deportistas extremos o personas jubiladas; son públicos completamente diferentes.

        .tarjeta.tarjeta--rosa1.p-4(titulo="Públicidad digital")
          .row.justify-content-center
            .col-6.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')
            .col-lg-8
              p.mt-4 En el área de la publicidad digital, el concepto de “audiencia digital” hace referencia al grupo de personas a la que se pretende enviar un mensaje con el fin de comenzar una interacción. Se entiende la interacción como la acción de intercambiar información vía chat, correo electrónico, redes sociales, blogs, foros, etc., entre el público y la empresa.

        .tarjeta.tarjeta--rosa.p-4(titulo="Audiencia digital")
          .row.justify-content-center
            .col-6.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')
            .col-lg-8
              p.mt-4 Este concepto ha ido evolucionando con el paso de los años, pero, aunque actualmente la segmentación de esta audiencia digital está orientada específicamente a los hábitos de navegar y comprar por internet, todavía está basada en la creación de perfiles geográficos, demográficos, psicográficos y conductuales.

    .row.justify-content-center.my-5
      .col-lg-9
        .cajon.color-acento-contenido.p-4
          p Para una empresa es vital considerar que la audiencia digital se puede conformar por:
          .row
            ul.lista-ul
              li
                i.fas.fa-circle
                p.ps-4 Individuos que tienen uno o varios intereses que se relacionan con la marca, producto o servicio.
              li
                i.fas.fa-circle
                p.ps-4 Individuos que se encuentran en la etapa de una acción de compra.
              li
                i.fas.fa-circle
                p.ps-4 Individuos que ya son clientes reales y, además, son líderes de opinión.

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.1  Tipos


    .row.justify-content-center.my-5
      .col-lg-7
        .tarjeta--rosa.p-3
          p Se entiende que la audiencia es el grupo de individuos que se contactan o se unen a través de un medio de comunicación específico, un soporte o incluso un evento. Para captar a los individuos indicados, las marcas se deben esforzar en brindar servicios que satisfagan las necesidades del cliente, de motivar a cada persona con información que vaya de acuerdo con sus deseos personales.
        p.my-3 En cada campaña publicitaria se debe realizar previamente un estudio de mercado con el objetivo de saber cuáles son las preferencias y gustos de los clientes para luego determinar los canales de comunicación más acertados según el contexto de la audiencia para hacer la transmisión de un mensaje.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')      


    .row.justify-content-center.my-5
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="73%" y="15%" numero="1")
          h5.mb-2 Audiencia Comercial
          p #[strong Comercial:] individuos que conocen distintas marcas o productos a través de medios de comunicación masivos como son la televisión, la radio, la prensa, las revistas e incluso internet. #[strong Ejemplo], cuando un individuo escucha de forma reiterada sobre una marca de comidas rápidas muy popular en su ciudad a través de una cuña radial. 

        .tarjeta.color-acento-botones.p-3(x="21%" y="43%" numero="2")
          h5.mb-2 Audiencia Potencial
          p #[strong Potencial:] individuos que pueden comprar los productos que una marca exhibe en su publicidad. Es decir, hacen parte de la audiencia comercial y además pueden estar predispuestos a realizar una compra. #[strong Ejemplo], cuando el individuo después de escuchar las cuñas radiales decide ir a comer en la tienda de comidas rápidas. 

        .tarjeta.color-acento-botones.p-3(x="79%" y="44%" numero="3")
          h5.mb-2 Audiencia Primaria
          p #[strong Primaria:] individuos que hacen parte de un grupo objetivo al que va dirigido el mensaje publicitario, independientemente de que compren o no el producto. Son el resultado de un estudio en el que se investigan y clasifican los gustos, deseos y tendencias de los mismos para diseñar una campaña que llame su atención. #[strong Ejemplo], la cuña radial de la tienda de comidas rápidas está dirigida a jóvenes de aproximadamente 25 años de edad, que les gusta cuidar de su apariencia física, ubicados en el sector del centro de la ciudad, que quieren compartir con sus amigos o familiares un rato agradable comiendo productos vegetarianos. 

        .tarjeta.color-acento-botones.p-3(x="25%" y="14%" numero="4")
          h5.mb-2 Audiencia Real
          p #[strong Real:] grupo de individuos que pudieron ver o escuchar el mensaje publicitario mientras estuvo al aire en los diferentes canales de comunicación. Sirve para calcular la fuerza de atracción que tienen los distintos medios de comunicación.

        .tarjeta.color-acento-botones.p-3(x="76%" y="67%" numero="5")
          h5.mb-2 Audiencia Util
          p #[strong Útil:] individuos que realmente se interesan en realizar una acción de compra del producto mientras la campaña publicitaria aún se encuentra al aire. Su análisis de métricas ayuda a saber si la campaña fue efectiva o no. 

        .tarjeta.color-acento-botones.p-3(x="22%" y="74%" numero="6")
          h5.mb-2 Audiencia
          p En la actualidad, los canales digitales como las redes sociales, el correo electrónico, el chat, el #[i blog], el sitio #[i web], etc., aportan mejores métricas o indicadores de gestión sobre la audiencia y en sí, sobre lo realizado a nivel publicitario en Internet. 

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.2 Técnicas de identificación de audiencia

    .row.justify-content-center.my-5
      p La definición de la audiencia puede ayudar a una empresa a disminuir costos, especialmente en el área del mercadeo.

      .cajon.color-primario.p-4.my-5
        p Si las campañas publicitarias se enfocan solamente en aquellos individuos que tienen más posibilidad de convertirse en clientes, se puede lograr la reducción de costos, e incluso, evitar gastos innecesarios en tiempo y dinero. 
        p A continuación, se describen unos pasos que ayudarán a delimitar la audiencia:

    .tarjeta.tarjeta--azul.img-fondo.p-5.my-5
      PasosB.color-acento-botones
        .row(titulo="").justify-content-center
          .col-lg-8
            h3.mt-5 Motivaciones de los clientes  
            p Encontrar las motivaciones de los clientes. Si una empresa se pone en los zapatos de su audiencia ideal, logrará la identificación de sus deseos y necesidades.

          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

        .row(titulo="").justify-content-center
          .col-lg-8
            h3.mt-5 Deseos y necesidades de la audiencia
            p Encontrar las mejores opciones. Al saber cuáles son los deseos y necesidades de la audiencia, se pueden desarrollar un grupo de metodologías para lograr dar alcance a las metas propuestas. Esto abre la puerta para que se identifiquen las mejores oportunidades que se puedan presentar dando los mejores resultados.

          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen').img10-tema1

        .row(titulo="").justify-content-center
          .col-lg-8
            h3.mt-5 Ser específico
            p Hay que ser específico. Se deben sintetizar las ideas de tal forma que el cliente ideal vaya teniendo forma.

          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen').img11-tema1

        .row(titulo="")
          .col-lg-8
            h3.mt-5 Medir resultados
            p Medir los resultados. Una vez definido el mercado, se deben realizar ensayos para analizar si el producto es, de verdad, lo que requiere y necesita la audiencia definida por la empresa. Si no se obtienen los resultados esperados, la recomendación es realizar una redefinición del público meta.

          .col-7.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')
      
    p.my-5 Cuando se habla de la audiencia digital, su identificación se da a través de los siguientes pasos:

    .row.justify-content-center.my-5
      .tarjeta.tarjeta--azul.img-fondo.p-5.my-5
        PasosB.color-acento-botones.pasosb2
          .row(titulo="").justify-content-center
            .col-lg-6
              h3 El cliente ideal
              p Definición del #[i Buyer] Persona. El #[i Buyer] Persona es el cliente ideal, e identificarlo es el primer paso que se debe realizar para hallar al público en la #[i Web]. La idea es documentar y agrupar cuáles son los intereses y motivos reales de los potenciales clientes. Se hace necesario comprender la personalidad de una audiencia con el fin de lograr una adaptación de los contenidos digitales a sus personalidades, de tal forma que se les pueda hacer sentir que la comunicación es directa con cada uno de ellos. Para conocer el #[i Buyer] Persona se necesita tener en cuenta los siguientes detalles: qué, quién, dónde, cuándo y por qué. 

            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')

          .row(titulo="").justify-content-center
            .col-lg-6
              h3 Herramientas de búsqueda
              p Apoyo de herramientas y motores de búsqueda. Conseguir que los contenidos digitales estén justo donde la audiencia se encuentra facilita enormemente los esfuerzos publicitarios y de mercadeo. Por eso es importante apoyarse en herramientas que admiten conocer en dónde se encuentra la audiencia e incluso, en donde se encuentra la competencia. #[i Google Trends, SimilarWeb, Semrush] y Alexa con algunas de estas herramientas. Lo mismo ocurre en las redes sociales porque allí también se pueden hallar clientes y prospectos. Además, existen plataformas que admiten encontrar e ir directamente a los clientes, como, por ejemplo, #[i Hootsuite, Klout, TweetReach, HowSociable, Twazzup], etc.

            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen')

          .row(titulo="").justify-content-center
            .col-lg-6
              h3 Círculos sociales
              p Conexión con los círculos sociales. No hay nada más eficaz que tener una conexión y una interacción con la audiencia a través de las redes sociales. La influencia que se puede generar es muy alta porque permiten motivar a los individuos de forma amplificada. Si la audiencia de la marca se encuentra en Instagram, la empresa debe tener una cuenta en esta plataforma; por otro lado, si el público no se encuentra en LinkedIn, no se debe perder tiempo teniendo presencia en esta red social. La mejor estrategia es alinearse a través de los medios sociales que la audiencia está usando, de tal forma que se pueda generar una interacción con los individuos que hagan parte de esta.

            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen')

          .row(titulo="").justify-content-center
            .col-lg-6
              h3 Creación de contenidos
              p Creación de contenidos de valor. Los contenidos digitales fidelizan; con trabajo SEO (#[i Search Engine Marketing]) los contenidos se hacen virales, atraen tráfico y también incentivan las compras.  Pero, para lograr que éste se pueda viralizar y ayude a una acción de compra se requiere de compartir aquellos que sean deseados, esperados y anhelados por el público. No es una tarea fácil de desarrollar, pero, si se logra realizar una buena labor, los contenidos digitales permiten ganar credibilidad y confianza. Por eso es vital saber de antemano qué es lo que los clientes desean leer, ver o escuchar. 

            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img16.png', alt='Texto que describa la imagen')
        
          .row(titulo="").justify-content-center
            .col-lg-6
              h3 Analítica web
              p Uso de la analítica #[i web]. Es enorme la cantidad de métricas de valor que pueden ser obtenidas a través de herramientas como #[i Google Analytics, Google Ads, SEMrush, Hootsuite] o #[i Kissmetrics], entre otras Incluso, las mismas redes sociales entregan datos estadísticos que pueden servir para analizar si los esfuerzos publicitarios están cumpliendo con los objetivos trazados. El buen uso de estas herramientas también ayuda a hallar el público en la #[i web].

            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img17.png', alt='Texto que describa la imagen')

          .row(titulo="").justify-content-center
            .col-lg-6
              h3 Contenidos digitales
              p El objetivo es que, con base en esta información, una marca aprenda a brindar contenidos digitales correctos, anhelados y esperados por su público objetivo. Si esto se logra hacer, de ahí en adelante él será quien busque lo que la marca comparte con su audiencia. Para tener éxito en internet es preciso conocer en dónde se encuentra de tal forma que se le pueda llegar directamente. (Saavedra Llamas, 2016)

            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img18.png', alt='Texto que describa la imagen')

    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.3 Perfiles de audiencia 

    .row.justify-content-center.my-5
      .col-lg-8
        p Tal como afirman Rodríguez, Montes y López (2007), en los mercados amplios, grandes y diversos, es una utopía que las marcas se puedan contactar con todos los clientes. Lo que sí se puede hacer es dividir esos mercados en grupos de consumidores homogéneos, o sea, segmentos que se conforman por tener las mismas necesidades y deseos. La marca, entonces, necesita elegir los segmentos de mercado que puede atender con eficacia. 
        .cajon.color-acento-contenido.p-3
          p Para ampliar revise el #[strong Anexo 1. Perfiles de audiencia,] en el cual se presentan las bases para segmentar los mercados de consumo para empresas y sociedades.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo_1_perfiles_de_audiencia.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 1.] Perfiles de audiencia
                  p Perfiles de audiencia

      .col-7.col-lg-4.mt-4
        figure
          img(src='@/assets/curso/temas/tema1/img19.png', alt='Texto que describa la imagen')      

    separador

    #t_1_4

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.4 La cultura de masas

    .row.justify-content-center.my-5
      p  A continuación, se presentan el concepto sobre la cultura de masas. 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-rosa.p-4
        .row.justify-content-center.mb-4
          .col-10.col-lg-10
            figure
              img(src='@/assets/curso/temas/tema1/img20.png', alt='Texto que describa la imagen')
          
        h3.text-center.mt-5 Cultura de masas
        p Según Abruzzese (2004) la cultura se define como el entramado social creado por las tradiciones, las costumbres y las expresiones desarrolladas por una comunidad específica. 
      .col-md.tarjeta.color-rosa1.p-4
        .row.justify-content-center.mb-4
          .col-10.col-lg-11
            figure
              img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')
          
        h3.text-center.mt-5 Sociedad e individuos
        p La sociedad y sus individuos se encargan del desarrollo cultural, y la cultura influye masivamente sobre la gente (hombres y mujeres) perteneciente a una sociedad.
      .col-md.tarjeta.color-rosa.p-4
        .row.justify-content-center.mb-4
          .col-10.col-lg-7
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img22.png', alt='Texto que describa la imagen')
          
        h3.text-center.mt-4 Hacinamiento de individuos
        p Por su lado, el concepto de masa hace referencia a distintos asuntos. Desde un enfoque de #[i marketing], el significado de masa se vincula a una gran cantidad o hacinamiento de individuos. La masa, en este contexto, está compuesta por un grupo social.

    .row.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-3
          p Para ampliar revise el #[strong Anexo 2.] La cultura de las masas, donde se detalla con mayor profundidad el concepto de cultura de masas desde diversos ámbitos.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-2_la_cultura_de_masas.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 2.] La cultura de las masas
                
    separador

    #t_1_5

    .titulo-segundo.color-acento-contenido.my-5
      h2 1.5 La gestión de clientes


    .row
      p Como se muestra a continuación, se detallan aspectos relacionados con la gestión de clientes.

    .row.justify-content-center.my-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img23.png', alt='Texto que describa la imagen')        
      .col-lg-8
        .row
          h4 Gestión de clientes
          .bloque-texto-b
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p #[strong Mitchell (2012)] menciona que en la actualidad existe una competencia más grande entre compañías que poseen productos o servicios similares, con características muy parecidas. La calidad de los productos, la estrategia de precio, el impacto generado en la promoción y la forma de distribución de la mercancía son sólo algunas de las variables usadas por las diferentes marcas para incidir en una acción de compra por parte de su público objetivo. 
                i.fas.fa-quote-right

    .row.justify-content-center.my-5
      .col-lg-8
        .row
          h4 Experiencia de cliente en #[i internet]
          .bloque-texto-b
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p El uso de internet transformó las expectativas del consumidor sobre las interacciones en la atención y el servicio, y cada vez más existen más clientes que compran productos que ofrecen una excelente experiencia de cliente (CX).
                i.fas.fa-quote-right
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img24.png', alt='Texto que describa la imagen')    

    .row.my-5
      .col-lg-10
        .cajon.color-primario.p-3
          p Para ampliar revise el #[strong Anexo 3.] La gestión de clientes, en donde se muestran los beneficios de la gestión de clientes, las etapas para una gestión de clientes eficiente y los tipos de gestión de clientes.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-3_La_gestion_de_clientes.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 3.] La gestión de clientes
  


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
