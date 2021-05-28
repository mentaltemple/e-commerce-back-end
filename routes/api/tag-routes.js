const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

//GET route
router.get("/", (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

//GET BY ID route
router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

//POST route
router.post("/", (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//UPDATE route
router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tagData);

    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE route
router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: res.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;