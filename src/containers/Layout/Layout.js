import React, {Component} from 'react';
import Aux from '../../hoc/_Aux';
import cssStyles from '../Layout/Layout.module.css';
import ToolBar from '../../components/AppBar/ToolBar/ToolBar';

class Layout extends Component{
    render(){
        return(
            <Aux>
                <div style={{ width: '100%', background:'yellow', padding:'4px',  height: '20px'}}>
                </div>
                <ToolBar />
                <main className={cssStyles.main} >
                    {this.props.children}
                </main>
                <div className={cssStyles.footer}>
                    <h2>Made for fun!</h2>
                </div>
            </Aux>
        );
    }
}

export default Layout;
