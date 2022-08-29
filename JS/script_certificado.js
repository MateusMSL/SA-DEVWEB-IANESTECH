window.onload = () => {let dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));    
    let nome = dadosLogado.nome_
    let cpf = dadosLogado.cpf_   
    document.getElementById('nome').innerHTML = nome   
    document.getElementById('cpf').innerHTML = cpf }

    
function downloadPDF() {
    const item = document.querySelector('.content')

    var opt = {
        margin:       0.2,
        filename:     'certificadoIANES.pdf',
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
      }

    html2pdf().set(opt).from(item).save()
}