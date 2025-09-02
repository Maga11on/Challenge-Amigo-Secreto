# 🎉 Amigo Secreto - Lista de Amigos

Este proyecto es una aplicación sencilla en **JavaScript** que permite:

- Agregar nombres de amigos a una lista.
- Validar que los nombres sean correctos (solo letras).
- Evitar duplicados.
- Mostrar la lista de amigos en pantalla.
- Realizar un sorteo para elegir un "amigo secreto" de manera aleatoria.

---

## 🚀 Tecnologías utilizadas
- **JavaScript** (lógica principal)
- **HTML** (estructura de la página)
- **CSS** (estilos, opcional)

---

## ⚙️ Instalación y ejecución
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. ¡Listo! Ya puedes agregar amigos y realizar el sorteo.

---

## 📂 Estructura del proyecto
```
amigo-secreto/
│── index.html     # Interfaz principal
│── style.css      # Opcional: estilos personalizados
│── script.js      # Contiene la lógica en JavaScript
│── README.md      # Documentación del proyecto
```

---

## 🧑‍💻 Funcionalidades principales
- **Agregar amigo:** Inserta un nombre en un campo de texto y lo añade a la lista si es válido.
- **Validación:** Solo se permiten letras y evita nombres duplicados.
- **Actualizar lista:** Muestra en pantalla todos los amigos agregados.
- **Mostrar amigos en consola:** Recorre el array y los imprime en la consola.
- **Sortear amigo secreto:** Selecciona un nombre aleatorio de la lista.

---

## 📸 Ejemplo de uso
```html
<input type="text" id="amigo" placeholder="Escribe un nombre">
<button onclick="agregarAmigo()">Agregar</button>
<button onclick="sortearAmigo()">Sortear</button>

<ul id="listaAmigos"></ul>
```

1. Escribe el nombre de un amigo en el campo de texto.  
2. Presiona el botón **Agregar**.  
3. Cuando tengas varios amigos en la lista, presiona **Sortear Amigo**.  
4. La aplicación mostrará quién es tu **amigo secreto**.  

---

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas!  
Si deseas mejorar el proyecto, puedes hacer un **fork**, crear una nueva rama y luego enviar un **pull request**.

---

## 📄 Licencia
Este proyecto está bajo la licencia MIT.  
Puedes usarlo, modificarlo y compartirlo libremente.  

---
## ✍ Autor
Alberto Magallón Cuéllar   [ 1/09/2025 ]
