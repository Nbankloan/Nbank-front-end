
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('nbankFactory', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
const actions = { 
addBlackList ({rootState},{ User }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.addBlackList(User).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.addBlackList(User).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
			})
			},
bankName ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.bankName(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
creatBank ({rootState},{ manager,_bankName }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.creatBank(manager,_bankName).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.creatBank(manager,_bankName).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
			})
			},
createBankTime ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.createBankTime(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
newBank ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.newBank().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
owner ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.owner().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
removeBlackList ({rootState},{ User }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.removeBlackList(User).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.removeBlackList(User).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
			})
			},
renounceOwnership ({rootState}  ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.renounceOwnership().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.renounceOwnership().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
			})
			},
transferOwnership ({rootState},{ newOwner }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.transferOwnership(newOwner).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.transferOwnership(newOwner).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
			})
			},
userBank ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.userBank(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
}
			export default {
			namespaced: true,
			mutations,
			state,
			actions
		}
	