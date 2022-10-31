# -*- coding:utf-8 -*-
# B站课集: P87
# 开发时间: 2021/3/13 $ 17:17

def calc(a1, a2):  # 形式参数,形参位置是函数定义处
    return a1 > a2


result1 = calc(2, 1)  # 实参按照依次位置传递
print result1  # True

result2 = calc(a2=2, a1=1)  # 实参按照形参名称传递
print result2  # False
