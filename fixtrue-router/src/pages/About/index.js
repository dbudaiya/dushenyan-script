import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const data = this.props.match;

        //这是使用集中化配置库才会正常显示的
        console.log(this.props.route);

        return (
            <div>
                <h1>About组件</h1>
                <h4>路由传入参为:{data.params.id}</h4>
            </div>
        )
    }
}
