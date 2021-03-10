const ham = document.getElementById('ham-list');
const cross = document.getElementById('cross-icon');
const navOptions = document.getElementById('nav-options');

const aboutSection = document.getElementById('about');
const goalsSection = document.getElementById('goals');
const firsteventSection = document.getElementById('1stwbds');
const projectsSection = document.getElementById('projects');

const weSection = document.getElementById('who-we-are');
const conductSection = document.getElementById('conduct');

const homeButton  = document.getElementById('home-button');
const aboutButton  = document.getElementById('about-button');
const weButton  = document.getElementById('whoweare-button');
const projectsButton = document.getElementById('projects-button');
const conductButton = document.getElementById('conduct-button');
const supportButton = document.getElementById('support-button');
const contactButton = document.getElementById('contact-button');
const spanishButton  = document.getElementById('spanish-button');
const portugueseButton  = document.getElementById('portuguese-button');

const h1About = document.getElementById('about-h1');
const pAbout = document.getElementById('about-p');
const h2Goals = document.getElementById('goals-h2');
const li1Goals = document.getElementById('goals-li1');
const li2Goals = document.getElementById('goals-li2');
const li3Goals = document.getElementById('goals-li3');
const li4Goals = document.getElementById('goals-li4');
const li5Goals = document.getElementById('goals-li5');
const h2Events = document.getElementById('events-h2');
const h4Events1 = document.getElementById('events-h4-1');
const h4Events2 = document.getElementById('events-h4-2');
const h4Events3 = document.getElementById('events-h4-3');
const h4Events4 = document.getElementById('events-h4-4');
const pEvents = document.getElementById('events-p');
const h2Projects = document.getElementById('projects-h2');
const h2Conference = document.getElementById('conference-h2');
const h3Conference = document.getElementById('conference-h3');
const h2Workshops = document.getElementById('workshops-h2');
const h3Workshops = document.getElementById('workshops-h3');
const h2Articles = document.getElementById('articles-h2');
const h3Articles = document.getElementById('articles-h3');
const h2Voluntteer = document.getElementById('volunteer-h2');
const h2Propose = document.getElementById('propose-h2');
const h2Database = document.getElementById('database-h2');
const h2Support = document.getElementById('support-h2');
const p1Support = document.getElementById('support-p1');
const p2Support = document.getElementById('support-p2');
const p3Support = document.getElementById('support-p3');
const h5Contact = document.getElementById('contact-h5');
const h5Media = document.getElementById('socialmedia-h5');



function disableElement(element) {
    element.classList.add('disable');
}

function enableElement(element) {
    element.classList.remove('disable');
}

function active(element) {
    element.classList.add('active');
}

function deactive(element) {
    element.classList.remove('active');
}

cross.addEventListener("click", () => {
    disableElement(cross);
    enableElement(ham);
    disableElement(navOptions);
});


ham.addEventListener("click", () => {
    disableElement(ham);
    enableElement(cross);
    enableElement(navOptions);
});

function cleanBody() {
    disableElement(aboutSection);
    disableElement(goalsSection);
    disableElement(firsteventSection);
    disableElement(projectsSection);
};

weButton.addEventListener('click', () => {
    cleanBody();
    disableElement(conductSection);  
    enableElement(weSection);
    renderWeSection();
    deactive(homeButton);
    active(weButton);
    deactive(conductButton);
});

aboutButton.addEventListener('click', () => {
    cleanBody();
    disableElement(conductSection);  
    renderWeSection();
    deactive(homeButton);
    active(weButton);
    deactive(conductButton);
});

projectsButton.addEventListener('click', () => {
    enableElement(aboutSection);
    enableElement(goalsSection);
    enableElement(firsteventSection);
    enableElement(projectsSection);
    disableElement(weSection);
    disableElement(conductSection);    
    active(homeButton);
    deactive(weButton);
    deactive(conductButton);
});


conductButton.addEventListener('click', () => {
    cleanBody();
    disableElement(weSection);
    enableElement(conductSection);
    renderconductSection();
    deactive(homeButton);
    deactive(weButton);
    active(conductButton);
});

spanishButton.addEventListener('click', () => {
    renderSpanish();
});

portugueseButton.addEventListener('click', () => {
    renderPortuguese();
});


