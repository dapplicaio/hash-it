#include <eosio/eosio.hpp>
//enter contract name
#define CONTRACT_NAME eosio::name("hashit")

CONTRACT hashit : public eosio::contract {
  public:
    using contract::contract;

    //action, which creates a log on blockchain
    ACTION hashlog(std::string UserData, std::string DocumentHash);
};