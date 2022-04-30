import erc20Factory from "./data/erc20Factory.json"
import loanMarket from "./data/loanMarket.json"
import NBank from "./data/NBank.json"
import nbankFactory from "./data/nbankFactory.json"
import NBT from "./data/NBT.json"
import NDeposit721 from "./data/NDeposit721.json"

const CONTRACTS = {
    erc20Factory:{address:"0x508a8068Afb86AD772927917a62bc13787cbaF8C",abi:erc20Factory},
    loanMarket:{address: "0x299cc9cB5151c3B2bD5826CeF8F98b4151267465",abi:loanMarket},
    NBank:{address:"0xee3b12acA7eCc34f900024e86B2b9a42d63AB329", abi:NBank},
    nbankFactory:{address:"0x1Aa203ee0C15b836E88BFe7c79BC209dA65E3202", abi:nbankFactory},
    NBT:{address:"0x5D0577Fc873f6c82f57c4e177fe57B26cde6FC6e", abi:NBT},
    NDeposit721:{address:"0x1CC79E1457fD02E7838aF1dAe96e9CE344721890",abt:NDeposit721},
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
