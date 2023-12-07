const { userSchema } = require("../models");

const getUser = () => {
  return userSchema.find();
};

const addUser =  (body)=>{
  const user = new userSchema({
    firstName: body.firstName,
    LastName: body.LastName,
    email: body.email,
    password: body.password,

  });

  return user.save(body);
}
module.exports = { getUser, addUser };