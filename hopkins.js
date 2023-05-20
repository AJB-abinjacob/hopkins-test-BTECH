// function V_value() {
//   var V = parseInt(document.getElementById("V").value);
//   return V;
// }
// function I0_value() {
//   var I0 = parseInt(document.getElementById("I0").value);
//   return I0;
// }
// function Ia2_value() {
//   var Ia2 = parseInt(document.getElementById("Ia2").value);
//   return Ia2;
// }
// function Ia2_value() {
//   var If1 = parseInt(document.getElementById("If1").value);
//   return If1;
// }
// function Ia2_value() {
//   var If2 = parseInt(document.getElementById("If2").value);
//   return If2;
// }
// button = document.getElementById("actionButton");

// button.onclick = calculate;
function calculate() {
  var V = parseFloat(document.getElementById("V").value);
  var I0 = parseFloat(document.getElementById("I0").value);
  var Ia2 = parseFloat(document.getElementById("Ia2").value);
  var If1 = parseFloat(document.getElementById("If1").value);
  var If2 = parseFloat(document.getElementById("If2").value);
  var Ra1 = parseFloat(document.getElementById("Ra1").value);
  // var V = 219; //values changes
  // var I0 = 4.6; //values changes
  // var Ia2 = 12; //values changes
  // var If1 = 0.6; //values changes
  // var If2 = 0.99; //values changes
  console.log(If1);
  // Calaculation

  // Ra1 = 0.96; //values changes (.8*1.2=.96)

  console.log("Ra1 = " + Ra1);
  Ia1 = I0 + Ia2;
  console.log("Ia1 = " + Ia1);
  total_input = V * I0;
  console.log("total input = " + total_input);
  armature_cu_loss = Math.pow(Ia1, 2) * Ra1 + Math.pow(Ia2, 2) * Ra1;
  console.log("armature cu loss = " + armature_cu_loss);
  W0 = V * I0 - armature_cu_loss;
  console.log("W0(core loss) = " + W0);
  each_machine = W0 / 2;
  console.log("each machine W0/2 (core loss) = " + each_machine);
  // generator
  console.log("---------------------------Generator-------------------");
  rated_gen_v = 220; //values changes
  g_output = rated_gen_v * Ia2;
  console.log("generator output = " + g_output);
  g_input =
    each_machine +
    rated_gen_v * Ia2 +
    Math.pow(Ia2, 2) * Ra1 +
    rated_gen_v * If2;
  console.log("generator input = " + g_input);
  generatorFieldCuLoss = rated_gen_v * If2;
  console.log("Generator field Cu Loss = " + generatorFieldCuLoss);
  generatorArmatureCuLoss = Math.pow(Ia1, 2) * Ra1;
  console.log("Generator Armature Cu Loss = " + generatorArmatureCuLoss);
  g_efficiency = (g_output / g_input) * 100;
  console.log("generator efficiency = " + g_efficiency);
  //motor
  console.log("---------------------------Motor-----------------------");
  rated_motor_v = 220; //values changes
  motorInput = rated_motor_v * (Ia1 + If1);
  console.log("Motor input  = " + motorInput);
  motorLoss = each_machine + rated_motor_v * If1 + Math.pow(Ia1, 2) * Ra1;
  console.log("Motor Loss = " + motorLoss);
  motorFieldCuLoss = rated_motor_v * If1;
  console.log("Motor Field Cu Loss = " + motorFieldCuLoss);
  motorArmatureCuLoss = Math.pow(Ia2, 2) * Ra1;
  console.log("Motor Armature Cu Loss = " + motorArmatureCuLoss);
  m_efficiency = ((motorInput - motorLoss) / motorInput) * 100;
  console.log("motor efficiency = " + m_efficiency);
  // total
  total_loss = motorArmatureCuLoss + generatorArmatureCuLoss;
  console.log("Total Loss = " + total_loss);

  // Tabluar Column 1
  var table1 = document
    .getElementById("tabularColumn")
    .getElementsByTagName("tbody")[0];
  var row = table1.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);

  cell1.innerHTML = V;
  cell2.innerHTML = I0;
  cell3.innerHTML = Ia2;
  cell4.innerHTML = If1;
  cell5.innerHTML = If2;
  cell6.innerHTML = Ia1;
  cell7.innerHTML = generatorArmatureCuLoss;
  cell8.innerHTML = motorArmatureCuLoss;
  cell9.innerHTML = total_loss;
  cell10.innerHTML = total_input;
  cell11.innerHTML = W0;
  cell12.innerHTML = each_machine;

  // Tabluar Column 2
  var table2 = document
    .getElementById("tabulation")
    .getElementsByTagName("tbody")[0];
  var row = table2.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = motorFieldCuLoss;
  cell2.innerHTML = 00000;
  cell3.innerHTML = motorInput;
  cell4.innerHTML = motorInput - motorLoss;
  cell5.innerHTML = m_efficiency;

  // ------------------------------------
  var table2 = document
    .getElementById("tabulation")
    .getElementsByTagName("tbody")[1];
  var row = table2.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = generatorFieldCuLoss;
  cell2.innerHTML = 00000;
  cell3.innerHTML = g_input;
  cell4.innerHTML = g_output;
  cell5.innerHTML = g_efficiency;
}
// function myDeleteFunction() {
//   document.getElementById("tabularColumn").deleteRow(1);
//   document.getElementById("tabulation").deleteRow(2);
// }
