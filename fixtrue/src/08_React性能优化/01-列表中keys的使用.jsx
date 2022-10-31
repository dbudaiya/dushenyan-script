// import React from 'react'

// export default function App(props) {
//     const listItems = props.numbers.map(item=><li key={item.toString()}>{item}</li>)
//     return (
//         <div>
//             <ul>
//             {listItems}
//             </ul>
//         </div>
//     )
// }


import React from 'react'

function ListItems(props){
    return  <li>{props.value}</li>
}

function NumberList(props){

}

export default function App() {
    return (
        <div>
            
        </div>
    )
}
