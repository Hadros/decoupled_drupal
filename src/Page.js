import React from "react";

const Page = (props) => {
  return (
    <>
      <div
        className="farm_owner farm_owner_premium_2 association-access-menu-denied farm-access-menu-granted layout-no-sidebars user-logged-in path-dashboard menu-position-side menu-side-left full-screen scrollup">


        <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
          <div className="all-wrapper solid-bg-all common-page">
            <div className="search-with-suggestions-w">
              <div className="search-with-suggestions-modal">
                <div className="element-search">
                  <input className="search-suggest-input" placeholder="Start typing to search..." type="text"/>
                  <div className="close-search-suggestions">
                    <i className="os-icon os-icon-x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-w">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
