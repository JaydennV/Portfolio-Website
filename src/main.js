import './style.css'
import finalRemedyImage from './assets/final-remedy.png'
import gameyReviewsImage from './assets/gamey-reviews.png'
import portfolioWebsiteImage from './assets/portfolio-website.png'
import amalgamationIdealizationImage from './assets/amalgamation-idealization.png'

window.addEventListener('load', init);
const projectContainer = document.getElementById('projects');

const skills = ['Javascript', 'MySQL', 'HTML', 'CSS', 'Laravel', 'Tailwind', 'PHP'];

const projects = [
    {
        'name': 'Final Remedy',
        'description': 'An immersive 2D game built with ExcaliburJS, featuring survival-horror elements and a captivating story which makes you think of the consequences of your actions.',
        'link': 'https://jaydennv.itch.io/final-remedy',
        'tags': ['JavaScript', 'ExcaliburJS', 'HTML'],
        'backgroundImage': finalRemedyImage,
    },
    {
        'name': 'Gamey Reviews',
        'description': 'A secure web application that allows users to submit and read reviews for their video games of choice, built with Laravel and Tailwind CSS.',
        'link': 'https://example.com/gamey-reviews',
        'tags': ['Laravel', 'HTML', 'Tailwind'],
        'backgroundImage': gameyReviewsImage,
    },
    {
        'name': 'Portfolio Website',
        'description': 'A personal portfolio website showcasing my projects, skills, and experience as a full-stack web developer.',
        'link': 'https://jaydennv.github.io/Portfolio-Website/',
        'tags': ['JavaScript', 'HTML', 'CSS'],
        'backgroundImage': portfolioWebsiteImage,

    },
    {
        'name': 'Amalgamation Idealization',
        'description': 'An immersive point-and click game showcasing a dystopian future where AI has taken over the world and where the player gets invited to make choices.',
        'link': 'https://project.cmi.hr.nl/2026_2027/tle_t4',
        'tags': ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
        'backgroundImage': amalgamationIdealizationImage,
    }
    // {
    //     'name': 'Another Project',
    //     'description': 'A brief description of another project.',
    //     'link': 'https://example.com/another-project',
    //     'tags': ['Technology 4', 'Technology 5', 'Technology 6'],
    // }
    // {
    //     'name': 'Yet Another Project',
    //     'description': 'A brief description of yet another project.',
    //     'link': 'https://example.com/yet-another-project',
    //     'tags': ['Technology 7', 'Technology 8', 'Technology 9'],
    // }
]





function init() {
    projectContainerFiller()
    skillAdders()
}

function projectContainerFiller() {
    const observer = 'IntersectionObserver' in window
        ? new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    currentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 })
        : null;

    projects.forEach((project, index) => {
        const projectRow = document.createElement('div');
        projectRow.classList.add('project-row');

        const projectElement = document.createElement('article');
        projectElement.classList.add('project-card');


        const projectName = document.createElement('h2');
        projectName.textContent = project.name;
        projectElement.appendChild(projectName);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectElement.appendChild(projectDescription);



        const projectTags = document.createElement('ul');
        projectTags.classList.add('project-tags');
        project.tags.forEach((tag) => {
            const tagItem = document.createElement('li');
            tagItem.classList.add('project-tag');
            tagItem.textContent = tag;
            projectTags.appendChild(tagItem);
        });
        projectElement.appendChild(projectTags);

        const projectimage = document.createElement('img');
        projectimage.src = project.backgroundImage;
        projectimage.alt = `${project.name}`;
        projectimage.classList.add('project-image');
        if (index % 2 === 0) {
            projectRow.append(projectimage, projectElement);
        } else {
            projectRow.append(projectElement, projectimage);
        }
        projectContainer.appendChild(projectRow);
        if (observer) {
            observer.observe(projectElement);
            observer.observe(projectimage);
        } else {
            projectElement.classList.add('is-visible');
            projectimage.classList.add('is-visible');
        }

        const projectArrow = document.createElement('p');
        projectArrow.textContent = '↗';
        projectArrow.classList.add('project-arrow');
        projectElement.appendChild(projectArrow);


        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = '';
        projectElement.appendChild(projectLink);


        eventAdders(projectLink, projectElement);
    });


}

function skillAdders() {
    const skillsContainer = document.getElementById('skills');
    skills.forEach((skill) => {
        const skillElement = document.createElement('ul');
        skillElement.classList.add('project-tag');
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });

}


function eventAdders(projectLink, projectElement) {
    projectElement.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(projectLink.href, '_blank');

        if (!isset(projectLink.href)) {
            console.error('Project link is not set.');
            return;
        }
    });

    const arrow = document.querySelector('#arrow');
    arrow.addEventListener('click', arrowClickHandler);
}

function arrowClickHandler() {

    window.scrollTo({
        top: projectContainer.offsetTop,
        behavior: 'smooth'
    });
}
