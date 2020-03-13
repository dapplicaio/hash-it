const globals = require("./global_constants.js");

async function log_hash_calling(user_data, document_hash) {
  await globals.EOS.transaction({
    actions: [
      {
        account: globals.CONTRACT_NAME,
        name: "hashlog",
        authorization: [
          {
            actor: globals.CONTRACT_NAME,
            permission: "active"
          }
        ],
        data: {
          UserData: user_data,
          DocumentHash: document_hash
        }
      }
    ]
  });
}

module.exports = {
  log_hash_calling: log_hash_calling
};