const MembersList = [
    { "name": "Ana Julia Velez Rueda", 'img': 'ana.jpg', "filiation": "Universidad Nacional de Quilmes - CONICET, Argentina" },
    { "name": "Lucy Jiménez", "img": 'lucy.jpeg', "filiation": "Universidad de Los Andes, Colombia" },
    { "name": "Cristina Marino-Buslje", 'img': 'cristina.png', "filiation": "Fundación Instituto Leloir - CONICET, Argentina" },
    { "name": "Liliane Conteville", 'img': 'liliane.png', "filiation": "Fundação Oswaldo Cruz - Rio de Janeiro, Brazil" },
    { "name": "Mercedes Didier Garnham", 'img': 'mercedes.jpeg', "filiation": "Genetics and Bioinformatics Lab, IIB-UNSAM, Argentina" },
    { "name": "Ivana Feldfeber", 'img': 'ivana.jpg', "filiation": "Observatorio de Datos con Perspectiva de Género, Argentina" },
    { "name": "Augustina Nardo", 'img': 'Agus2.jpg', "filiation": "CIDCA -UNLP, Argentina" }
];

function renderWeSection(){
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');

    h2.innerHTML = "Committee"
    ul.className = "memberslist"

    MembersList.forEach(element => {
        const li = document.createElement('li');
        const figure =  document.createElement('figure');
        const img =  document.createElement('img');
        const figcappurple =  document.createElement('figcapture');
        const figcapgray =  document.createElement('figcapture');

        figure.className = "member";
        figcappurple.className = "name";

        img.src = "assets/img/" + element.img;
        img.alt = element.name + "-img";
        figcappurple.innerHTML = element.name;
        figcapgray.innerHTML = element.filiation;
        
        figure.appendChild(img);
        figure.appendChild(figcappurple);
        figure.appendChild(figcapgray);

        li.appendChild(figure);
        ul.appendChild(li);
    });

    weSection.appendChild(h2);
    weSection.appendChild(ul);
}

function renderconductSection() {
    const introDiv = document.createElement('div');
    const securityDiv = document.createElement('div');
    const consequenceDiv = document.createElement('div');
    const unexpectedDiv = document.createElement('div');
    const reportDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    const h4Security = document.createElement('h4');
    const h4Unexpected = document.createElement('h4');
    const h4Consequence = document.createElement('h4');
    const h4Report = document.createElement('h4');
    const pSecurity = document.createElement('p');
    const pUnexpected = document.createElement('p');
    const pConsequence = document.createElement('p');
    const pReport = document.createElement('p');
    const pIntro = document.createElement('p');



    h2.innerHTML = "Code of Conduct";
    pIntro.innerHTML = 'Women in Bioinformatics and Data Science LA is a community congress intended for networking and collaboration in the scientific community. We value the participation of each member of this community and want all attendees to have an enjoyable and fulfilling experience. We are dedicated to providing a respectful, harassment-free community for everyone. We do not tolerate harassment or bullying of any community member in any form. This does not only extend to members to local Women in Bioinformatics and Data Science LA communities but to anyone who chooses to become involved in the larger Women in Bioinformatics and Data Science LA community of scientists, users, developers, and integrators through events or interactions. Therefore, we have created this code of conduct that all participants are expected to read and adhere to.';

    h4Security.innerHTML = "Security and expected behaviour during virtual events and workshops";
    pSecurity.innerHTML = 'Participants should be logged in the virtual conference using their full names. Any participant without appropriate identification and not registered will be removed from the session. If you need guidance on how to change your name in the conference ask one of the organizers and they will help you. Participants are expected to participate in an active and authentic way through a kind, considerate and respectful dialogue, thus contributing to the continuity of the community. Also, to be aware of their environment and the rest of the people who participate and notify the organization in case you observe any situation that is dangerous or that violates this Code of Conduct, even if it seems to have no consequences.';

    h4Unexpected.innerHTML = "Unexpected behaviour and forms of harassment and discrimination";
    pUnexpected.innerHTML = "Will be considered as unacceptable behavior: Offensive comments, such as those related to gender, gender identity, gender expression, sexual orientation, physical abilities, mental health, physical appearance, ethnicity or religion. Unwanted comments about a person's lifestyle choices or practices, including those related to food, health, work, parenting, or drug use. Intentional and incorrect use of chosen pronouns or name when referring to a person. Sexual images or comments in public or online spaces, deliberate intimidation, bullying, stalking, following, harassing photography or recording, sustained disruption of talks, IRC chats, electronic meetings, physical meetings or other events, inappropriate physical contact, or unwelcome sexual attention; private communication that does not stop when requested. Other forms of harassment and discriminatory behavior include, but are not limited to: offensive verbal comments related to gender, gender identity and expression, sexual orientation, ability, physical appearance, body size, race, ethnicity, religion, socioeconomic status, caste or creed and are considered unacceptable. If any of these behaviors is detected or reported, participants will be asked to stop and to comply immediately.";

    h4Consequence.innerHTML = "Consequences for Harassment and Discrimination";
    pConsequence.innerHTML = "If a participant engages in harassing behavior, representatives of the community may take reasonable action they deem appropriate, including warning the offender, expulsion from any Women in Bioinformatics and Data Science LA event, or expulsion from mailing lists, IRC chats, discussion boards and other electronic communications channels to resolve the issue. This may include expulsion from Women in Bioinformatics and Data Science LA conference.";

    h4Report.innerHTML = "How to Report Harassment and Discrimination";
    pReport.innerHTML = 'If you are being harassed, notice that someone else is being harassed, or have any other concerns, please act to intercede or ask for help from any member of the Women in Bioinformatics and Data Science LA community, IRC chat admins, website admins, or organizers/representatives of any physical events put on under the auspices of Women in Bioinformatics and Data Science LA. We encourage you to report any incident of harassment, discrimination, or unacceptable behavior as soon as possible. The Women in Bioinformatics and Data Science LA leadership team will take great care to ensure that the assistance provided meets the needs of attendees who were affected.';

    introDiv.appendChild(h2);
    introDiv.appendChild(pIntro);

    securityDiv.appendChild(h4Security);
    securityDiv.appendChild(pSecurity);

    unexpectedDiv.appendChild(h4Unexpected);
    unexpectedDiv.appendChild(pUnexpected);

    consequenceDiv.appendChild(h4Consequence);
    consequenceDiv.appendChild(pConsequence);

    reportDiv.appendChild(h4Report);
    reportDiv.appendChild(pReport);

    conductSection.appendChild(introDiv);
    conductSection.appendChild(securityDiv);
    conductSection.appendChild(unexpectedDiv);
    conductSection.appendChild(consequenceDiv);
    conductSection.appendChild(reportDiv);
}


