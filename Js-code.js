function downloadCV(){
    const downloadInstance = document.createElement('a');
    downloadInstance.href = 'https://enzloer.netlify.app/assets/Curriculum_EnzoLopezErazo.pdf';
    downloadInstance.target = '_blank';
    downloadInstance.download = 'CurriculumVitae_EnzoLopez';
    document.body.appendChild(downloadInstance);
    downloadInstance.onerror = function() {
        alert("El documento no está disponible.");
        document.body.removeChild(downloadInstance);
    };
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
}