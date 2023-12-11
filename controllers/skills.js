const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Developer Skills'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Developer Skill Details'
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: "Add New Developer Skill" });
}

function create(req, res) {
    // model creates the data
    Skill.create(req.body);
    // redirect since data changed
    res.redirect('/skills');
}