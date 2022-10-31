# -*- coding:utf-8 -*-
# B站课集: P70
# 开发时间: 2021/3/17 $ 11:00

# 创建集合的方式一: 使用{}
a1 = {"name", "age", "love"}
print(a1)  # {'love', 'age', 'name'}  集合内部元素不允许重合

# 方式二: 内置函数set
a2 = set(range(6))
print(a2)  # {0, 1, 2, 3, 4, 5}

print(set(("name", 'age')))  # {'age', 'name'}
print(set(["李智恩", 28]))  # {'李智恩', 28}
print(set({"name", "age"}))  # {'age', 'name'}
print(set("李智恩"))  # {'智', '恩', '李'}
print(set())  # set()
