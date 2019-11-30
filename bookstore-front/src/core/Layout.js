import React from 'react';
import Menu from './Menu';
import '../style.css';


const Layout = ({ title = 'Title', description = 'Description', className, children }) =>
    (
        <div>
            <Menu />

            <header id="page-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 m-auto">
                            <h1 className='display-5'>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className={className}>{children}</div>
        </div>
    )

export default Layout;