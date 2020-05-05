import firebase from '@/plugins/firebase'

export const state = () => ({
    customers: []
})

export const getters = {
    customers: state => {
        return state.customers
    }
}

export const actions ={
    getCustomer({ commit }){
        firebase.firestore().collection('customers').orderBy("name", "asc").get()
        .then((res) => {
            const customers = []
            res.forEach(x =>{
                console.log(x.data())
                customers.push(x.data())
            })
            commit('getCustomers', customers)
        })
    },
    submitCustomer({ dispatch, commit},name){
        firebase.firestore().collection('customers').add({})
        .then((res)=>{
            firebase.firestore().collection('customers').doc(res.id)
            .set({
                name: name,
                id: res.id,
            }).then(()=>{
                dispatch('getCustomer')
                console.log(name, res.id)
            })
        })
    }
}

export const mutations = {
    submitCustomer(state, customers){
        state.customers = customers
    }
}