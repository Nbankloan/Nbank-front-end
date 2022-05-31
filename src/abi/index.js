import erc20Factory from "./data/erc20Factory.json"
import loanMarket from "./data/loanMarket.json"
import NBank from "./data/NBank.json"
import nbankFactory from "./data/nbankFactory.json"
import NBT from "./data/NBT.json"
import NDeposit721 from "./data/NDeposit721.json"

const CONTRACTS = {
    erc20Factory:{address:"0x56a7f24f7Ed2A8cA3B5FF54AF46c943A37a8bf50",abi:erc20Factory},
    loanMarket:{address: "0xEb14FA64Ab89359a49fA5971e20C99b2703C9510",abi:loanMarket},
    NBank:{address:"0xB103544C3A66E92b5328eE51f587618a4c8b3104", abi:NBank},
    nbankFactory:{address:"0x57Cf2A0dB9D21aF9E49797c9FA68162014d52299", abi:nbankFactory},
    NBT:{address:"0xA361dA24Db408088ee13050630E8A3cE239c07B7", abi:NBT},
    NDeposit721:{address:"0x1c3D82f7983fE1AAC11C11cEEf735735Fc0e0C5d",abt:NDeposit721},
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
