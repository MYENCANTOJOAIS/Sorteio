
document.querySelectorAll('.gift').forEach(gift => {
  gift.addEventListener('click', () => {
    const premio = gift.getAttribute('data-premio');
    document.getElementById('premioSelecionado').value = premio;
    alert('Você ganhou: ' + premio);
  });
});

document.getElementById('formulario').addEventListener('submit', e => {
  e.preventDefault();
  const nome = e.target.nome.value;
  const telefone = e.target.telefone.value;
  const premio = e.target.premio.value;
  const mensagem = `Olá! ${nome} escolheu um presente e ganhou: ${premio}`;
  const whatsappURL = `https://wa.me/5511931610324?text=${encodeURIComponent(mensagem)}`;
  window.location.href = whatsappURL;
});
