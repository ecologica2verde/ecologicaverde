// ===== CONFIGURAÇÃO =====
const CONFIG = {
    statusLabels: {
        'trusted': { label: 'Confiável', class: 'status-trusted', icon: 'fa-shield-alt' },
        'verified': { label: 'Verificada e Segura', class: 'status-verified', icon: 'fa-check-circle' },
        'risk': { label: 'Com Risco', class: 'status-risk', icon: 'fa-exclamation-triangle' }
    },
    
    sourceTypes: {
        'fitgirl': { type: 'repacks', icon: 'fa-gamepad' },
        'dodi': { type: 'repacks', icon: 'fa-gamepad' },
        'byxatab': { type: 'repacks', icon: 'fa-gamepad' },
        'onlinefix': { type: 'online', icon: 'fa-wifi' },
        'gog': { type: 'gog', icon: 'fa-gamepad' },
        'ecologica': { type: 'repacks', icon: 'fa-leaf' }
    },
    
    recommendations: {
        'fitgirl': 5,
        'byxatab': 5,
        'onlinefix': 5,
        'dodi': 4,
        'gog': 4,
        'ecologica': 4
    },
    
    sourceUrls: {
        'fitgirl': '#',
        'dodi': '#',
        'byxatab': '#',
        'onlinefix': '#',
        'gog': '#',
        'ecologica': '#'
    },
    
    guides: [
        {
            id: 'all-guides',
            emoji: '📚',
            icon: 'fa-book',
            title: 'TODOS GUIAS DA ECOLÓGICA VERDE',
            description: 'Acesso completo a todos os guias públicos disponíveis pela Ecológica Verde.',
            url: 'https://rentry.co/ECOLOGICA-VERDE-GUIAS'
        },
        {
            id: 'adobe-guide',
            emoji: '📙',
            icon: 'fa-paint-brush',
            title: 'GUIA: Adobe Creative Cloud',
            description: 'Guia completo para instalação e ativação dos aplicativos da Adobe Creative Cloud.',
            url: 'https://rentry.co/adobe-creative-cloud-ecologica-verde'
        },
        {
            id: 'microsoft-guide',
            emoji: '📗',
            icon: 'fa-desktop',
            title: 'GUIA: Pacote Microsoft Office e Ativador do Windows',
            description: 'Guia completo para instalação e ativação do Pacote Microsoft Office e Windows.',
            url: 'https://rentry.co/ATIVADOR-MICROSOFT-OFFICE-E-WINDOWS-ECOLOGICA-VERDE'
        },
        {
            id: 'digimon-guide',
            emoji: '🎮',
            icon: 'fa-gamepad',
            title: 'GUIA: Digimon Story: Time Stranger',
            description: 'Guia completo para instalação e configuração do Digimon Story: Time Stranger da Steam.',
            url: 'https://rentry.co/DIGIMON-STORY-TIME-STRANGER-ECOLOGICA-VERDE'
        },
        {
            id: 'elden-guide',
            emoji: '🎮',
            icon: 'fa-gamepad',
            title: 'GUIA: ELDEN RING NIGHTREIGN',
            description: 'Guia completo para instalação e configuração do mod (Seamless Co-op) do ELDEN RING NIGHTREIGN.',
            url: 'https://rentry.co/elden-ring-nightreign-ecologica-verde'
        },
        {
            id: 'ffxv-guide',
            emoji: '🎮',
            icon: 'fa-gamepad',
            title: 'GUIA: FINAL FANTASY XV: Windows Edition',
            description: 'Guia completo para instalação e configuração do FINAL FANTASY XV: Windows Edition.',
            url: 'https://rentry.co/FINAL-FANTASY-XV-ECOLOGICA-VERDE'
        },
        {
            id: 'persona-guide',
            emoji: '🎮',
            icon: 'fa-gamepad',
            title: 'GUIA: Persona 3 Reload',
            description: 'Guia completo para instalação e configuração do Persona 3 Reload da Steam.',
            url: 'https://rentry.co/PERSONA-3-RELOAD-ECOLOGICA-VERDE'
        },
        {
            id: 'smt-guide',
            emoji: '🎮',
            icon: 'fa-gamepad',
            title: 'GUIA: Shin Megami Tensei V: Vengeance',
            description: 'Guia completo para instalação e configuração do Shin Megami Tensei V: Vengeance da Steam.',
            url: 'https://rentry.co/SHIN-MEGAMI-TENSEI-V-VENGEANCE-ECOLOGICA-VERDE'
        },
        {
            id: 'sites-warning',
            emoji: '⛔',
            icon: 'fa-exclamation-triangle',
            title: 'SITES: Fontes Externas não recomendadas',
            description: 'Lista de sites problemáticos (adware, vírus, trojan) e de fontes não recomendadas.',
            url: 'https://rentry.co/sites-problematicos-ecologica-verde'
        }
    ],
    
    utilities: [
        {
            id: 'fmhy',
            emoji: '➡️',
            icon: 'fa-external-link-alt',
            title: 'FMHY: Freemediaheckyeah',
            description: '<b>Freemediaheckyeah:</b> A maior coleção de coisas grátis na internet!',
            url: 'https://fmhy.net/'
        },
        {
            id: 'ublock',
            emoji: '🚫',
            icon: 'fa-shield-alt',
            title: 'uBlock Origin',
            description: 'Extensão de navegador para bloquear anúncios e rastreadores.',
            url: 'https://ublockorigin.com/'
        },
        {
            id: 'adguard-vpn',
            emoji: '⛔',
            icon: 'fa-user-shield',
            title: 'AdGuard VPN',
            description: 'VPN gratuita e proxy para navegação segura.',
            url: 'https://chromewebstore.google.com/detail/adguard-vpn-proxy-gratuit/hhdobjgopfphlmjbmnpglhfcgppchgje'
        },
        {
            id: 'cobalt-tools',
            emoji: '😼',
            icon: 'fa-tools',
            title: 'Cobalt Tools',
            description: 'Ferramentas para download de mídia de várias plataformas.',
            url: 'https://cobalt.tools/'
        },
        {
            id: 'rentry',
            emoji: '📚',
            icon: 'fa-paste',
            title: 'Rentry',
            description: 'Serviço de pastebin simples e rápido para compartilhamento de texto.',
            url: 'https://rentry.co/'
        },
        {
            id: 'spotify-pc',
            emoji: '🎵',
            icon: 'fa-music',
            title: 'Spotify-PC',
            description: 'Cliente modificado do Spotify para Windows sem anúncios.',
            url: 'https://github.com/SpotX-Official/SpotX'
        },
        {
            id: 'temp-email',
            emoji: '✉️',
            icon: 'fa-envelope',
            title: 'E-mail Temporário',
            description: 'Serviço de e-mail temporário para registros e verificações.',
            url: 'https://adguard.com/pt_br/adguard-temp-mail/overview.html'
        }
    ]
};

