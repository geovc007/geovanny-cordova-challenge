**geovanny-cordova-challenge**<br><br>

**Aplicacion desarrollada para Challenge Nodejs**<br><br>

Se ha implementado una aplicacion con Nodejs, Express, Swagger y Jest para cubrir todos los
ambitos requridos para una aplicacion profesional, se ha trabajado con dos ramas para poder 
realizar verificaciones de Test con QA en ambiente DES en la rama Develop y con pase a 
produccion en la rama MAIN.\\

**La direccion de su Host es:**\
https://geovannycordovachallenge.azurewebsites.net/  \\

Ademas se ha incluido la parte de interfaz de Swagger para probar las APIS en: \
   https://geovannycordovachallenge.azurewebsites.net/api-docs/ \\

Se ha implementado en este repositorio toda la solucion, pero ademas se ha seguido los
principios de CI/CD con Pipelines de Azure y Action de GitHub para entrega y mejora continua.
Toda la aplicacion se encuentra hospedada en la nube de Azure y la base de datos en la 
nube de MongoDB Cloud.\\

**Problema**\
Se quiere reclutar la mayor cantidad de mutantes. Por lo cual te han
contratado a ti para que desarrolles un proyecto que detecte si un humano es 
mutante basándose en su secuencia de ADN. \\

Para eso te ha pedido crear un programa con un método o función con la siguiente firma en java
En donde recibirás como parámetro un array de Strings que representan cada fila de una tabla de 
(NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales 
representa cada base nitrogenada del ADN.\\

Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras 
iguales, de forma oblicua, horizontal o vertical. \
Ejemplo (Caso mutante):\
String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};\\

**APIS REQUERIDAS**\\

 - **POST https://geovannycordovachallenge.azurewebsites.net/api/mutant**\\
   Esta API se encarga de verificar si el ADN es de un humano y un mutante de acuerdo a los requerimientos.\
   Request: {
              "dna":  ["ATGCAA", "CAGTGC", "TTATGT","AGAAGG","ACCCTA", "TCACTT"]
            }
 
 - **GET https://geovannycordovachallenge.azurewebsites.net/api/mutant/stats**\
   Esta API se encarga de llevar el estatus de ingresos de ADN mutantes y ADN humanos, y realiza el calculo de 
   de conversion entre humanos y mutantes\
   Response OK 200: {
                        "count_mutant_dna": 13,
                        "count_human_dna": 6,
                        "ratio": 2.167
                    }
   Response Fail 203: {msg: "Hubo un Error al obtener ADNs"}
 
 - **GET https://geovannycordovachallenge.azurewebsites.net/api/mutant**\
 Esta API nos devuelve todos los ADNs ingresados y verificados en la Aplicacion\
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
  Response Fail 203: {msg: "Hubo un Error al obtener Mutantes"}\\\
 
 
**Desarollado por: Geovanny Córdova.**
