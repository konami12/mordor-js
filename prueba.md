
# Expresiones Regulares

Expresiones Regulares

Como desarrollador es muy común trabajar con cadenas de texto, lo cual inicialmente puede parecer algo muy sencillo, pero conforme las cadenas se vuelven más complejas es inevitable ignorar el uso de las «**evil regular expressions 😈**» (muahahaha). Esto ya no suena tan sencillo, ya que para este punto un problema se convierte en 2, además de resultar un poco frustrante.

Tranquilo, antes de iniciar, tírate al suelo y repite después de mi:

![Tutorial de como llorar (**Fig-01**)](https://cdn-images-1.medium.com/max/2000/1*iOnm7Yw1d6RXj4nKodLMYA.png)
### 😿 Las expresiones regulares son buenas, no son el diablo…
### 🙀 Las expresiones regulares son buenas,no son el diablo…
### 😸 Las expresiones regulares son buenas, no son el diablo…

Tranquilo, respira hondo y exhala… listo. El momento feo ya pasó, la pregunta que te puedes estar haciendo es:
 
 ### ¿En verdad las «**evil regular expressions 😈**» son buenas?

A lo que te podría contestar, claro que son muy buenas **😇** y poderosas, ya que con la combinación correcta de caracteres podemos realizar desde una búsqueda muy sencilla, hasta una muy compleja; en pocas palabras tenemos la **navaja suiza** para el manejo de cadenas.

## 📚 Un poco de historia

![Expresión regular en el antiguo Egipto (**Fig-02**)](https://cdn-images-1.medium.com/max/2000/1*1hGSGEsR4NmyCa2H5TMYIA.jpeg)

Antes de entrar en materia es bueno conocer un poco de historia sobre la primer aparición de **expresiones regulares** en el campo de la computación las cuales surgen nada más y nada menos que dentro de un editor de líneas llamado [Ed](https://es.wikipedia.org/wiki/Ed_(Unix))*, creado por el ingeniero* [Ken Thompson](https://es.wikipedia.org/wiki/Ken_Thompson)*, quién entonces se encontraba trabajando en los laboratorios de [Bell Labs](https://es.wikipedia.org/wiki/Bell_Labs)* allá por 1969.

Aquel editor de líneas apareció por primera vez como una utilidad para el sistema operativo de **[UNIX](https://es.wikipedia.org/wiki/Unix)** y era el encargado de suplir las labores para editar archivos. Similar a como se hace en la actualidad, la instrucción que había que escribir para que [Ed](https://es.wikipedia.org/wiki/Ed_(Unix))realizará una búsqueda de texto era algo parecido a.

![Comando para Ed (**Fig-03**)](https://cdn-images-1.medium.com/max/2000/1*l2Vat6WBzDoYL0_o1M2JXw.png)

En el comando utilizado por [Ed](https://es.wikipedia.org/wiki/Ed_(Unix)) se colocaba al inicio **g(global)** y **p(print)** al final, ambas letras son conocidas como modificadores y lo que queda en la parte central es la combinación de caracteres que conforman las expresión regular.

En este punto surge algo muy interesante ya que la instrucción anterior da como resultado la frase **“Global Regular Expression Print”** *cuya abreviatura conforma la palabra* **grep**, a partir de esta característica de [Ed](https://es.wikipedia.org/wiki/Ed_(Unix)) nace el comando [grep](https://es.wikipedia.org/wiki/Grep)(comando presente en todos los S.O basados en [UNIX](https://es.wikipedia.org/wiki/Unix)) el cual nos permite realizar búsquedas a nivel del sistema de archivos.

![Ejemplo de uso de grep (**Fig-04**)](https://cdn-images-1.medium.com/max/2000/1*pQjVdfJlPy53Osix-8NQqw.png)

*Actualmente muchos lenguajes de programación modernos cuentan con el soporte necesario para el uso de expresiones regulares aunque la sintaxis puede cambiar para cada lenguaje,* en esencia podremos hacer soluciones similares para cada uno, con todo lo anterior iniciaremos con lo divertido todos los ejemplos mostrados serán escritos en *JS.*

## 🛠️ Estructura

Antes de iniciar a jugar con las **«*evil regular expressions *😈» **y descubrir que solo son incomprendidas iniciaremos conociendo la estructura básica.

![Estructura base (**Fig-05**)](https://cdn-images-1.medium.com/max/2000/1*pKZNFYlfZblyWzqfhxQO5A.png)

Como podemos ver las estructura es muy sencilla solo solicita 2 parámetros de momento no tomaremos en cuenta el parámetro de los modificadores ya que iniciaremos con ejemplos básicos y conforme avancemos subiremos el nivel de complejidad, como primer ejemplo realizaremos la búsqueda de caracteres.

![Ejemplo búsqueda de caracteres (**Fig-06**)](https://cdn-images-1.medium.com/max/2000/1*Ql7RfyXPm1AexYlFYvWFBQ.png)

Hasta este punto el primer ejemplo no es nada sorprendente ya que esto lo puede realizar cualquier buscador, si lo vemos un poco más a fondo podemos ver que la búsqueda está recibiendo un patrón el cual se traduce a una *expresión regular *en su expresión básica.

## 📗 Metacaracteres

Los «**metacaracteres**» o también conocidos como *clases* son una alternativa para poder representar grupos enteros de caracteres que se encuentren relacionados entre sí de manera semántica, para poder utilizarlos es necesario el uso de *backslash* seguido del nombre de la clase en minúsculas.

![Sintaxis para el uso de metacaracteres (**Fig-07**)](https://cdn-images-1.medium.com/max/2000/1*t_JyknU5WmVwl0dkGG3vBA.png)
> **📓 Nota:** Cuando el nombre del metacaracter se escribe en mayúsculas se considera como una negación por lo que su comportamiento será diferente a lo habitual.

Tomando en cuenta la sintaxis y la nota anterior podríamos iniciar con la evangelización de **«*evil regular expressions *😈» **para lo que iniciaremos utilizando las reglas siguientes.
> 💡**Recordatorio**: Todos los ejemplos utilizan el modificador **“g”** el cual permite buscar de manera global coincidencias dentro de una cadena, está opción se utiliza con fines demostrativos ya que cada metacaracter solo tomara un solo carácter.

### 🔖 metacaracter \w

Realiza una búsqueda de **caracteres alfanuméricos** es importante mencionar que también toma el **underscore**.

![Ejemplo del uso del metacaracter** \w** (**Fig-08**)](https://cdn-images-1.medium.com/max/2000/1*ME2ltRve03PIEAtwIFI15Q.png)

La clase **«\w»** cuenta con su equivalente ya consigue el mismo resultado.

![Expresión equivalente al metacaracter **\w** (**Fig-09**)](https://cdn-images-1.medium.com/max/2000/1*GMebN3nkpAIsPVtEJOL5Gw.png)

El metacaracter **«\w»** cuenta con su variante de negación que es **«\W»** la cual permite buscar todo aquello que sea diferente a *caracteres alfanuméricos* y al **underscore**.

![Ejemplo de negación de usando el metacaracter **\W **(**Fig-10**)](https://cdn-images-1.medium.com/max/2000/1*y2H6SQBOLDpdd66a-CEIGg.png)

### 🔖 metacaracter \d

Permite realizar la búsqueda exclusiva de caracteres numéricos.

![Ejemplo del uso del metacaracter** \d** (**Fig-11**)](https://cdn-images-1.medium.com/max/2000/1*9hxpxL2GYOGCBg65gpCLuw.png)

El metacaracter **«\d»** también cuenta con su equivalente ya que consigue el mismo resultado.

![Expresión regular equivalente al metacaracter **\d **(**Fig-12**)](https://cdn-images-1.medium.com/max/2000/1*Ab4_MJquSyShVVg3BU9BHA.png)

El metacaracter **«\d»** también cuenta con su variante de negación que es **«\D»** la cual permite buscar todo aquello que sea diferente a caracteres* numéricos.*

![Ejemplo de negación usando el metacaracter **\D **(**Fig-13**)](https://cdn-images-1.medium.com/max/2000/1*lnE33j7I-zjfcWW6H8gUcA.png)

### 🔖 metacaracter \s

Permite realizar la búsqueda de los **espacios en blanco** que existen dentro de una cadena.

![Ejemplo del uso del metacaracter** \s** (**Fig-14**)](https://cdn-images-1.medium.com/max/2000/1*1qBo2mJAaK9xGAVqFywQ-g.png)

El metacaracter **«\s»** también cuenta con su variante de negación que es **«\S»** la cual permite buscar todo aquello que sea diferente a espacios en blanco

![Ejemplo de negación usando el metacaracter **\S **(**Fig-15**)](https://cdn-images-1.medium.com/max/2000/1*WGgJCfytG4Hm9h9Sat7hvQ.png)

### 🔖 metacaracter .

Este es uno de los más especiales ya que podemos hacerlo coincidir con cualquier carácter que se nos ocurra, con excepción de un salto de línea.

![Ejemplo del uso del metacaracter** . **(**Fig-16**)](https://cdn-images-1.medium.com/max/2000/1*ajuPFnnZDgro1l17Xc6FHw.png)

Muy interesante las **«_evil regular expressions 😈»**ya no parecen tan maléficas (mmm muy interesante creo que me estoy enamorando 😍). Hasta este punto podemos decir que estamos en el camino del **«Dios Digital»**por lo que procederemos a realizar nuestra primera plegaria(ejemplo).

### 🤩 Extra

para el caso de **«\d y \w»** cuentan con patrones equivalentes estos patrones cuentan con una similitud muy curiosa la cual es el uso de **«[]»(mmm muy interesante)** los cuales facilitan una gama de posibilidades.

1. ***Rango de dígitos [0–9]***

1. ***Rango de letras [a-zA-Z]***

1. ***Listado de caracteres [\*\-]***

![Ejemplo usando **[] **(**Fig-18**)](https://cdn-images-1.medium.com/max/2000/1*y5NeoVrXlhwhMCwrxlrDIQ.png)

Como podemos ver en el ejemplo se utilizan caracteres especiales los cuales se escapan utilizando el siempre confiable **backslash**.

### 📕 Ejemplo

Para este ejemplo realizaremos una combinación de los metacaracteres que ya explicamos con anterioridad, el reto es realizar una búsqueda de un número telefónico dentro de un párrafo, el numero a buscar es ***«(55–30–80 77–82)»*** _seria muy interesante que intentaras dar tu propia solución_ para lo cual te recomiendo el sitio siguiente [RegEx](https://regexr.com/)[.](https://regexr.com)

![[Ejemplo usando metacaracteres combinados para buscar el teléfono (55–30–80 77–82) (**Fig-17**)](https://regexr.com/40tps)](https://cdn-images-1.medium.com/max/2000/1*uZncW0LZ75D3qpNcQk9JUw.png)*\]*
> 📓**Nota** : Si quieres realizar cambios sobre la solución propuesta puedes hacerlo en el siguiente link [plegaria](https://regexr.com/40tps).

Como se muestra en el ejemplo anterior se utiliza el uso combinado de metacaracteres para dar forma a la primera plegaria realizada hacia el **«Dios Digital»**🙌 (la solución puede variar dependiendo de la locura del lector).

## 📗 Contadores

Los ***«contadores»*** o también conocidos como *cuantificadores *permiten especificar el número de apariciones que puede tener un carácter o patrón dentro de una expresión regular, la sintaxis a utilizar es.

![Sintaxis para el uso de metacaracteres y cuantificadores(**Fig-19**)](https://cdn-images-1.medium.com/max/2000/1*oXndO_VdXvWKsBrbuOfhhw.png)

Tomando en cuenta la sintaxis mostrada podemos ver de primera vista que se utiliza una combinación entre ***metacaracteres*** y ***un contador***, hasta este punto solo nos importa lo que está entre “**{}**“.
> ## **Cota Inferior**: Permite indicar el número mínimo de apariciones de un carácter o patrón.
> ## **Cota Superior**: Permite indicar el número máximo de apariciones de un carácter o patrón, esta cota trabaja en conjunto con la cota superior lo cual se convierte en un rango de posibles apariciones.

Con lo anterior establecido podemos seguir por el camino de la salvación y seguir en con la evangelización de **«evil regular expressions 😈»**, _para entender el uso de contadores es necesario comprender las siguientes reglas_.

### 🔖 Contador {x}

Este opción es la forma más básica ya que solo se utiliza la *cota inferior *esta variante es muy válida en algunos lenguajes de programación y en otros casos no ya que es obligatorio colocar las dos cotas.

![Ejemplo usando la cota inferior(**{x}**) para indicar que busque dos dígitos(**Fig-20**)](https://cdn-images-1.medium.com/max/2000/1*ixv9LJlqIaXc9-7ZiN5-Vw.png)
> **📓 Nota:** Las dos opciones son válidas pero como somos muy buenos programadores siempre utilizaremos la opción de la derecha 😇 y esto es por que por buenas prácticas siempre es necesario declarar la **«**cota superior**»**.

### 🔖 Contador {x,}

Esta opción permite indicar un rango infinito de incidencias las cuales iniciarán desde el número que se indique en la *cota inferior.*

![Ejemplo usando la cota superior con , (**Fig-21**)](https://cdn-images-1.medium.com/max/2000/1*6BH2Uf8uzqAt-qzGSLSUDg.png)

Como se muestra en el ejemplo anterior al utilizar la sintaxis **«{x,}»** no le importa las incidencias que aparezcan después de cumplir la condición de la *cota inferior*.

### 🔖 Contador {x ,y}

Esta opción utiliza la *cota inferior(x)* como la *cota superior(y)* esto permite indicar un rango de apariciones de un carácter o patrón cual se puede traducir como ***«entre “x” y “y” veces»*** esta notación es la más común que se maneja la comunidad.

![Ejemplo Usando las dos cotas (**Fig-22**)](https://cdn-images-1.medium.com/max/2000/1*LOLQAz3qaCbGeAFRm6e0YQ.png)

como se muestra en el ejemplo anterior podemos se utilizan las 2 cotas las cuales permiten establecer el rango de posibles apariciones de un carácter o patrón, si esto lo comparamos con la variante anterior se puede ver que en este caso si se cuenta con una limitante.

### 🤩 Extra

Dentro de los contadores también existen caracteres que facilitan el conteo de las incidencias estos también se conocen como ***delimitadores***.
> ## Delimitador: secuencia de uno o más caracteres utilizados para especificar el límite entre regiones independientes e independientes en texto sin formato u otras secuencias de datos.

***? : Puede estar o no estar***

![Ejemplo utilizando **?, **como se puede ver se cumplen la regla propuesta** **(**Fig-23**)](https://cdn-images-1.medium.com/max/2000/1*kds_uNGg7b-ZYYeTU-EyPQ.png)

***+ : Puede estar una vez o muchas veces***

![Ejemplo utilizando **+, **como se puede ver se cumplen la regla propuesta** **(**Fig-24**)](https://cdn-images-1.medium.com/max/2000/1*Un04r6nHu4feDdl4otuBHA.png)

**** : Puede no estar o estar muchas veces***

![Ejemplo utilizando ***, **como se puede ver se cumplen la regla propuesta** **(**Fig-25**)](https://cdn-images-1.medium.com/max/2000/1*ZtZE0XTL3tPrRHDnHmir2Q.png)

***(): Conocido como paréntesis de captura, permite recordar una expresión regular, la funcionalidad es muy parecida a los [] solo que en este caso el rango se sustituye por una expresión regular.***

![Ejemplo utilizando **(), **como se puede ver se cumplen la regla propuesta** **(**Fig-25**)](https://cdn-images-1.medium.com/max/2000/1*kWO9NUeVgXo6gxQuU6OwGg.png)

### 📕 Ejemplo

Para este ejemplo realizaremos la misma práctica que se realizó en el apartado de ***«metacaracteres»*** pero en este caso utilizaremos ***«contadores»***,
como recordamos el ejemplo anterior consiste en la búsqueda de un número telefónico«**(55–30–80 77–82)**», ***seria muy interesante*** ***que intentaras dar tu propia solución para lo cual te recomiendo el sitio siguiente [RegEx](https://regexr.com/)[.](https://regexr.com)

![E[jemplo usando metacaracteres y contadores combinados para buscar el teléfono (55–30–80 77–82) (**Fig-26**)](https://regexr.com/419am)](https://cdn-images-1.medium.com/max/2360/1*FegXBdCu7MIw7Hn6A95Lww.png)
> 📓**Nota** : Si quieres realizar cambios sobre la solución propuesta puedes hacerlo en el siguiente link [plegaria](https://regexr.com/419am).

Como se muestra en el ejemplo anterior ya estamos aplicando los evangelios aprendidos, lo cual nos permitirá crear una plegaria mas potente la cual satisfacerá al **«Dios Digital»**🙌 (la solución puede variar dependiendo de la locura del lector).

## 📗 Modificadores

Con anterioridad los mencionamos y utilizamos en algunos de los ejemplos mostrados, los modificadores nos permiten redefinir los términos de búsqueda de una expresión ya que en ocasiones las búsquedas son sensibles a mayúsculas, terminan al encontrar la primera coincidencia etc, por lo que para poder modificar este comportamiento podemos utilizar la sintaxis.

![Estructura base (**Fig-27**)](https://cdn-images-1.medium.com/max/2000/1*pKZNFYlfZblyWzqfhxQO5A.png)

Lo se es la misma imagen del inicio pero hasta este punto hace sentido ya que estamos respetando la sintaxis que se necesita para utilizar los modificadores junto con nuestra expresión regular.
> 📓 **Nota** : Los modificadores son opcionales, ademas de que son acomulables esto quiere decir que podemos utilizar más de uno al mismo tiempo.

### 🔖 Modificador i

Este modificador se conoce como ***«Búsqueda insensible a mayúsculas»,*** este realiza una búsqueda sin importar el uso de mayúsculas.

![Ejemplo utilizando el modificador **i **(**Fig-28**)](https://cdn-images-1.medium.com/max/2000/1*5_CQZzNR5Wshh6r4Jvyuxw.png)

Como se muestra en ejemplo cuando se utiliza el *modificador i* la selección inicia tomando la letra mayúsculas, en caso contrario iniciará la búsqueda desde las letras minúsculas.

### 🔖 Modificador g

Es modificador se conoce como **«Búsqueda global»** (utilizado en los ejemplos), este realiza una búsqueda el mayor número de coincidencias no se detiene en el primer resultado que encuentra.

![Ejemplo utilizando el modificador **g** (**Fig-29**)](https://cdn-images-1.medium.com/max/2232/1*-scstAWr8oC_3v_ORE--5A.png)

Como se muestra en el ejemplo al utilizar el **modificador g** la búsqueda se realiza en todo el texto del párrafo en el caso de no colocar el modificador la búsqueda se queda en la primera incidencia que encuentra.

### 🔖 Modificador m

Es modificador se conoce como ***«Búsqueda multilínea»,*** este realiza una búsqueda de manera individual en cada renglón de un texto, este modificador trabaja en conjunto con los metacaracteres
> ## **^**: Se utiliza para indicar el inicio de una línea.
> ## **$**: Se utiliza para indicar el final de una línea

Dichos caracteres permiten indicar la posición de la línea donde debe hacerse la búsqueda otra de las ventajas es que permite realizar el match de líneas completas.

![Ejemplo utilizando el modificador **m **(**Fig-30**)](https://cdn-images-1.medium.com/max/2000/1*J44f7wHVADL4rF4k6HDkGg.png)

Como se muestra en el ejemplo al utilizar el* modificador m *la búsqueda se realiza línea por línea por lo que solo tomo como resultado la incidencia que cumple con la petición a buscar.

### 🤩 Extra

En el caso de modificador multilínea se utilizaron los *metacaracteres ^,$* de los cuales el carácter ^ cuenta con una variante la cual sirve para realizar una negación la sintaxis es la siguiente.

![Sintaxis de negación usando **^ **(**Fig-31**)](https://cdn-images-1.medium.com/max/2000/1*OyIWqBMAdyoTlymeMUJhug.png)

Como se muestra en el ejemplo para poder utilizar la negación es necesario utilizar **«[]»** en los cuales se indica los caracteres a negar.

![Ejemplo de negación utilizando **^ **(**Fig-33**)](https://cdn-images-1.medium.com/max/2000/1*_IIa2Ya7_y0sbeZHipzI2w.png)

Como se muestra en el ejemplo anterior al momento de que su utiliza ^ dentro de los corchetes automáticamente ignora las letras y toma los valores restantes.

### 📕 Ejemplo

Para este ejemplo realizaremos la misma práctica que se realizó en el apartado de ***«contadores»*** pero en este caso utilizaremos ***«modificadores»***,
como recordamos el ejemplo anterior consiste en la búsqueda de un número telefónico«(***55–30–80 77–82***)», seria muy interesante que intentaras dar tu propia solución para lo cual te recomiendo el sitio siguiente [RegEx](https://regexr.com/)[.](https://regexr.com)

![[Ejemplo usando la combinación de lo aprendido para buscar el teléfono (55–30–80 77–82) (**Fig-34**)](https://regexr.com/41l1g)](https://cdn-images-1.medium.com/max/2000/1*jYx8KJqLuzn2gb-FyxbBpQ.png)

> 📓**Nota** : Si quieres realizar cambios sobre la solución propuesta puedes hacerlo en el siguiente link [plegaria.](https://regexr.com/41l1g)

### 😼 Conclusión

Como se muestra en los ejemplos mostrados durante toda la entrada podemos decir que ya estamos evangelizados por lo que toda cadena que necesitemos utilizar las «***evil regular expressions *😈» **podremos aplicarles un exorcismo gracias al **«Dios Digital»** 🙌 ya que contamos con el conocimiento para crear las plegarias, es importante ver que desde este momento cuando utilicemos las *expresiones regulares* ya no tendremos 2 problemas lo que tendremos desde este momento es un solución robusta y duradera.
> ## 👍 Las expresiones regulares si son mis amigas.
> ## 🙌 Las expresiones regulares si son mis amigas.
> ## 🤟 Las expresiones regulares si son mis amigas.

**Gracias por darte una vuelta por esta entrada**. Todo comentario es bien recibido en [@Konami12Jorge](https://twitter.com/Konami12Jorge), no olvides ayudar con 👏 y compartir este material si consideras que alguien más necesita ser evangelizado.
