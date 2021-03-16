let navMySkills = document.getElementById('navMySkills');
let navMyName = document.getElementById('navMyName');
let navMyProjects = document.getElementById('navMyProjects');
let navMyContacts = document.getElementById('navMyContacts');

navMySkills.onclick = function() {
    navMySkills.style.backgroundColor = 'rgba(0, 0, 0, 0.096)';
    navMyName.style.backgroundColor = 'transparent';
    navMyProjects.style.backgroundColor = 'transparent';
    navMyContacts.style.backgroundColor = 'transparent';   
}

navMyName.onclick = function() {
    navMyName.style.backgroundColor = 'rgba(0, 0, 0, 0.096)';
    navMySkills.style.backgroundColor = 'transparent';
    navMyProjects.style.backgroundColor = 'transparent';
    navMyContacts.style.backgroundColor = 'transparent';   
}

navMyProjects.onclick = function() {
    navMyProjects.style.backgroundColor = 'rgba(0, 0, 0, 0.096)';
    navMyName.style.backgroundColor = 'transparent';
    navMySkills.style.backgroundColor = 'transparent';
    navMyContacts.style.backgroundColor = 'transparent';   
}

navMyContacts.onclick = function() {
    navMyContacts.style.backgroundColor = 'rgba(0, 0, 0, 0.096)';
    navMyName.style.backgroundColor = 'transparent';
    navMyProjects.style.backgroundColor = 'transparent';
    navMySkills.style.backgroundColor = 'transparent';   
}
