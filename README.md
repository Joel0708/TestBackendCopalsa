Test Backend NestJS – Nivel 1
Este proyecto corresponde a la Prueba Técnica – Nivel 1.
El objetivo es implementar dos endpoints en NestJS que permitan registrar y listar tareas en una base de datos SQLite, utilicé TypeORM como ORM.

  ## Instalación y ejecución
1. 	Clonar el repositorio: git clone <URL-del-repo-en-GitLab> cd test-backend
2. 	Instalar dependencias: npm install
3. 	Levantar el servidor en modo desarrollo: npm run start:dev
El servidor quedará disponible en http://localhost:3000

  ## Endpoints
Crear tarea
• 	Método: POST
• 	Ruta: /crear-tareas
• 	Body (JSON): { "titulo": "Aprender Nest", "descripcion": "Repasar módulos" }
• 	Respuesta: { "mensaje": "Tarea registrada", "id": 1 }


Listar tareas
• 	Método: GET 
• 	Ruta: /listar-tareas
• 	Respuesta: [ { "id": 1, "titulo": "Aprender Nest", "descripcion": "Repasar módulos", "fechaCreacion": "2025-11-29T11:15:00.000Z" } ]

## Base de datos
Se utiliza SQLite como base local.
El archivo  se genera automáticamente en la raíz del proyecto al iniciar la aplicación.
Modelo de la tabla
CREATE TABLE tareas ( id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT NOT NULL, descripcion TEXT, fechaCreacion TEXT DEFAULT CURRENT_TIMESTAMP );

 ## Pruebas automáticas
El proyecto incluye pruebas e2e con Jest + Supertest.
Ejecutar: npm run test:e2e
Resultados esperados:
• 	/crear-tareas responde con 201 Created y devuelve el id.
• 	/listar-tareas responde con 200 OK y devuelve un arreglo de tareas.

 ## Entrega
• 	Proyecto creado con NestJS.
• 	Módulo  implementado.
• 	SQLite configurado con TypeORM.
• 	Endpoints /crear-tareas y /listar-tareas funcionando.
• 	Validación de título aplicada.
• 	Respuestas JSON claras y entendibles.
## Stay in touch

- Author - [Joel Paez]

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
