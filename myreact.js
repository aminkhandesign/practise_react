class Mycomp extends React.Component{
    render(){
        return <div> <h1>my first component</h1></div>
    }
};

ReactDOM.render(<Mycomp />, document.getElementById('main'))



//we create a react component with React.createClass({render(){}})