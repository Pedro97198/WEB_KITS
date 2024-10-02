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
                'Desarrollo de 5CM Estandar.',
                'Proyecto BC - BI',
                'Proyecto BC y Extensión'
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
                'Desarrollo de 5CM Estandar.',
                'Proyecto BC - BI',
                'Proyecto BC y Extensión'
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
                'Desarrollo de 5CM Estandar.',
                'Proyecto BC - BI',
                'Proyecto BC y Extensión'
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
                'Desarrollo de 5CM Estandar.',
                'Proyecto BC - BI',
                'Proyecto BC y Extensión'
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
                'Desarrollo de 5CM Estandar.',
                'Proyecto BC - BI',
                'Proyecto BC y Extensión'
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

    // Función para convertir el texto "Desarrollo de 5CM Estandar." en un enlace
    function makeLink(text) {
        if (text === 'Desarrollo de 5CM Estandar.') {
            return 'Desarrollo de 5CM Estandar.';
        }
        return text;
    }

    // Mostrar los resultados
    resultText.innerHTML = `
        <p><strong>Kit Digital:</strong> Hasta ${kitDigitalAmount} €.</p>
        <p><strong>Kit Consulting:</strong> Hasta ${kitConsultingAmount} €.</p>
    `;

    // Mostrar recomendaciones para Kit Digital (convertir "Desarrollo de 5CM Estandar." en un enlace)
    kitDigitalRecommendations.innerHTML = kitDigitalRecs.map(rec => `<li>${makeLink(rec)}</li>`).join('');

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

    // Función para generar el PDF
    downloadButton.onclick = function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Set font and styles for the document
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);

            // Load base64 image
        const imgBase64 = 'data:image/png;base64,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'; // Shortened for brevity

        // Add image (x, y, width, height)
        doc.addImage(imgBase64, 'PNG', 160, 10, 25, 15);
        
        // Add header
        doc.setTextColor(0, 102, 204); // Blue color for header text
        doc.setFontSize(16);
        doc.text('Resultados del Kit Digital y Kit Consulting', 10, 20);
        doc.setTextColor(0, 0, 0); // Reset color back to black

        // Add Kit Digital & Consulting information
        doc.setFontSize(12);
        doc.text(`Kit Digital: Hasta ${kitDigitalAmount} €`, 10, 30);
        doc.text(`Kit Consulting: Hasta ${kitConsultingAmount} €`, 10, 40);
        
        // Add section for recommendations (Kit Digital)
        doc.setFontSize(14);
        doc.setTextColor(0, 102, 204); // Heading color
        doc.text('Recomendaciones de proyectos - Kit Digital:', 10, 50);
        doc.setTextColor(0, 0, 0); // Reset color back to black

        kitDigitalRecs.forEach((rec, index) => {
            doc.setFontSize(12);
            doc.text(`${index + 1}. ${makeLink(rec)}`, 10, 60 + (index * 10));
        });

        // Add section for recommendations (Kit Consulting)
        doc.setFontSize(14);
        doc.setTextColor(0, 102, 204); // Heading color
        doc.text('Recomendaciones de proyectos - Kit Consulting:', 10, 70 + (kitDigitalRecs.length * 10));
        doc.setTextColor(0, 0, 0); // Reset color back to black

        kitConsultingRecs.forEach((rec, index) => {
            doc.setFontSize(12);
            doc.text(`${index + 1}. ${rec}`, 10, 80 + (kitDigitalRecs.length * 10) + (index * 10));
        });

        // Add warning message with line breaks for long text
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        const warningText = 'Advertencia: El importe máximo que se destinará a cada uno de los servicios prestados en el Kit Consulting será de 6.000 €.';
        const warningLines = doc.splitTextToSize(warningText, 180); // 180px width for line wrapping
        let yOffset = 90 + (kitDigitalRecs.length * 10) + (kitConsultingRecs.length * 10);
        doc.text(warningLines, 10, yOffset); // Use the wrapped lines

        // Save the PDF
        doc.save('resultados_kits.pdf');
    };
});
