import * as React from 'react';

export class Footer extends React.Component<any, any>{

    render() {
        return (
            <div>
                <div id="footer" className="clearfix sidebar-page right-sidebar-page">
                    <p className="pull-left">
                        Copyrights &copy; 2014 <a href="http://htactive.com/" className="color-blue strong" target="_blank">SuggeElson</a>. All rights reserved.
                     </p>
                    <p className="pull-right">
                        <a href="#" className="mr5">Terms of use</a>
                    <a href="#" className="ml5 mr25">Privacy police</a>
                    </p>
                </div>
            </div>
        );
    }
}
