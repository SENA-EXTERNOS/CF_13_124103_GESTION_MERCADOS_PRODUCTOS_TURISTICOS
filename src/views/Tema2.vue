<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Comunidad virtual

    .row.justify-content-center.my-5
     p Las comunidades virtuales según Benítez y de acuerdo a su naturaleza y objetivo pueden definirse como:

    .row.justify-content-center.my-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")
      .col-lg-8
        h4 Comunidad virtual 
        p Según Benítez Márquez (2020), este tipo de comunidad tiene como fin agrupar en una plataforma a una cantidad de individuos que se encuentran interesados en algún tema en común, como, por ejemplo, política, deporte, moda, cine, marcas, etc.

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-3
          p Para ampliar revise el #[strong Anexo 4. Comunidades virtuales,] en la sección #[strong comunidad virtual] se explica más a fondo el concepto y ejemplos de comunidades.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-4_comunidades_virtuales.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 4.] Comunidades virtuales

    h3.my-5 Características de las comunidades virtuales               

    .row.justify-content-center.my-5
      p Una comunidad virtual es un espacio digital creado para que personas ubicadas indistintamente puedan compartir  intereses comunes, opiniones y establecer nuevas relaciones; pero estas tienen características determinadas que se relacionan a continuación, así como diferentes tipos de comunidades. 

    .row.justify-content-center.my-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            .cajon.tarjeta--rosa1.p-4
              .row.justify-content-center
                .col-5.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen').img-2-3-4
                .col-lg-8.texto-tarjeta
                  h4 Administrador de comunidad virtual
                  p Es quien se encarga de liderar o gestionar la comunidad hacía unos fines específicos: reconocimiento, visibilidad, reivindicación, intercambio de datos entre los miembros, entre otros. Sin importar cuál sea el fin, el administrador se apoya en la comunidad y en la tecnología para alcanzar los objetivos.

            .cajon.tarjeta--rosa2.p-4
              .row.justify-content-center
                .col-5.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen').img-2-3-4
                .col-lg-8.texto-tarjeta
                  h4 Trabajo colaborativo
                  p Aunque el administrador es el líder, todos los miembros pueden aportar valor sobre los contenidos compartidos, entregando, incluso, nuevos datos o enseñanzas para los demás.

            .cajon.tarjeta--rosa1.p-4
              .row.justify-content-center
                .col-5.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen').img-2-3-4
                .col-lg-8.texto-tarjeta
                  h4 Sin límites de tiempo ni geografía
                  p Es una de las características más importantes de este tipo de comunidades porque no hay limitación en tiempo ni espacio geográfico. Los individuos de una misma comunidad pueden interactuar compartiendo ideas, opiniones, noticias, datos, etc., sin importar en qué momento lo hagan, a pesar de la diferencia horaria que puedan tener, ni en qué lugar se encuentren.

            .cajon.tarjeta--rosa2.p-4
              .row.justify-content-center
                .col-5.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen').img-2-3-4
                .col-lg-8.texto-tarjeta
                  h4 Plataforma digital
                  p Una comunidad virtual tiene su espacio digital en internet bajo una herramienta llamada plataforma. Este espacio debe poseer un carácter social, interactivo e informativo, al cual se pueden conectar sus miembros a través de computadores, portátiles, móviles o tabletas. 
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen').img6-t2

    h3.my-5 Tipos de comunidades virtuales


    p Actualmente existen varias plataformas donde se pueden constituir comunidades virtuales, como, por ejemplo, redes sociales, foros de discusión, correo electrónico, grupos de noticias, videoconferencias, chat, sistemas<i> peer to peer</i> (P2P), entre otras. 

    p Entre los diferentes tipos de comunidades virtuales se encuentran:     

    .row.justify-content-center.my-5.bg
      figure
        img(src='@/assets/curso/temas/tema2/1.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.my-5
      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Comunidades sociales")
            p Es uno de los tipos más comunes. Incluye redes sociales como Facebook, Instagram, Twitter, Tinder, Pinterest, Tick Tock,entre muchas otras. Por lo general las marcas le dan uso a este tipo de comunidad para fines comerciales, desarrollando estrategias publicitarias y de <i>marketing</i>, difundiendo noticias, promociones y datos de interés para los miembros, llamados seguidores o fanáticos. Esto ayuda a la amplificación de la marca y a su reconocimiento con respecto a la audiencia. También sirven para hacer <i>Benchmarking</i>, es decir, rastrear, estudiar y compararse con la competencia para comprender mucho mejor sobre la creación de estrategias usadas en la actualidad.    

          .row(titulo="Comunidades de aprendizaje y conocimiento")
            p Usadas por marcas que intercambian aprendizaje y conocimiento para ayudar a poseer una conexión mucho más grande con la audiencia, lo que mejora la imagen de una empresa. Al utilizar una plataforma digital de confianza, las marcas comparten saberes, datos investigativos, ciencia, tecnología y muchos más temas exclusivos, que sean de interés para los miembros.

          .row(titulo="Comunidades de <i>insights</i>")
            p También se pueden conocer como “Comunidades de investigación <i>online</i>”. Se conforman por un grupo de individuos que se seleccionan con mucho cuidado porque han mantenido una relación duradera con la marca. Son comunidades que permiten que una marca recoja de manera continua las mejores opiniones, las que posean alta calidad, y que provengan bien sea de los clientes, de los socios e inclusive de los empleados. En conjunto con métodos de investigación de mercado populares, ayuda a localizar el camino ideal para lograr una mejoría en la CX, así como a diseñar el desarrollo de estrategias de mercadeo e innovación que tengan éxito.

          .row(titulo="Comunidades de asesores y redes de expertos")
            p Son adecuadas especialmente para las empresas que brindan datos o mensajes dinámicos. Por ejemplo, las marcas que proporcionan servicios profesionales o las que cuentan con una buena cantidad de individuos que pueden usar sus redes para exponer la experiencia, habilidades y conocimientos de sus asesores y consultores, con el fin de comenzar conversaciones con prospectos y clientes sobre los desafíos que puedan tener. Este tipo de comunidad digital presenta la oportunidad para que los líderes de las empresas puedan contactarse con expertos en el área en que sea requerida la consulta o asesoría.  
 
          .row(titulo="Comunidades profesionales")
            p Son las que admiten a los miembros hacer intercambio de trabajos, aportar consejos o compartir experiencias sobre un determinado tema que sea de interés profesional. Se sugiere que el contenido a compartir sea totalmente avanzado como para captar la atención de los expertos, pero que también sea agradable para los novatos.

          .row(titulo="Comunidades de interés")
            p Su objetivo es compartir temas de interés común, como, por ejemplo, <i>hobbies</i> o también marcas específicas. Por lo general, intentan crear dinámicas entretenidas con contenido seductor que pueda divertir a los miembros. Compartir vídeos es una forma eficaz para motivar a los demás para que también lo hagan; también se pueden crear grupos de discusión digital para suscitar la interacción.
  
          .row(titulo="Comunidades de apoyo")
            p Buscan que los miembros proporcionen sugerencias sobre un producto a los demás individuos. Incluso, se usan para disminuir los gastos de servicio al cliente por parte de las empresas. 

          .row(titulo="Comunidades de promotores de marca")
            p Motivan y dan la posibilidad a clientes fieles y leales para que compartan algún testimonio personal, publicando en las redes sociales sobre su experiencia con la marca o, también, realizando actividades similares donde el cliente opine de manera positiva. Por lo general, potencian el “voz a voz” positivo. 

      .col-8.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen').img8-t2  

    h3.my-5 Estructura de las comunidades virtuales

    .row.justify-content-center.my-5
      p El funcionamiento y la jerarquía son similares a los de una comunidad normal, la diferencia se encuentra en el protocolo comunicacional y en las herramientas para gestionar el ambiente digital que la #[i web] pone a disposición de las comunidades virtuales para establecer los roles de los miembros. 
      p En el siguiente video se presenta la estructura y elementos que definen una comunidad virtual.

    .row.my-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/sxtcmic8eHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3 Bases comunes entre las diferentes comunidades virtuales  
    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-3
          p Las comunidades virtuales, por su naturaleza, tienen unas funciones específicas además de ciertos tipos de usuarios:

    .row.justify-content-center.my-5
      .col-lg-10
        TabsC.color-acento-botones.img-fondo
          .py-3.py-md-4(titulo="Moderación").p-5
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')
              .col-md-6
                p.mt-5 Toda comunidad tiene reglas y roles. Pueden tener recompensas como pasar de contribuyente a moderador, una insignia por ser buen participante o incluso castigos como, por ejemplo, ser expulsado de la comunidad.
              
          .py-3.py-md-4(titulo="Protocolo común").p-5
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')
              .col-md-6
                p.mt-5 Todos los individuos se pueden comunicar homogéneamente para entenderse mejor y evadir divisiones.
              
          .py-3.py-md-4(titulo="Interacción").p-5
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')
              .col-md-6
                p.mt-5 Sin interacción la comunidad no existe. Es posible que se puedan establecer distintos tipos de interacción, como, por ejemplo, ser libre sin moderación, o censurada con moderación.
              
          .py-3.py-md-4(titulo="Afiliación").p-5
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img12.png', alt='Texto que describa la imagen')
              .col-md-6
                p.mt-5 Un miembro puede afiliarse de manera voluntaria, sin particularidades determinadas, así como también a través de un requerimiento especial según sea el requisito de la comunidad, como, por ejemplo, demostrar que es fanático de una banda de #[i rock], para aceptarlo como miembro.
    p Las diferentes comunidades virtuales tienen entre sí una serie de bases comunes, como se verá a continuación:

    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-rosa.p-4
            .row.justify-content-center.mb-4
              .col-10.col-lg-10
                figure
                  img(src='@/assets/curso/temas/tema2/img13.png', alt='Texto que describa la imagen').img14-t2
            
            h3.text-center Funciones de las comunidades virtuales
            p.text-center A pesar de no generar lazos fuertes de amistad en la mayoría de casos, las comunidades virtuales sí son más dinámicas que las físicas, permiten que los miembros provengan de cualquier parte del mundo y, en algunos casos, las reuniones pueden ser grabadas y se pueden reproducir cuando se desee.
          
          .col-md.tarjeta.color-rosa1.p-4
            .row.justify-content-center.mb-4
              .col-10.col-lg-10
                figure.mt-5
                  img(src='@/assets/curso/temas/tema2/img14.png', alt='Texto que describa la imagen')          

            h3.text-center.mt-5 Usuarios de comunidades virtuales
            p.text-center Los perfiles de usuarios de las diferentes comunidades virtuales son variados, entre ellos se identifican miembros con diversos roles, como, por ejemplo, el administrador, el líder de opinión, el hiperconectado, el cliente exigente, el <i>troll</i>, el <i>spammer</i>, el caza-concurso, entre otros, cada uno con características diferenciadoras dentro de la comunidad. 


    h3.my-5 Cómo crear una comunidad virtual

    .row.justify-content-center.my-5
      
      .col-lg-8
        p El proceso y las etapas para la creación de una comunidad virtual pueden variar de una a otra, en este recurso se presentan cinco pasos para su creación, iniciando con la definición de un tema de interés, establecer su duración y establecer igualmente el enfoque de investigación; necesariamente existe una fase relacionada con el reclutamiento de miembros y la definición del tamaño de la comunidad.
        
        .cajon.color-acento-contenido.p-3.my-5
          p Para ampliar la información revise el <b>Anexo 5. Cómo crear comunidades virtuales</b>, se precisan las actividades a desarrollar en cada una de las fases requeridas para crear una comunidad virtual.

          a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-5_como_crear_comunidades_virtuales.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Anexo 5.] Cómo crear comunidades virtuales 

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img15.png', alt='Texto que describa la imagen')       

    h3.my-5 La Net etiqueta

    .row.justify-content-center.my-5
      p.my-5 A continuación, revise el concepto de net etiqueta desde la mirada de Fue Shea.
      .col-lg-4.my-3
        .tarjeta.tarjeta-slide.arriba.color-verde(@mouseover="indicadorTarjetaSlide = false").tarjeta-animada
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p Fue Shea (1994) quien se encargó de definir el término <i>net</i> etiqueta, netiqueta o etiqueta en la red y que ha servido para tener el concepto como base hasta la actualidad. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img16.png')})`}")

      .col-lg-4.my-3
        .tarjeta.tarjeta-slide.arriba.color-verde(@mouseover="indicadorTarjetaSlide = false").tarjeta-animada
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3
              p Ella lo definió como un protocolo que se usa para las comunicaciones en internet, es decir, son las normas que rigen todo proceso comunicativo desarrollado de manera digital a través de foros, <i>chat</i>, correo electrónico, redes sociales y comunidades virtuales, entre otros, las cuales son impuestas por alguno de los líderes de la comunidad virtual. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img17.png')})`}")

      .col-lg-4.my-3
        .tarjeta.tarjeta-slide.arriba.color-verde(@mouseover="indicadorTarjetaSlide = false").tarjeta-animada
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p Esto quiere decir que el término net etiqueta reúne una serie de reglas que ayudan a mejorar el comportamiento <i>online.</i>
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img18.png')})`}")

    .row.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-3.my-5
          p Para ampliar la información en la que se precisan 10 reglas esenciales para una adecuada comunicación en medios virtuales, revise el <b>Anexo 6. La Net etiqueta</b>. 
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-6_net_etiqueta.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 6.] La Net etiqueta



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

<style lang="sass"></style>
