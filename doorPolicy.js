// Función para obtener la primera letra de una oración (Front Door)
export function frontDoorResponse(line) {
    // Dividir la línea en palabras usando el espacio como separador
    const words = line.split(" ");
    // Verificar si hay al menos una palabra en la línea
    if (words.length > 0) {
      // Obtener la primera palabra y devolver su primera letra en mayúscula
      const firstWord = words[0];
      return firstWord[0];
    } else {
      // Si la línea está vacía o no contiene palabras, devolver una cadena vacía
      return "";
    }
  }
  
  // Función para capitalizar una palabra (Front Door)
  export function frontDoorPassword(word) {
    // Capitalizar la primera letra de la palabra y convertir el resto a minúsculas
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  
  // Función para obtener la última letra de una oración (Back Door)
  export function backDoorResponse(line) {
    // Eliminar espacios en blanco al final de la línea
    line = line.trim();
    // Iterar a través de los caracteres de la línea de derecha a izquierda
    for (let i = line.length - 1; i >= 0; i--) {
      if (line[i] !== " ") {
        // Si se encuentra un carácter que no es un espacio en blanco, devolverlo como la última letra
        return line[i];
      } else {
        // Si hay espacios en blanco al final, devolver una cadena vacía
        return "";
      }
    }
  }
  
  // Función para ser educado (Back Door)
  export function backDoorPassword(word) {
    // Capitalizar la primera letra de la palabra y agregar ', please' al final
    return word.charAt(0).toUpperCase() + word.slice(1) + ', please';
  }