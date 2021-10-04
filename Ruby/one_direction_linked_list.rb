# ノード
class Node
  attr_accessor :value, :next
  def initialize(value)
    @value, @next = value, nil
  end
end
# リスト
class LinkedList
  attr_accessor :head

  def initialize
    @head = nil
  end

  def unshift(value)
    node = Node.new(value)
    node.next = self.head
    self.head = node
  end

  def push(value)
    if self.head.nil?
      unshift(value)
      return
    end

    node = Node.new(value)
    current = self.head

    while current.next
      current = current.next
    end

    current.next = node
  end
end

linked_list = LinkedList.new
10.times {|i| linked_list.push(i)}
# 10.times {|i| linked_list.unshift(i)}

node = linked_list.head
while node
  p node.value
  node = node.next
end