// ===== ESTADO =====
let state = {
    sources: [],
    filteredSources: [],
    filters: {
        search: '',
        status: 'all',
        type: 'all',
        stars: 'all',
        sort: 'name'
    },
    currentSection: 'sources',
    comparingSources: [],
    filtersInitialized: false,
    isChangingSection: false
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', async () => {
    await initializeApp();
    setupEventListeners();
    setupNavigation();
    loadGuides();
    loadUtilities();
    setupCardEffects();
    setupComparison();
    updateScrollbarVisibility();
});

async function initializeApp() {
    try {
        const response = await fetch('sources.json');
        const data = await response.json();
        
        state.sources = data.sources.map(source => ({
            ...source,
            type: CONFIG.sourceTypes[source.id]?.type || 'other',
            icon: CONFIG.sourceTypes[source.id]?.icon || 'fa-gamepad',
            stars: CONFIG.recommendations[source.id] || 0,
            url: CONFIG.sourceUrls[source.id] || '#',
            pros: (source.pros || []).slice(0, 3),
            cons: (source.cons || []).slice(0, 3)
        }));
        
        state.filteredSources = [...state.sources];
        renderSources();
        
    } catch (error) {
        console.error('Erro ao inicializar:', error);
        showError('Falha ao carregar os dados. Verifique sua conexão.', 'sources');
    }
}

