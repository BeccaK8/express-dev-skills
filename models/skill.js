const skills = [
    {id: 1001, skill: 'JavaScript', level: 'Intermediate' },
    {id: 1002, skill: 'HTML', level: 'Advanced' },
    {id: 1003, skill: 'CSS', level: 'Advanced' },
    {id: 1004, skill: 'Express', level: 'Beginner' },
];

module.exports = {
    getAll,
    getOne,
    create
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = new Date() % 1000000;
    skills.push(skill);
}