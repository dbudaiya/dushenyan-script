# -*- coding:utf-8 -*-
# B站课集: P112
# 开发时间: 2021/3/17 $ 14:31

class A1:
    name = "李智恩"
    age = 21

    def __init__(self, name, age):
        self.name = name;
        self.__age = age  # 年龄加上了两个__,不允许在类的外部使用


a1 = A1("IU", 28)
print(a1.name)  # IU
# print(a1.__age) # 报错,不能使用__访问到"28' A1' object has no attribute '__age'

# 那怎么能访问到呢??
print(dir(a1))
# 查看到类中所有的内部属性和方法
print(a1._A1__age)  # 28 在类的外部通过 _A1__age 进行访问
