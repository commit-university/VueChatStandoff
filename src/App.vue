<template>
  <div id="app">
    <img style="text-align: center;" src="./assets/logo.png">
    <h1 style="text-align: center;">{{ msg }}</h1>
    <ul>
      <li>Prima regola del <b>{{ projectName }}</b>: Non parlate mai del {{ projectName }}</li>
      <li>Seconda regola del <b>{{ projectName }}</b>: Non dovete parlare mai del {{ projectName }}</li>
      <li>Terza regola del <b>{{ projectName }}</b>: se qualcuno grida basta, si accascia, è spompato, fine del combattimento</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Benvenuto nel Chat Stand off',
      projectName: 'Chat Stand Off'
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}

</style>
