import GetnetAurynService from '@/services/GetnetAurynService';

export const namespaced = true;

export const state = {

    form: { }

}

export const mutations = {

    SET_FORM(state, form) {
        state.form = form;
    }

}

export const actions = {

    payWithCredit({ dispatch, commit }, formData) {
        return GetnetAurynService.pay.credit(formData)
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    },

    payWithDebit({ dispatch, commit }, formData) {
        return GetnetAurynService.pay.debit(formData)
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

}