// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false },
  { id: 2, formato: "padrao", status: true, acessivel: false },
  { id: 3, formato: "padrao", status: true, acessivel: false },
  { id: 4, formato: "padrao", status: false, acessivel: true },
  { id: 5, formato: "padrao", status: false, acessivel: true },
  { id: 6, formato: "duplo", status: true, acessivel: true },
  { id: 7, formato: "duplo", status: false, acessivel: true },
  { id: 8, formato: "duplo", status: false, acessivel: true },  
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);

  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id);
  
  // Registrar a data e hora da reserva
  let agora = new Date();
  armarioEmprestado.dataReserva = agora;
  
  // Calcular a data e hora de entrega (24h depois)
  let dataEntrega = new Date(agora.getTime() + 24 * 60 * 60 * 1000);
  armarioEmprestado.dataEntrega = dataEntrega;
  
  // Atualizar o status do armário
  armarioEmprestado.status = false;
  usuario.pendencia = true;
  
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioEmprestado.id} foi reservado com sucesso!\nData e hora de entrega: ${dataEntrega.toLocaleString()}`;
  
  console.log(usuario);
  console.log(armarios);
}
