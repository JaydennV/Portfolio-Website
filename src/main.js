import './style.css'

window.addEventListener('load', init);
const projectContainer = document.getElementById('projects');

const projects = [
    {
        'name': 'Final Remedy',
        'description': 'An immersive 2D game built with ExcaliburJS, featuring survival-horror elements and a captivating story which makes you think of the consequences of your actions.',
        'link': 'https://example.com/final-remedy',
        'tags': ['JavaScript', 'ExcaliburJS', 'HTML'],
        'backgroundImage': 'url(/src/assets/final-remedy.png)',
    },
    {
        'name': 'Gamey Reviews',
        'description': 'A secure web application that allows users to submit and read reviews for their video games of choice, built with Laravel and Tailwind CSS.',
        'link': 'https://example.com/gamey-reviews',
        'tags': ['Laravel', 'HTML', 'Tailwind'],
        'backgroundImage': 'url(/src/assets/gamey-reviews.png)',
    },
    {
        'name': 'Portfolio Website',
        'description': 'A personal portfolio website showcasing my projects, skills, and experience as a full-stack web developer.',
        'link': 'https://example.com/portfolio-website',
        'tags': ['JavaScript', 'HTML', 'CSS'],
        'backgroundImage': 'url(/src/assets/portfolio-website.png)',

    },
    {
        'name': 'Amalgamation Idealization',
        'description': 'An immersive point-and click game showcasing a dystopian future where AI has taken over the world and where the player gets invited to make choices.',
        'link': 'https://project.cmi.hr.nl/2026_2027/tle_t4',
        'tags': ['Technology 1', 'Technology 2', 'Technology 3'],
        'backgroundImage': 'url(/src/assets/amalgamation-idealization.png)',
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
}

function projectContainerFiller() {
    projects.forEach((project) => {
        const projectElement = document.createElement('article');
        projectElement.classList.add('project');


        const projectName = document.createElement('h2');
        projectName.textContent = project.name;
        projectElement.appendChild(projectName);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectElement.appendChild(projectDescription);

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'View project';
        projectElement.appendChild(projectLink);

        const projectTags = document.createElement('ul');
        project.tags.forEach((tag) => {
            const tagItem = document.createElement('li');
            tagItem.textContent = tag;
            projectTags.appendChild(tagItem);
        });
        projectElement.appendChild(projectTags);

        const projectimage = document.createElement('img');
        projectimage.src = project.backgroundImage.slice(4, -1).replace(/"/g, "");
        projectimage.alt = `${project.name}`;
        projectElement.appendChild(projectimage);

        projectContainer.appendChild(projectElement);
    });
}
