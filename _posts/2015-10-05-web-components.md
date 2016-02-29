---
layout: post
title:  "Una mirada a los Web Components"
date:   2015-10-05 16:02:38
categories: web-components
description: El nuevo estandar de la web que permitira dividir nuestros proyectos en elementos mas pequeños, reusables y encapsulados.
---

Hace un par de semanas atras hablaba con un amigo desarrollador y fundador de [Kakao Media](http://www.kakaomedia.com) ([Hola Erick!](http://www.twitter.com/eveevans)) sobre el estado de la web y los futuros proyectos, curiosamente tocamos el tema de Web Components y antes de comenzar a hablar algunas cosas que debatiamos y exteriorizar mis reflexiones... ¿que es Web Components?

Web Components es un nuevo estandar de la web que permitira dividir nuestros proyectos en elementos mas pequeños, reusables y encapsulados. Este estandar es una reciente incorporacion al HTML5 y que, si siguen evolucionando al ritmo al que lo están haciendo, pueden suponer el mayor cambio en el mundo web en años y solucionar de golpe varios problemas históricos de HTML.

La idea de Web Components se introdujo en 2011 por Alex Russell, y desde entonces la comunidad web ha discutido el concepto mucho (127.000.000 resultados en Google Búsqueda de "Web Components")

Web Components consistes en estas cuatro tecnologias:

* [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements)
* [HTML Templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
* [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
* [HTML Imports](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports)


Ya hay algunas librerias basadas en este estandar disponibles, algunas listas y otras aun no para produccion:

* [Polymer - Google](https://github.com/polymer/polymer)
* [Gaia - Mozilla](https://github.com/gaia-components/gaia-components)
* [Deliteful - IBM](https://github.com/ibm-js/deliteful)
* [X-Tags - Mozilla](http://x-tags.org/)


Cabe señalar que estas librerias estan basadas en las tecnologias antes mencionadas. Actualmente puedes hacer uso de 'Web Components' sin depender de estas.


Ahora te pregunto: ¿has visto alguna vez en acción un Web Component? Lo más seguro es que sí, aunque quizá no fueras consciente de ello…

Visita cualquier página con un reproductor de vídeo HTML5 ([como esta](http://vimeo.com/blog/post:606)) e inspecciona la etiqueta {% highlight html %}
<video width="320" height="240" controls><source src="pollito.mp4" type="video/mp4"></video> {% endhighlight %} con las Herramientas para Desarrolladores de Chrome. Activa “Show user agent shadow DOM” y, ¡sorpresa!, verás cómo aparecen multitud de nuevos elementos que estaban ocultos inicialmente (en el Shadow DOM).

A continuacion un ejemplo de 'Web Components'

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <style>
      #map_canvas {
        width: 500px;
        height: 400px;
      }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
      function initialize() {
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
  </head>
  <body>
    <div id="map_canvas"></div>
  </body>
</html>
{% endhighlight %}

Gracias a 'Web Components' podemos evitarnos todo eso y hacerlo de una forma mas simple y limpia.

{% highlight html %}
<google-map latitude="37.77493" longitude="-122.41942"></google-map>
{% endhighlight %}


Con la llegada de 'Web Components' la comunidad puede crear sus propios elementos, de forma rápida y colaborativa, la velocidad sin precedentes a la que podemos desarrollar, probar y mejorar las características será un gran beneficio para la experiencia del usuario. Podremos tener una web mas estandarizada y por supuesto semanticamente. Imaginemos elementos que son capaces de compartir entre diferentes CMS (Wordpress, Drupal, Ghost). _Construye una sola vez, ejecutalo donde quieras_. Por ahora 'Web Components' me parece una de las mejores apuestas para la web, respaldado por todos los frameworks basados en el estandar. Hasta ahora esto solo es un punto de partida hacia el futuro de la web.

Antes de de terminar les comparto un importante video llamado ['Are Web Components Ready Yet?'](https://www.youtube.com/watch?v=oDtpXhMQeew) y pueden pasar [por aca](http://jonrimmer.github.io/are-we-componentized-yet/) para ver el progreso de 'Web Components' hacia su estandarizacion.

