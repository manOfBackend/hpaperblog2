
class GuGuDan extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: '',
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState({
                result: '정답',
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: '',
            });
        }
        else {
            this.setState({
                result: '땡',
                value: '',
            });
        }
    };

    
    onChange = ot
        console.log(this.a);
    //    this.setState({ value: e.target.value });
    }

    render() {
        return (
            <>
                <div>
                    {this.state.first} 곱하기 {this.state.second}는?
                </div>
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value}
                        onChange={this.onChange} />
                    <button>입력!</button>
                </form>

            </>

        );
    }
}