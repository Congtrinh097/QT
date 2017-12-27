import * as React from 'react';

export class LeftSideMenu extends React.Component<any, any>{
  render() {
    return (
      <div>
        <aside id="sidebar" className="page-sidebar hidden-md hidden-sm hidden-xs">
          <div className="sidebar-inner">
            <div className="sidebar-scrollarea">
              <div className="sidebar-panel">
                <h5 className="sidebar-panel-title">Profile</h5>
              </div>
              <div className="user-info clearfix">
                <img src="/assets_admin/img/avatars/128.jpg" alt="avatar"/>
                <span className="name">SuggeElson</span>
                <div className="btn-group">
                  <button type="button" className="btn btn-default btn-xs"><i className="l-basic-gear"></i>
                  </button>
                  <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                    settings <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu right" role="menu">
                    <li><a href="profile.html"><i className="fa fa-edit"></i>Edit profile</a>
                    </li>
                    <li><a href="#"><i className="fa fa-money"></i>Windraws</a>
                    </li>
                    <li><a href="#"><i className="fa fa-credit-card"></i>Deposits</a>
                    </li>
                    <li className="divider"></li>
                    <li><a href="login.html"><i className="fa fa-power-off"></i>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sidebar-panel">
                <h5 className="sidebar-panel-title">Navigation</h5>
              </div>

              <div className="side-nav">
                <ul className="nav">
                  <li><a href="index.html"><i className="l-basic-laptop"></i><span className="txt">Dashboard</span></a>
                  </li>
                  <li><a href="http://themes.suggelab.com/#dynamic_frontend" target="_blank"><i
                    className="l-basic-webpage"></i><span className="txt">Frontend</span><span
                    className="label">hot</span></a>
                  </li>
                  <li>
                    <a href="#"><i className="l-ecommerce-graph1"></i> <span className="txt">Charts</span></a>
                    <ul className="sub">
                      <li><a href="charts-flot.html"><span className="txt">Flot charts</span></a>
                      </li>
                      <li><a href="charts-morris.html"><span className="txt">Morris charts</span></a>
                      </li>
                      <li><a href="charts-chartjs.html"><span className="txt">Chartjs </span></a>
                      </li>
                      <li><a href="charts-other.html"><span className="txt">Other charts</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><i className="l-basic-webpage-txt"></i><span className="txt">Forms</span></a>
                    <ul className="sub">
                      <li><a href="forms-basic.html"><span className="txt">Basic forms</span></a>
                      </li>
                      <li><a href="forms-advanced.html"><span className="txt">Advanced forms</span></a>
                      </li>
                      <li><a href="forms-layouts.html"><span className="txt">Form layouts</span></a>
                      </li>
                      <li><a href="forms-wizard.html"><span className="txt">Form wizard</span></a>
                      </li>
                      <li><a href="forms-validation.html"><span className="txt">Form validation</span></a>
                      </li>
                      <li><a href="code-editor.html"><span className="txt">Code editor</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><i className="l-software-layout-header-3columns"></i><span className="txt">Tables</span></a>
                    <ul className="sub">
                      <li><a href="tables-basic.html"><span className="txt">Basic tables</span></a>
                      </li>
                      <li><a href="tables-data.html"><span className="txt">Data tables</span></a>
                      </li>
                      <li><a href="tables-editable.html"><span className="txt">Editable tables</span></a>
                      </li>
                      <li><a href="tables-ajax.html"><span className="txt">Ajax tables</span></a>
                      </li>
                      <li><a href="tables-pricing.html"><span className="txt">Pricing tables</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><i className="l-software-layers2"></i><span className="txt">UI Elements</span></a>
                    <ul className="sub">
                      <li><a href="icons.html"><span className="txt">Icons</span></a>
                      </li>
                      <li><a href="typography.html"><span className="txt">Typography</span></a>
                      </li>
                      <li><a href="tabs.html"><span className="txt">Tabs</span></a>
                      </li>
                      <li><a href="accordions.html"><span className="txt">Accordions</span></a>
                      </li>
                      <li><a href="buttons.html"><span className="txt">Buttons</span></a>
                      </li>
                      <li><a href="notifications.html"><span className="txt">Notifications</span></a>
                      </li>
                      <li><a href="modals.html"><span className="txt">Modals</span></a>
                      </li>
                      <li><a href="sliders.html"><span className="txt">Sliders</span></a>
                      </li>
                      <li><a href="progressbars.html"><span className="txt">Progressbars</span></a>
                      </li>
                      <li><a href="lists.html"><span className="txt">Lists</span></a>
                      </li>
                      <li><a href="grid.html"><span className="txt">Grid</span></a>
                      </li>
                      <li><a href="ui-other.html"><span className="txt">Other</span></a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="portlets.html"><i className="l-software-layout-header"></i><span
                    className="txt">Portlets</span><span className="label">22</span></a>
                  </li>
                  <li>
                    <a href="#"><i className="l-basic-mail"></i> <span className="txt">Email</span></a>
                    <ul className="sub">
                      <li><a href="email-inbox.html"><span className="txt">Inbox</span></a>
                      </li>
                      <li><a href="email-read.html"><span className="txt">Read email</span></a>
                      </li>
                      <li><a href="email-write.html"><span className="txt">Write email</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><i className="l-basic-geolocalize-01"></i><span className="txt">Maps</span></a>
                    <ul className="sub">
                      <li><a href="maps-google.html"><span className="txt">Google maps</span></a>
                      </li>
                      <li><a href="maps-vector.html"><span className="txt">Vector maps</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><i className="l-basic-webpage"></i><span className="txt">Pages</span></a>
                    <ul className="sub">
                      <li><a href="login.html"><span className="txt">Login</span></a>
                      </li>
                      <li><a href="lock-screen.html"><span className="txt">Lock screen</span></a>
                      </li>
                      <li><a href="register.html"><span className="txt">Register</span></a>
                      </li>
                      <li><a href="lost-password.html"><span className="txt">Lost password</span></a>
                      </li>
                      <li><a href="profile.html"><span className="txt">User profile</span></a>
                      </li>
                      <li><a href="calendar.html"><span className="txt">Calendar</span></a>
                      </li>
                      <li><a href="timeline.html"><span className="txt">Timeline</span></a>
                      </li>
                      <li><a href="gallery.html"><span className="txt">Gallery</span></a>
                      </li>
                      <li><a href="invoice.html"><span className="txt">Invoice</span></a>
                      </li>
                      <li><a href="blank.html"><span className="txt">Blank page</span></a>
                      </li>
                      <li>
                        <a href="#"><span className="txt">Error pages</span></a>
                        <ul className="sub">
                          <li><a href="403.html"><span className="txt">403</span></a>
                          </li>
                          <li><a href="404.html"><span className="txt">404</span></a>
                          </li>
                          <li><a href="500.html"><span className="txt">500</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="sidebar-panel">
                <h5 className="sidebar-panel-title">Server stats</h5>
                <div className="sidebar-panel-content">
                  <div className="sidebar-stat mb10">
                    <p className="color-white mb5 mt5"><i className="fa fa-hdd-o mr5"></i> Disk Space <span
                      className="pull-right small">30%</span>
                    </p>

                    <span className="dib s12 mt5 per100 text-center">3001.56 / 10000 MB</span>
                  </div>
                  <div className="sidebar-stat">
                    <p className="color-white mb5 mt5"><i className="glyphicon glyphicon-transfer mr5"></i> Bandwidth
                      Transfer <span className="pull-right small">78%</span>
                    </p>

                    <span className="dib s12 mb10 mt5 per100 text-center">87565.12 / 120000 MB</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </aside>

        <aside id="right-sidebar" className="right-sidebar hidden-md hidden-sm hidden-xs">

          <div className="sidebar-inner">
            <div className="sidebar-scrollarea">
              <div className="tabs">
                <ul id="rstab" className="nav nav-tabs nav-justified">
                  <li className="active">
                    <a href="#activity" data-toggle="tab"><i className="glyphicon glyphicon-bullhorn"></i> </a>
                  </li>
                  <li>
                    <a href="#users" data-toggle="tab"><i className="fa fa-comments"></i> </a>
                  </li>
                </ul>
                <div id="rstab-content" className="tab-content">
                  <div className="tab-pane fade active in" id="activity">
                    <ul className="timeline timeline-icons timeline-sm">
                      <li>
                        <p>
                          <a href="#">Jonh Doe</a> attached new <a href="#">file</a>
                          <span className="timeline-icon"><i className="fa fa-file-text-o"></i></span>
                          <span className="timeline-date">Dec 10, 22:00</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">Admin</a> approved <a href="#">3 new comments</a>
                          <span className="timeline-icon"><i className="fa fa-comment"></i></span>
                          <span className="timeline-date">Dec 8, 13:35</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">Jonh Smith</a> deposit 300$
                          <span className="timeline-icon"><i className="fa fa-money color-green"></i></span>
                          <span className="timeline-date">Dec 6, 10:17</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">Serena Williams</a> purchase <a href="#">3 items</a>
                          <span className="timeline-icon"><i className="fa fa-shopping-cart color-red"></i></span>
                          <span className="timeline-date">Dec 5, 04:36</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">1 support </a> request is received from <a href="#">Klaudia Chambers</a>
                          <span className="timeline-icon"><i className="fa fa-life-ring color-gray-light"></i></span>
                          <span className="timeline-date">Dec 4, 18:40</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          You received 136 new likes for <a href="#">your page</a>
                          <span className="timeline-icon"><i className="glyphicon glyphicon-thumbs-up"></i></span>
                          <span className="timeline-date">Dec 4, 12:00</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">12 settings </a> are changed from <a href="#">Master Admin</a>
                          <span className="timeline-icon"><i className="glyphicon glyphicon-cog"></i></span>
                          <span className="timeline-date">Dec 3, 23:17</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">Klaudia Chambers</a> change your photo
                          <span className="timeline-icon"><i className="l-basic-photo"></i></span>
                          <span className="timeline-date">Dec 2, 05:17</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">Master server </a> is down for 10 min.
                          <span className="timeline-icon"><i className="l-basic-server2"></i></span>
                          <span className="timeline-date">Dec 2, 04:56</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">12 links </a> are broken
                          <span className="timeline-icon"><i className="fa fa-unlink"></i></span>
                          <span className="timeline-date">Dec 1, 22:13</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#">Last backup </a> is restored by <a href="#">Master admin</a>
                          <span className="timeline-icon"><i className="fa fa-undo color-red"></i></span>
                          <span className="timeline-date">Dec 1, 17:42</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="users">
                    <div className="chat-user-list">
                      <form className="form-vertical chat-search" role="form">
                        <div className="form-group">
                          <div className="input-group">
                            <input type="text" className="form-control input-sm" placeholder="Search ..."/>
                            <span className="input-group-btn">
                                                            <button className="btn btn-default btn-sm" type="submit"><i
                                                              className="fa fa-search"></i></button>
                                                        </span>
                          </div>
                        </div>
                      </form>
                      <ul className="user-list list-group">
                        <li className="list-group-item clearfix">
                          <a href="#">
                            <img src="/assets_admin/img/avatars/2.jpg" alt="avatar" className="avatar"/>
                            <span className="name">Dean Huges</span>
                            <span className="status status-online">online</span>
                          </a>
                          <div className="chat-messages">
                            <ul>
                              <li className="chat-back"><a href="#">Back <i className="fa fa-chevron-right ml5"></i>
                              </a>
                              </li>
                              <li>
                                <div className="avatar">
                                  <img src="/assets_admin/img/avatars/2.jpg" alt="@chadengle"/>
                                </div>
                                <p className="chat-name">Dean Huges <span className="chat-time">15 sec ago</span>
                                </p>
                                <div className="message">
                                  <p className="chat-txt">We need to meet today. I have some things to show you.</p>
                                </div>
                              </li>
                              <li className="chat-me">
                                <div className="avatar">
                                  <img src="/assets_admin/img/avatars/1.jpg" alt="@jonhdoe"/>
                                </div>
                                <p className="chat-name">SuggeElson <span className="chat-time">10 sec ago</span>
                                </p>
                                <div className="message message-info">
                                  <p className="chat-txt">I have tons of work today maybe tomorrow will be fine</p>
                                </div>
                              </li>
                              <li>
                                <div className="avatar">
                                  <img src="/assets_admin/img/avatars/2.jpg" alt="@chadengle"/>
                                </div>
                                <p className="chat-name">Dean Huges <span className="chat-time">just now</span>
                                </p>
                                <div className="message">
                                  <p className="chat-txt">Okay i will wait..</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-group-item clearfix">
                          <a href="#">
                            <img src="/assets_admin/img/avatars/4.jpg" alt="avatar" className="avatar"/>
                            <span className="name">Selena Jones</span>
                            <span className="status status-offline">offline from 1 Dec</span>
                          </a>
                          <div className="chat-messages">
                            <ul>
                              <li className="chat-back"><a href="#">Back <i className="fa fa-chevron-right ml5"></i>
                              </a>
                              </li>
                              <li className="no-messages">
                                <p className="text-center color-red">No messages are found</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-group-item clearfix">
                          <a href="#">
                            <img src="/assets_admin/img/avatars/5.jpg" alt="avatar" className="avatar"/>
                            <span className="name">Mike Tomas</span>
                            <span className="status status-online">online</span>
                          </a>
                          <div className="chat-messages">
                            <ul>
                              <li className="chat-back"><a href="#">Back <i className="fa fa-chevron-right ml5"></i>
                              </a>
                              </li>
                              <li className="no-messages">
                                <p className="text-center color-red">No messages are found</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-group-item clearfix">
                          <a href="#">
                            <img src="/assets_admin/img/avatars/6.jpg" alt="avatar" className="avatar"/>
                            <span className="name">Jim Kerry</span>
                            <span className="status status-online">online</span>
                          </a>
                          <div className="chat-messages">
                            <ul>
                              <li className="chat-back"><a href="#">Back <i className="fa fa-chevron-right ml5"></i>
                              </a>
                              </li>
                              <li className="no-messages">
                                <p className="text-center color-red">No messages are found</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-group-item clearfix">
                          <a href="#">
                            <img src="/assets_admin/img/avatars/7.jpg" alt="avatar" className="avatar"/>
                            <span className="name">Little Jonh</span>
                            <span className="status status-online">online</span>
                          </a>
                          <div className="chat-messages">
                            <ul>
                              <li className="chat-back"><a href="#">Back <i className="fa fa-chevron-right ml5"></i>
                              </a>
                              </li>
                              <li className="no-messages">
                                <p className="text-center color-red">No messages are found</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-group-item clearfix">
                          <a href="#">
                            <img src="/assets_admin/img/avatars/8.jpg" alt="avatar" className="avatar"/>
                            <span className="name">Keith Smith</span>
                            <span className="status status-online">online</span>
                          </a>
                          <div className="chat-messages">
                            <ul>
                              <li className="chat-back"><a href="#">Back <i className="fa fa-chevron-right ml5"></i>
                              </a>
                              </li>
                              <li className="no-messages">
                                <p className="text-center color-red">No messages are found</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-group-item clearfix">
                          <a href="#">
                            <img src="/assets_admin/img/avatars/9.jpg" alt="avatar" className="avatar"/>
                            <span className="name">Tracy Miller</span>
                            <span className="status status-online">online</span>
                          </a>
                          <div className="chat-messages">
                            <ul>
                              <li className="chat-back"><a href="#">Back <i className="fa fa-chevron-right ml5"></i>
                              </a>
                              </li>
                              <li className="no-messages">
                                <p className="text-center color-red">No messages are found</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-group-item clearfix">
                          <a href="#">
                            <img src="/assets_admin/img/avatars/10.jpg" alt="avatar" className="avatar"/>
                            <span className="name">Peter Petrovski</span>
                            <span className="status status-online">online</span>
                          </a>
                          <div className="chat-messages">
                            <ul>
                              <li className="chat-back"><a href="#">Back <i className="fa fa-chevron-right ml5"></i>
                              </a>
                              </li>
                              <li className="no-messages">
                                <p className="text-center color-red">No messages are found</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-group-item clearfix">
                          <a href="#">
                            <img src="/assets_admin/img/avatars/11.jpg" alt="avatar" className="avatar"/>
                            <span className="name">Kim Lee</span>
                            <span className="status status-online">online</span>
                          </a>
                          <div className="chat-messages">
                            <ul>
                              <li className="chat-back"><a href="#">Back <i className="fa fa-chevron-right ml5"></i>
                              </a>
                              </li>
                              <li className="no-messages">
                                <p className="text-center color-red">No messages are found</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                      <div id="chat-write">
                        <form id="chat-write-form" className="form-vertical" role="form">
                          <div className="form-group mb5">
                            <textarea name="writetext" id="chatwritearea" rows={3} className="form-control"
                                      placeholder="Type message ..."></textarea>
                          </div>

                          <div className="form-group mb0">
                            <a href="#" className="btn btn-link btn-sm p0 mr5 color-gray"><i
                              className="fa fa-picture-o"></i> </a>
                            <a href="#" className="btn btn-link btn-sm p0 color-gray"><i className="fa fa-file"></i>
                            </a>
                            <a href="#" className="btn btn-default btn-sm pull-right">Send</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
        )}

  }