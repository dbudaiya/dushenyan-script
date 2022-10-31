# -*- coding:utf-8 -*-
# B站课集: P23
# 开发时间: 2021/3/13 $ 15:03

# 1.常用比较
a1 = 10
a2 = 20
print("a1>a2?", a1 > a2)  # False
print("a1>=a2?", a1 >= a2)  # False
print("a1<a2?", a1 < a2)  # True
print("a1<=a2?", a1 <= a2)  # True
print("a1!=a2?", a1 != a2)  # True

# 2.比较运算符 ==
"""
    = 表是赋值,== 表示赋值
    一个变量有三部分,变量名,赋值运算符,值
    那么 == 比较的是值还是标识id呢?
"""
b1 = 10
b2 = 10
print("b1==b2", b1 == b2)  # True 说明b1与b2的值相等

# 3.比较标识id运算符 is
c1 = 10
c2 = 10
print("c1与c2的标识是否相等??", c1 is c2)  # True 说明c1与c2的标识相等

# 那么什么情况下会出现标识比较为False呢??
# 当内部标识不一样的情况下,这里是数组数据类型
d1 = [1, 2]
d2 = [1, 2]
print(d1 is d2)  # False
print(d1 is not d2)  # True 当对象标识id不相等时,返回True
