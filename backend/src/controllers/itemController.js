import Item from "../models/itemModel.js";

export const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

export const getItems = async (req, res) => {
  const filterName = req.query.name;
  const filterMinPrice = req.query.minPrice;
  const filterMaxPrice = req.query.maxPrice;

  const query = {};
  if (filterName) {
    query.name = filterName;
  }
  if (filterMinPrice) {
    if (!query.price) query.price = {};
    query.price.$gte = filterMinPrice;
  }
  if (filterMaxPrice) {
    if (!query.price) query.price = {};
    query.price["$lte"] = filterMaxPrice;
  }

  const items = await Item.find(query);

  res.status(200).json(items);
};

export const deleteItem = async (req, res) => {
  // TODO2: implement this function
  // HINT: you can serve the internet and find what method to use for deleting item.
  await Item.deleteOne({
    _id: req.params.id
  });
  res.status(200).send("Delete Successfully");
}

export async function filterItems(filterName, lowerPrice, upperPrice) {
    // Assuming items is an array of items you want to filter
    res.status(501)
}