// ===== NAVEGAÇÃO COM ANIMAÇÃO DOS FILTROS =====
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (state.isChangingSection) return;
            state.isChangingSection = true;
            
            const section = e.currentTarget.dataset.section;
            
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            e.currentTarget.parentElement.classList.add('active');
            
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            document.getElementById(`${section}-section`).classList.add('active');
            
            const filtersSidebar = document.getElementById('filtersSidebar');
            
            if (section === 'sources') {
                filtersSidebar.classList.remove('hidden');
                
                void filtersSidebar.offsetWidth;
                
                filtersSidebar.style.opacity = '1';
                filtersSidebar.style.transform = 'translateX(0)';
                
                setTimeout(() => {
                    setupFilterListeners();
                    state.isChangingSection = false;
                }, 100);
            } else {
                filtersSidebar.style.opacity = '0';
                filtersSidebar.style.transform = 'translateX(100%)';
                
                setTimeout(() => {
                    filtersSidebar.classList.add('hidden');
                    state.isChangingSection = false;
                }, 300);
            }
            
            state.currentSection = section;
            updateComparisonInfo();
            updateScrollbarVisibility();
        });
    });
}

// ===== ATUALIZAR VISIBILIDADE DO SCROLLBAR =====
function updateScrollbarVisibility() {
    const sections = ['sources', 'guides', 'utilities', 'dmca'];
    
    sections.forEach(section => {
        const sectionEl = document.getElementById(`${section}-section`);
        if (sectionEl) {
            if (section === 'sources') {
                sectionEl.classList.remove('no-scrollbar');
            } else {
                sectionEl.classList.add('no-scrollbar');
            }
        }
    });
}

// ===== SETUP FILTER LISTENERS =====
function setupFilterListeners() {
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });

    document.querySelectorAll('[data-sort]').forEach(button => {
        button.addEventListener('click', (e) => {
            const sort = e.currentTarget.dataset.sort;
            state.filters.sort = sort;
            
            document.querySelectorAll('[data-sort]').forEach(btn => {
                btn.classList.remove('active');
            });
            
            e.currentTarget.classList.add('active');
            
            applyFilters();
        });
    });
    
    document.querySelectorAll('[data-type]').forEach(button => {
        button.addEventListener('click', (e) => {
            const type = e.currentTarget.dataset.type;
            state.filters.type = type;
            
            document.querySelectorAll('[data-type]').forEach(btn => {
                btn.classList.remove('active');
            });
            
            e.currentTarget.classList.add('active');
            
            applyFilters();
        });
    });
    
    document.querySelectorAll('[data-status]').forEach(button => {
        button.addEventListener('click', (e) => {
            const status = e.currentTarget.dataset.status;
            state.filters.status = status;
            
            document.querySelectorAll('[data-status]').forEach(btn => {
                btn.classList.remove('active');
            });
            
            e.currentTarget.classList.add('active');
            
            applyFilters();
        });
    });
    
    document.querySelectorAll('[data-stars]').forEach(button => {
        button.addEventListener('click', (e) => {
            const stars = e.currentTarget.dataset.stars;
            state.filters.stars = stars;
            
            document.querySelectorAll('[data-stars]').forEach(btn => {
                btn.classList.remove('active');
            });
            
            e.currentTarget.classList.add('active');
            
            applyFilters();
        });
    });
    
    const resetBtn = document.getElementById('resetFilters');
    const newResetBtn = resetBtn.cloneNode(true);
    resetBtn.parentNode.replaceChild(newResetBtn, resetBtn);
    
    newResetBtn.addEventListener('click', resetFilters);
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    if (state.currentSection === 'sources') {
        setupFilterListeners();
    }
    
    setupComparison();
}

