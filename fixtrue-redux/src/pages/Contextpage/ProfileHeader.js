import React, { useEffect } from "react";
import { SubpageContext } from ".";
import  Swiper  from "swiper";
import "swiper/swiper.min.css";
export default function ProfileHeader() {
  useEffect(() => {
    //可以加上你需要的条件等，然后生成Swiper对象，
    //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
    new Swiper(".mySwiper", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },

      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
  }, []);
  return (
    <SubpageContext.Consumer>
      {
        // 以后凡是数据能够在控制台中查看到,页面没有出现数据,大概率是数据没有进行返回
        (value) => {
          return value.map((item, index) => {
            return (
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={item.image} />
                    结合使用事件总线和ref关键词去比较两者之间做同样一件事,实现效果有什么不一样
                  </div>
                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                <div className="swiper-scrollbar"></div>
              </div>
            );
          });
        }
      }
    </SubpageContext.Consumer>
  );
}
