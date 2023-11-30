const readlineSync = require("readline-sync");

const registroEstudiantes = () => {
  
  let estudiantes = [];

  while (true) {
    let cantidadARegistrar = readlineSync.question(`Ingrese el numero a registrar: `);
    console.log(`cantidad a registrar ${cantidadARegistrar}`);

    for (let i = 0; i < cantidadARegistrar; i++) {
      const nombre = readlineSync.question(`Ingrese el nombre del estudiante:${i} = `);
      const apellido = readlineSync.question(`Ingrese el apellido del estudiante: ${nombre} = `);
      const dni = readlineSync.questionInt(`Ingrese el dni del estudiante ${nombre} - ${apellido} = `);
      const edad = readlineSync.questionInt(`Ingrese la edad del estudiante ${nombre} - ${apellido} = `);

      const estudiante = {
        nombre,
        apellido,
        dni,
        edad,
      };

      estudiantes.push(estudiante);
    }

    //DAR PODER PARA PODER TERMINAR DE REGISTRAR
    let continuar = readlineSync.question("Quiere continuar registrando si/no = ");
    if (continuar !== "si") {
        console.log(`Ha elegido la opción "${continuar}", saliendo del programa....`);
        mostrarEstudiantes(estudiantes);
        return; // Terminar la ejecución de la función
    } else {
        console.log(`Ha elegido la opción: ${continuar}`);
    }
  }
  
};

const mostrarEstudiantes = (estudiantes) => {
    
  console.log("\nUsuarios registrados...");
  estudiantes.forEach((estudiante) => {
    console.log(`[Nombre del estudiante = ${estudiante.nombre}] - [apellido = ${estudiante.apellido}]`);
    console.log(`[Dni del estudiante ${estudiante.nombre} = ${estudiante.dni}] - [edad es: ${estudiante.edad}]\n`);
  });
};



module.exports = { registroEstudiantes };
