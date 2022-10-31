# -*- coding:utf-8 -*-
# B站课集: P53
# 开发时间: 2021/3/13 $ 17:03

# 1.创建列表
a1 = ["WHISTLE", "BOOMBAYAH", "PLAYING WITH FIRE", "Lisa"]

# 1.1 remove(),传参,若是列表中存在的值,则会返回新列表
a1.remove("Lisa")
print a1  # ['WHISTLE', 'BOOMBAYAH', 'PLAYING WITH FIRE']

# 1.2 若不存在时,则会报错
# a1.remove("lisa") # ValueError: list.remove(x): x not in list

# 2.1 pop() 指定索引值,若存在则返回新列表
a1.pop(1)
# print(a1) # ['WHISTLE', 'PLAYING WITH FIRE']

# 2.2 若不存在,则报错
# a1.pop(3)  # IndexError: pop index out of range


# 3.1 切片操作
# 切是切了,但没有返回到真正的列表中
print a1[1:2]  # ['PLAYING WITH FIRE']

# 3.2 切片并且赋值操作
a1[1:2] = []
print a1  # 在['WHISTLE', 'PLAYING WITH FIRE']的基础上进行上面的运算

# 4.1 clear()清除列表中所以元素
# a1.clear()

# 5.1 del()将列表对象删除
# del a1
