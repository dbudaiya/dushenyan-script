# -*- coding:utf-8 -*-
# B站课集: P113
# 开发时间: 2021/3/17 $ 14:32

# 1.定义父类
class Person:
    name = "李智恩"
    age = 21

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sayName(self):
        return "我喜欢的歌手: " + self.name


# 2.定义子类
class Son(Person):
    work = "model"

    def __init__(self, name, age, work):
        super().__init__(name, age)
        self.work = work


# 3.创建实例对象
son = Son("IU", 21, "singer")
print(son.sayName())  # 子类调用父类方法,执行返回了 我喜欢的歌手: IU
