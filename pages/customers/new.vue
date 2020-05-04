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
        <ul>
            <div class="input_name">利用者氏名</div>
            <div>
            <input id="name" type="text" v-model=name @change="onChange">
            </div>
        <br>
         <p class="radio_label">性別</p>
      <input
        type="radio"
        name="gender"
        id="male"
        value="男性"
        v-model="picked"
        @change="onChange"
      />
      <label for="male">
        <RadioInSvg v-if="maleFlag" />
        <RadioOutSvg v-else />
        男性
      </label>
      <br />
      <input
        type="radio"
        name="gender"
        id="female"
        value="1"
        v-model="picked"
        @change="onChange"
      />
      <label for="female">
        <RadioInSvg v-if="femaleFlag" />  <!-- femaleFlagがtrueの場合 -->
        <RadioOutSvg v-else />  <!-- femaleFlagがfalseの場合 -->
        女性
      </label>

      <p class="column">年齢</p>
            <select type="number" name="age" v-model.number="age" @change="onChange">
            <option v-for="n in 70" v-bind:key="n + 50">{{ n + 50 }}才</option>
            </select>
        </ul>
<br>
        <ul style="justify-content: center; margin-bottom:0px;">
        <button type="button" style="width:110px;" @click="regist">新 規 登 録</button>
      </ul>
    </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>

</style>