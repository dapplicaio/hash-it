#include <hashit.hpp>

//create log on blockchain
ACTION hashit::hashlog(std::string UserData, std::string DocumentHash) {
  require_auth(CONTRACT_NAME);
  require_recipient(CONTRACT_NAME);
}

EOSIO_DISPATCH(hashit, (hashlog))