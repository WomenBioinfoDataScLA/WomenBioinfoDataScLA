const ham = document.getElementById('ham-list');
const cross = document.getElementById('cross-icon');
const navOptions = document.getElementById('nav-options');

const aboutSection = document.getElementById('about');
const goalsSection = document.getElementById('goals');
const firsteventSection = document.getElementById('1stwbds');
const projectsSection = document.getElementById('projects');
const weSection = document.getElementById('who-we-are');

const homeButton = $('#home-button');
const weButton = $('#whoweare-button');

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
}

weButton.on('click', () => {
    cleanBody();
    renderWeSection();
    active(weButton);
    deactive(homeButton);
})

function renderWeSection() {
    const weSectionContent = $(`
    <h2>Commitee</h2>
    <ul class="memberslist">
        <li class="member">
            <figure>
                <img alt="#" src="assets/img/ana.jpg">
            </figure>
            <p>Ana Julia Velez Rueda, Universidad Nacional de Quilmes - CONICET, Argentina</p>
        </li>
        <li class="member">
            <figure>
                <img alt="#" src="assets/img/lucy.jpeg">
            </figure>
            <p>Lucy Jiménez, Universidad de Los Andes, Colombia</p>
        </li>
        <li class="member">
            <figure>
                <img alt="#" src="assets/img/cristina.png">
            </figure>
            <p>Cristina Marino-Buslje, Fundación Instituto Leloir - CONICET, Argentina</p>
        </li>
        <li class="member">
            <figure>
                <img alt="#" src="assets/img/liliane.png">
            </figure>
            <p>Liliane Conteville, Fundação Oswaldo Cruz - Rio de Janeiro, Brazil</p>
        </li>
        <li class="member">
            <figure>
                <img alt="#" src="assets/img/mercedes.jpeg">
            </figure>
            <p>Mercedes Didier Garnham, Genetics and bioinformatics Lab, IIB-UNSAM, Argentina</p>
        </li>
        <li class="member">
            <figure>
                <img alt="#" src="assets/img/ivana.jpg">
            </figure>
            <p>Ivana Feldfeber - Mumuki Project, Argentina</p>
        </li>
        <li class="member">
            <figure>
                <img alt="#" src="#">
            </figure>
            <p>Augustina Nardo</p>
        </li>
    </ul>
    `);
    weSectionContent.appendTo(weSection);
}