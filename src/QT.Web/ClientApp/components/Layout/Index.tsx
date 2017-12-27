import * as React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { LeftSideMenu } from './LeftSideMenu';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <LeftSideMenu />
                    <div className="page-content sidebar-page right-sidebar-page clearfix">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
                <div id="back-to-top"><a href="#">Back to Top</a>
                </div>
            </div>
        )
    }
}
