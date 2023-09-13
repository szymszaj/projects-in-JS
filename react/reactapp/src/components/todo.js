import React from 'react';

class todo extends React.Component {
    state = {
        elements: [
            { id: '123123123', title: 'zrobić zakupy' },
            { id: '1231fds123', title: 'opłacić TV' }
        ]
    }
    render() {
        const elements = this.state.elements.map(e => {
            return <div className='card' key={e.id}>{e.title}</div>
        })
        return (
            <div>
                Todo app
                {elements}
            </div>
        )
    }
}
export default todo