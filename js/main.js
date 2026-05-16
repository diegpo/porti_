// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
const T = {
  en: {
    nav_about: 'About', nav_projects: 'Projects', nav_contact: 'Contact',
    hero_tag: 'Available for new challenges', hero_cta1: 'View projects →', scroll: 'scroll',
    about_label: 'About me', about_title_html: 'Developer &amp;<br>Problem Solver',
    about_p1: 'I\'m a developer driven by the belief that <strong>great software is built at the intersection of curiosity and discipline</strong>. My foundation spans backend languages — Java, Python, and Go — each chosen for a reason: Java for robustness and enterprise-grade architecture, Python for data pipelines and AI experimentation, Go for performance and clean concurrency.',
    about_p2: 'Beyond the code, I\'m deeply invested in the <strong>infrastructure layer</strong> — how systems communicate, scale, and fail gracefully. I care about the whole picture: from the first commit to the deployed container running in production.',
    about_p3: 'Right now, I\'m actively studying <strong>AI-powered development</strong> — not just as a user of AI tools, but as someone who wants to understand the mechanics: how models are built, fine-tuned, and integrated into real products. I believe the next generation of software will be built by developers who think in both traditional engineering and machine learning.',
    about_p4: 'I also have a passion that blends technique and creativity: <strong>game development</strong>. Building a game from scratch — physics, logic, player experience — is one of the greatest challenges programming can offer, and it\'s exactly the kind of problem that makes me want to go deeper.',
    about_p5: 'I don\'t look for easy tasks. I look for <strong>hard problems, unfamiliar environments, and challenges that force real growth</strong>.',
    card1_title: 'Languages',
    card2_title: 'AI & Research', card2_body: 'Studying model integration, LLM APIs, prompt engineering and AI-assisted development. Applying AI to real projects.',
    card3_title: 'Infrastructure', card3_body: 'Linux, Docker, cloud, networking, CI/CD. I care about how things run in production — not just how they\'re written.',
    card4_title: 'Backend', card4_body: 'REST APIs, system architecture, SQL databases, performance and security. The backend is where the logic lives.',
    projects_label: 'Portfolio', projects_title_html: 'Featured<br>Projects', featured: 'Featured',
    proj1_desc: 'A fully functional space shooter built from scratch in pure JavaScript with HTML5 Canvas. Smooth animations, player controls, enemy AI, and scoring — zero external libraries.',
    proj2_desc: 'An exploration of AI applied to rock analysis and classification. Bridges visual intelligence and scientific domains, showing how machine learning can serve specialized fields.',
    proj3_num: '03 — Coming soon', proj3_name: 'Next Project', proj3_desc: 'Add your project description here. Click the text to edit and upload a GIF above.', wip: 'In development',
    gif_upload: 'Upload GIF', gif_btn: '+ gif / image',
    contact_label: 'Get in touch', contact_title_html: 'Let\'s build<br>something together?', contact_sub: 'Open to freelance, collaborations and new opportunities.',
  },
  pt: {
    nav_about: 'Sobre', nav_projects: 'Projetos', nav_contact: 'Contato',
    hero_tag: 'Disponível para novos desafios', hero_cta1: 'Ver projetos →', scroll: 'rolar',
    about_label: 'Sobre mim', about_title_html: 'Desenvolvedor &amp;<br>Solucionador de Problemas',
    about_p1: 'Sou um desenvolvedor movido pela crença de que <strong>grande software nasce na intersecção entre curiosidade e disciplina</strong>. Minha base abrange linguagens de backend — Java, Python e Go — cada uma escolhida com propósito: Java para robustez e arquitetura empresarial, Python para pipelines de dados e experimentos com IA, Go para desempenho e concorrência limpa.',
    about_p2: 'Além do código, sou profundamente interessado na <strong>camada de infraestrutura</strong> — como sistemas se comunicam, escalam e falham graciosamente. Me importo com o quadro completo: do primeiro commit ao container rodando em produção.',
    about_p3: 'Atualmente, estudo ativamente o <strong>desenvolvimento com IA</strong> — não apenas como usuário de ferramentas, mas como alguém que quer entender a mecânica: como modelos são construídos, ajustados e integrados em produtos reais. Acredito que a próxima geração de software será feita por devs que pensam em engenharia tradicional e machine learning.',
    about_p4: 'Tenho também uma paixão que une técnica e criatividade: o <strong>desenvolvimento de jogos</strong>. Criar um jogo do zero — física, lógica, experiência do jogador — é um dos maiores desafios que a programação oferece, e é exatamente o tipo de problema que me faz querer ir mais fundo.',
    about_p5: 'Não busco tarefas fáceis. Busco <strong>problemas difíceis, ambientes desconhecidos e desafios que forçam crescimento real</strong>.',
    card1_title: 'Linguagens',
    card2_title: 'IA & Pesquisa', card2_body: 'Estudando integração de modelos, APIs de LLMs, engenharia de prompts e desenvolvimento assistido por IA.',
    card3_title: 'Infraestrutura', card3_body: 'Linux, Docker, cloud, redes, CI/CD. Me importo com como as coisas rodam em produção — não só como são escritas.',
    card4_title: 'Backend', card4_body: 'APIs REST, arquitetura de sistemas, bancos SQL, performance e segurança. O backend é onde a lógica vive.',
    projects_label: 'Portfólio', projects_title_html: 'Projetos<br>em Destaque', featured: 'Destaque',
    proj1_desc: 'Jogo de nave espacial totalmente funcional feito do zero em JavaScript puro com HTML5 Canvas. Animações fluidas, controles, inimigos e pontuação — sem nenhuma biblioteca externa.',
    proj2_desc: 'Exploração de IA aplicada à análise e classificação de rochas. Une inteligência visual e domínios científicos, mostrando como machine learning pode atender campos especializados.',
    proj3_num: '03 — Em breve', proj3_name: 'Próximo Projeto', proj3_desc: 'Adicione aqui a descrição. Clique para editar o texto e carregue um GIF acima.', wip: 'Em desenvolvimento',
    gif_upload: 'Carregar GIF', gif_btn: '+ gif / imagem',
    contact_label: 'Contato', contact_title_html: 'Vamos construir<br>algo juntos?', contact_sub: 'Aberto a projetos freelance, colaborações e oportunidades.',
  },
  es: {
    nav_about: 'Sobre', nav_projects: 'Proyectos', nav_contact: 'Contacto',
    hero_tag: 'Disponible para nuevos desafíos', hero_cta1: 'Ver proyectos →', scroll: 'bajar',
    about_label: 'Sobre mí', about_title_html: 'Desarrollador &amp;<br>Solucionador de Problemas',
    about_p1: 'Soy un desarrollador impulsado por la creencia de que <strong>el gran software nace en la intersección entre la curiosidad y la disciplina</strong>. Mi base abarca lenguajes de backend — Java, Python y Go — cada uno elegido con propósito: Java para robustez y arquitectura empresarial, Python para pipelines de datos y experimentación con IA, Go para rendimiento y concurrencia limpia.',
    about_p2: 'Más allá del código, estoy profundamente interesado en la <strong>capa de infraestructura</strong> — cómo los sistemas se comunican, escalan y fallan con elegancia. Me importa el panorama completo: desde el primer commit hasta el contenedor corriendo en producción.',
    about_p3: 'Actualmente estudio activamente el <strong>desarrollo con IA</strong> — no solo como usuario de herramientas, sino como alguien que quiere entender la mecánica: cómo se construyen, ajustan e integran los modelos en productos reales. Creo que la próxima generación de software será construida por desarrolladores que piensen en ingeniería tradicional y machine learning.',
    about_p4: 'También tengo una pasión que une técnica y creatividad: el <strong>desarrollo de videojuegos</strong>. Crear un juego desde cero — física, lógica, experiencia del jugador — es uno de los mayores desafíos que ofrece la programación, y es exactamente el tipo de problema que me hace querer ir más a fondo.',
    about_p5: 'No busco tareas fáciles. Busco <strong>problemas difíciles, entornos nuevos y desafíos que fuerzan el crecimiento real</strong>.',
    card1_title: 'Lenguajes',
    card2_title: 'IA & Investigación', card2_body: 'Estudiando integración de modelos, APIs de LLMs, ingeniería de prompts y desarrollo asistido por IA.',
    card3_title: 'Infraestructura', card3_body: 'Linux, Docker, cloud, redes, CI/CD. Me importa cómo las cosas funcionan en producción — no solo cómo están escritas.',
    card4_title: 'Backend', card4_body: 'APIs REST, arquitectura de sistemas, bases de datos SQL, rendimiento y seguridad. El backend es donde vive la lógica.',
    projects_label: 'Portafolio', projects_title_html: 'Proyectos<br>Destacados', featured: 'Destacado',
    proj1_desc: 'Juego de naves espaciales completamente funcional, construido desde cero en JavaScript puro con HTML5 Canvas. Animaciones fluidas, controles, enemigos y puntuación — cero librerías externas.',
    proj2_desc: 'Exploración de IA aplicada al análisis y clasificación de rocas. Conecta la inteligencia visual con dominios científicos, demostrando cómo el machine learning puede servir a campos especializados.',
    proj3_num: '03 — Próximamente', proj3_name: 'Próximo Proyecto', proj3_desc: 'Agrega aquí la descripción del proyecto. Haz clic para editar y sube un GIF arriba.', wip: 'En desarrollo',
    gif_upload: 'Cargar GIF', gif_btn: '+ gif / imagen',
    contact_label: 'Contacto', contact_title_html: '¿Construyamos<br>algo juntos?', contact_sub: 'Abierto a freelance, colaboraciones y nuevas oportunidades.',
  }
};

