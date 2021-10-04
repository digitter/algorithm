class Node
  attr_accessor :prev, :next, :value

  def initialize(value)
    @prev = nil
    @next = nil
    @value = value
  end
end

class LinkedList
  attr_accessor :head

  def initialize
    @head = nil
  end

  def unshift(value)
    node = Node.new(value)
    node.next = self.head
    node.next.prev = node if node.next
    self.head = node
  end

  def push(value)
    if self.head.nil?
      return unshift(value)
    end

    node = Node.new(value)
    current = self.head
    while current.next
      current = current.next
    end
    current.next = node
    node.prev = current
  end
end

linked_list = LinkedList.new
10.times {|i| linked_list.push(i)}
# 10.times {|i| linked_list.unshift(i)}

node = linked_list.head
while node
  p node.value
  p (node.prev ? node.prev.value : nil)
  puts "========="
  node = node.next
end
