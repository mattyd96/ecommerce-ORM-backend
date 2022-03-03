const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',  async (req, res) => {
  // find all categories with associated products

  try {
    const data = await Category.findAll({
      include: [{
        model: Product,
        required: true,
        group: 'category_id' 
      }]
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
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
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create({category_name: req.body.category_name});
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update({category_name: req.body.category_name}, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(category);
  } catch (err) {
    res.json(500).json(err);
  }
  
});

module.exports = router;