function applyFilters() {
    let filtered = [...state.sources];
    
    if (state.filters.status !== 'all') {
        filtered = filtered.filter(source => source.status === state.filters.status);
    }
    
    if (state.filters.type !== 'all') {
        if (state.filters.type === 'folder') {
            filtered = filtered.filter(source => source.id === 'byxatab');
        } else if (state.filters.type === 'repacks') {
            filtered = filtered.filter(source => 
                source.id === 'fitgirl' || 
                source.id === 'dodi' || 
                source.id === 'byxatab' || 
                source.id === 'ecologica'
            );
        } else {
            filtered = filtered.filter(source => source.type === state.filters.type);
        }
    }
    
    if (state.filters.stars !== 'all') {
        const starCount = parseInt(state.filters.stars);
        filtered = filtered.filter(source => source.stars === starCount);
    }
    
    filtered.sort((a, b) => {
        switch(state.filters.sort) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'status':
                return a.status.localeCompare(b.status);
            case 'recommended':
                return b.stars - a.stars;
            case 'games':
                return b.gameCount - a.gameCount;
            default:
                return 0;
        }
    });
    
    state.filteredSources = filtered;
    renderSources();
}

function resetFilters() {
    state.filters = {
        search: '',
        status: 'all',
        type: 'all',
        stars: 'all',
        sort: 'name'
    };
    
    document.querySelectorAll('.filter-option').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('[data-sort="name"], [data-type="all"], [data-status="all"], [data-stars="all"]').forEach(btn => {
        btn.classList.add('active');
    });
    
    applyFilters();
}

// ===== COMPARAÇÃO DE FONTES =====
function setupComparison() {
    const closeBtn = document.getElementById('closeComparison');
    if (closeBtn) {
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        newCloseBtn.addEventListener('click', () => {
            document.getElementById('comparisonModal').classList.remove('visible');
        });
    }
    
    const clearBtn = document.getElementById('clearComparison');
    if (clearBtn) {
        const newClearBtn = clearBtn.cloneNode(true);
        clearBtn.parentNode.replaceChild(newClearBtn, clearBtn);
        
        newClearBtn.addEventListener('click', clearComparison);
    }
    
    document.addEventListener('click', (e) => {
        const modal = document.getElementById('comparisonModal');
        if (e.target === modal) {
            modal.classList.remove('visible');
        }
    });
}

function toggleComparison(sourceId) {
    const source = state.sources.find(s => s.id === sourceId);
    const index = state.comparingSources.findIndex(s => s.id === sourceId);
    
    if (index === -1) {
        if (state.comparingSources.length >= 2) {
            showNotification('⚠️ Limite Atingido', 'Você só pode comparar 2 fontes por vez.', 'warning');
            return;
        }
        state.comparingSources.push(source);
        showNotification('✓ Adicionado', `${source.name} adicionado à comparação`, 'success');
    } else {
        state.comparingSources.splice(index, 1);
        showNotification('ℹ️ Removido', `${source.name} removido da comparação`, 'info');
    }
    
    updateComparisonUI();
    updateComparisonInfo();
    renderSources();
}

function clearComparison() {
    state.comparingSources = [];
    updateComparisonUI();
    updateComparisonInfo();
    renderSources();
    showNotification('ℹ️ Comparação Limpa', 'Todas as fontes foram removidas da comparação', 'info');
}

