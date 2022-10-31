# -*- coding:utf-8 -*-
# B站课集: P107
# 开发时间: 2021/3/13 $ 17:24

# 定义全局变量name:IU
name = "IU"


# 创建类,类名首字母大写,其余小写
class A1:
    name = "李智恩"  # 定义类属性
    age = 28  # 定义实例属性

    def __init__(self, name, age):
        self.name = name
        self.age = age

    # 实例方法
    def sayName(self):
        return self.name

    # 类方法
    @classmethod
    def sayAge(cls):
        return cls.age

    # 静态方法
    @staticmethod
    def sayStatic():
        print("我是静态方法")


# 类之外定义的称为函数,在类之内定义的称为方法
def sayName():
    return name
