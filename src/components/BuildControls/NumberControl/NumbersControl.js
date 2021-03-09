import React,{Component} from 'react';
import cssStyles from '../NumberControl/NumberControl.module.css';
import NumberControl from './NumberControl';

const numbers = [1,2,3,4,5,6,7,8,9];

class NumbersControl extends Component{

    constructor(props){
        super(props);
    };

    render(){
        return( 
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <div className={cssStyles.number_box}>
                    {numbers.map(num => (
                        <NumberControl
                            isActive={this.props.activeNum === num ? true : false}
                            key={num} 
                            id={num} 
                            label ={num} 
                            click={() => this.props.clicked(num)} 
                            activet={this.props.disabled}/>
                        ))}
                </div>
            </div>
           );
    }
}

export default NumbersControl;