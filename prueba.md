
# Que es GraphQL?

Que es GraphQL?

Es un query language, es decir, un lenguaje de consultas. Un lenguaje es un sistema compartido por dos partes que les permite comunicarse entre sí.

Un lenguaje de consultas como GraphQL nos permite *hacer consultas y esperar una respuesta predecible*. Un ejemplo de una lenguaje de consultas es SQL, el cual se enfoca en las consultas a una base de datos.

Aunque suene un poco confuso, SQL no tiene nada que ver con GraphQL, ya que el primero está pensado para trabajar con bases de datos, y GraphQL es para comunicar clientes y servidores.

GraphQL es una herramienta que se presenta como una alternativa a REST. La principal mejora que propone es la optimización, además de trasladar la información del servidor al cliente.

Una de las ventajas más importantes de GraphQL es que es agnóstico de plataforma, lo que quiere decir que se puede implementar en más de 20 lenguajes.

El principal objetivo de GraphQL es evitar las múltiples consultas al servidor.

## Diferencias entre ApiRest y GraphQL

### ApiRest

* **Es solo una convención**: Es una manera de comunicarse entre el servidor y cliente, cada uno tiene sus reglas.

* **El servidor expone recurso**s: Los clientes se tienen que adecuarse a como están expuestos.

* **Hace overfetching**: Envía más información de la que se necesita.

* **Múltiples request por vista**: Muy costoso en performance, básicamente es una aplicación en blanco que aún no ha cargado datos o tiene custom endpoints.

* **Documentación ajena al desarrollo**: No hay un estándar por lo que depende mucho del desarrollador para mantenerla.

### GraphQL

* **Lenguaje tipado y validable**: Le damos una forma de lo que recibe y lo que devolvemos, Además de agregarle seguridad.

* **El Cliente define que recibe**: Haciendo una consulta, de la estructura que se define como respuesta.

* **Envía lo necesario**: Se tiene control total de las respuestas que se esperan del servidor.

* **Hace un solo request por vista**: Se maneja un solo row, prácticamente en solo request puedes mandar todo lo que necesitas.

## Schemas(GQL)

El manejo de esquemas dentro de ***GQL*(***GraphQL***)** facilita la forma en la que se deciden las entidades, cómo se relacionan entre ellas, cuáles son las entidades que están disponibles para cada cliente, en pocas palabras, es todo lo que el cliente puede pedir a través de ***GQL*,** Un punto importante a tomar en cuenta es que los ***Schemas*** están compuestos de ***types*** los cuales se conocen como scalars.

## Scalars

Permiten definir la mayoría de las propiedades de las **entidades** que utilizaremos, los tipos que nos permite manejar son

* **Int**: Números enteros.

* **Float**: Números con decimales.

* **String**: Cadenas de texto.

* **Boolean**: maneja los valores **True** o **False**.

* **ID**: Identificador único(***GQL*** se encargará de esto) este puede ser de tipo **Int** o **String**

## Objects

Permite definir las entidades que conforman nuestro esquema por ejemplo.

<iframe src="https://medium.com/media/037f74963b02215e224bb58126922464" frameborder=0></iframe>

En el ejemplo anterior podemos ver que para definir el tipo de dato para las propiedades de la entidad definida se utilizan los valores de los **scalars** además de que el objeto **Curso** tiene un referencia al ***Objeto*** **Profesor.**

## Enum

También es conocido como **enumeradores,** los cuales permiten listar entre una o varias opciones posibles, ejemplo.

<iframe src="https://medium.com/media/b9ce21d31e9025d1699747ce8037fdc5" frameborder=0></iframe>

## Interface

Proporciona la capacidad de describir campos que se comparten en diferentes tipos, es la definición de campos requeridos que sabemos que todas las implementaciones se van a cumplir, si en un futuro necesitáramos que todas las implementaciones de perfil tuvieran un nuevo campo, solamente debemos agregarlo a la **Interface**.

<iframe src="https://medium.com/media/de37b0756522d9f0e783e771a38a1880" frameborder=0></iframe>

