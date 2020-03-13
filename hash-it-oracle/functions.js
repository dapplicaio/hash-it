require actions = "./actions.js";

//use log action with two params
async function log_with_two_params(user_data, document_hash) {
    try {
        actions.hash_log_calling(user_data, document_hash);
    } catch (e) {
        console.log(e);
    }
}

//use log action with one param
async function log_with_one_param(document_hash) {
    try {
        actions.hash_log_calling("", document_hash);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    log_with_two_params: log_with_two_params,
    log_with_one_param: log_with_one_param
}