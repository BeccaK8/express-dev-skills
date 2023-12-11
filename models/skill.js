const skills = [
    {id: 1001, skill: 'JavaScript', level: 'Intermediate' },
    {id: 1002, skill: 'HTML', level: 'Advanced' },
    {id: 1003, skill: 'CSS', level: 'Advanced' },
    {id: 1004, skill: 'Express', level: 'Beginner' },
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
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

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, changedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, changedSkill);
}