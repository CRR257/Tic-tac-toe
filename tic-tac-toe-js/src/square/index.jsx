import React from 'react';

const Square = (props) => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;


// react component
// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square"
//             onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         )
//     }
// }

// export default Square;