const Database = require("@replit/database")
const db = new Database();

const createProfile = async (memberID, guildID) => {
  let smID = parseInt(memberID);
  console.log('\n\n\n\n\n\n\n');
  let profileData = await db.get(smID).then((value) => {
    console.log(value);
  });
  console.log("before",profileData);
  if (!profileData) {
    await db.set(smID, {
      'Bronze':10,
      'Silver':0,
      'Gold':0
    });
  }
};

const deleteProfile = async (memberID) => {
  let smID = parseInt(memberID);
  console.log('\n\n\n\n\n\n\n');
  let profileData = await db.get(smID).then((value) => {
    console.log(value);
  });
  if (profileData) {
    await db.delete(smID).then((res) => {
      console.log('Deleted',res);
    });
  }
};

const listProfile = async () => {
  console.log("\n\n\nProfiles");
  await db.getAll().then(res => {
    console.log(res);
  })
  console.log("End Profile");
};

module.exports = {
  createProfile,
  deleteProfile,
  listProfile,
};