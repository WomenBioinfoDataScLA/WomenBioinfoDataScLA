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
const weButton  = document.getElementById('whoweare-button');
const projectsButton = document.getElementById('projects-button');
const conductButton = document.getElementById('conduct-button');
const supportButton = document.getElementById('support-button');
const contactButton = document.getElementById('contact-button');
const spanishButton  = document.getElementById('spanish-button');
const portugueseButton  = document.getElementById('portuguese-button');


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
    renderWeSection();
    deactive(homeButton);
    active(weButton);
    deactive(conductButton);
});

conductButton.addEventListener('click', () => {
    cleanBody();
    disableElement(weSection);
    renderconductSection();
    deactive(homeButton);
    deactive(weButton);
    active(conductButton);
});

projectsButton.addEventListener('click', () => {
});

supportButton.addEventListener('click', () => {
});

contactButton.addEventListener('click', () => {
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
        li.className = "member"

        const member = $(`
            <img src="./assets/img/${element.img}"  alt="${element.name}-img">
            <figcaption class="name">${element.name}</figcaption>
            <figcaption>${element.filiation}</figcaption>
        `);
        
        member.appendTo(figure);
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