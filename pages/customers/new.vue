<template>
    <div>
      <a
          href="/"
          class="button--grey"
        >
          TOP画面へ
        </a>
        <a
          href="/customers"
          class="button--grey"
        >
          利用者一覧へ
        </a>
        <h2 >新規利用者登録</h2>
<br>

<form @submit.prevent="submitCustomer">

<div>
<input
  v-model="name"
  type="text"
  placeholder="名前を入力して下さい">
</div>
<div></div>



<div>
<button type="submit">利用者を新規登録する</button>
</div>
</form>
</div>
</template>

<script>

export default {
  async fetch({store}){
    await store.dispatch('customerStore/getCustomers')
  },
  data(){
    return{
      name: ''
    }
  },
  computed: {
    customers (){
      return this.$store.getters['customerStore/customers']
    }
  },
  methods: {
    submitCustomer(){
      if(this.name){
        this.$store.dispatch('customerStore/submitCustomer',this.name)
        this.name = ''
      }
    }
  }
}
</script>

<style scoped>

</style>