function renderPortuguese() {
    homeButton.innerHTML = "Início"
    weButton.innerHTML = "Sobre"
    projectsButton.innerHTML = "Projetos"
    conductButton.innerHTML = "Código de Conduta"
    supportButton.innerHTML = "Nos Apoie"
    contactButton.innerHTML = "Contato"
    h1About.innerHTML = "Mulheres na Bioinformática e Ciência de Dados LA";
    pAbout.innerHTML = "Somos uma comunidade de mulheres que atuam nas áreas de Bioinformática e Ciência de Dados criada em 2019 com o objetivo de divulgar e dar visibilidade à pesquisa realizada por mulheres nessas áreas. Também buscamos cr iar redes e colaboração dentro da comunidade de mulheres cientistas dos setores público e privado. Nossos projetos visam reunir pesquisadoras da América Latina que atuam nas áreas de biologia de sistemas, tecnologias ômicas, inteligência artificial, aprendizado de máquina, ciência de dados, mineração de dados e computação de alto desempenho com aplicações em biologia dos setores público e privado.";
    aboutButton.innerHTML = "Quem somos nós";
    h2Goals.innerHTML = "Nossa visão e missão";
    li1Goals.innerHTML = "Ciência e tecnologia são ambientes masculinizados nos quais as disparidades de gênero permanecem parte de sua estrutura. Por isso, criamos um espaço com uma perspectiva ampla para que todas as mulheres se sintam seguras e empoderadas.";
    li2Goals.innerHTML = "Queremos contribuir com espaços nos quais toda a comunidade possa desenvolver suas carreiras sem barreiras, que promova todos os aspectos que são importantes para a construção de uma sociedade e comunidade científica mais igualitária e diversa.";
    li3Goals.innerHTML = "Promovendo e visibilizando a pesquisa feminina nas áreas de Bioinformática e Ciência de Dados";
    li4Goals.innerHTML = "Incentivando as mulheres a estabelecer redes colaborativas de pesquisa";
    li5Goals.innerHTML = "Capacitando jovens cientistas a terem confiança em seu trabalho e capacidades";
    h2Events.innerHTML = "Nossos Eventos";
    h4Events1.innerHTML = "Participantes";
    h4Events2.innerHTML = "Resumos";
    h4Events3.innerHTML = "Palestrantes";
    h4Events4.innerHTML = "Países";
    pEvents.innerHTML = "Você pode verificar como foi o 1WBDS no nosso website e canal do YouTube.";
    h2Projects.innerHTML = "Nossos Projetos";
    h2Conference.innerHTML = "Congresso 2° WBDS";
    h3Conference.innerHTML = "Em Breve!";
    h2Workshops.innerHTML = "Cursos";
    h3Workshops.innerHTML = "Em Breve!";
    h2Articles.innerHTML = "Artigos";
    h3Articles.innerHTML = "Em Breve!";
    h2Voluntteer.innerHTML = "Seja um Voluntário";
    h2Propose.innerHTML = "Proponha um Projeto";
    h2Database.innerHTML = "Base de Dados Mulheres e LGBTQIA+";
    h2Support.innerHTML = "Nos Apoie";
    p1Support.innerHTML = "Se você gostou da nossa comunidade e gostaria de nos apoiar, verifique os links abaixo.";
    p2Support.innerHTML = "Somos uma comunidade sem fins lucrativos, portanto, qualquer ajuda será muito apreciada.";
    p3Support.innerHTML = "Também oferecemos uma variedade de oportunidades de patrocínio, incluindo espaço para anúncios em nosso programa de conferências e website. É uma oportunidade única para promover o seu negócio. Para saber mais, faça o download do folheto de patrocínio abaixo.";
    h5Contact.innerHTML = "Contate-nos por e-mail:";
    h5Media.innerHTML = "Nos siga nas redes sociais:";
}

