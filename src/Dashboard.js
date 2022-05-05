import React from "react";

const Dashboard = () => {
  return (
    <>
      <div
        className="menu-w color-scheme-light color-style-default menu-position-side menu-side-left menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover">
        <div className="logo-w justify-content-center">
          <section className="row region region-branding">
            <a href="/" title="Home" rel="home" className="navbar-brand logo">
              <img src="/themes/custom/bb_dash21/logo.svg" alt="Home" className="img-fluid d-inline-block align-top"/>
            </a>

          </section>

        </div>

        <div className="element-search autosuggest-search-activator">
          <input placeholder="Start typing to search..." type="text"/>
        </div>


        <nav role="navigation" aria-labelledby="block-bb-dash21-dashboard-menu-menu" id="block-bb-dash21-dashboard-menu"
             className="block block-menu navigation menu--dashboard">

          <h2 className="sr-only" id="block-bb-dash21-dashboard-menu-menu">Dashboard</h2>


          <ul id="block-bb-dash21-dashboard-menu" block="block-bb-dash21-dashboard-menu" className="clearfix main-menu">

            <li className="sub-header">
              <span>Dashboard Menu</span>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/store" className="nav-link-dashboard nav-link--dashboard-store" data-title="Store"
                 data-url="/dashboard/store" data-drupal-link-system-path="dashboard/store">
                <div className="icon-w">
                  <div className="os-icon os-icon-dollar-sign"></div>
                </div>
                <span>Store</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Store
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-dollar-sign"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/store/manage" className="nav-link-dashboard nav-link--dashboard-store-manage"
                         data-title="Manage Store" data-url="/dashboard/store/manage"
                         data-drupal-link-system-path="dashboard/store/manage">Manage Store</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/store/orders" className="nav-link-dashboard nav-link--dashboard-store-orders"
                         data-title="Orders" data-url="/dashboard/store/orders"
                         data-drupal-link-system-path="dashboard/store/orders">Orders</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/store/products"
                         className="nav-link-dashboard nav-link--dashboard-store-products" data-title="Products"
                         data-url="/dashboard/store/products"
                         data-drupal-link-system-path="dashboard/store/products">Products</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/store/purchase-statistics/monthly"
                         className="nav-link-dashboard nav-link--dashboard-store-purchase-statistics-monthly"
                         data-title="Purchase Statistics" data-url="/dashboard/store/purchase-statistics/monthly"
                         data-drupal-link-system-path="dashboard/store/purchase-statistics/monthly">Purchase
                        Statistics</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/farm" className="nav-link-dashboard nav-link--dashboard-farm" data-title="Farm"
                 data-url="/dashboard/farm" data-drupal-link-system-path="dashboard/farm">
                <div className="icon-w">
                  <div className="os-icon os-icon-briefcase"></div>
                </div>
                <span>Farm</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Farm
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-briefcase"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/farm/manage" className="nav-link-dashboard nav-link--dashboard-farm-manage"
                         data-title="Manage Farm" data-url="/dashboard/farm/manage"
                         data-drupal-link-system-path="dashboard/farm/manage">Manage Farm</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/farm/blog" className="nav-link-dashboard nav-link--dashboard-farm-blog"
                         data-title="Farm Blog" data-url="/dashboard/farm/blog"
                         data-drupal-link-system-path="dashboard/farm/blog">Farm Blog</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/farm/association-membership"
                         className="nav-link-dashboard nav-link--dashboard-farm-association-membership"
                         data-title="Associations Membership" data-url="/dashboard/farm/association-membership"
                         data-drupal-link-system-path="dashboard/farm/association-membership">Associations
                        Membership</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/farm/facebook"
                         className="nav-link-dashboard nav-link--dashboard-farm-facebook" data-title="Social Media"
                         data-url="/dashboard/farm/facebook" data-drupal-link-system-path="dashboard/farm/facebook">Social
                        Media</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/animals" className="nav-link-dashboard nav-link--dashboard-animals"
                 data-title="Animals" data-url="/dashboard/animals" data-drupal-link-system-path="dashboard/animals">
                <div className="icon-w">
                  <div className="os-icon os-icon-ui-34"></div>
                </div>
                <span>Animals</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Animals
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-ui-34"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/animals" className="nav-link-dashboard nav-link--dashboard-animals"
                         data-title="Animals" data-url="/dashboard/animals"
                         data-drupal-link-system-path="dashboard/animals">Animals</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/animals/med" className="nav-link-dashboard nav-link--dashboard-animals-med"
                         data-title="Medical Records" data-url="/dashboard/animals/med"
                         data-drupal-link-system-path="dashboard/animals/med">Medical Records</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/animals/ownership"
                         className="nav-link-dashboard nav-link--dashboard-animals-ownership"
                         data-title="Ownership Requests" data-url="/dashboard/animals/ownership"
                         data-drupal-link-system-path="dashboard/animals/ownership">Ownership Requests</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/animals/groups"
                         className="nav-link-dashboard nav-link--dashboard-animals-groups" data-title="Animal Groups"
                         data-url="/dashboard/animals/groups" data-drupal-link-system-path="dashboard/animals/groups">Animal
                        Groups</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/animals/advertised"
                         className="nav-link-dashboard nav-link--dashboard-animals-advertised"
                         data-title="Advertised Animals" data-url="/dashboard/animals/advertised"
                         data-drupal-link-system-path="dashboard/animals/advertised">Advertised Animals</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/groups" className="nav-link-dashboard nav-link--dashboard-groups"
                 data-title="Mentors &amp; Groups" data-url="/dashboard/groups"
                 data-drupal-link-system-path="dashboard/groups">
                <div className="icon-w">
                  <div className="os-icon os-icon-users"></div>
                </div>
                <span>Mentors &amp; Groups</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Mentors &amp; Groups
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-users"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/groups" className="nav-link-dashboard nav-link--dashboard-groups"
                         data-title="News, Chats &amp; Content" data-url="/dashboard/groups"
                         data-drupal-link-system-path="dashboard/groups">News, Chats &amp; Content</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/groups/browse"
                         className="nav-link-dashboard nav-link--dashboard-groups-browse" data-title="Browse Groups"
                         data-url="/dashboard/groups/browse" data-drupal-link-system-path="dashboard/groups/browse">Browse
                        Groups</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/groups/membership"
                         className="nav-link-dashboard nav-link--dashboard-groups-membership" data-title="Membership"
                         data-url="/dashboard/groups/membership"
                         data-drupal-link-system-path="dashboard/groups/membership">Membership</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/tours" className="nav-link-dashboard nav-link--dashboard-tours" data-title="Tours"
                 data-url="/dashboard/tours" data-drupal-link-system-path="dashboard/tours">
                <div className="icon-w">
                  <div className="os-icon os-icon-calendar-time"></div>
                </div>
                <span>Tours</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Tours
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-calendar-time"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/tours/weekly" className="nav-link-dashboard nav-link--dashboard-tours-weekly"
                         data-title="Actual Weekly Schedule" data-url="/dashboard/tours/weekly"
                         data-drupal-link-system-path="dashboard/tours/weekly">Actual Weekly Schedule</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/tours/manage" className="nav-link-dashboard nav-link--dashboard-tours-manage"
                         data-title="Manage Tours" data-url="/dashboard/tours/manage"
                         data-drupal-link-system-path="dashboard/tours/manage">Manage Tours</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/tours/schedule/manage"
                         className="nav-link-dashboard nav-link--dashboard-tours-schedule-manage"
                         data-title="Manage Future Slots" data-url="/dashboard/tours/schedule/manage"
                         data-drupal-link-system-path="dashboard/tours/schedule/manage">Manage Future Slots</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/tours/schedule/exception-dates"
                         className="nav-link-dashboard nav-link--dashboard-tours-schedule-exception-dates"
                         data-title="Exception Dates" data-url="/dashboard/tours/schedule/exception-dates"
                         data-drupal-link-system-path="dashboard/tours/schedule/exception-dates">Exception Dates</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/posts" className="nav-link-dashboard nav-link--dashboard-posts" data-title="Guides"
                 data-url="/dashboard/posts" data-drupal-link-system-path="dashboard/posts">
                <div className="icon-w">
                  <div className="os-icon os-icon-ui-92"></div>
                </div>
                <span>Guides</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Guides
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-ui-92"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/posts/manage" className="nav-link-dashboard nav-link--dashboard-posts-manage"
                         data-title="Manage Community Posts" data-url="/dashboard/posts/manage"
                         data-drupal-link-system-path="dashboard/posts/manage">Manage Community Posts</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/events/manage" className="nav-link-dashboard nav-link--dashboard-events-manage"
                 data-title="Events" data-url="/dashboard/events/manage"
                 data-drupal-link-system-path="dashboard/events/manage">
                <div className="icon-w">
                  <div className="os-icon os-icon-watch"></div>
                </div>
                <span>Events</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Events
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-watch"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/events/manage"
                         className="nav-link-dashboard nav-link--dashboard-events-manage" data-title="Manage Events"
                         data-url="/dashboard/events/manage" data-drupal-link-system-path="dashboard/events/manage">Manage
                        Events</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/auctions" className="nav-link-dashboard nav-link--dashboard-auctions"
                 data-title="Auctions" data-url="/dashboard/auctions" data-drupal-link-system-path="dashboard/auctions">
                <div className="icon-w">
                  <div className="os-icon os-icon-bar-chart-stats-up"></div>
                </div>
                <span>Auctions</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Auctions
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-bar-chart-stats-up"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/auctions/list"
                         className="nav-link-dashboard nav-link--dashboard-auctions-list" data-title="My Auctions"
                         data-url="/dashboard/auctions/list" data-drupal-link-system-path="dashboard/auctions/list">My
                        Auctions</a>

                    </li>


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/auctions/bids"
                         className="nav-link-dashboard nav-link--dashboard-auctions-bids" data-title="My Bids"
                         data-url="/dashboard/auctions/bids" data-drupal-link-system-path="dashboard/auctions/bids">My
                        Bids</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/farm/domainredirects"
                 className="nav-link-dashboard nav-link--dashboard-farm-domainredirects" data-title="Custom Web Domain"
                 data-url="/dashboard/farm/domainredirects"
                 data-drupal-link-system-path="dashboard/farm/domainredirects">
                <div className="icon-w">
                  <div className="os-icon os-icon-robot-1"></div>
                </div>
                <span>Custom Web Domain</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Custom Web Domain
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-robot-1"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/farm/domainredirects"
                         className="nav-link-dashboard nav-link--dashboard-farm-domainredirects"
                         data-title="Manage Redirects" data-url="/dashboard/farm/domainredirects"
                         data-drupal-link-system-path="dashboard/farm/domainredirects">Manage Redirects</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/invites" className="nav-link-dashboard nav-link--dashboard-invites"
                 data-title="Invites" data-url="/dashboard/invites" data-drupal-link-system-path="dashboard/invites">
                <div className="icon-w">
                  <div className="os-icon os-icon-email-forward"></div>
                </div>
                <span>Invites</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Invites
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-email-forward"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/invites/list" className="nav-link-dashboard nav-link--dashboard-invites-list"
                         data-title="Invites" data-url="/dashboard/invites/list"
                         data-drupal-link-system-path="dashboard/invites/list">Invites</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard menu-item--expanded has-sub-menu">


              <a href="/dashboard/reviews" className="nav-link-dashboard nav-link--dashboard-reviews"
                 data-title="Reviews" data-url="/dashboard/reviews" data-drupal-link-system-path="dashboard/reviews">
                <div className="icon-w">
                  <div className="os-icon os-icon-edit-32"></div>
                </div>
                <span>Reviews</span>
              </a>


              <div className="sub-menu-w">
                <div className="sub-menu-header">
                  Reviews
                </div>
                <div className="sub-menu-icon">
                  <i className="os-icon os-icon-edit-32"></i>
                </div>
                <div className="sub-menu-i">


                  <ul className="sub-menu">


                    <li className="nav-item-dashboard">

                      <a href="/dashboard/reviews" className="nav-link-dashboard nav-link--dashboard-reviews"
                         data-title="Reviews" data-url="/dashboard/reviews"
                         data-drupal-link-system-path="dashboard/reviews">Reviews</a>

                    </li>


                  </ul>


                </div>
              </div>
            </li>


            <li className="nav-item-dashboard">


              <a href="/user" className="nav-link-dashboard nav-link--user" data-title="My Account" data-url="/user"
                 data-drupal-link-system-path="user">
                <div className="icon-w">
                  <div className="os-icon os-icon-checkmark"></div>
                </div>
                <span>My Account</span>
              </a>

            </li>

          </ul>

        </nav>


        <div className="side-menu-magic">
          <h4>
            Earn Rewards
          </h4>
          <div className="btn-w">
            <a className="btn btn-white btn-rounded" href="/dashboard/invites/list">Invite Friends</a>
          </div>
        </div>

      </div>
    </>
  );
}

export default Dashboard;
