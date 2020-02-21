exports.seed = function(knex) {
  return knex('resources').insert([
    {
      id: 1, 
      resource_name: 'Lowes',
      resource_desc: 'DIY description'
    },
    {
      id: 2, 
      resource_name: 'Lambda',
      resource_desc: 'Lambda description',
    },
    {
      id: 3, 
      resource_name: 'Grandma',
      resource_desc: 'Grandmas Cookbook'
    },
  ]);
};