import React from 'react';
import ReactDom from 'react-dom';
var Mask = React.createClass({
    render:function(){
        var styles = {
            position:'absolute',
            left:0,
            top:0,
            bottom:0,
            right:0,
            background:'black',
            opacity:0.5 ,
            display:'block'
        }
        
        if(this.props.show){
            styles.display = 'block';
        }else{
            styles.display = 'none';
        }
        return (
            <div style = {styles}>
                {this.props.children}
            </div>
        )
    }
})
var Dialog = React.createClass({
    render:function(){
        var styles = {
            width:'100%', 
            height:200,
            LineHeight:'200px',
            textAlign:'center',
            background:'orange',
            color:'black',
        }
        return (
             <div>
                <Mask show = {this.props.show}>
                    <div style = {styles} onClick = {this.props.onHaddelChance}></div>
                </Mask>
            </div>
        )
    }
})
var App = React.createClass({
    getInitialState:function(){
        return {
            show:true
         }
    },
    onHaddelChance:function(){
        this.setState({show :false});
    },
    render:function(){
        // console.log(111);
        return (
            <div>
                <Dialog show={this.state.show} onHaddelChance={this.onHaddelChance} />
            </div>
        )}
})
ReactDom.render(
    <App/>,
    document.getElementById('root')
)