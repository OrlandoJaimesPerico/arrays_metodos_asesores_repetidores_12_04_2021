
//Crear una lista (Array) y pedir los datos del usuario x maximo 10
//datos, usando el metodo unshift, eliminar los datos que deseas con
//el metodo shift  mostrar el resultado en consola o en alert
//Cuanto datos elimino en otro array y mostrarlos
 
let usuario = prompt("¿Que tipo de usuario eres?"), cont = 0, lista = [], eliminar = [];
parra:
do{
   lista.unshift(prompt(`Ingrese un dato cualquiera ${(cont+1)}`));
   repetir:
   while(true){
      switch (prompt(`¿Deseas ingresesar otro datos?\n1.Si\n2.No`)) {
         case '1':
            cont++;
            break repetir;
         case '2':
            break parra;
         default:
            alert("La opcion ingresada no existe");
            continue repetir;
      }
   }
}while(cont<=9);
console.log(lista);
cont = parseInt(prompt(`¿Cuantos datos deseas eliminar?\n 1 - ${lista.length}`));
while(cont!=0){
   eliminar.push(lista.shift());
   cont--;
}
console.log(`Datos ingresados por el usuario ${usuario}: ${lista}`);
console.log(`Datos eliminados por el usuario ${usuario}: ${eliminar}`);




// const sistema_s = [];
//  let i = 1;
//  while(i <= 10)
//  {
//     sistema_s.unshift(prompt(`Ingrese el dato - ${i}`));
//     i++
//  }
//  console.log(sistema_s);
//  console.log(sistema_s.shift());







//Ejemplo
// const lista = [];
//  let i = 1;
//  while(i <= 4){
//     lista.push(prompt(`Ingrese el dato - ${i}`));
//     i++
//  }
//  console.log(lista);
//  console.log(lista.pop());



//Metodo pop el elimina el ultimo dato de la lista y devuel el valor del dato eliminado
// const plantas = ["Brocoli", "Coliflor", "Tomate"];
// const datoeliminado = plantas.pop();
// console.log(plantas);
// console.log(datoeliminado);












//Metodo push ingrese un dato al final del array y devuelve el total de datos que hay en el array
// const animal = ["Cerdo", "Cabra", "Oveja"];
// const animalesDomesticos = ["Haster","Gato","Perro", "Iguana"];
// let total = '';
// for (let i = 0; i < animalesDomesticos.length; i++) {
//     total = animal.push(animalesDomesticos[i]);
// }
// // for(i of animalesDomesticos){
// //     total = animal.push(i);
// // }
// console.log(animal);
// console.log(total);











// Declaramos un variable de tipo array y almacemanos los datos del usuario 
// function verificar(){
//     let opc = null;
//     do{
//         opc = prompt(`¿Que tipo de usuario eres?\n \n1. Profesor\n2. Estudiante`);
//         switch (opc) {
//             case '1':
//                 opc = true;
//                 break;
//             case '2':
//                 opc = false;
//                 break;
//             default:
//                 opc = null;
//                 alert("La opcion seleciona no existe porfavor ver nuevamente las opciones");
//                 break;
//         }
//     }while(opc==null);
//     return opc;
// }

// let listaPersonal = [];
// listaPersonal[0] = prompt("Ingrese su nombre");
// listaPersonal[1] = parseInt(prompt("Ingrese su edad"));
// listaPersonal[2] = parseFloat(prompt("Ingrese su altura"));
// listaPersonal[3] = verificar();
// listaPersonal[4] = ["Programar","Cocinar"];
// listaPersonal[5] = function (){
//         return `Hola soy la funcion del array`;
//     };
// console.log(listaPersonal);











//Declaracion de una variable tipo array, por medio de los indices llenamos la lista o array que almacena los datos en secuencia
// let array = [];
// array[0] = "Miguel Angel Castro Escamilla";
// array[1] = 23;
// array[2] = 1.85;
// array[3] = true;
// array[4] = ["Programar","Cocinar"];
// array[5] = function (){
//     return `Hola soy la funcion del array`;
// };
// console.log(array);









// Declaracion de una variable tipo array y inicializada con los datos
// let informacion_del_usuario = [
//         "Miguel Angel Castro Escamilla", 
//         23,
//         1.85,
//         true,
//         ["Programar","Cocinar"],
//         function (){
//             return `Hola soy la funcion del array`;
//         }
//     ];
// console.log(informacion_del_usuario);

