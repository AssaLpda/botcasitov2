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

    function toggleEditMode() {
        const accountHolderLabel = document.querySelector('label[for="accountHolder"]');
        const cbuLabel = document.querySelector('label[for="cbu"]');
        const aliasLabel = document.querySelector('label[for="alias"]');
        
        if (isEditing) {
            editButton.innerHTML = '<i class="bi bi-pencil-square"></i> Editar';
            accountHolderLabel.textContent = 'Titular de la cuenta: ' + accountHolder.value;
            cbuLabel.textContent = 'CBU: ' + cbu.value;
            aliasLabel.textContent = 'Alias: ' + alias.value;
            accountHolder.disabled = true;
            cbu.disabled = true;
            alias.disabled = true;
        } else {
            editButton.innerHTML = '<i class="bi bi-save"></i> Guardar';
            accountHolder.disabled = false;
            cbu.disabled = false;
            alias.disabled = false;
        }

        isEditing = !isEditing;
    }

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
            `¡Que ondaa${userName ? ` ${userName}` : ''} 😄`,
            `¡Holiis${userName ? ` ${userName}` : ''}! Te enviee ❤️`,
            `¡Holaaa${userName ? ` ${userName}` : ''}! Te dejo los datos abajo⬇️ `,
            `¡Buenaas${userName ? ` ${userName}` : ''}! Te dejo info abajo `,
            `¡Como estas${userName ? ` ${userName}` : ''}? Te envio la info `,
            `¡Holaaa${userName ? ` ${userName}` : ''}! Podes enviar aca✅ `,
            `¡Holaaa${userName ? ` ${userName}` : ''}! Te paso los datos para tu carga 😊`,
            `¡Buenaas${userName ? ` ${userName}` : ''}! Ahora te paso la data✅ `,
            `¡Heey${userName ? ` ${userName}` : ''} ¿Cómo estás? 😃`
        ];

        const randomIndex = Math.floor(Math.random() * greetings.length);
        return greetings[randomIndex];
    }

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
            "No olvides chequear que el ALIAS y el CBU sean correctos antes de enviar el dinero. ⚠️",
            "Revisa bien los datos (CBU o ALIAS) antes de confirmar la transferencia. ✅",
            "Siempre asegúrate de que el CBU o ALIAS estén bien ingresados antes de hacer la transferencia. ❗️",
            "Asegúrate de revisar el ALIAS o CBU antes de hacer la transferencia⚠️❗️."
        ];

        const randomIndex = Math.floor(Math.random() * warningMessages.length);
        return warningMessages[randomIndex];
    }

    function shuffleData() {
        const data = [
            { label: 'CBU', value: cbu.value },
            { label: 'Titular', value: accountHolder.value },
            { label: 'Alias', value: alias.value }
        ];

        data.sort(() => Math.random() - 0.5);
        return data;
    }

    // Modificación: Compactar el formato, sin saltos innecesarios.
    function generateCompactMessage() {
        const greeting = getRandomGreeting();
        const data = shuffleData();

        // Crear el mensaje con los datos compactos (sin espacios excesivos)
        let message = `${greeting}\n\n`;
        data.forEach(item => {
            message += `${item.label}: ${item.value}\n`;  // No se añaden saltos adicionales
        });

        message += `\n${getRandomWarningMessage()}`;
        return message.trim();  // Trim para eliminar posibles saltos de línea extra al final
    }

    // Modificación: Compactar el formato del mensaje detallado.
    function generateDetailedMessage() {
        const data = shuffleData();
        const greeting = getRandomGreeting();

        return `${greeting}\n\n` +
               `${data[0].label}: ${data[0].value}\n` +
               `${data[1].label}: ${data[1].value}\n` +
               `${data[2].label}: ${data[2].value}\n\n` +
               `${getRandomWarningMessage()}`.trim();
    }

    function generateMessageWithoutGreeting() {
        const startMessages = [
            "*Heey, te dejo estos datos para cargar*😀:",
            "Podes enviar aca✅:",
            "Te envié la info⬇️⬇️:",
            "Acá tienes los datos que necesitas:✅",
            "Estos son los datos para que cargues😊:",
            "Aquí tienes la información para cargar📥:",
            "Te paso los datos que necesitas👉📋:",
            "¡Todo listo! Acá están los datos que pediste😊:",
            "Aquí tienes los detalles para cargar:",
            "Ahi te mando, te los dejo por aquí👇:",
            "Todo en orden? Acá están los datos✅:",
            "Te envie los datos justo aquí:",
            "Ahi te paso😊",
            "Te enviee😊",
            "¡Listo! Te paso la info a continuación📩:",
            "A continuación te dejo la información que necesitas:",
            "Aquí están los datos para que puedas cargarlos✅:",
            "Dale, te paso los datos a continuación🥳:"
        ];

        const startMessage = startMessages[Math.floor(Math.random() * startMessages.length)];
        const data = shuffleData();

        return `${startMessage}\n\n` +
               `${data[0].label}: ${data[0].value}\n` +
               `${data[1].label}: ${data[1].value}\n` +
               `${data[2].label}: ${data[2].value}\n\n` +
               `${getRandomWarningMessage()}`;
    }

    cbuButton.addEventListener('click', async function() {
        let message;
        if (Math.random() < 0.5) {
            message = generateCompactMessage();
        } else {
            message = generateDetailedMessage();
        }

        document.getElementById('previewText').innerText = message;

        try {
            await navigator.clipboard.writeText(message);
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }

        username.value = '';
    });

    noSaludoButton.addEventListener('click', async function() {
        const message = generateMessageWithoutGreeting();

        document.getElementById('previewText').innerText = message;

        try {
            await navigator.clipboard.writeText(message);
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }

        username.value = '';
    });

    editButton.addEventListener('click', function() {
        toggleEditMode();
    });
});