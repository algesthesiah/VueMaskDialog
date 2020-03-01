<template>
  <transition name="fade">
    <div v-if="value" class="_dialog">
      <div class="dialog-main">
        <div class="title">
          {{ title }}
          <svg-icon
            @click="close"
            icon-class="delete"
            class="delete"
          ></svg-icon>
        </div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="footer">
          <div class="btns">
            <span class="btn cancel" @click="close">取 消</span>
            <button
              class="btn sub-btn"
              style="margin-left:8px"
              type="primary"
              @click="submit"
            >
              确 定
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'VueMaskDialog',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '标题',
    },
  },
  watch: {
    value(n) {
      const bodyEl = document.body
      if (n) {
        bodyEl.style.position = 'fixed'
        bodyEl.style.width = '100vw'
      } else {
        bodyEl.style.position = 'static'
        bodyEl.style.width = 'auto'
      }
    },
  },
  methods: {
    submit() {
      this.$emit('submit', 'submit')
    },
    close() {
      this.$emit('input', false)
    },
  },
}
</script>
<style lang="scss" scoped>
._dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2034;
  background-color: #00000080;
  .dialog-main {
    position: absolute;
    left: 50%;
    top: 180px;
    transform: translateX(-50%);
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    box-sizing: border-box;
    width: 460px;
    .title {
      display: flex;
      justify-content: space-between;
      padding: 16px 24px;
      padding-right: 15px !important;
      text-align: end;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      border-bottom: 1px solid #f0f0f0;
      .delete {
        font-size: 24px;
        cursor: pointer;
      }
    }
    .sub-btn {
      background-color: #0088f5;
      color: white;
      border-color: #0088f5;
      border-radius: 2px;
      cursor: pointer;
    }
    .btns {
      text-align: right;
      .cancel {
        color: #000000a6;
        cursor: pointer;
        display: inline-block;
        height: 32px;
        line-height: 30px;
        border-radius: 2px;
        border: 1px solid #d9d9d9;
      }
      .btn {
        height: 32px;
        padding: 0 15px;
        font-size: 14px;
      }
    }
    .footer {
      border-top: 1px solid #f0f0f0;
      padding: 10px 16px;
      text-align: right;
    }
    .body {
      padding: 24px;
      font-size: 14px;
    }
  }
}
</style>
