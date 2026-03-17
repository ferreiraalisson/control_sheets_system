
// Tema Dark/Light 
const toogleTheme = document.getElementById("toggleTheme")

toogleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark")
    } else {
        localStorage.setItem("theme", "light")
    }
})

const savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){
    document.body.classList.add("dark")
}

// Apresentação inicial da hora
const h = new Date().getHours();

document.getElementById('hello-wd').innerHTML = h < 12 ? '<i class="bi-brightness-low-fill"></i> Bom dia!' : h < 18 ? '<i class="bi-brightness-low-fill"></i> Boa tarde!' : '<i class="bi-moon-stars"></i> Boa noite!';
document.getElementById('data-now').textContent = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
});

// mock

let ch = [1, 2, 3, 4, 5]; // Finge que temos 5 chamados no total
let open = 2;             // 2 estão abertos

let oc = [1, 2, 3];       // 3 ocorrências totais
let todayOc = 1;          // 1 hoje

let cp = [1, 2];          // 2 compras totais
let pend = 2;             // 2 pendentes

let td2 = [1, 2, 3, 4];   // 4 tarefas no total
let ptd = 1;              // 1 pendente

let sv = [1, 2, 3, 4, 5, 6];
let rpa = [1, 2, 3, 4];
let hk = [1];
let fcd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById('estatisticas-destaque').innerHTML = `
    <div class="mini-box-content" onclick="nav('chamados')" style="cursor:pointer"><div class="box-title-dest">Chamados Abertos</div><div class="box-valor" style="color:var(--warn)">${open}</div><div class="valor-total-dest">${ch.length} total</div></div>
    <div class="mini-box-content" onclick="nav('ocorrencias')" style="cursor:pointer"><div class="box-title-dest">Ocorrências Hoje</div><div class="box-valor" style="color:var(--cyan)">${todayOc}</div><div class="valor-total-dest">${oc.length} total</div></div>
    <div class="mini-box-content" onclick="nav('compras')" style="cursor:pointer"><div class="box-title-dest">Compras Pendentes</div><div class="box-valor" style="color:var(--orange)">${pend}</div><div class="valor-total-dest">${cp.length} total</div></div>
    <div class="mini-box-content" onclick="nav('todo')" style="cursor:pointer"><div class="box-title-dest">Tarefas Pendentes</div><div class="box-valor" style="color:var(--ok)">${ptd}</div><div class="valor-total-dest">${td2.length} total</div></div>`;


document.getElementById('listagem-grupos').innerHTML = [
    { p: 'chamados', n: 'Chamados', c: ch.length },
    { p: 'compras', n: 'Compras', c: cp.length },
    { p: 'servicos', n: 'Serviços', c: sv.length },
    { p: 'rpa', n: 'RPA', c: rpa.length },
    { p: 'housekeeping', n: 'Demandas', c: hk.length },
    { p: 'fornecedores', n: 'Fornecedores', c: fcd.length}
].map(s => `
    <div class="selecionar-grupo" onclick="nav('${s.p}')">
        <div class="grupo-nome">${s.n}</div>
        <div class="grupo-conteudo">${s.c}</div>
    </div>
`).join('');

const td = getStore('td');
const todos = td.filter(t => t.status !== 'Concluído').slice(0, 6);

document.getElementById('ocorrencias').innerHTML = todos.length ? todos.map(t => `<div class="qi"><div class="qi-t">${t.titulo || ''}</div>${prioBadge(t.prioridade)}</div>`).join('') : '<div style="font-size:12px;color:var(--txt2);padding:6px 0">Sem tarefas pendentes 🎉</div>';