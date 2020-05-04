<template>
  <div class="container">
    <div>
      <h1 class="title">
        practice-carecollabo
      </h1>
      <h2 class="subtitle">
        研修用
      </h2>
      <div class="links">
        <a
          href="/"
          class="button--green"
        >
          ユーザー登録（未設定）
        </a>
        <a
          href="/"
          class="button--grey"
        >
          サインイン（未設定）
        </a>
        <a
          href="/customers"
          class="button--grey"
        >
          利用者一覧
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
