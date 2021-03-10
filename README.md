# mercadolibre-front-JuanCamiloCruz
Proyecto prueba front-end Mercado libre Juan Camilo Cruz Franco


ejecutar npm install para instalacion de modulos

para iniciar el proyecto ejecutar npm start

y si presenta problemas en alguna instalacion revisar si el .babelrc esta en el proyecto y si no crear .babelrc en la raiz y llenarlo con el siguiente codigo 

{
    "presets": [
        [
            "@babel/preset-env", {
              "targets": {
                "node": "current"
              }
            }
          ],
        "@babel/react"
    ]
}

si presenta errores de versionamiento elminar la carpeta node_modules y ejecutar npm install