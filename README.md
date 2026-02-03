```md
# Prueba Técnica – Task Manager App

Aplicación móvil híbrida desarrollada con **Ionic + Angular + TypeScript** que permite la gestión de tareas.
Forma parte de una prueba técnica para evaluar el desarrollo frontend mobile, arquitectura y buenas prácticas.

---

## 🚀 Instalación y ejecución

### Requisitos
- Node.js
- Ionic CLI

### Pasos para ejecutar
```bash
npm install
ionic serve
```

📱 Funcionalidades

- Listado de tareas obtenidas desde API pública

- Vista de detalle de tarea

- Creación de nuevas tareas con validaciones

- Cambio de estado (completada / pendiente)

- Persistencia local usando LocalStorage

- Modo oscuro (Dark Mode)

- Manejo de estados: loading, sin resultados y error

- Navegación entre vistas

🧠 Decisiones técnicas

- Ionic + Angular para desarrollo mobile híbrido

- Servicios para encapsular lógica de negocio

- Uso de Reactive Forms para validaciones

- Persistencia local mediante LocalStorage

- Arquitectura modular (pages, services, models)

- Dark Mode gestionado a nivel global

- Uso de interfaces para tipado de datos

- UI optimizada para experiencia mobile


🧪 Testing

- Se incluye un test unitario básico para validar la lógica de negocio del servicio de tareas utilizando TestBed y HttpClientTestingModule.

⚠️ Limitaciones

- API pública sin persistencia real

- No sincronización avanzada offline/online

🔮 Mejoras futuras

- Sincronización con backend real

- Autenticación de usuarios

- Mayor cobertura de tests

- Manejo avanzado de modo offline

- Autenticación de usuarios

Mayor cobertura de tests

Manejo avanzado de modo offline
