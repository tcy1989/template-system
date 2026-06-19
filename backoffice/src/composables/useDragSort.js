import { ref } from 'vue'

export function useDragSort(items) {
  const draggingIndex = ref(null)
  const overIndex = ref(null)

  function onDragStart(index) {
    draggingIndex.value = index
  }

  function onDragOver(e, index) {
    e.preventDefault()
    overIndex.value = index
    if (draggingIndex.value === null || draggingIndex.value === index) return
    const arr = [...items.value]
    const [item] = arr.splice(draggingIndex.value, 1)
    arr.splice(index, 0, item)
    items.value = arr
    draggingIndex.value = index
  }

  function onDragEnd() {
    draggingIndex.value = null
    overIndex.value = null
  }

  function onDragLeave() {
    overIndex.value = null
  }

  return { draggingIndex, overIndex, onDragStart, onDragOver, onDragEnd, onDragLeave }
}
