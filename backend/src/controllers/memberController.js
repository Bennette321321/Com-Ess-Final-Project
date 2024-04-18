import Member from "../models/memberModel.js";
import Item from "../models/itemModel.js";

export const createMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

export const getMembers = async (req, res) => {
  const members = await Member.find();
  res.status(200).json(members);
};

export const deleteMember = async (req, res) => {
  const id = req.params.id;
  const members = await Member.find({ _id: id });
  const name = members[0].name;

  await Item.deleteMany({
    name: req.params.name,
  });

  await Member.deleteOne({
    _id: req.params.id,
  });
  res.status(200).send("OK");
};
