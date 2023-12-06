const db = require('../config/connection');
const { Post } = require('../models');
const postSeeds = require('./postSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Post', 'posts');

  await Post.create(postSeeds);

  console.log('all done!');
  process.exit(0);
});
