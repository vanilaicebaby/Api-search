const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'Testing products ' });
};

const products = async (req, res) => {
  res.status(200).json({ msg: 'Testing one products ' });
};

module.exports = {
  getAllProducts,
  products,
};
