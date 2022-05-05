import React from "react";

const ContentW = (props) => {
  return (
    <>
      <div className="content-w">

        <div className="top-bar color-scheme-dark">
          <div className="top-menu-controls">
            <div className="element-search autosuggest-search-activator">
              <input placeholder="Start typing to search..." type="text"/>
            </div>
            <div className="messages-notifications os-dropdown-trigger os-dropdown-position-left">
              <i className="os-icon os-icon-mail-14"></i>
              <span className="messages-quantity"></span>
              <div className="new-messages-count">1</div>
              <div id="bodyMessage" className="os-dropdown light message-list">
                <ul className="messages-list in-bar">
                  <li id="message-bar-mid-1" className="new"><a
                    href="/dashboard/messages#/threads/ef017f23-d9f4-4947-befc-54dda43bf27f">
                    <div className="user-avatar-w"><img src=""/></div>
                    <div className="message-content"><h6 className="message-from">HeritageFarmSuriAlpacas</h6><h6
                      className="message-title">Test message - new thread...</h6></div>
                  </a></li>
                </ul>
              </div>
            </div>
            <div className="custom-top-icon top-icon top-settings os-dropdown-trigger os-dropdown-position-left">
              <i className="os-icon os-icon-zap"></i>
              <span className="notifications-quantity"></span>
              <div id="bodyNotify" className="os-dropdown">
                <div className="icon-w">
                  <i className="os-icon os-icon-zap"></i>
                </div>
              </div>
            </div>

            <div className="logged-user-w">
              <div className="logged-user-i">
                <div className="avatar-w">
                  <img alt="" src="/themes/custom/bb_dash21/dest/img/avatar1.jpg"/>
                </div>
                <div className="logged-user-menu color-style-bright">
                  <div className="logged-user-avatar-info">
                    <div className="avatar-w">
                      <img alt="" src="/themes/custom/bb_dash21/dest/img/avatar1.jpg"/>
                    </div>
                    <div className="logged-user-info-w">
                      <div className="logged-user-name">
                        AppleMountainAlpacas
                      </div>
                      <div className="logged-user-role">
                        Farm - Expert Mentor
                      </div>
                    </div>
                  </div>
                  <div className="bg-icon">
                    <i className="os-icon os-icon-wallet-loaded"></i>
                  </div>


                  <nav role="navigation" aria-labelledby="block-bb-dash21-account-menu-menu"
                       id="block-bb-dash21-account-menu" className="block block-menu navigation menu--account">

                    <h2 className="sr-only" id="block-bb-dash21-account-menu-menu">User account menu</h2>


                    <ul id="block-bb-dash21-account-menu" block="block-bb-dash21-account-menu" className="clearfix">


                      <li><a href="/dashboard" className="nav-link-account nav-link-account--dashboard"
                             data-drupal-link-system-path="dashboard"> <i className="os-icon os-icon-checkmark"></i>
                        <span>Dashboard</span>
                      </a></li>


                      <li><a href="/user" className="nav-link-account nav-link-account--user"
                             data-drupal-link-system-path="user"> <i className="os-icon os-icon-user-male-circle2"></i>
                        <span>My account</span>
                      </a></li>


                      <li><a href="/user/logout" className="nav-link-account nav-link-account--user-logout"
                             data-drupal-link-system-path="user/logout"> <i className="os-icon os-icon-signs-11"></i>
                        <span>Log out</span>
                      </a></li>


                    </ul>


                  </nav>


                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-i">
          <div className="content-box">


            <div className="row pt-4">
              <div className="col-sm-12">
                { props.children }
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7 col-xxl-6">

              </div>
              <div className="col-sm-5 col-xxl-6">

              </div>
            </div>
            <div className="row pt-4">
              <div className="col-sm-12">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentW;
