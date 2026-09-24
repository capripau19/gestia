// ==========================================
// GESTIA - SISTEMA DE USUARIOS
// Versión de prueba
// ==========================================


// REGISTRO DE USUARIO
const registroForm = document.querySelector("#registroForm");

if (registroForm) {

    registroForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.querySelector("#nombre").value.trim();
        const empresa = document.querySelector("#empresa").value.trim();
        const nif = document.querySelector("#nif").value.trim();
        const telefono = document.querySelector("#telefono").value.trim();
        const email = document.querySelector("#email").value.trim().toLowerCase();
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirm-password").value;


        // Comprobar que las contraseñas coinciden

        if (password !== confirmPassword) {

            alert("Las contraseñas no coinciden.");

            return;
        }


        // Buscar usuarios existentes

        const usuarios = JSON.parse(
            localStorage.getItem("gestiaUsuarios")
        ) || [];


        // Comprobar si el correo ya existe

        const usuarioExistente = usuarios.find(
            usuario => usuario.email === email
        );


        if (usuarioExistente) {

            alert("Ya existe una cuenta con este correo electrónico.");

            return;
        }


        // Crear nuevo usuario

        const nuevoUsuario = {

            nombre: nombre,

            empresa: empresa,

            nif: nif,

            telefono: telefono,

            email: email,

            password: password

        };


        // Guardar usuario

        usuarios.push(nuevoUsuario);

        localStorage.setItem(
            "gestiaUsuarios",
            JSON.stringify(usuarios)
        );


        alert("¡Cuenta creada correctamente!");


        // Ir al inicio de sesión

        window.location.href = "login.html";

    });

}



// INICIO DE SESIÓN

const loginForm = document.querySelector("#loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email = document
            .querySelector("#email")
            .value
            .trim()
            .toLowerCase();


        const password = document
            .querySelector("#password")
            .value;


        const usuarios = JSON.parse(
            localStorage.getItem("gestiaUsuarios")
        ) || [];


        const usuario = usuarios.find(
            usuario =>
                usuario.email === email &&
                usuario.password === password
        );


        if (!usuario) {

            alert("El correo electrónico o la contraseña no son correctos.");

            return;
        }


        // Guardar sesión

        localStorage.setItem(
            "gestiaUsuarioActual",
            JSON.stringify(usuario)
        );


        // Entrar al panel

        window.location.href = "dashboard.html";

    });

}