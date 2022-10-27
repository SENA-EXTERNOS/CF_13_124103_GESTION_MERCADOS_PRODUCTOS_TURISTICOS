<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Marketing digital

    .row.justify-content-center.my-5
      
      .col-lg-8.my-5
        p Como lo mencionan #[strong Xie y Min], veamos cómo se concibe el marketing digital.  Según Xie y Min (2019) mencionan que la evolución de la #[i web] y las Tecnología de la Comunicación y la Comunicación (TIC) han logrado que la sociedad de hoy sea más digital e interconectada. 
        
        .cajon.color-acento-contenido.p-3.my-3
          p La tecnología cambió drásticamente el mundo, los hábitos de los seres humanos, su forma de pensar y su actitud como clientes. Estos cambios sociales han sucedido porque:
      .col-lg-4.my-5
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Texto que describa la imagen')       

    .row.justify-content-center.my-5
      .col-lg-10
        .row.justify-content-center
          .col-lg-4
            .tarjeta-numerada.color-acento-botones.p-4.trj-numerada
              .tarjeta-numerada__numero
                .h2 1
              .row.justify-content-center
                .col-6.col-lg-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img2.png', alt='Texto que describa la imagen')            
              h4.text-center.mt-4 Datos
              p.text-center Hay una enorme cantidad de datos que se actualizan prácticamente en tiempo real.

          .col-lg-4
            .tarjeta-numerada.color-acento-botones.p-4.trj-numerada
              .tarjeta-numerada__numero
                .h2 2
              .row.justify-content-center
                .col-6.col-lg-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen')            
              h4.text-center.mt-4 Bienes tecnológicos
              p.text-center Los bienes tecnológicos se han generalizado debido a tener precios asequibles.

          .col-lg-4
            .tarjeta-numerada.color-acento-botones.p-4.trj-numerada
              .tarjeta-numerada__numero
                .h2 3
              .row.justify-content-center
                .col-6.col-lg-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img4.png', alt='Texto que describa la imagen').img4-t3          
              h4.text-center.mt-4 Interacción
              p.text-center Los usuarios web necesitan de la interacción para ser tenidos en cuenta.

    .row.justify-content-center.my-5
      .col-lg-10
        .row
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img5.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La diferencia entre el mercadeo tradicional y el marketing digital es la diferencia entre las estrategias #[i push] (inclinar la información a los clientes) y #[i pull] (atraer a los clientes a la marca). Este enfoque sirve para prestarle más atención al cliente y a su relacionamiento con la marca. Las 4P tradicionales del mercadeo (Producto, Precio, Plaza y Promoción), centradas desde el producto, se han convertido hoy en las 4F del #[i marketing] digital

    .row.justify-content-center.my-5
      .col-lg-10
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')

          div(x="19.5%" y="40%" tooltip="Flujo" numero="1")
            h5 Flujo
            p.ps-4 <i class='fas fa-circle' style='font-size:10px'></i> Flujo. Es un estado mental en el que entra el cliente si hay suficientes opciones para interactuar y un interés alto en la información. Las marcas deben conseguir que los navegantes sientan comodidad en las plataformas digitales para poder interactuar con ellas.

          div(x="39.9%" y="40%" tooltip="Funcionalidad" numero="2")
            h5 Funcionalidad
            p.ps-4 <i class='fas fa-circle' style='font-size:10px'></i> Funcionalidad. Los sitios web deben ser usables, navegables y accesibles para los usuarios. Si no son funcionales conllevan a una ruptura con el estado mental del cliente, que es el flujo.

          div(x="60.2%" y="40%" tooltip="<i>Feedback</i>" numero="3")
            h5 #[i Feedback]
            p.ps-4 <i class='fas fa-circle' style='font-size:10px'></i> #[i Feedback.] Es vital que haya un diálogo entre el cliente y la marca. La idea es el establecimiento de un diálogo con los usuarios; es importante hacerles ver que sus interacciones y opiniones son fundamentales para la marca.

          div(x="80.5%" y="40%" tooltip="Fidelización" numero="4")
            h5 Fidelización
            p.ps-4 <i class='fas fa-circle' style='font-size:10px'></i> Fidelización. El objetivo es forjar una estrecha y duradera relación con el cliente. Para lograrlos se pueden crear comunidades virtuales que logren una comunicación y una CX a largo plazo con la marca.

    .row.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-3.my-5
          p Para ampliar información revise el  #[strong Anexo 7. Marketing digital,] en su página inicial se detallan otros aspectos relacionados con el marketing digital.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-7_marketing_digital.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 7.] Marketing digital

    separador

    #t_3_1

    .titulo-segundo.color-acento-contenido.my-5
      h2 3.1 Herramientas

    .row.my-5
      p El marketing digital se compone de herramientas que facilitan la expansión de productos y servicios de forma online.

    .row.justify.content-center.my-5
      ul.lista-ul1
        li
          i.fas.fa-square
          b Análisis situacional y de mercado

    .row.justify.content-center.my-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')       

      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Importancia del marketing digital")
            p El mercadeo es importante para cualquier tipo de empresa, sea pequeña, mediana o grande, si se quiere incrementar su visibilidad consiguiendo cada vez más clientes. Para lograrlo, se hace necesario tener a la mano una serie de herramientas que entregan soluciones para impulsar la marca. 
          
          .row(titulo="Planificación")
            p Actualmente existe una gran cantidad de opciones que permiten mejorar los procesos en la planificación, automatización, optimización, y ejecución de estrategias de mercadeo.
          
          .row(titulo="Elección")
            p Elegir estas herramientas es un verdadero reto, pues con ellas es posible abordar grandes volúmenes de información, acelerando procesos y mejorando resultados.
          
    .row.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-3.my-5
          p Para ampliar información revise el  #[strong Anexo 7. Marketing digital,] en la sección #[strong herramientas,] se precisan diversas herramientas digitales vinculadas al marketing digital. 
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-7_marketing_digital.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 7.] Marketing digital

    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-rosa.p-4
            .row.justify-content-center.mb-4
              .col-6.col-lg-4
                figure.mt-5
                  img(src='@/assets/curso/temas/tema3/img8.png', alt='Texto que describa la imagen')
            #t_3_2              
            h3.text-center.mt-5 3.2 Técnicas
            p.text-center La aceptación y uso de nuevas herramientas nacidas a través de las nuevas tecnologías, ha generado un nuevo tipo de mercadeo en el que se ha vuelto preponderante la interacción con el cliente. Es por esto que el marketing digital usa diferentes técnicas para lograr los objetivos pactados, las cuales poseen características que se adecúan a una u otra estrategia, aunque también es posible que se adecúan a varias estrategias, siempre y cuando sirvan para reformar sus respectivos planes de acción.
          
          .col-md.tarjeta.color-rosa1.p-4
            .row.justify-content-center.mb-4
              .col-6.col-lg-4
                figure.mt-5
                  img(src='@/assets/curso/temas/tema3/img9.png', alt='Texto que describa la imagen')          
            #t_3_3
            h3.text-center.mt-5 3.3 Estrategias
            p.text-center Un plan de mercadeo se debe concentrar en la consecución de los objetivos pactados por la empresa y que se deben alinear con los objetivos del plan de negocio. Las estrategias tienen como función ayudar a que se alcancen los objetivos pactados en los dos planes y, se pueden usar de manera combinada en el progreso de las diferentes técnicas que la empresa vaya a explotar. 

    .row.justify-content-center.my-5
      .col-lg-6.my-3
        .cajon.color-acento-contenido.p-3
          p Para ampliar información revise el  #[strong Anexo 7. Marketing digital, ] en la sección de #[strong técnicas,] se describen las más usadas actualmente.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-7_marketing_digital.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 7.] Marketing digital

      .col-lg-6.my-3
        .cajon.color-acento-contenido.p-3
          p Para ampliar información revise el  #[strong Anexo 7. Marketing digital, ] en la sección de #[strong estrategias,] se detallan las categorías en las que se clasifican las diversas estrategias asociadas al marketing digital.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-7_marketing_digital.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo 7.] Marketing digital





</template>

<script>
export default {
  name: 'Tema3',
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
