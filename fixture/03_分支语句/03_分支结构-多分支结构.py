# -*- coding:utf-8 -*-
# B站课集: P31
# 开发时间: 2021/3/13 $ 15:38


a1 = 10
money = int(input("请输入现有金额:"))

# 单分支语句
if money > a1:
    print("我的钱有多")
elif 5 < money < a1:
    print("差点意思,钱较少")
else:
    print("钱少")
