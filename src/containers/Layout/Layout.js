import React, {Component} from 'react';
import Aux from '../../hoc/_Aux';
import cssStyles from '../Layout/Layout.module.css';
import ToolBar from '../../components/AppBar/ToolBar/ToolBar';

const layout = (props) =>  (
            <Aux>
                <div style={{ width: '100%', background:'yellow', padding:'4px',  height: '20px'}}>
                    <h1 style={{textAlign:'center'}}>
                        Resize the browser window to see the responsive effect.
                    </h1>
                </div>
                <ToolBar/>
                {/* <div style={{ display: 'flex',backgroundColor: '#1abc9c'}}>Toolbar, sideDrawer, Backdrop</div> */}
                <main className={cssStyles.main} >
                    {props.children}
                </main>
                <div className={cssStyles.footer}>
                    <h2>Maded with love!</h2>
                </div>
            </Aux>
        );

export default layout;