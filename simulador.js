document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const employees = document.getElementById('employees').value;
    const resultText = document.getElementById('resultText');
    const kitDigitalRecommendations = document.getElementById('kitDigitalRecommendations');
    const kitConsultingRecommendations = document.getElementById('kitConsultingRecommendations');
    const kitConsultingWarning = document.getElementById('kitConsultingWarning');
    const downloadButton = document.getElementById('downloadResults');

    let kitDigitalAmount = 0;
    let kitConsultingAmount = 0;
    let kitDigitalRecs = [];
    let kitConsultingRecs = [];
    let resultsText = '';

    // Lógica para calcular el monto de la ayuda dependiendo del número de empleados
    switch (employees) {
        case '1-2':
            kitDigitalAmount = 2000;
            kitConsultingAmount = 12000;
            kitDigitalRecs = [
                'Mejorar tu página web.',
                'Gestionar tus redes sociales.',
                'Reforzar la ciberseguridad.'
            ];
            kitConsultingRecs = [
                'Asesoramiento sobre estrategia digital.',
                'Plan de transformación tecnológica.',
                'Consultoría en ciberseguridad avanzada.'
            ];
            break;
        case '3-9':
            kitDigitalAmount = 6000;
            kitConsultingAmount = 12000;
            kitDigitalRecs = [
                'Desarrollar un plan de marketing digital.',
                'Implementar un sistema de análisis de datos básico.',
                'Ampliar la gestión de clientes mediante un CRM.'
            ];
            kitConsultingRecs = [
                'Consultoría en análisis de datos.',
                'Asesoramiento para marketing digital.',
                'Desarrollo de un plan de ciberseguridad.'
            ];
            break;
        case '10-49':
            kitDigitalAmount = 12000;
            kitConsultingAmount = 18000;
            kitDigitalRecs = [
                'Generar un Marketplace para tu negocio.',
                'Contratar un asesor en Inteligencia Artificial.',
                'Mejorar la seguridad digital mediante un plan de ciberseguridad avanzado.'
            ];
            kitConsultingRecs = [
                'Asesoramiento en transformación digital.',
                'Consultoría en estrategia de ventas online.',
                'Planificación de seguridad en la nube.'
            ];
            break;
        case '50-99':
            kitDigitalAmount = 18000;
            kitConsultingAmount = 24000;
            kitDigitalRecs = [
                'Optimizar tus ventas digitales con inteligencia artificial.',
                'Ampliar tu plataforma online.',
                'Implementar un sistema avanzado de análisis de datos.'
            ];
            kitConsultingRecs = [
                'Consultoría sobre inteligencia artificial.',
                'Asesoramiento en optimización de procesos empresariales.',
                'Desarrollo de soluciones de Big Data.'
            ];
            break;
        case '100-249':
            kitDigitalAmount = 24000;
            kitConsultingAmount = 24000;
            kitDigitalRecs = [
                'Implantar una estrategia de transformación digital integral.',
                'Implementar ciberseguridad avanzada con preparación para la certificación.',
                'Desarrollar un plan de análisis de datos avanzado.'
            ];
            kitConsultingRecs = [
                'Consultoría en procesos de digitalización integral.',
                'Planificación de infraestructura de TI avanzada.',
                'Asesoramiento en certificación de ciberseguridad.'
            ];
            break;
        default:
            kitDigitalAmount = 0;
            kitConsultingAmount = 0;
            kitDigitalRecs = [];
            kitConsultingRecs = [];
    }

    // Mostrar los resultados
    resultText.innerHTML = `
        <p><strong>Kit Digital:</strong> Hasta ${kitDigitalAmount} €.</p>
        <p><strong>Kit Consulting:</strong> Hasta ${kitConsultingAmount} €.</p>
    `;

    // Mostrar recomendaciones para Kit Digital
    kitDigitalRecommendations.innerHTML = kitDigitalRecs.map(rec => `<li>${rec}</li>`).join('');

    // Mostrar recomendaciones para Kit Consulting
    kitConsultingRecommendations.innerHTML = kitConsultingRecs.map(rec => `<li>${rec}</li>`).join('');

    // Mostrar la advertencia del Kit Consulting
    kitConsultingWarning.style.display = 'block';  // Aseguramos que la advertencia esté visible

    // Preparar texto para descarga
    resultsText = `
        Kit Digital: Hasta ${kitDigitalAmount} €
        Kit Consulting: Hasta ${kitConsultingAmount} €
        
        Recomendaciones de proyectos - Kit Digital:
        ${kitDigitalRecs.join('\n')}
        
        Recomendaciones de proyectos - Kit Consulting:
        ${kitConsultingRecs.join('\n')}
        
        Advertencia: El importe máximo que se destinará a cada uno de los servicios prestados en el Kit Consulting será de 6.000 €.
    `;

    // Mostrar el botón de descarga
    downloadButton.style.display = 'block';

    // Función para descargar los resultados
    downloadButton.onclick = function() {
        const blob = new Blob([resultsText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resultados_kits.txt';
        link.click();
    };
});
