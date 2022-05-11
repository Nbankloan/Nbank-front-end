import erc20Factory from "./data/erc20Factory.json"
import loanMarket from "./data/loanMarket.json"
import NBank from "./data/NBank.json"
import nbankFactory from "./data/nbankFactory.json"
import NBT from "./data/NBT.json"
import NDeposit721 from "./data/NDeposit721.json"

const CONTRACTS = {
    erc20Factory:{address:"0x465A46D9D8CA6b1defAB8d7E9599A2499Be2EDc6",abi:erc20Factory},
    loanMarket:{address: "0xEC45605f01C5437e4120386FfB667e668049Bd3A",abi:loanMarket},
    NBank:{address:"0x3675bb23bB50E283Cc07933cCF4F8FE9f49C92Ad", abi:NBank},
    nbankFactory:{address:"0xdd057e4A4b23eD0a98ED4FAE19B1B23011354898", abi:nbankFactory},
    NBT:{address:"0xE93A356Ee83a81661bee947b4c7032Fa78c27161", abi:NBT},
    NDeposit721:{address:"0xBD0B452DD4c47A33001253c215A8Bc42650c72DE",abt:NDeposit721},
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByToken(name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByToken,
    getContractAddress
};
