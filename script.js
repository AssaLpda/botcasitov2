document.addEventListener('DOMContentLoaded', function() {
    // Botones
    const cbuButton = document.getElementById('cbuButton');
    const noSaludoButton = document.getElementById('noSaludoButton');  // Nuevo botón Sin saludo
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
            // Cambiar a modo de "guardar" (ahora guarda los cambios y deshabilita los campos)
            editButton.innerHTML = '<i class="bi bi-pencil-square"></i> Editar';

            // Guardar los nuevos valores de los inputs en los labels
            accountHolderLabel.textContent = 'Titular de la cuenta: ' + accountHolder.value;
            cbuLabel.textContent = 'CBU: ' + cbu.value;
            aliasLabel.textContent = 'Alias: ' + alias.value;

            // Deshabilitar los campos nuevamente
            accountHolder.disabled = true;
            cbu.disabled = true;
            alias.disabled = true;
        } else {
            // Cambiar a modo de "editar" (ahora habilita los campos para que se pueda editar)
            editButton.innerHTML = '<i class="bi bi-save"></i> Guardar';

            // Habilitar los campos para editar
            accountHolder.disabled = false;
            cbu.disabled = false;
            alias.disabled = false;
        }

        // Alternar el estado de edición
        isEditing = !isEditing;
    }

    // Función para generar un saludo aleatorio sin "crack"
    function getRandomGreeting() {
        const userName = username.value.trim(); // Obtener el nombre del usuario
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
            `¡Heey${userName ? ` ${userName}` : ''} ¿Cómo estás? 😃`,
            `¡Buenaas${userName ? ` ${userName}` : ''} Te mandoo 😃`,
            `¡Hola Holaa${userName ? ` ${userName}` : ''} Ahi te envie`,
            `¡Hola, buenaas${userName ? ` ${userName}` : ''} Ahora te envio los datos 😃`,
            `¡Que taal?${userName ? ` ${userName}` : ''} Te envie info✅ `,
            `Como estas?${userName ? ` ${userName}` : ''} Ahora te mando `,
            `¡Holaaa ${userName ? ` ${userName}` : ''} Ahi te mando  🙌`,
            `¡Buenaas buenaaas! ${userName ? ` ${userName}` : ''} ¿Cómo te encuentras? ♥`
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
            "Asegúrate de revisar el ALIAS o CBU antes de hacer la transferencia⚠️❗️.",
            "No olvides verificar que el CBU o el ALIAS sean correctos antes de proceder✅.",
            "Revisa bien los datos antes de confirmar la operación❗️.",
            "Te sugiero verificar que el ALIAS o CBU estén correctos antes de continuar⚠️.",
            "Antes de transferir, asegurate de que los datos (ALIAS o CBU) sean los correctos✅.",
            "Verifica nuevamente que el ALIAS o CBU coincidan antes de completar la transferencia❗️.",
            "Es recomendable que compruebes los datos (ALIAS o CBU) antes de realizar la operación.⚠️",
            "No olvides comprobar los datos antes de proceder con el envío de dinero❗️.",
            "Revisa cuidadosamente que los datos sean correctos antes de continuar con la transferencia⚠️.",
            "Asegúrate de que el ALIAS y el CBU sean correctos antes de finalizar la operación✅."
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
            "Aca tienes los datos que necesitas:✅",
            "Estos son los datos para que cargues😊:",
            "Dale, te paso los datos a continuación🥳:",
            "Dale, Envia aca porfa🥳:",
            "¡Hola! A continuación te dejo los datos para que los cargues.",
            "¡Ey! Te dejo los datos para que cargues ahora.😊",
            "Que onda!! Aquí están los detalles para que  cargues. ¡Cualquier duda, me avisas!",
            "¡Hola! A continuación te paso los detalles para que puedas completar tu carga.",
            "Aca abajo tenes toda la info para cargar!⬇️⬇️",
            "Dale, ahora te envio la info✅"
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
        let message = `${greeting}\n\n\n`;
        data.forEach(item => {
            message += `${item.label}: ${item.value}\n`;
        });

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
               `\n\n` +
               `${data[0].label}: ${data[0].value}\n\n` +
               `${data[1].label}: ${data[1].value}\n\n` +
               `${data[2].label}: ${data[2].value}\n\n` +
               `${getRandomWarningMessage()}\n`;
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

        // Copiar al portapapeles usando la API moderna
        navigator.clipboard.writeText(message).then(function() {
            console.log('Mensaje copiado al portapapeles');
        }).catch(function(err) {
            console.error('Error al copiar al portapapeles: ', err);
        });

        // Limpiar el campo "Usuario" (si lo deseas, puedes dejarlo vacío o eliminar esta línea)
        username.value = '';
    });

    // Evento para el botón "Sin Saludo"
    noSaludoButton.addEventListener('click', function() {
        // Generar mensaje sin saludo
        const message = generateMessageWithoutGreeting();

        // Mostrar el mensaje en la vista previa
        document.getElementById('previewText').innerText = message;

        // Copiar al portapapeles usando la API moderna
        navigator.clipboard.writeText(message).then(function() {
            console.log('Mensaje copiado al portapapeles');
        }).catch(function(err) {
            console.error('Error al copiar al portapapeles: ', err);
        });

        // Limpiar el campo "Usuario" (si lo deseas, puedes dejarlo vacío o eliminar esta línea)
        username.value = '';
    });

    // Evento para el botón "Editar/Guardar"
    editButton.addEventListener('click', function() {
        toggleEditMode();
    });

    // Función para agregar un mensaje al chat
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'bot' ? 'bot-message' : 'user-message');
        messageElement.classList.add('p-2', 'rounded');
        messageElement.textContent = message;
        document.getElementById('chatBox').appendChild(messageElement);
        document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight;
    }
});