function renderSpanish() {
    homeButton.innerHTML = "Inicio";
    weButton.innerHTML = "Acerca de";
    projectsButton.innerHTML = "Proyectos";
    conductButton.innerHTML = "Código de conducta";
    supportButton.innerHTML = "Apóyanos";
    contactButton.innerHTML = "Contacto";
    h1About.innerHTML = "Mujeres en Bioinformática y Ciencia de Datos LA";
    pAbout.innerHTML = "Somos una comunidad de mujeres que trabajan en las áreas de Bioinformática y Ciencia de Datos creada en 2019 con el objetivo de difundir y dar visibilidad a la investigación que realizan las mujeres en estas áreas. También buscamos crear redes y colaboración dentro de la comunidad de mujeres científicas del sector público y privado, nuestros proyectos tienen como objetivo reunir a investigadores de América Latina que trabajan en las áreas de biología de sistemas, tecnologías ómicas, inteligencia artificial, aprendizaje automático, ciencia de datos, minería de datos y computación de alto rendimiento con aplicaciones en biología del sector público y privado. ";
    aboutButton.innerHTML = "Quiénes somos";
    h2Goals.innerHTML = "Nuestra visión y misión";
    li1Goals.innerHTML = "La ciencia y la tecnología son entornos masculinos en los que las disparidades de género siguen siendo parte de su estructura. Por ello, hemos creado un espacio con una perspectiva amplia para que todas las mujeres se sientan seguras y empoderadas.";
    li2Goals.innerHTML = "Queremos contribuir con espacios en los que toda la comunidad pueda desarrollar sus carreras sin barreras, que promueva todos los aspectos que son importantes para la construcción de una sociedad y comunidad científica más igualitaria y diversa.";
    li3Goals.innerHTML = "Promover y visibilizar la investigación femenina en las áreas de Bioinformática y Ciencia de Datos";
    li4Goals.innerHTML = "Alentar a las mujeres a establecer redes de investigación colaborativas";
    li5Goals.innerHTML = "Empoderar a los jóvenes científicos para que tengan confianza en su trabajo y sus capacidades";
    h2Events.innerHTML = "Nuestros eventos";
    h4Events1.innerHTML = "Participantes";
    h4Events2.innerHTML = "Resúmenes";
    h4Events3.innerHTML = "Oradoras";
    h4Events4.innerHTML = "Países";
    pEvents.innerHTML = "Puede comprobar cómo fue el 1WBDS en nuestro sitio web y canal de YouTube.";
    h2Projects.innerHTML = "Nuestros proyectos";
    h2Conference.innerHTML = "2do Congreso WBDS";
    h3Conference.innerHTML = "¡Próximamente!";
    h2Workshops.innerHTML = "Cursos";
    h3Workshops.innerHTML = "¡Próximamente!";
    h2Articles.innerHTML = "Artículos";
    h3Articles.innerHTML = "¡Próximamente!";
    h2Voluntteer.innerHTML = "Conviértase en voluntario";
    h2Propose.innerHTML = "Proponer un proyecto";
    h2Database.innerHTML = "Base de Datos Mujeres y LGBTQIA+";
    h2Support.innerHTML = "Apóyanos";
    p1Support.innerHTML = "Si le gusta nuestra comunidad y desea apoyarnos, consulte los enlaces a continuación.";
    p2Support.innerHTML = "Somos una comunidad sin fines de lucro, por lo que cualquier ayuda será muy apreciada.";
    p3Support.innerHTML = "También ofrecemos una variedad de oportunidades de patrocinio, incluido un espacio para anuncios en nuestro programa de conferencias y sitio web. Es una oportunidad única para promover su negocio. Para obtener más información, descargue el folleto de patrocinio a continuación.";
    h5Contact.innerHTML = "Contáctenos por correo electrónico:";
    h5Media.innerHTML = "Síganos en las redes sociales:";
}