const { Products } = require("../model/index");

const getAllProducts = (req, res) => {
  try {
    Products.getAll()
      .then((data) => {
        res.status(200).send(data[0]);
      })
      .catch((error) => res.status(400).json({ msg: error }));
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneProduct = (req, res) => {
  try {
    const { id } = req.params;

    Products.getById(id)
      .then(([[data]]) =>
        data
          ? res.status(200).json(data)
          : res.status(404).json({ msg: "not found" }),
      )
      .catch((error) => res.status(400).json({ msg: error }));
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getProductsByCategory = (req, res) => {
  try {
    const { category_id } = req.params;
    Products.getByCategory(category_id)
      .then((data) => res.status(200).json(data[0]))
      .catch((error) => res.status(400).json({ msg: error }));
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createProduct = (req, res) => {
  try {
    const { name, description, price, stock, category_id, image_url } = req.body;
    const product = new Products(name, description, price, stock, category_id, image_url);
    product
      .create()
      .then((data) => res.status(201).json({ msg: "Producto creado correctamente", data: product }))
      .catch((error) => res.status(400).json({ msg: error }));
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    Products.getById(id)
      .then(([[data]]) => {
        if (!data) {
          res.status(404).json({ msg: "producto no encontrado" });
        } else {
          Products.delete(id)
            .then(() => res.status(200).json({ msg: "producto borrada" }))
            .catch((error) => res.status(400).json({ msg: error }));
        }
      })
      .catch((error) => res.status(400).json({ msg: error }));
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    Products.getById(id)
      .then(([[data]]) => {
        if (!data) {
          res.status(404).json({ msg: "product not found" });
        } else {
          const { name, description, price, stock, category_id, image_url } =
            req.body;
          const product = new Products(
            name,
            description,
            price,
            stock,
            category_id,
            image_url,
          );
          product
            .update(id)
            .then(() => res.status(200).json({ msg: error }))
            .catch((error) => res.status(400).json({ msg: error }));
        }
      })
      .catch((error) => res.status(400).json({ msg: error }));
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  getProductsByCategory,
  createProduct,
  deleteProduct,
  updateProduct,

};
