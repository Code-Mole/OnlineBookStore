const getcontacts = async (req, res) => {
  res.send("contacts");
};

const getcontact = async (req, res) => {
  res.send(`get with ${req.params.id}`);
};

const createcontact = async (req, res) => {
  res.send("createcontact");
};

const updatecontact = async (req, res) => {
  res.send(`update with ${req.params.id}`);
};

const deletecontact = async (req, res) => {
  res.send(`delete with ${req.params.id}`);
};

export { getcontacts, getcontact, createcontact, updatecontact, deletecontact };
