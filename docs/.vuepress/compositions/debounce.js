import { ref, watch, isRef } from '@vue/composition-api'

export const useDebounceValue = (value, delay = 1000) => {
  const debounceValue = ref(isRef(value) ? value.value : value)
  const isLoading = ref(false)

  watch(value, (v, oldV, clean) => {
    isLoading.value = true
    let theTimeout = setTimeout(() => {
      debounceValue.value = v
      isLoading.value = false
    }, delay)
    clean(() => {
      clearTimeout(theTimeout)
    })
  })
  return [debounceValue, isLoading]
}
