import React, { memo, useState,useMemo } from 'react'

const Child = memo(({ data }) => {
    console.log('child render...', data.name)
    return (
        <div>
            <div>child</div>
            <div>{data.name}</div>
        </div>
    );
})  

export default () => {
    console.log('Hook render...')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('rose')

    const data = useMemo(() => {
        return {
            name
        }
    }, [name])
    return (
        <div>
            <div>
                {count}
            </div>
            <button onClick={() => setCount(count + 1)}>update count </button>
            <Child data={data} />
        </div>
    )
}