Es importante mencionar que el concepto de extender la lógica no existe en ***GQL*** es una manera de asegurarse que las implementaciones están al día, de una manera más sencilla podríamos mencionar que el uso de interface funciona con una validación previa al ejecutar un ***query***.

## Unión

Permite agrupar diferentes tipos en los cuales se puede realizar una búsqueda siempre dentro de los tipos agrupados, ejemplo.

<iframe src="https://medium.com/media/087c9a949816514a7371bdaf4bc78b6d" frameborder=0></iframe>

Como se muestra en el ejemplo puede verse que estamos utilizando la opción **union** para realizar la búsqueda dentro de los **Objects** ***Profesor y Curso ***además se utiliza un tercero el cual tendrá el resultado de la búsqueda.

## Modificadores de tipo

Dentro de ***GQL*** existen dos tipos de modificadores los cuales son.
> **! **: El signo de exclamación permite indicar que un valor es requerido, de una manera más sencilla el campo que se requiera no puede ser **null** ya que si lo fuera ***GQL*** mostraría un error, en caso de que el campo no cuente con un el signo de exclamación esto nos indica que el campo es opcional.

<iframe src="https://medium.com/media/18ab6c91447e7f97009d91191088ec57" frameborder=0></iframe>
> **［］** : el uso de corchetes permite indicar que se espera mas de una valor, se podría decir que similar a los famosos arreglos que utilizamos en cualquier lenguaje de programación.

<iframe src="https://medium.com/media/061cec190ecde059ef8c068885dcf477" frameborder=0></iframe>

Algo interesante de los 2 modificadores de tipo pueden utilizarse juntos por ejemplo.
> **[]!** : El usos de los corchetes con el signo de exclamación permite indicar que nuestra lista no puede ser **null** pero alguno de los valores contenido si pueden serlo por lo que esto no generaría un error.

<iframe src="https://medium.com/media/d801bf5ee27f4d42b21f45d14c82a479" frameborder=0></iframe>

En el ejemplo anterior se indica que la lista no puede ser **null** ya que es requerida pero dentro de la lista si pueden existir valores **null** por lo que seria valido y no se mostraría un **Error.**
> **[!]!** : el uso de corchetes con el signo de exclamación dentro y fuera permite indicar que tanto la lista como el contenido no pueden ser null.

<iframe src="https://medium.com/media/68e1fd287e07ae63e33359c41088b708" frameborder=0></iframe>

Como se muestra en el ejemplo anterior se puede ver que tanto los valores que reciba la lista como la lista no pueden ser **null**.

## Root Type: Query

Es el punto de entrada para realizar las consultas, se puede ver como una analogía a los endpoints que encontramos dentro de una arquitectura **REST,** un punto importante dentro de ***GQL*** es que solo existe un solo punto de entrada.

<iframe src="https://medium.com/media/9f4eb4e22e28a09a3b7bbd23dea87bf6" frameborder=0></iframe>

En el ejemplo anterior podemos ver lo que es la declaración de nuestros puntos de entrada, unos de los casos a destacar es que se pueden manejar paramentos, con los cuales se pueden mandar ciertos valores que necesitemos dentro de nuestra consulta.

## Root Type: Mutation

***GQL*** no solo permite realizar consultas sino que también tiene la capacidad de *insertar, Borrar y editar elementos,** GQL*** nos facilita un tipo especial de **endPoint** el cual nos permite realizar las acciones ya mencionadas.

<iframe src="https://medium.com/media/ff1ba94fb87ce4a25fda8d6175694898" frameborder=0></iframe>

Como podemos ver en el ejemplo anterior se utiliza mutation para agregar nuevos valores a la entidad curso, es importante mencionar que como estamos afectando a curso en futuras consultas podríamos conseguir los campos agregados.

## Declaración de variables

Antes de entender cómo se manejan la variables es importante decir y saber que en **GQL** no puedes tener nada sin saber de qué tipo es por lo cual es importante tomar en cuenta los ***saclars*,** en el siguiente ejemplo se muestra el uso de variables.

