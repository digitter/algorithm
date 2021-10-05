class BinaryTreeNode
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

class BinarySearchTree
  attr_accessor :root, :add_node

  def initialize
    @root = nil
  end

  def add_node(node)
    if self.root.nil?
      self.root = node 
      return
    end

    current = self.root
    direction = (node.value < current.value) ? :left : :right

    until current.send(direction).nil?
      current = current.send(direction)
      direction = (node.value < current.value) ? :left : :right
    end

    current.send("#{direction}=", node)
  end

  def exists?(value)
    return true if value == self.root.value

    current = self.root
    direction = (value < current.value) ? :left : :right

    until current.send(direction).nil?
      current = current.send(direction)
      return true if value == current.value 
      direction = (value < current.value) ? :left : :right
    end

    return false
  end
end

tree = BinarySearchTree.new
arr = [50, 10, 80, 5, 30]
arr.each {|e| tree.add_node(BinaryTreeNode.new(e))}

p tree.root.right.value
p tree.root.left.value

p tree.exists?(50) # true
p tree.exists?(10) # true
p tree.exists?(2) # false
p tree.exists?(0) # false

