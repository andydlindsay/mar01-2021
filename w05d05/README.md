# W05D05 - Midterm Project Kickoff

### Takeaways
* put everything we learned into use
* teamwork
* to connect all the diff subjects together
* turn an idea into reality
* collab, planning, building to completion
* git flow, merge conflicts
* make mistakes

### Pick a Project

### User Stories
* describe the way a user will interact with your app
* As a _____, I can ______, because ______, AND _____

* As a user, I can see a list of available maps, because I am interested in things in my area

* As a user, I can see the menu items for a restaurant, because I am hungry

* As a logged-in user
* As a non-logged-in user
* As an admin user

* As a logged-in user, I can favourite a posting, because I want to review it later, AND the heart icon turns red (ARIA)

### Pick out the nouns
* nouns === resources === tables
* ERD

### Routes to access the resources

GET /maps
GET /maps/:map-id

* REST

B  GET  /users
R  GET  /users/:id
E  POST /users/:id
A  POST /users
D  POST /users/:id/delete

planning/
user-stories.md
routes.md
erd.png

### MVP
* most valuable primate
* minimum viable product
* MVD minimum viable demo
* If you don't show it, don't build it
* What are we going to show in 5 minutes?

### Front End
* How do we display the info from those routes?
* Mockup/wireframe
moqups, balsamiq, draw.io, figma, whimsical
* STEAL your designs, get "inspiration" from the websites you visit

### User Login
* Don't do it

```js
// GET /login/7
app.get('/login/:id', (req, res) => {
  // cookie-session
  req.session.user_id = req.params.id;
  // cookie-parser
  res.cookie('user_id', req.params.id);

  res.redirect('/');
});
```

### Tech Choices
* Back End: Node, express, postgres
* Front End: HTML, CSS, JS, jQuery, flexbox, CSS grid

### SPA or multi-page
* not mutually exclusive
* /api data routes that return json
* /html top-level
GET /users === HTML page
GET /api/users === json

### Splitting up the work
* vertical === each team member works on a diff part of the stack
* horizontal === all team members working on the same layer
* pair programming ftw

### Communication
* I don't care how you do it, just communicate



