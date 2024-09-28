// Função para carregar o conteúdo da página
function loadPage(route) {
    console.log('routes', route)
    const page = `pages/${route}/${route}.html`;
    const cssFile = `pages/${route}/${route}.css`;

    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('template-container').innerHTML = data;
            removeOldCSS();
            loadCSS(cssFile);
            history.pushState({ route }, '', `#/${route}`);
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
}

// Função para carregar o CSS
function loadCSS(cssFile) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssFile;
    link.className = 'dynamic-css'; // Adiciona uma classe para identificar os estilos dinâmicos
    document.head.appendChild(link);
}

// Função para remover os estilos CSS antigos
function removeOldCSS() {
    const oldLinks = document.querySelectorAll('link.dynamic-css');
    oldLinks.forEach(link => link.remove());
}

// Função para carregar o navbar
function loadNavbar() {
    fetch('./../e-commerce/components/navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
}

// Função para gerenciar as rotas
function handleRoute() {
    const hash = window.location.hash.substring(2);
    if (hash) {
        loadPage(hash);
    } else {
        loadPage('login'); // Página padrão
    }
}

// Carrega o navbar e a página inicial ou a rota atual
window.onload = function () {
    loadNavbar();
    handleRoute();
};

// Atualiza a página quando a hash da URL muda
window.onhashchange = handleRoute;

// Lida com o evento de navegação do histórico
window.onpopstate = function (event) {
    if (event.state && event.state.route) {
        loadPage(event.state.route);
    } else {
        loadPage('login'); // Página padrão
    }
};
