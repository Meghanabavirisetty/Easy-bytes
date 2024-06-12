document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    
    fetch('/api/projects')
        .then(response => response.json())
        .then(projects => {
            projects.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.githubLink}">GitHub</a>
                `;
                projectList.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));

    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
        })
        .catch(error => console.error('Error sending message:', error));
    });
});
