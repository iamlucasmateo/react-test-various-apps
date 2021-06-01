class RandomBox extends React.Component {
    render() {
        const colors = ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'];
        const randomColor = () => {
            const randomIndex = Math.floor( Math.random() * 5 );
            return colors[randomIndex];
        }
        const randomFontSize = () => {
            const randomSize = Math.floor(Math.random() * 40 + 20)
            return `${randomSize}px`;
        }
        const divStyle = {
            width: '400px',
            height: '200px',
            backgroundColor: randomColor(),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: randomFontSize(),
        };
        return (
            <div style={divStyle}>Random Box</div>
        )
    }
}

ReactDOM.render(<RandomBox/>, document.getElementById('app'));