async function multiplicarTensores() {
  // Creacion de tensores
  const tensor1 = tf.range(1, 101).reshape([10, 10]);
  const tensor2 = tf.range(1, 101).reshape([10, 10]);

  // Resultado de tensores
  let resultado = tensor1.mul(tensor2);

  // Multiplicaciones de tensores mientras no exceda los 64MB
  while (resultado.size * resultado.dtypeSize < 64 * 1024 * 1024) {
    resultado = resultado.mul(tensor1);
  }

  // Obtener el arreglo de valores del tensor resultante
  const arregloResultado = await resultado.array();

  // Imprimir el resultado en el navegador
  const output = document.getElementById("output");
  output.textContent = JSON.stringify(arregloResultado);

  // Eliminacion de tensores
  tensor1.dispose();
  tensor2.dispose();
  resultado.dispose();
}

multiplicarTensores();
