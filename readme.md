# Aplicación de Creación de Notas con Autenticación Basada en JSON Web Token (JWT)

## Descripción

Esta es una aplicación para la creación, edición y eliminación de notas que emplea la Arquitectura Limpia (Clean Architecture). La aplicación está diseñada para ser escalable, mantenible y fácil de entender. Utiliza JSON Web Tokens (JWT) para la autenticación y autorización de usuarios.

## Características

- Registro de usuarios.
- Autenticación de usuarios con JWT.
- Crear, leer, actualizar y eliminar notas.
- Interfaz de usuario amigable.
- Separación clara de responsabilidades siguiendo la Arquitectura Limpia.

## Estructura del Proyecto

La aplicación sigue la Arquitectura Limpia, que se divide en varias capas. A continuación, se describe brevemente cada capa:

1. **Capa de Dominio (Domain):**

   - Contiene las entidades de negocio principales de la aplicación (e.g., `User`, `Note`).
   - Define las reglas de negocio y la lógica central de la aplicación.

2. **Capa de Casos de Uso (Use Cases):**

   - Contiene los casos de uso de la aplicación, que son las operaciones de negocio que la aplicación soporta (e.g., `CreateNote`, `GetNotes`, `UpdateNote`, `DeleteNote`).
   - Orquesta la interacción entre las entidades y las interfaces de los repositorios.

3. **Capa de Presentación (Presentation):**

   - Contiene los adaptadores que convierten los datos entre las capas de dominio y las capas externas (e.g., controladores, gateways, presenters).
   - Define los repositorios que interactúan con las fuentes de datos.

4. **Capa de Infraestructura (Infrastructure):**
   - Contiene los detalles de implementación específicos de la infraestructura (e.g., bases de datos, frameworks web, servicios externos).
   - Implementa las interfaces definidas en los adaptadores.

## Instalación y Configuración del Backend

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/notas-app.git
   cd notas-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

   ```env
   PORT=3000
   JWT_SECRET=tu_secreto_jwt
   DATABASE_URL=mongodb://localhost:27017/notas
   ```

4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Instalación y Configuración del Frontend con Vite

1. Clona el repositorio del frontend:

   ```bash
   git clone https://github.com/tuusuario/notas-app-frontend.git
   cd notas-app-frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto y especifica la URL de la API backend:

   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso

### Endpoints de Autenticación

- **Registro de usuario:**

  ```http
  POST /api/auth/register
  Body:
  {
      "username": "example",
      "password": "password123"
  }
  ```

- **Inicio de sesión:**
  ```http
  POST /api/auth/login
  Body:
  {
      "username": "example",
      "password": "password123"
  }
  ```

### Endpoints de Notas

- **Crear una nota:**

  ```http
  POST /api/notes
  Headers:
  {
      "Authorization": "Bearer <tu_jwt_token>"
  }
  Body:
  {
      "title": "Mi Nota",
      "content": "Este es el contenido de mi nota."
  }
  ```

- **Obtener todas las notas:**

  ```http
  GET /api/notes
  Headers:
  {
      "Authorization": "Bearer <tu_jwt_token>"
  }
  ```

- **Actualizar una nota:**

  ```http
  PUT /api/notes/:id
  Headers:
  {
      "Authorization": "Bearer <tu_jwt_token>"
  }
  Body:
  {
      "title": "Mi Nota Actualizada",
      "content": "Este es el contenido actualizado de mi nota."
  }
  ```

- **Eliminar una nota:**
  ```http
  DELETE /api/notes/:id
  Headers:
  {
      "Authorization": "Bearer <tu_jwt_token>"
  }
  ```

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Este README proporciona una guía completa para instalar, configurar y utilizar la aplicación de notas con autenticación basada en JWT, siguiendo la Arquitectura Limpia y utilizando Vite para el frontend.
