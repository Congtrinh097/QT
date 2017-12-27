import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className="page-content-wrapper">
                <div className="page-content-inner">
                    <div id="page-header" className="clearfix">
                        <div className="page-header">
                            <h2>Dashboard</h2>
                            <span className="txt">Welcome to Dynamic admin</span>
                        </div>
                        <div className="header-stats">
                            <div className="spark clearfix">
                                <div className="spark-info"><span className="number">2345</span>Visitors</div>
                                <div id="spark-visitors" className="sparkline"></div>
                            </div>
                            <div className="spark clearfix">
                                <div className="spark-info"><span className="number">17345</span>Views</div>
                                <div id="spark-templateviews" className="sparkline"></div>
                            </div>
                            <div className="spark clearfix">
                                <div className="spark-info"><span className="number">3700$</span>Sales</div>
                                <div id="spark-sales" className="sparkline"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="panel panel-info tile panelClose panelRefresh">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Today Sales</h4>
                                </div>
                                <div className="panel-body pt0">
                                    <div className="progressbar-stats-1">
                                        <div className="stats">
                                            <i className="l-ecommerce-cart-content"></i>
                                            <div id="visitor_number" className="stats-number" data-from="0" data-to="76">0</div>
                                        </div>
                                        <div className="progress animated-bar flat transparent progress-bar-xs mb10 mt0">
                                            <div className="progress-bar progress-bar-white" role="progressbar" data-transitiongoal="63"></div>
                                        </div>
                                        <div className="comparison">
                                            <p className="mb0"><i className="fa fa-arrow-circle-o-up s20 mr5 pull-left"></i> 10% up from last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="panel panel-success tile panelClose panelRefresh">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Today Visitors</h4>
                                </div>
                                <div className="panel-body pt0">
                                    <div className="progressbar-stats-1">
                                        <div className="stats">
                                            <i className="l-basic-geolocalize-05"></i>
                                            <div className="stats-number" data-from="0" data-to="2547">0</div>
                                        </div>
                                        <div className="progress animated-bar flat transparent progress-bar-xs mb10 mt0">
                                            <div className="progress-bar progress-bar-white" role="progressbar" data-transitiongoal="86"></div>
                                        </div>
                                        <div className="comparison">
                                            <p className="mb0"><i className="fa fa-arrow-circle-o-up s20 mr5 pull-left"></i> 2% up from last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="panel panel-danger tile panelClose panelRefresh">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Support Questions</h4>
                                </div>
                                <div className="panel-body pt0">
                                    <div className="progressbar-stats-1">
                                        <div className="stats">
                                            <i className="l-basic-life-buoy"></i>
                                            <div className="stats-number" data-from="0" data-to="78">0</div>
                                        </div>
                                        <div className="progress animated-bar flat transparent progress-bar-xs mb10 mt0">
                                            <div className="progress-bar progress-bar-white" role="progressbar" data-transitiongoal="35"></div>
                                        </div>
                                        <div className="comparison">
                                            <p className="mb0"><i className="fa fa-arrow-circle-o-down s20 mr5 pull-left"></i> 2% down from last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="panel panel-default tile panelClose panelRefresh">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Profit this month</h4>
                                </div>
                                <div className="panel-body pt0">
                                    <div className="progressbar-stats-1 dark">
                                        <div className="stats">
                                            <i className="l-banknote"></i>
                                            <div className="stats-number money" data-from="0" data-to="24568">0</div>
                                        </div>
                                        <div className="progress animated-bar flat transparent progress-bar-xs mb10 mt0">
                                            <div className="progress-bar progress-bar-white" role="progressbar" data-transitiongoal="55"></div>
                                        </div>
                                        <div className="comparison">
                                            <p className="mb0"><i className="fa fa-arrow-circle-o-down s20 mr5 pull-left"></i> 1% down from last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-9 col-sm-9 col-xs-12 p0">
                                <div className="panel panel-default plain btrr0 bbrr0 panelRefresh" data-mh="payments">
                                    <div className="panel-heading">
                                        <h4 className="panel-title"><i className="fa fa-dollar"></i> Payment received</h4>
                                    </div>
                                    <div className="panel-body">
                                        <div id="line-chart-payments" style={{ width: '100%', height: '250px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-12 p0">
                                <div className="panel panel-default tile btlr0 bblr0" data-mh="payments">
                                    <div className="panel-body">
                                        <div className="spark clearfix">
                                            <div className="spark-info mb0"><span className="number stats-number money s32" data-from="0" data-to="12857">0</span>
                                            </div>
                                            <div className="spark-info mtm5">Total income</div>
                                        </div>
                                        <div className="spark clearfix">
                                            <div className="spark-info mb0"><span className="number stats-number money s32 color-gray-light" data-from="0" data-to="4578"></span>
                                            </div>
                                            <div className="sparkline spark-payments mt0"></div>
                                            <div className="spark-info">Credit Card</div>
                                        </div>
                                        <div className="spark clearfix">
                                            <div className="spark-info mb0"><span className="number stats-number money s32 color-gray-light" data-from="0" data-to="5241"></span>
                                            </div>
                                            <div className="sparkline spark-payments mt0"></div>
                                            <div className="spark-info">Pay Pal</div>
                                        </div>
                                        <div className="db per100">
                                            <a href="#" className="btn btn-info ml20 mt5">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-default plain">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><i className="glyphicon glyphicon-user"></i> Customer experience</h4>
                                </div>
                                <div className="panel-body">
                                    <div className="text-center">
                                        <div id="customer-exp" className="custom-progressbar blue" style={{ width: '244px', height: '244px' }} >
                                            <div className="percent">80<span>%</span>
                                            </div>
                                            <div className="description">satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="col-lg-6 col-sm-6 p0">
                                        <div className="panel tile panelRefresh">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"></h4>
                                            </div>
                                            <div className="panel-body p0">
                                                <div className="weather snow">
                                                    <div className="degree color-red">-5&deg;</div>
                                                    <div className="location pb15"><i className="l-basic-geolocalize-01"></i> Varna</div>
                                                    <div className="icon">
                                                        <canvas id="weather-now" width="96" height="96"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 p0">
                                        <div className="panel tile btlr0 bblr0 mb0">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"></h4>
                                            </div>
                                            <div className="panel-body p0">
                                                <div className="row weather no-padding">
                                                    <div className="col-md-5 col-sm-5 text-center red-bg">
                                                        <canvas className="mt15" id="weather-monday" width="64" height="64"></canvas>
                                                        <h5 className="uppercase strong color-white">Monday</h5>
                                                    </div>
                                                    <div className="col-md-7 col-sm-7 text-center">
                                                        <div className="degree color-red">-2&deg;</div>
                                                        <p className="text-muted uppercase s12">forecast</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel tile btlr0 bblr0 mb0">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"></h4>
                                            </div>
                                            <div className="panel-body p0">
                                                <div className="row weather no-padding">
                                                    <div className="col-md-5 col-sm-5 text-center blue-bg">
                                                        <canvas className="mt15" id="weather-tuesday" width="64" height="64"></canvas>
                                                        <h5 className="uppercase strong color-white">Tuesday</h5>
                                                    </div>
                                                    <div className="col-md-7 col-sm-7 text-center">
                                                        <div className="degree color-blue">0&deg;</div>
                                                        <p className="text-muted uppercase s12">forecast</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="panel panel-default plain toggle panelClose panelRefresh">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><i className="l-basic-target"></i> Montly Sales Goals</h4>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <ul className="list-unstyled" style={{ marginBottom: '13px' }}>
                                                        <li className="mb15">
                                                            <p className="strong mb0">Shirts <span className="text-muted pull-right small">100 of 200 sold</span>
                                                            </p>
                                                            <div className="progress animated-bar progress-bar-sm flat mt0">
                                                                <div className="progress-bar progress-bar-primary" role="progressbar" data-transitiongoal="50"></div>
                                                            </div>
                                                        </li>
                                                        <li className="mb15">
                                                            <p className="strong mb0">Shoes <span className="text-muted pull-right small">150 of 200 sold</span>
                                                            </p>
                                                            <div className="progress animated-bar progress-bar-sm flat mt0">
                                                                <div className="progress-bar progress-bar-danger" role="progressbar" data-transitiongoal="75"></div>
                                                            </div>
                                                        </li>
                                                        <li className="mb15">
                                                            <p className="strong mb0">Watches <span className="text-muted pull-right small">25 of 200 sold</span>
                                                            </p>
                                                            <div className="progress animated-bar progress-bar-sm flat mt0">
                                                                <div className="progress-bar progress-bar-warning" role="progressbar" data-transitiongoal="12"></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <p className="strong mb0">Coats <span className="text-muted pull-right small">195 of 300 sold</span>
                                                            </p>
                                                            <div className="progress animated-bar progress-bar-sm flat mt0">
                                                                <div className="progress-bar progress-bar-success" role="progressbar" data-transitiongoal="66"></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="text-center">
                                                        <div id="sales-goal" className="custom-progressbar green pull-left mr15" style={{ width: '150px', height: '150px' }}>
                                                            <div className="percent">470</div>
                                                            <div className="description s14">of 900 sold</div>
                                                        </div>
                                                    </div>
                                                    <div className="custom-progressbar-legend text-center">
                                                        <p className="text-left"><span className="strong">65%</span> Sold</p>
                                                        <p className="text-left"><span className="strong">35% </span> Left</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="col-lg-4 col-md-6 p0">
                                        <div className="panel panel-default tile btrr0 bbrr0" data-mh="sales-locations">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><i className="glyphicon glyphicon-list-alt"></i> Latest Sales</h4>
                                            </div>
                                            <div className="panel-body pt0">
                                                <ul className="list-unstyled mb0">
                                                    <li className="mb5 pb5 bbdashed">
                                                        <span className="strong">New Your:</span> order
                                                            <span className="color-red">#345675</span> - 176$
                                                        </li>
                                                    <li className="mb5 pb5 bbdashed">
                                                        <span className="strong">Vancuver:</span> order
                                                            <span className="color-red">#345674</span> - 56$
                                                        </li>
                                                    <li className="mb5 pb5 bbdashed">
                                                        <span className="strong">London:</span> order
                                                            <span className="color-red">#345673</span> - 12$
                                                        </li>
                                                    <li className="mb5 pb5 bbdashed">
                                                        <span className="strong">Barcelona:</span> order
                                                            <span className="color-red">#345672</span> - 34$
                                                        </li>
                                                    <li className="mb5 pb5 bbdashed">
                                                        <span className="strong">Moskva:</span> order
                                                            <span className="color-red">#345671</span> - 15$
                                                        </li>
                                                    <li className="mb5 pb5">
                                                        <span className="strong">Tokio:</span> order
                                                            <span className="color-red">#345669</span> - 67$
                                                        </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-6 p0">
                                        <div className="panel panel-default plain panelRefresh btlr0 bblr0" data-mh="sales-locations">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><i className="fa l-basic-geolocalize-01"></i> Last sales locations</h4>
                                            </div>
                                            <div className="panel-body p0">
                                                <div id="world-map" style={{ width: '100%', height: '250px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="panel panel-default plain toggle panelMove panelClose panelRefresh">
                                <div className="panel-heading">
                                    <h4 className="panel-title"><i className="fa fa-comments"></i>Customer Comments</h4>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group recent-comments">
                                        <li className="list-group-item clearfix comment-success">
                                            <div className="avatar pull-left mr15">
                                                <img src="/assets_admin/img/avatars/2.jpg" alt="avatar" />
                                            </div>
                                            <p className="text-ellipsis"><span className="name strong">Ben Simpson: </span> Very happy with your support is really great, keep that quality.</p>
                                            <span className="date text-muted small pull-left">Dec 18, 2014, 4:24 pm</span>
                                            <a href="#" className="see-more small pull-right">View comment</a>
                                        </li>
                                        <li className="list-group-item clearfix comment-default">
                                            <div className="avatar pull-left mr15">
                                                <img src="/assets_admin/img/avatars/3.jpg" alt="avatar" />
                                            </div>
                                            <p className="text-ellipsis"><span className="name strong">Jonh: </span> Fine items but you could invest more time.</p>
                                            <span className="date text-muted small pull-left">Dec 18, 2014, 12:11 pm</span>
                                            <a href="#" className="see-more small pull-right">View comment</a>
                                        </li>
                                        <li className="list-group-item clearfix comment-info">
                                            <div className="avatar pull-left mr15">
                                                <img src="/assets_admin/img/avatars/4.jpg" alt="avatar" />
                                            </div>
                                            <p className="text-ellipsis"><span className="name strong">Dina Dowsen: </span> Awesome items, really fast delivery.</p>
                                            <span className="date text-muted small pull-left">Dec 18, 2014, 8:17 pm</span>
                                            <a href="#" className="see-more small pull-right">View comment</a>
                                        </li>
                                        <li className="list-group-item clearfix comment-warning">
                                            <div className="avatar pull-left mr15">
                                                <img src="/assets_admin/img/avatars/5.jpg" alt="avatar" />
                                            </div>
                                            <p className="text-ellipsis"><span className="name strong">Matt: </span> I`m not impressed but is fine.</p>
                                            <span className="date text-muted small pull-left">Dec 17, 2014, 6:24 pm</span>
                                            <a href="#" className="see-more small pull-right">View comment</a>
                                        </li>
                                        <li className="list-group-item clearfix comment-danger">
                                            <div className="avatar pull-left mr15">
                                                <img src="/assets_admin/img/avatars/6.jpg" alt="avatar" />
                                            </div>
                                            <p className="text-ellipsis"><span className="name strong">Ben Simpson: </span> This is worst item i ever seen.</p>
                                            <span className="date text-muted small pull-left">Dec 16, 2014, 1:20 pm</span>
                                            <a href="#" className="see-more small pull-right">View comment</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
