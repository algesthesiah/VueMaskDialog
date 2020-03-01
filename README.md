# vue-mask-dialog

> vue 遮罩对话框

## Usage

``` html

<template>
  <div>
    <div class="container">
      <h2>打开对话框</h2>
      <VueMaskDialog v-model="show" @submit="submit" title="标题">
        <div class="form">
          <span>自定义对话框</span>
        </div>
      </VueMaskDialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    submit(e) {
      alert(e)
    },
  },
}
</script>
```

### DEMO
- [在线网址](https://coding.algesthesiahunter.top/VueMaskDialog)
- [Online site](<https://algesthesiahunter.github.io/VueMaskDialog>)
### NPM

``` bash
# use npm
npm i vue-mask-dialog -S

# use yarn
yarn add vue-mask-dialog
```

### Import Plugins

``` js
import VueMaskDialog from 'vue-mask-dialog'
Vue.use(VueMaskDialog)

```
