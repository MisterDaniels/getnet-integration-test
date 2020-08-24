export const namespaced = true;

export const state = {

    company: { }

}

export const mutations = {

    SET_COMPANY(state, company) {
        state.company = company;
    }

}

export const actions = {

    loadCompany({ commit }) {
        const company = {
            name: "Empresa de Teste",
            getnet: {
                isActive: true,
                sellerId: "fd75d5d1-4552-40f4-bb20-8d0e31a21c9e",
                hasCredit: true,
                hasDebit: true
            }
        }

        commit('SET_COMPANY', company);
    }

}