![**Fig 11: Declaración de variables usando GraphiQL**](https://cdn-images-1.medium.com/max/2000/1*SyKOkXYceIZj5LOlzdOfDA.png)***Fig 11: Declaración de variables usando GraphiQL***

En la imagen anterior podemos ver que se declara la variable ***id*** la cual se pasa de manera directa al query como se muestra en la **Línea 1, *GQL*** permite el manejo de queries ya que cuenta con una sintaxis propia la cual se muestra en el siguiente ejemplo.

<iframe src="https://medium.com/media/d68b19fb572a6fa27458abc5ea4ab56e" frameborder=0></iframe>

el ejemplo anterior es un query básico ya que ***GQL*** nos permite realizar búsquedas un poco más complejas y extensas por ejemplo supongamos el siguiente caso.

![**Fig 13: Diagrama de un query**](https://cdn-images-1.medium.com/max/2000/1*hRZe5LXezk0i-NCySmVM7g.png)***Fig 13: Diagrama de un query***

Como podemos ver en la imagen se muestra una relación de la tabla cursos con la tabla comentarios al iniciar el uso de ***GQL*** podemos resolver la consulta de una manera muy sencilla.

<iframe src="https://medium.com/media/1d7c1ba36803b70a2b2c9e9c0c68d9e0" frameborder=0></iframe>

como se muestra en el ejemplo anterior podemos ver que resolver la consulta es muy sencillo.

## Conclusión

Como hemos podido ver, ***GQL*** nos da herramientas para desarrollar un ***API*** de forma rápida, natural e independiente del acceso a base de datos o en algunos casos conectarnos a un ***CMS***. Además soporta una gran cantidad de lenguajes y clientes.

## Extras

como material extra dejo el repositorio que arme al llevar un pequeño curso de ***GQL ***en este repositorio encontraremos paso a paso cómo se configura un servidor y el uso de*** GQL ***además de que ya cuenta con una la integración de ***Apollo, ***es importante mencionar que por cada acción que se realiza en el proyecto se cuenta con TAG el cual corresponde a cada paso realizado.
[**OrcaPracticas/GQL**
*Practicas realizadas utilizando graphql. Contribute to OrcaPracticas/GQL development by creating an account on GitHub.*github.com](https://github.com/OrcaPracticas/GQL)

![**Fig 14: Cheat Sheet**](https://cdn-images-1.medium.com/max/5052/1*VN4R0doiFW90i4m9iKuEpw.png)***Fig 14: Cheat Sheet***

## Entradas anteriores
[**Expresiones Regulares**
*Como desarrollador es muy común trabajar con cadenas de texto, lo cual inicialmente puede parecer algo muy sencillo…*medium.com](https://medium.com/@jmz12/expresiones-regulares-215af64acab1)
[**🤔 Entendiendo los ciclos de vida en React**
*En React los componentes que extienden de Component o PureComponent cuentan con el manejo de ciclos de vida, es…*medium.com](https://medium.com/@jmz12/entendiendo-los-ciclos-de-vida-8a70abb3b51a)
[**Usando Clases en JavaScript**
*Actualmente con las nuevas especificaciones EcmaScript 6 se introduce el manejo de clases(class), estas brindan una…*medium.com](https://medium.com/@jmz12/usando-clases-en-javascript-e07f0e25c67d)
[**Callbacks, Promesas y Async/Await, ¡Que alguien me explique!**
*En el desarrollo de sitios o aplicativos web es muy común realizar consultas a Application Programming Interface(API)…*medium.com](https://medium.com/@jmz12/callbacks-promesas-y-async-await-que-alguien-me-explique-514137cb57e2)
[**Patrones de Diseño en JS**
*En este post, se mostraran algunas de las implementaciones de JavaScript mostrando algunos de sus patrones de diseño.*medium.com](https://medium.com/@jmz12/patrones-de-dise%C3%B1o-en-js-43beab8f5756)
