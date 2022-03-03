const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',  async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const data = await Category.findAll({
    include: [{
      model: Product,
      required: true,
      group: 'category_id' 
    }]
  });
  res.json(data);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const data = await Category.findAll({
    include: [{
      model: Product,
      required: true,
      group: 'category_id' 
    }],
    where: {
      id: req.params.id
    }
  });
  res.json(data);
});

router.post('/', async (req, res) => {
  // create a new category
  const category = await Category.create({category_name: req.body.category_name});
  res.json(category);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const category = await Category.update({category_name: req.body.category_name}, {
    where: {
      id: req.params.id
    }
  });
  res.json(category);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(category);
});

module.exports = router;
