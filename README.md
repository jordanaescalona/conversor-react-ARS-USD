# Conversor de Pesos Argentinos a Dólares

Este es un proyecto creado con React que permite convertir pesos argentinos (ARS) a dólares estadounidenses (USD) mediante el consumo de la API de [Exchange Rate API](https://www.exchangerate-api.com/).

## Características

- Conversión de ARS a USD en tiempo real.
- Interfaz intuitiva y fácil de usar.
- Actualización automática de los tipos de cambio mediante la API de Exchange Rate.

## Tecnologías Utilizadas

- **React**: Framework de JavaScript para construir la interfaz de usuario.
- **Exchange Rate API**: API para obtener los tipos de cambio actuales entre múltiples monedas.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jordanaescalona/conversor-react-ARS-USD.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd conversor-react-ARS-USD
    ```
3. Instala todas las dependencias del proyecto:
    ```bash
    npm install 
    ```
4. Crea un archivo .env en la reíz del proyecto y agrega tu clave de API:
    ```txt
    REACT_APP_API_KEY=tu_api_key_de_exchange_rate
    ```
5. Inicia el servidor de desarrollo:
    ```bash
    npm start
    ```