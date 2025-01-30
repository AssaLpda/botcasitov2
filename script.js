document.addEventListener('DOMContentLoaded', function() {
    // Botones
    const cbuButton = document.getElementById('cbuButton');
    const noSaludoButton = document.getElementById('noSaludoButton');
    const editButton = document.getElementById('editButton');
    
    // Campos de usuario
    const username = document.getElementById('username');
    const accountHolder = document.getElementById('accountHolder');
    const cbu = document.getElementById('cbu');
    const alias = document.getElementById('alias');
    
    let isEditing = false;

    // Función para cambiar entre editar y guardar
    function toggleEditMode() {
        const accountHolderLabel = document.querySelector('label[for="accountHolder"]');
        const cbuLabel = document.querySelector('label[for="cbu"]');
        const aliasLabel = document.querySelector('label[for="alias"]');
        
        if (isEditing) {
            // Cambiar a modo de "guardar"
            editButton.innerHTML = '<i class="bi bi-pencil-square"></i> Editar';
            accountHolderLabel.textContent = 'Titular de la cuenta: ' + accountHolder.value;
            cbuLabel.textContent = 'CBU: ' + cbu.value;
            aliasLabel.textContent = 'Alias: ' + alias.value;
            accountHolder.disabled = true;
            cbu.disabled = true;
            alias.disabled = true;
        } else {
            // Cambiar a modo de "editar"
            editButton.innerHTML = '<i class="bi bi-save"></i> Guardar';
            accountHolder.disabled = false;
            cbu.disabled = false;
            alias.disabled = false;
        }

        isEditing = !isEditing;
    }

    // Función para generar un saludo aleatorio sin "crack"
    function getRandomGreeting() {
        const userName = username.value.trim();
        const greetings = [
            `¡Holaaa${userName ? ` ${userName}` : ''}! ¿Cómo estás? 😊`,
            `¡Qué tal${userName ? `, ${userName}` : ''}❤️ ¿Cómo te va?`,
            `¡Buenas buenaas${userName ? `, ${userName}` : ''}, como estas?🙌`,
            `¡Hola${userName ? ` ${userName}` : ''}! ¿Cómo va todo? 😄`,
            `¡Hola${userName ? ` ${userName}` : ''}!  Ahora te paso❤️`,
            `¡Buenas${userName ? `, ${userName}` : ''}! ¿Qué tal todo?`,
            `¡Como estas${userName ? `, ${userName}` : ''}?`,
            `¡Buenas buenaas${userName ? `, ${userName}` : ''}!!🙌`,
            `¡Holaaa${userName ? ` ${userName}` : ''} 😄`,
            `¡Heey${userName ? ` ${userName}` : ''} ¿Cómo estás? 😃`
        ];

        // Seleccionar un saludo aleatorio
        const randomIndex = Math.floor(Math.random() * greetings.length);
        return greetings[randomIndex];
    }

    // Función para generar una advertencia aleatoria
    function getRandomWarningMessage() {
        const warningMessages = [
            "*¡Acordate de verificar el ALIAS o CBU antes de transferir!*⚠️❗️",
            "*No olvides revisar que el CBU o el ALIAS sean correctos antes de realizar la transferencia.*",
            "*Por favor, revisá los datos antes de confirmar la operación✅.*",
            "*Asegúrate de que los datos (ALIAS o CBU) sean correctos antes de proceder*❗️.",
            "Siempre es recomendable verificar que el ALIAS y el CBU estén correctos antes de hacer la transferencia.⚠️",
            "*No te olvides* de comprobar bien los datos antes de enviar el dinero❗️.",
            "Es importante *verificar* que el ALIAS o el CBU sean correctos antes de continuar con la transferencia.",
            "*Revisa* los datos nuevamente para evitar errores en la transferencia.❗",
            "Antes de transferir, confirma que el ALIAS o CBU sean correctos. ⚠️",
            "Verifica que el CBU o el ALIAS estén bien antes de continuar con la operación. ✅",
            "Es clave revisar los datos antes de proceder con la transferencia. ❗️",
            "No olvides chequear que el ALIAS y el CBU sean correctos antes de enviar el dinero. ⚠️
            "Revisa bien los datos (CBU o ALIAS) antes de confirmar la transferencia. ✅",
            "Siempre asegúrate de que el CBU o ALIAS estén bien ingresados antes de hacer la transferencia. ❗️",
            "Asegúrate de revisar el ALIAS o CBU antes de hacer la transferencia⚠️❗️."
        ];

        // Seleccionar un mensaje aleatorio
        const randomIndex = Math.floor(Math.random() * warningMessages.length);
        return warningMessages[randomIndex];
    }

    // Función para mezclar el orden de los datos
    function shuffleData() {
        const data = [
            { label: 'CBU', value: cbu.value },
            { label: 'Titular', value: accountHolder.value },
            { label: 'Alias', value: alias.value }
        ];

        // Mezclar los datos de manera aleatoria
        data.sort(() => Math.random() - 0.5);

        return data;
    }

    // Función para generar un mensaje corto sin saludo y con frases alternas
    function generateMessageWithoutGreeting() {
        // Mensajes alternativos para el inicio del mensaje
        const startMessages = [
            "*Heey, te dejo estos datos para cargar*😀:",
            "Podes enviar aca✅:",
            "Te envié la info⬇️⬇️:",
            "Acá tienes los datos que necesitas:✅",
            "Estos son los datos para que cargues😊:",
            "Dale, te paso los datos a continuación🥳:",
            "Aquí te dejo los datos para que cargues😊:",
            "Mirá, te paso la info que necesitas⬇️:",
            "Aquí tienes los datos que pediste✅:",
            "Te comparto la información para que puedas cargar😉:",
            "Estos son los datos que necesitas cargar📥:",
            "Te dejo los datos a continuación👇:",
            "Aquí van los datos que buscas⬇️:",
            "Acá tenés la información que necesitas✅:",
            "Te paso los datos que me pediste:",
            "Dale ahi te los mando😉",
            "De unaa, acá tenes para cargar",
            "Mirá los datos para cargar a continuación👇:"
        ];

        // Elegir un mensaje aleatorio para comenzar
        const startMessage = startMessages[Math.floor(Math.random() * startMessages.length)];

        // Mezclar los datos
        const data = shuffleData();

        // Generar el mensaje con los datos mezclados
        return `${startMessage}\n\n` +
               `${data[0].label}: ${data[0].value}\n` +
               `${data[1].label}: ${data[1].value}\n` +
               `${data[2].label}: ${data[2].value}\n\n` +
               `${getRandomWarningMessage()}`;
    }

    // Función para generar un mensaje compacto con saludo
    function generateCompactMessage() {
        // Obtener el saludo con nombre de usuario si está presente
        const greeting = getRandomGreeting();

        // Obtener los datos mezclados
        const data = shuffleData();

        // Crear el mensaje con los datos mezclados
        let message = `${greeting}\n\n`;  // Espacio después del saludo
        data.forEach(item => {
            message += `${item.label}: ${item.value}\n`;
        });

        // Añadir un poco de espacio antes de la advertencia
        message += `\n${getRandomWarningMessage()}`;
        return message;
    }

    // Función para generar un mensaje detallado
    function generateDetailedMessage() {
        // Obtener los datos mezclados
        const data = shuffleData();

        // Obtener el saludo con nombre de usuario si está presente
        const greeting = getRandomGreeting();

        return `${greeting}\n\n` +
               `${data[0].label}: ${data[0].value}\n\n` +
               `${data[1].label}: ${data[1].value}\n\n` +
               `${data[2].label}: ${data[2].value}\n\n` +
               `${getRandomWarningMessage()}\n`;  // Espacio antes de la advertencia
    }

    // Función para generar un mensaje sin repetir
    let generatedMessages = [];

    function generateUniqueMessage() {
        const availableMessages = [
            "*Heey, te dejo estos datos para cargar*😀:",
            "Podes enviar aca✅:",
            "Te envié la info⬇️⬇️:",
            "Aca tienes los datos que necesitas:✅",
            "Estos son los datos para que cargues😊:",
            "Dale, te paso los datos a continuación🥳:"
        ];

        // Seleccionar un mensaje aleatorio
        const randomIndex = Math.floor(Math.random() * availableMessages.length);
        const selectedMessage = availableMessages[randomIndex];

        // Si ya se ha utilizado este mensaje, volvemos a intentar
        if (generatedMessages.includes(selectedMessage)) {
            return generateUniqueMessage();
        }

        // Agregar el mensaje al historial
        generatedMessages.push(selectedMessage);

        // Si todos los mensajes ya han sido generados, reiniciamos el historial
        if (generatedMessages.length === availableMessages.length) {
            generatedMessages = [];
        }

        return selectedMessage;
    }

    // Evento para el botón "CBU"
    cbuButton.addEventListener('click', function() {
        // Obtener el nombre de usuario (puede estar vacío)
        const userName = username.value.trim();

        // Decidir si mostrar un mensaje corto o uno detallado aleatoriamente
        let message;
        if (Math.random() < 0.5) {
            // 50% de probabilidad de mensaje compacto
            message = generateCompactMessage();
        } else {
            // 50% de probabilidad de mensaje detallado
            message = generateDetailedMessage();
        }

        // Mostrar el mensaje en la vista previa
        document.getElementById('previewText').innerText = message;

        // Crear un elemento textarea temporal para copiar el texto
        const tempInput = document.createElement('textarea');
        tempInput.value = message;  // Usar el mensaje generado con saltos de línea reales
        document.body.appendChild(tempInput);
        
        // Seleccionar el texto
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles
        
        // Copiar el texto al portapapeles
        document.execCommand('copy');
        
        // Eliminar el textarea temporal del DOM
        document.body.removeChild(tempInput);

        // Limpiar el campo "Usuario" (si lo deseas, puedes dejarlo vacío o eliminar esta línea)
        username.value = '';
    });

    // Evento para el botón "Sin Saludo"
    noSaludoButton.addEventListener('click', function() {
        // Generar mensaje sin saludo y sin repetir
        const message = generateMessageWithoutGreeting();

        // Mostrar el mensaje en la vista previa
        document.getElementById('previewText').innerText = message;

        // Crear un elemento textarea temporal para copiar el texto
        const tempInput = document.createElement('textarea');
        tempInput.value = message;  // Usar el mensaje generado con saltos de línea reales
        document.body.appendChild(tempInput);
        
        // Seleccionar el texto
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles
        
        // Copiar el texto al portapapeles
        document.execCommand('copy');
        
        // Eliminar el textarea temporal del DOM
        document.body.removeChild(tempInput);

        // Limpiar el campo "Usuario" (si lo deseas, puedes dejarlo vacío o eliminar esta línea)
        username.value = '';
    });

    // Evento para el botón "Editar/Guardar"
    editButton.addEventListener('click', function() {
        toggleEditMode();
    });
});
