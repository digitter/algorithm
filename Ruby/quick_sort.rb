def quickSort(array, start_index, end_index)
  return if start_index >= end_index

  pivot = array[start_index]

  left, right = start_index, end_index

  while (true)
    left += 1 while array[left] < pivot
    right -= 1 while array[right] > pivot

    break if left >= right

    array[left], array[right] = array[right], array[left]

    left += 1
    right -= 1
  end

  quickSort(array, start_index, left - 1)
  quickSort(array, right + 1, end_index)
end

array = [10, 7, 1, 6, 12, 10, 8, 9]
quickSort(array, 0, array.length - 1)
p array