// ── TYPEWRITER PHRASES ─────────────────────────────────────────────────────────
const phrases = {
  en: ['Backend Developer', 'Java · Python · Go', 'AI Explorer', 'Game Dev Enthusiast', 'Builder of Hard Things'],
  pt: ['Desenvolvedor Backend', 'Java · Python · Go', 'Explorador de IA', 'Entusiasta de Game Dev', 'Construtor de Coisas Difíceis'],
  es: ['Desarrollador Backend', 'Java · Python · Go', 'Explorador de IA', 'Entusiasta de Game Dev', 'Constructor de Cosas Difíciles'],
};

// ── LANG ───────────────────────────────────────────────────────────────────────
let lang = 'pt', pi = 0, ci = 0, deleting = false, tmt;
const twEl = document.getElementById('typewriter');

function typeStep() {
  const list = phrases[lang], cur = list[pi];
  if (!deleting) {
    twEl.innerHTML = cur.slice(0, ci + 1) + '<span class="cursor"></span>';
    ci++;
    if (ci === cur.length) { deleting = true; tmt = setTimeout(typeStep, 2000); return; }
  } else {
    twEl.innerHTML = cur.slice(0, ci - 1) + '<span class="cursor"></span>';
    ci--;
    if (ci === 0) { deleting = false; pi = (pi + 1) % list.length; }
  }
  tmt = setTimeout(typeStep, deleting ? 38 : 75);
}

