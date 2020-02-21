exports.seed = function(knex) {
  return knex('projects').insert([
    {
      id: 1, 
      project_name: 'Remodel House',
      project_desc: '2020 house remodel',
      project_completed: false
    },
    {
      id: 2, 
      project_name: 'Find a job',
      project_desc: 'How to make 6 figures',
      project_completed: false
    },
    {
      id: 3, 
      project_name: 'Make Breakfast',
      project_desc: 'Hardest project ever',
      project_completed: false
    }
  ]);
};