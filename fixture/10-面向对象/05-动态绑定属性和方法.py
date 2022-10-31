# -*- coding:utf-8 -*-
# B站课集: P111
# 开发时间: 2021/3/13 $ 17:26

#
class A1:
    name = "李智恩"

    def __init__(self, name):
        self.name = name


# 1.动态绑定属性
a1 = A1("IU")
a1.age = 24
print(a1.name, a1.age)  # IU 24


# 2.动态绑定方法
def sayName():
    return "我是动态赋值的方法"

a1.sayName = sayName; # 我是动态赋值的方法
print(a1.sayName())