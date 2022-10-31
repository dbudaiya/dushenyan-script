# -*- coding:utf-8 -*-
# B站课集: P67
# 开发时间: 2021/3/17 $ 11:01

# 1.创建元组
# 1.1使用括号创建
a1 = ('李智恩', "Lisa", "WISHTLE")
print(a1)  # ('李智恩', 'Lisa', 'WISHTLE')
# 1.2省略小括号的方式
a11  = '李智恩', "Lisa", "WISHTLE"
print(a11)

# 2.只包含一个元组元素需要使用逗号和小括号,不然就不会是元组元素
a2 = ("李智恩",)
print(a2)

# 3.使用tuple()函数创建
a3 = tuple(("李智恩", "Lisa", "WISHTLE"))  # 注: 内部嵌套另外一括号
print(a3)  # ('李智恩', 'Lisa', 'WISHTLE')


# 4.获取元组元素的方式
a4  = '李智恩', "Lisa", "WISHTLE"
print(a4[2])  # WISHTLE