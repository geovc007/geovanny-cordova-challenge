**geovanny-cordova-challenge**<br><br>

**Aplicacion desarrollada para Challenge Nodejs**<br><br>

Se ha implementado una aplicacion con Nodejs, Express, Swagger y Jest para cubrir todos los
ambitos requridos para una aplicacion profesional, se ha trabajado con dos ramas para poder 
realizar verificaciones de Test con QA en ambiente DES en la rama Develop y con pase a 
produccion en la rama MAIN.<br><br>

**La direccion de su Host es:**<br>
https://geovannycordovachallenge.azurewebsites.net/  <br><br>

Ademas se ha incluido la parte de interfaz de Swagger para probar las APIS en: <br>
   https://geovannycordovachallenge.azurewebsites.net/api-docs/ <br><br>

Se ha implementado en este repositorio toda la solucion, pero ademas se ha seguido los
principios de CI/CD con Pipelines de Azure y Action de GitHub para entrega y mejora continua.
Toda la aplicacion se encuentra hospedada en la nube de Azure y la base de datos en la 
nube de MongoDB Cloud.<br><br>

**Problema**<br>
Se quiere reclutar la mayor cantidad de mutantes. Por lo cual te han
contratado a ti para que desarrolles un proyecto que detecte si un humano es 
mutante basándose en su secuencia de ADN. <br><br>

Para eso te ha pedido crear un programa con un método o función con la siguiente firma en java
En donde recibirás como parámetro un array de Strings que representan cada fila de una tabla de 
(NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales 
representa cada base nitrogenada del ADN.<br><br>

Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras 
iguales, de forma oblicua, horizontal o vertical. <br>
Ejemplo (Caso mutante):<br>
String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};<br>

**APIS REQUERIDAS**<br><br>

 - **POST https://geovannycordovachallenge.azurewebsites.net/api/mutant**<br>
   Esta API se encarga de verificar si el ADN es de un humano y un mutante de acuerdo a los requerimientos.<br>
   Request: {
              "dna":  ["ATGCAA", "CAGTGC", "TTATGT","AGAAGG","ACCCTA", "TCACTT"]
            }
         <br>
  Response OK 200: {"msg": "El Adn es Mutante"}
 <br>
  Reponse Fail 403: {"msg": "El Adn es Humano"}
 <br><br>
 - **GET https://geovannycordovachallenge.azurewebsites.net/api/mutant/stats**<br>
   Esta API se encarga de llevar el estatus de ingresos de ADN mutantes y ADN humanos, y realiza el calculo de 
   de conversion entre humanos y mutantes<br>
   Response OK 200: {
                        "count_mutant_dna": 13,
                        "count_human_dna": 6,
                        "ratio": 2.167
                    }
                    <br>
   Response Fail 403: {msg: "Hubo un Error al obtener ADNs"}
 <br><br>
 - **GET https://geovannycordovachallenge.azurewebsites.net/api/mutant**<br>
 Esta API nos devuelve todos los ADNs ingresados y verificados en la Aplicacion<br>
   Response 200 OK : {
                        "_id": "63390683933c4f9173716cac",
                        "dna": [
                            "ATGCGA",
                            "CAGTGC",
                            "TTATGT",
                            "AGAAGG",
                            "CCCCTA",
                            "TCACTG"
                        ],
                        "verify": false,
                        "__v": 0
                     }
                     <br>
  Response Fail 403: {msg: "Hubo un Error al obtener Mutantes"}
 <br><br><br>
 
**Desarollado por: Geovanny Córdova.**
