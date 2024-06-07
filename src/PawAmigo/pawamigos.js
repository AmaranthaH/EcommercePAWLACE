const animals = { 
  "caninos": { 
      nombre: "Caninos", img : './assets/canino.png', consejos: ["Antes de dirigirte al veterinario, es recomendable sacar a tus mascotas a pasear. Esto ayudará a evitar que asocien entrar al carro con la visita al veterinario.", "Los Pawamigos tienen dificultades para regular su temperatura corporal, ya que en climas cálidos o fríos. Es fundamental mantenerlos hidratados con suero y humectar sus narices y almohadillas con bálsamos especiales o aceite de coco extra virgen.", "El aceite de coco extra virgen es un excelente desparasitante natural (aunque no desparasita en un 100%), fuente de energía, bactericida natural, beneficioso para su pelaje, facilita la digestión, ayuda a mantener un aliento fresco y limpia sus dientes. No se recomienda ingerir más de una cucharada por semana.", "No olvides cepillar los dientes de tu Pawamigo regularmente para garantizar su salud bucal."]},
  "felinos": {
      nombre: "Felinos", img :'./assets/felino.png', consejos:["Cepilla a tu amigo felino regularmente para evitar bolas de pelo y mantener su pelaje sano.", " Mantén a tu gato en interiores o supervisado en exteriores para protegerlo de peligros.", "Recuerda respetar el espacio y personalidad de tu amigo, cada gatito es único y necesita su propio tiempo y atención.", "La limpieza es importante. No olvides mantener la casa de arena limpia, cambiándola regularmente para evitar malos olores y problemas de salud.","Evita darle comida de humanos, proporciona alimentos balanceados y adecuados para su edad y salud."]},
  "aves": {
      nombre: "Aves", img: "./assets/aves.png", consejos:["¡Nuestras queridas mascotas necesitan espacio! El tamaño de la jaula debe permitir que las aves se muevan libremente y extiendan sus alas sin restricciones. Asegúrate de que la jaula sea lo suficientemente grande para la especie de tu ave.", "No los dejes solitos. Las aves son conocidas por andar en parvadas, ¡así que una compañía la haría muy feliz! El tener mínimo dos aves juntas disminuye su tristeza y previene enfermedades.", " Proporciona una dieta equilibrada que incluya semillas, frutas, verduras y, en algunos casos, pellets formulados para aves ¡Yummy! También asegúrate de que siempre tenga agua fresca y de cambiarla diaramente para evitar bacterias.", "Lleva a tus mascotas a un veterinario especializado en aves para chequeos regulares. Observa cualquier signo de enfermedad como cambios en el apetito, comportamiento letárgico, o plumas desordenadas. Como dato curioso, si ves a alguna ave comerse sus huevos, no es por que se quiera comer a sus hijos, es por que le hace falta calcio.", " Incluye varias perchas de diferentes tamaños y texturas para prevenir problemas en las patas. Proporciona juguetes para estimular su mente y prevenir el aburrimiento. ¡Diviértete con tu mascota y enseñale trucos! Le ayudará a estimular su mente."]},
  "pericos": {
      nombre: "Pericos", img:'./assets/perico.png', consejos:["¿Sabías que los pericos se pueden enamorar de ti? Sí, como lo escuchas, los pericos escogen a una persona. Pero, cuidado, una vez que se enamoran suelen ser muy posesivos y celosos si alguien se le acerca. Por lo que es importante detectar a su alma gemela para tener precauciones cerca de ellos. ¡Estas aves pueden vivir hasta 80 años!"]
  },
  "loros": {
      nombre: "Pericos", img:'./assets/loro.png', consejos:["Al igual que los pericos pueden llegar a vivir hasta 80 años. ¿Pero sabías que también son unos grandes amantes de la música? Puedes poner música suave o sonidos de la naturaleza para mantenerlos entretenidos y reforzar tu vínculo con tu mascota."]
  },
  "canarios": {
      nombre: "Canarios", img:'./assets/canario.png', consejos: ["¿Sabías que existen competencias de canarios? Sí, estas aves realizan competencias de canto donde se evalúan las habilidades de canto de los machos. Esto les permite atraer hembras y marcar su territorio."]
  },
  "reptiles": {
      nombre: "Reptiles", img: "./assets/reptiles.png", consejos: ["Los reptiles pueden ser unas animales de compañía fuertes, tranquilos y no requieren de unos cuidados demasiado complicados. Basta con que te informes un poco del clima ideal que necesitan (temperatura y humedad) y de la alimentación que han de seguir, para que puedas disfrutar de una compañía original y perfecta para ti. Si quieres un reptil pero aún no has decidido cual, existen una gran variedad de reptiles entre los que podrás encontrar al ideal."]
  }, 
  "tortuga": {
      nombre: "Tortuga de Agua", img: "./assets/tortu.png", consejos:["Su habitat debe ser lo más grande posible para que dispongan de suficiente espacio para moverse y puedan sentirse cómodas. Debe ser alto y contar con bastante profundidad para que puedan nadar tanto como quieran, ya que la mayor parte del día se la pasarán bajo el agua.", "Las tortugas acuáticas necesitan recibir luz todos los días, durante 2 o 3 horas, para que su caparazón esté fuerte y sano. Lo mejor es que sea natural: si tienes la posibilidad de colocar su habitat en una zona de la casa donde reciba la luz natural del sol, sería lo ideal.", "La mayoría de las tortugas de agua son omnívoras, comen de todo. No obstante, no es recomendable darle comida para humanos ni alimentos procesados.", "Su alimentación puede basarse en frutas, verduras, alimento vivo (gusanos, insectos, lombrices, saltamontes, grillos, escarabajos y pequeños peces."]
  }, 
  "camaleon": {
      nombre: "Camaleón Velo", img: "./assets/camaleon.png", consejos: ["Nombre científico: Chamaeleo calyptratus", "Los camaleones de velo son muy territoriales y no toleran la presencia de otros camaleones en estrecha proximidad.", "Puedes cubrir sus requerimientos de luz con dos tipos de focos, un uvb y otro que produzca calor.", "La mejor dieta es a base de grillos, cucarachas (dubias, madagascar, runner), hornworms (gusano goliath), entre otros.", "Calcio y otras vitaminas son muy importantes para la salud de tu camaleón. Los insectos ofrecidos a tu camaleón deben estar ligeramente espolvoreados con suplemento de calcio antes de ofrecerlos."]
  }, 
  "iguana": {
      nombre: "Iguana", img:"./assets/iguana.png", consejos: ["Las iguanas son animales estrictamente herbívoros por lo que solo se alimentan de vegetales, hierbas, hortalizas y fruta.", "Necesitan radiación ultravioleta (UVA y UVB) para la correcta asimilación del calcio, por lo que deberás ponerles un fluorescente especial para reptiles tropicales 5.0.", "El rango de temperatura al que deben estar oscila entre los 24ºC y los 30 ºC, con una temperatura óptima de 28ºC .", "Para la correcta muda y desprendimiento de la piel vieja es muy importante el factor humedad de manera que es muy conveniente pulverizar con agua tibia a nuestra iguana los días previos a la muda."]
  }, 
  "roedores":{
      nombre:"Roedores", img:"./assets/roedores.png", consejos: ["Los roedores son animales populares como mascotas debido a su tamaño pequeño, su naturaleza juguetona y su relativa facilidad de cuidado. ", "Es importante investigar las necesidades específicas de cada especie antes de adoptar un roedor como mascota. Además, asegúrate de proporcionarles una dieta equilibrada, atención veterinaria regular y un ambiente seguro y enriquecido para que puedan vivir una vida feliz y saludable."]
  }, 
  "ardilla": {
      nombre:"Ardillas", img:"./assets/ardilla.png", consejos: ["Las ardillas nacen ciegas y dependen de sus madres unos dos meses mientras estas les traen alimentos y les dan de mamar.", "Las ardillas pueden reconocer las nueces maduras usando su olfato, pero también pueden saber si los gorgojos han ahuecado una bellota o una avellana al reconocer que la nuez es demasiado liviana", "Esa cola grande y tupida tiene muchos usos. Funciona como manta en invierno y como sombrilla en verano. La cola también les ayuda a equilibrarse, pero también como medio de comunicación. Las usan como dispositivos de señalización y las mueven si sospechan de una amenaza.", "Las ardillas de árbol comen principalmente nueces, semillas y frutas, pero son omnívoras. Se sabe que las ardillas grises, por ejemplo, comen insectos, caracoles, huevos de aves y cadáveres de animales cuando escasean otros alimentos."]
  }, 
  "hamster": {
      nombre: "Hámsters", img: "./assets/hamster.png", consejos: ["Los hámsteres pueden estresarse en ambientes calurosos o húmedos, lo que puede provocarles problemas y enfermedades. Si vives en una región cálida, deberás mantener a tu hámster en la zona más fresca de la casa durante los meses más calurosos.", "Debes saber que no se les puede forzar a vivir de día, pues esto provocaría en ellos un enorme estrés, afectando incluso a su esperanza de vida. Así que procura que pueda descansar durante el día en un lugar alejado de ruidos y sobresaltos y aléjate de su jaula durante la noche si sufres de sueño ligero.", "Estos pawamiguitos no perciben ni distinguen ningún color, de hecho el sentido de la vista no es uno de los sentidos más desarrollados de estos roedores.Únicamente ven en una distancia máxima de 15 centímetros y, además, no pueden apreciar la profundidad."]
  }, 
  "cuyos": {
      nombre: "Cuyos o cobayas", img: "./assets/cuyos.png", consejos: ["Estos pawamiguitos duermen con los ojos abiertos, es un mecanismo de defensa que han desarrollado para poder actuar con rapidez ante cualquier situación de riesgo.", "Son incapaces de producir por sí mismas vitamina C, por este motivo, resulta esencial ofrecer una dieta rica en vitamina C, que permita cubrir sus requerimientos nutricionales.", "Otro de los datos más curiosos sobre las cobayas es que son coprófagas, lo que significa que ingieren de forma habitual sus heces. Aunque pueda parecer una práctica poco higiénica, realmente lo hacen para obtener vitaminas del grupo B y para optimizar la ingestión de proteína.", "La obesidad es una de las enfermedades más comunes en estos roedores. Por ello, es importante monitorizar su peso de forma semanal y proporcionales una dieta equilibrada. Como referencia, su ración diaria debe estar compuesta por: Heno en un 70 %, Alimento fresco en un 20 % (fundamentalmente verduras de hoja y en menor medida otras hortalizas y frutas), Pienso en un 10 %."]
  }, 
  "chinchilla": { 
      nombre: "Chinchilla", img:"./assets/chinchilla.png", consejos: ["Estos pawamiguitos tienen una esperanza de vida larga y pueden llegar a vivir unos 15 años, siempre y cuando reciban los cuidados adecuados y una alimentación completa.", "A diferencia de otras mascotas, estos roedores se “bañan” en arena para mantener una buena higiene y su pelaje en perfecto estado.", "Son animalitos nocturnos, por lo que es esencial respetar su rutina y sueño, ya que de lo contrario podrían sufrir estrés o ansiedad.", "Si notas algunos de estos síntomas: cambios en el apetito, pérdida de peso, secreción nasal, diarrea y cambios en el comportamiento, como la apatía o la agresividad, es crucial llevarla a un veterinario especializado en animales exóticos lo antes posible."]
  }, 
  "otros": { 
      nombre: "Otros", img:"./assets/otros.png", consejos: ["Es muy importante que consideres que los mamíferos son animales que requieren dieta especial, un espacio adecuado y atención veterinaria periódicamente.", "Puedes enriquecer su desarrollo de muchas formas, proporcionar juguetes y tener actividades como túneles, puede ayudar a que se mantengan activos."]
  }, 
  "mapache":{
      nombre: "Mapache", img:"./assets/mapache.png", consejos: ["Cuando son jovenes son muy dóciles y juguetones, pero al alcanzar la edad adulta, puede volverse agresivos, especialmente si se encuentra de repente fuera de su hábitat natural, el mapache no es apto para vivir dentro de un espacio pequeño, si vas a compartir vida con este animalito es conveniente que tengas un buen jardín con espacio exclusivo para él y una amplia jaula o habitación.", "Son animales omnívoros, por lo que tendrás que alimentarlo con verdura, fruta, pavo, pollo y pescado. Nunca debes darle carne roja, porque no la digieren bien. Su metabolismo permite que se alimenten de comida muy diversa, pero eso no quiere decir que le des de comer cualquier producto.", "Para poder tener un mapache es necesario que hagas el trámite del permiso SEMARNAT-08-056, con el cual se puede adoptar un ejemplar de una especie de fauna silvestre para tener en casa."]
  }, 
  "minipig": {
      nombre: "Minipig", img:"./assets/minipig.png", consejos: ["Actividad física: necesitan ejercicio regular para mantenerse en forma y prevenir la obesidad; puedes llevarlo a pasear, jugar con él en áreas verdes o enseñarle algunos trucos.", "Asegúrate de tener suficiente espacio al aire libre para que puedan pastar y hacer ejercicio. También necesitarán un área segura y cómoda para dormir.", "Los mini pigs son inteligentes y pueden ser entrenados para hacer trucos y usar un arenero.", "Cepíllalo forma regular para eliminar la suciedad y el pelo muerto."]
  }, 
  "huron": {
      nombre: "Hurón", img:"./assets/huron.png", consejos: ["Los hurones son animales carnívoros, esto quiere decir que la dieta debe fundamentarse en proteína animal. Por lo menos el 45% de su comida tiene que tener este tipo de proteína. La grasa animal debe estar presente en un 20% y la fibra en un 5%.", "La oscuridad total es muy importante en los cuidados del hurón. Estos deben dormir un lapso de 14 horas en la oscuridad para que puedan generar melatonina normalmente.","La madriguera puede hacerse en el rincón de un cuarto. Esta debe contar con buena ventilación y no debe ser calurosa. Una vez que el hurón comience a dormir no debes despertarlo. Esto puede perjudicar su salud."]
  }, 
  "conejo": {
      nombre: "Conejos", img: "./assets/conejo.png", consejos:["Los conejos necesitan tener compañeros de su misma especie, ya que los que viven solitarios, sufren más de depresión, ansiedad y se aburren con más facilidad. Lo ideal, es mantenerlos en parejas debidamente esterilizados o en pequeños grupos.", "La combinación perfecta es de un macho y una hembra, ya que realizar parejas de dos hembras o dos machos tienen mayor probabilidad de fracaso. En todo caso, lo mejor es que ambos estén castrados.", "Los conejos se deben vacunar principalmente de dos patologías frecuente en ellos.", "La primera es la mixomatosis, una enfermedad transmitida por las pulgas y mosquitos y debe colocarse una vacuna cada 6 meses.", "La segunda patología es la fiebre vírica hemorrágica clásica y nueva, transmitida por insectos o contacto directo con conejos infectados."]
  }, 
  "peces": {
      nombre: "Peces", img: "./assets/peces.png", consejos: ["Deben de tener un habitat adecuada, la cual debe de ser de buen tamaño, procurar mantener el agua de los peces en perfecto estado ya que la calidad del agua va a determinar el buen estado de salud del pez.", "Se recomienda cambiar el 30% del agua de la pecera un par de veces por semana. Es esencial que su agua tenga una temperatura e iluminación adecuada. Además de algunas cosas como bombas de aire y filtros."]
  }
  }

  function showInfo(animal) {
      const infoImage = document.getElementById("infoImage");
      const infoContent = document.getElementById("infoContent");
    
      // Actualiza la imagen y el contenido basándose en el animal seleccionado
      infoImage.src = animals[animal].img;
      infoContent.innerHTML = `
        <h2>${animals[animal].nombre}</h2>
        <p>¡Maravíllate conociendo la información de ${animals[animal].nombre} !</p>
        <p>Pawtips:</p>
        <ul class= "tip">
          ${animals[animal].consejos.map(consejo => `<li id="list">${consejo}</li>`).join('')}
        </ul>
      `;
    }
    

    