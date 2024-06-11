const municipiosPorEstado = {
    "CDMX": ["Álvaro Obregón", "Azcapotzalco", "Benito Juárez", "Coyoacán", "Cuajimalpa", "Cuauhtémoc", "Gustavo A. Madero", "Iztacalco", "Iztapalapa", "Magdalena Contreras", "Miguel Hidalgo", "Milpa Alta", "Tláhuac", "Tlalpan", "Venustiano Carranza", "Xochimilco"],
    "Jalisco": ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonalá", "Tlajomulco de Zúñiga", "Puerto Vallarta", "El Salto"],
    "Nuevo Leon": ["Monterrey", "Guadalupe", "San Nicolás de los Garza", "Apodaca", "General Escobedo", "Santa Catarina", "San Pedro Garza García"],
    // Agrega más estados y municipios según sea necesario
  };
  
  function cargarMunicipios() {
    const estadoSelect = document.getElementById('estado');
    const municipioSelect = document.getElementById('municipio');
    const estado = estadoSelect.value;
  
    municipioSelect.innerHTML = '<option value="">Selecciona un municipio</option>';
  
    if (estado && municipiosPorEstado[estado]) {
      municipiosPorEstado[estado].forEach(municipio => {
        const option = document.createElement('option');
        option.value = municipio;
        option.textContent = municipio;
        municipioSelect.appendChild(option);
      });
    }
  }
  