function updateComparisonUI() {
    const comparisonContent = document.getElementById('comparisonContent');
    const comparisonModal = document.getElementById('comparisonModal');
    
    if (!comparisonContent) return;
    
    if (state.comparingSources.length === 0) {
        comparisonContent.innerHTML = `
            <div class="comparison-empty">
                <i class="fas fa-balance-scale"></i>
                <p>Selecione 2 fontes para comparar</p>
                <small>Clique no botão "Comparar" nas fontes que deseja comparar</small>
            </div>
        `;
        comparisonModal.classList.remove('visible');
    } else if (state.comparingSources.length === 1) {
        comparisonContent.innerHTML = `
            <div class="comparison-empty">
                <i class="fas fa-balance-scale"></i>
                <p>Selecione mais 1 fonte para comparar</p>
                <small>Você precisa selecionar 2 fontes para realizar a comparação</small>
            </div>
        `;
        comparisonModal.classList.add('visible');
    } else {
        const [source1, source2] = state.comparingSources;
        
        comparisonContent.innerHTML = `
            <div class="comparison-grid">
                <div class="comparison-card">
                    <div class="comparison-card-header">
                        <h4>${source1.name}</h4>
                        <button class="remove-comparison" onclick="toggleComparison('${source1.id}')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="comparison-details">
                        <div class="comparison-detail">
                            <span class="detail-label">Status</span>
                            <span class="detail-value ${CONFIG.statusLabels[source1.status]?.class || 'status-trusted'}">
                                ${CONFIG.statusLabels[source1.status]?.label || 'Confiável'}
                            </span>
                        </div>
                        <div class="comparison-detail">
                            <span class="detail-label">Recomendação</span>
                            <span class="detail-value">
                                ${getStarsHTML(source1.stars)}
                            </span>
                        </div>
                        <div class="comparison-detail">
                            <span class="detail-label">Tipo</span>
                            <span class="detail-value">
                                ${source1.type === 'repacks' ? 'Repacks' : 
                                  source1.type === 'gog' ? 'GOG Games' :
                                  source1.type === 'online' ? 'Multiplayer Online' :
                                  source1.type === 'folder' ? 'Game Folder' : 'Outro'}
                            </span>
                        </div>
                        <div class="comparison-detail">
                            <span class="detail-label">Prós</span>
                            <span class="detail-value">${source1.pros.length}</span>
                        </div>
                        <div class="comparison-detail">
                            <span class="detail-label">Contras</span>
                            <span class="detail-value">${source1.cons.length}</span>
                        </div>
                    </div>
                </div>
                
                <div class="comparison-card">
                    <div class="comparison-card-header">
                        <h4>${source2.name}</h4>
                        <button class="remove-comparison" onclick="toggleComparison('${source2.id}')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="comparison-details">
                        <div class="comparison-detail">
                            <span class="detail-label">Status</span>
                            <span class="detail-value ${CONFIG.statusLabels[source2.status]?.class || 'status-trusted'}">
                                ${CONFIG.statusLabels[source2.status]?.label || 'Confiável'}
                            </span>
                        </div>
                        <div class="comparison-detail">
                            <span class="detail-label">Recomendação</span>
                            <span class="detail-value">
                                ${getStarsHTML(source2.stars)}
                            </span>
                        </div>
                        <div class="comparison-detail">
                            <span class="detail-label">Tipo</span>
                            <span class="detail-value">
                                ${source2.type === 'repacks' ? 'Repacks' : 
                                  source2.type === 'gog' ? 'GOG Games' :
                                  source2.type === 'online' ? 'Multiplayer Online' :
                                  source2.type === 'folder' ? 'Game Folder' : 'Outro'}
                            </span>
                        </div>
                        <div class="comparison-detail">
                            <span class="detail-label">Prós</span>
                            <span class="detail-value">${source2.pros.length}</span>
                        </div>
                        <div class="comparison-detail">
                            <span class="detail-label">Contras</span>
                            <span class="detail-value">${source2.cons.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        comparisonModal.classList.add('visible');
    }
}

function updateComparisonInfo() {
    const comparisonInfo = document.getElementById('comparisonInfo');
    if (!comparisonInfo) return;
    
    if (state.comparingSources.length > 0) {
        comparisonInfo.textContent = `${state.comparingSources.length}/2 fontes selecionadas para comparação`;
        comparisonInfo.classList.add('visible');
    } else {
        comparisonInfo.classList.remove('visible');
    }
}

// ===== RENDERIZAÇÃO =====
function renderSources() {
    const grid = document.getElementById('sourcesGrid');
    if (!grid) return;
    
    if (state.filteredSources.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Nenhuma fonte encontrada</h3>
                <p>Tente ajustar os filtros</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = state.filteredSources.map(source => {
        const isComparing = state.comparingSources.some(s => s.id === source.id);
        
        return `
        <article class="source-card ${isComparing ? 'comparing' : ''}" data-id="${source.id}">
            <div class="card-header">
                <div class="card-icon">
                    <i class="fas ${source.icon}"></i>
                </div>
                <div class="card-title">
                    <h3>${source.name}</h3>
                    <div class="card-subtitle">${source.shortName}</div>
                </div>
            </div>
            
            <div class="card-pros-cons">
                <div class="pros-cons-header">
                    <i class="fas fa-chart-line"></i>
                    <h4>Análise da Fonte</h4>
                </div>
                <div class="pros-cons-grid">
                    <div class="pros-section">
                        <div class="pros-title">
                            <i class="fas fa-check-circle"></i>
                            <span>Prós</span>
                        </div>
                        <ul class="pros-list">
                            ${source.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cons-section">
                        <div class="cons-title">
                            <i class="fas fa-times-circle"></i>
                            <span>Contras</span>
                        </div>
                        <ul class="cons-list">
                            ${source.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="card-meta">
                <div class="source-status">
                    <span class="status-indicator ${CONFIG.statusLabels[source.status]?.class || 'status-trusted'}">
                        <i class="fas ${CONFIG.statusLabels[source.status]?.icon || 'fa-shield-alt'}"></i>
                        ${CONFIG.statusLabels[source.status]?.label || 'Confiável'}
                    </span>
                </div>
                <div class="stars">
                    ${getStarsHTML(source.stars)}
                </div>
            </div>
            
            <div class="card-actions">
                <button class="btn btn-primary" onclick="handleAccessSource('${source.id}')">
                    <i class="fas fa-external-link-alt"></i>
                    Acessar Catálogo
                </button>
                <button class="btn btn-comparison ${isComparing ? 'comparing' : ''}" onclick="toggleComparison('${source.id}')">
                    <i class="fas ${isComparing ? 'fa-check' : 'fa-balance-scale'}"></i>
                    ${isComparing ? 'Comparando' : 'Comparar'}
                </button>
            </div>
        </article>
    `}).join('');
    
    convertMarkdownLinks();
    setupCardEffects();
}

function convertMarkdownLinks() {
    document.querySelectorAll('.card-subtitle').forEach(subtitle => {
        const html = subtitle.innerHTML;
        const converted = html.replace(
            /\[([^\]]+)\]\(([^)]+)\)/g, 
            '<a href="$2" target="_blank" style="color: #4caf50; text-decoration: none; font-weight: 500;">$1</a>'
        );
        subtitle.innerHTML = converted;
    });
}

function getStarsHTML(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star star"></i>';
        } else {
            stars += '<i class="far fa-star star"></i>';
        }
    }
    return stars;
}

// ===== LOAD GUIDES =====
function loadGuides() {
    const grid = document.getElementById('guidesGrid');
    if (!grid) return;
    
    if (CONFIG.guides.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-book"></i>
                <h3>Nenhum guia disponível</h3>
                <p>Os guias serão adicionados em breve</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = CONFIG.guides.map(guide => `
        <article class="guide-card" data-id="${guide.id}">
            <div class="card-header">
                <div class="card-icon">
                    <i class="fas ${guide.icon}"></i>
                </div>
                <div class="card-title">
                    <h3>${guide.title}</h3>
                </div>
            </div>
            
            <p class="card-description">${guide.description}</p>
            
            <div class="card-actions">
                <a href="${guide.url}" class="btn btn-primary btn-guide" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    Acessar Guia
                </a>
            </div>
        </article>
    `).join('');
    
    setupCardEffects();
}

// ===== LOAD UTILITIES =====
function loadUtilities() {
    const grid = document.getElementById('utilitiesGrid');
    if (!grid) return;
    
    if (CONFIG.utilities.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-tools"></i>
                <h3>Nenhum utilitário disponível</h3>
                <p>Os utilitários serão adicionados em breve</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = CONFIG.utilities.map(utility => `
        <article class="utility-card" data-id="${utility.id}">
            <div class="card-header">
                <div class="card-icon">
                    <i class="fas ${utility.icon}"></i>
                </div>
                <div class="card-title">
                    <h3>${utility.title}</h3>
                </div>
            </div>
            
            <p class="card-description">${utility.description}</p>
            
            <div class="card-actions">
                <a href="${utility.url}" class="btn btn-primary btn-utility" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    Acessar Utilitário
                </a>
            </div>
        </article>
    `).join('');
    
    setupCardEffects();
}

// ===== CARD EFFECTS =====
function setupCardEffects() {
    const cards = document.querySelectorAll('.source-card, .guide-card, .utility-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        });
    });
}

// ===== HANDLERS =====
function handleAccessSource(sourceId) {
    const source = state.sources.find(s => s.id === sourceId);
    
    if (source.status === 'risk') {
        showNotification('⚠️ Aviso', 'Esta fonte é classificada como "Com Risco". Proceda com cautela.', 'warning');
    }
    
    showNotification(
        '🌿 Redirecionando...',
        `Abrindo catálogo ${source.name}...`,
        'info'
    );
    
    console.log(`Acessando: ${source.name}`);
    console.log(`Arquivo CSV: ${source.filename}.csv`);
}

function showSourceDetails(sourceId) {
    const source = state.sources.find(s => s.id === sourceId);
    const statusInfo = CONFIG.statusLabels[source.status];
    
    const modalHTML = `
        <div class="modal-overlay" id="sourceModal">
            <div class="modal">
                <div class="modal-header">
                    <h2>${source.name}</h2>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="info-grid">
                        <div class="info-item">
                            <label>Status</label>
                            <span class="status-indicator ${statusInfo.class}">
                                <i class="fas ${statusInfo.icon}"></i>
                                ${statusInfo.label}
                            </span>
                        </div>
                        
                        <div class="info-item">
                            <label>Arquivo CSV</label>
                            <code>${source.filename}.csv</code>
                        </div>
                        
                        <div class="info-item">
                            <label>Recomendação</label>
                            <div class="stars">
                                ${getStarsHTML(source.stars)}
                            </div>
                        </div>
                        
                        <div class="info-item">
                            <label>Descrição</label>
                            <p>${source.description}</p>
                        </div>
                        
                        <div class="info-item">
                            <label>Colunas do CSV</label>
                            <div class="csv-columns">
                                ${source.csvColumns.map(col => `<span class="column-tag">${col}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    document.getElementById('sourceModal').addEventListener('click', (e) => {
        if (e.target.id === 'sourceModal') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('sourceModal');
    if (modal) modal.remove();
}

// ===== UTILITIES =====
function showError(message, section) {
    const grid = document.getElementById(`${section}-section`).querySelector('.sources-grid');
    if (grid) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Erro ao Carregar</h3>
                <p>${message}</p>
                <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 1rem;">
                    <i class="fas fa-redo"></i> Tentar Novamente
                </button>
            </div>
        `;
    }
}

function showNotification(title, message, type = 'info') {
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const icons = {
        info: 'fa-info-circle',
        success: 'fa-check-circle',
        warning: 'fa-exclamation-triangle',
        error: 'fa-times-circle'
    };
    
    const colors = {
        info: '#4caf50',
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336'
    };
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #111111;
        border: 1px solid #1a1a1a;
        border-radius: 8px;
        padding: 16px;
        max-width: 300px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: flex-start;
        gap: 12px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    notification.innerHTML = `
        <i class="fas ${icons[type]}" style="color: ${colors[type]}; font-size: 16px; margin-top: 2px;"></i>
        <div>
            <strong style="font-size: 14px; color: #ffffff; display: block; margin-bottom: 4px;">${title}</strong>
            <p style="font-size: 13px; color: #b0b0b0; margin: 0;">${message}</p>
        </div>
        <button onclick="this.parentElement.remove()" style="background: transparent; border: none; color: #888888; font-size: 18px; cursor: pointer; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 4px; transition: all 0.2s ease;">
            &times;
        </button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ===== GLOBAL FUNCTIONS =====
window.handleAccessSource = handleAccessSource;
window.showSourceDetails = showSourceDetails;
window.closeModal = closeModal;
window.toggleComparison = toggleComparison;
window.clearComparison = clearComparison;