function applyLang(l) {
  lang = l;
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.getAttribute('data-lang') === l)
  );
  clearTimeout(tmt); pi = 0; ci = 0; deleting = false; typeStep();
}

document.querySelectorAll('[data-lang]').forEach(b =>
  b.addEventListener('click', () => applyLang(b.getAttribute('data-lang')))
);

// ── THEME ──────────────────────────────────────────────────────────────────────
let dark = true;
const toggleBtns = [document.getElementById('themeToggle'), document.getElementById('themeToggleMob')];

function setTheme(d) {
  dark = d;
  document.body.className = d ? 'dark' : 'light';
  toggleBtns.forEach(b => { if (b) b.textContent = d ? '🌙' : '☀️'; });
}

toggleBtns.forEach(b => { if (b) b.addEventListener('click', () => setTheme(!dark)); });

// ── HAMBURGER ──────────────────────────────────────────────────────────────────
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});

function closeMobile() {
  ham.classList.remove('open');
  mob.classList.remove('open');
}

// ── GIF UPLOAD ─────────────────────────────────────────────────────────────────
function triggerUpload(n) {
  document.getElementById('gif-file-' + n).click();
}

function loadGif(n, input) {
  const file = input.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  document.getElementById('gif-img-' + n).src = url;
  document.getElementById('gif-img-' + n).style.display = 'block';
  document.getElementById('gif-dz-' + n).style.display = 'none';
  document.getElementById('gif-x-' + n).style.display = 'flex';
}

function removeGif(e, n) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById('gif-img-' + n).src = '';
  document.getElementById('gif-img-' + n).style.display = 'none';
  document.getElementById('gif-dz-' + n).style.display = 'flex';
  document.getElementById('gif-x-' + n).style.display = 'none';
  document.getElementById('gif-file-' + n).value = '';
}

// Drag-and-drop para cada zona de GIF
[1, 2, 3].forEach(n => {
  const zone = document.getElementById('gif-zone-' + n);
  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.style.outline = '2px dashed var(--accent)';
  });
  zone.addEventListener('dragleave', () => {
    zone.style.outline = 'none';
  });
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.style.outline = 'none';
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    document.getElementById('gif-img-' + n).src = url;
    document.getElementById('gif-img-' + n).style.display = 'block';
    document.getElementById('gif-dz-' + n).style.display = 'none';
    document.getElementById('gif-x-' + n).style.display = 'flex';
  });
});

// ── SCROLL REVEAL ──────────────────────────────────────────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(r => obs.observe(r));

// ── INIT ───────────────────────────────────────────────────────────────────────
applyLang('pt');
