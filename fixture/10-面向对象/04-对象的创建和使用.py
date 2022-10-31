# -*- coding:utf-8 -*-
# B站课集: P108
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
        return "我是静态方法"


# 类之外定义的称为函数,在类之内定义的称为方法
def sayName():
    return name


print(sayName())  # IU

# 创建A1类的实例对象
a1 = A1("李智恩", 21)
print(a1)  # <__main__.A1 object at 0x00000280CD566FD0>
print(id(a1))  # 2752224063440
print(type(a1))  # <class '__main__.A1'>

print(a1.sayName())  # 李智恩

# 获取A1类的id,type
print(A1)  # <class '__main__.A1'>
print(id(A1))  # 2752217924352
print(type(A1))  # <class 'type'>

print(A1.sayAge())  # 28
print(A1.sayStatic())  # 我是静态方法
