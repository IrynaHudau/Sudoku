import React, {Component} from 'react';
import Aux from '../../hoc/_Aux';
import cssStyles from '../Layout/Layout.module.css';
import ToolBar from '../../components/AppBar/ToolBar/ToolBar';

class Layout extends Component{
    render(){
        return(
            <Aux >
                <div>
                    <ToolBar/>
                </div>
                <div className={cssStyles.container}>
                    <main className={cssStyles.main}>
                        {this.props.children}
                    </main>
                </div>
                <footer className={cssStyles.footer}>    
                    <div className={cssStyles.container}>
                       <div className={cssStyles.inner_footer}>
                            <h2>Made for fun!</h2> 
                        </div>
                    </div>      
                </footer> 
            </Aux>
        );
    }
}

export default Layout;
