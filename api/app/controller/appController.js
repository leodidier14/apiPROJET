//import
var Idea = require('../model/appModel.js');
var Idea2 = require('../model/appModel.js');

//get all the ideas
exports.list_all_ideas = function (req, res) {
  Idea.getAllIdeas(function (err, idea) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', idea);
    res.send(idea);
  });
};

//get one idea with his ID
exports.read_an_idea = function (req, res) {
  Idea.getIdeaById(req.params.idevent, function (err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};

//post an idea
exports.create_an_idea = function (req, res) {
  var new_idea = new Idea(req.body);
  Idea.createIdea(new_idea, function (err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};

//put one idea with his ID
exports.update_an_idea = function (req, res) {
  Idea.updateById(req.params.idevent, new Idea(req.body), function (err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};

//delete one idea with his ID
exports.delete_an_idea = function (req, res) {
  Idea.delete(req.params.idevent, function (err, idea) {
    if (err)
      res.send(err);
    res.json({
      message: 'successfully delete'
    });
  });
};


//----------------------------------------------------LIKE
exports.create_an_idea2 = function(req, res) {
  var new_idea = new Idea2(req.body);
  console.log(new_idea);
  Idea.createIdea2(req.params.idevent, new_idea, function(err, idea) {
    
    if (err)
      res.send(err);
    res.json(idea);
  });
// }
};


exports.delete_an_idea2 = function(req, res) {
  var new_idea = new Idea2(req.body);
  Idea.delete2( req.params.idevent, new_idea, function(err, idea) {
    if (err)
      res.send(err);
    res.json({ message: 'Idea successfully deleted' });
  });
};

exports.delete_an_idea3 = function(req, res) {
  var new_idea = new Idea2(req.body);
  Idea.delete3( req.params.idevent, new_idea, function(err, idea) {
    if (err)
      res.send(err);
    res.json({ message: 'Idea successfully deleted' });
  });
};

exports.read_an_idea2= function(req, res) {
  Idea.getIdeaById2(req.params.idevent, function(err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};

exports.update_an_idea2 = function(req, res) {
  Idea.updateById2(req.params.idevent, new Idea2(req.body), function(err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};