<template>
  <div class="input_link__container">
    <div v-if="isEdit" class="editable_field">
      <InputText
        :id="`InputText_${id}`"
        ref="inputLinkRef"
        v-model="inputLink"
        :placeholder="placeholder"
        aria-describedby="url-help"
        @blur="blurInput"
        @change="changeValue"
        @keydown.enter="endEditing"
      />
      <small v-if="isCorrect" id="url-help">URL введен некорректно</small>
    </div>
    <div v-else class="disactive_field">
      <span :class="getClass" @click="goToLink">{{ titleLink ? titleLink : inputLink }}</span>
      <img
        src="../assets/edit.svg"
        alt="edit"
        @click="editActive"
      >
    </div>
  </div> 
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import InputText from 'primevue/inputtext'

export default defineComponent({
  name: 'CustomInputLink',
  components: { InputText },
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Заполнить'
    }
  },
  setup(props, { emit }) {
    const inputLinkRef = ref(null)
    const isEdit = ref(true)
    const isCorrect = ref(false)
    const inputLink = ref(props.modelValue)
    const titleLink = ref('')
    const getClass = computed(() => titleLink.value ? 'title_link' : '')
    const changeValue = (): void => { 
      const idx: number = inputLink.value.indexOf(`${props.placeholder}`)
      if (idx === -1 || idx > 0) { isCorrect.value = true }
      else {
        titleLink.value = inputLink.value.slice(8)
        isCorrect.value = false
        isEdit.value = false
      }
      emit(`change`, inputLink.value)
    }
    const editActive = (): void => { isEdit.value = true }
    const blurInput = (): void => { if (inputLink.value === '') { isCorrect.value = false } }
    const endEditing = (): void => { inputLinkRef?.value?.$el?.blur() }
    const goToLink = (): void => { emit('goToLink') }

    return { inputLinkRef, isEdit, isCorrect, inputLink, titleLink, getClass, changeValue, editActive, blurInput, endEditing, goToLink }
  }
})
</script>



<style scoped>
.input_link__container {
  margin-bottom: 12px;
}
.disactive_field {
  width: 300px;
  display: flex;
  align-items: center;
}
.title_link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
.disactive_field img {
  margin-left: 12px;
  cursor: pointer;
}
</style>