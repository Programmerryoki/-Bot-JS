const Database = require("@replit/database")
const db = new Database();

const pmMoney = async (memberID, currency, amount) => {
  let smID = parseInt(memberID);
  console.log('\n\n\n\n\n\n\n');
  let profile = await db.get(smID);
  console.log("BP",profile);
  profile[currency] += amount;
  console.log(profile);
  await db.set(smID, profile);
};

module.exports = {
  pmMoney
};
