class BinaryTreeNode
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

a = BinaryTreeNode.new('A')
b = BinaryTreeNode.new('B')
c = BinaryTreeNode.new('C')
d = BinaryTreeNode.new('D')
e = BinaryTreeNode.new('E')

a.left = b
a.right = c
b.left = d
b.right = e

p a.left.right.value
