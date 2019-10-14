const state = {
    pwd: "12345678"
};
const mutations = {
    mutationPwd(state: any, newPwd: string) {
        state.pwd = newPwd;
    }
};
const actions = {
};

export default {
    state,
    mutations,
    actions,
}
