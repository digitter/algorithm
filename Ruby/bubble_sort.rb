def bubble_sort(array)
  count = array.length - 1

  while count > 0
    count.times do |i| 
      if array[i] > array[i+1]
        array[i+1], array[i] = array[i], array[i+1]
      end
    end
    count -= 1
  end
end

array = [7, 5, 10, 3, 4]
bubble_sort(array)
p array

