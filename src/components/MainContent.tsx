export const MainContent = () => {
  return (
    <>
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <div>
            <h2 className="main-content-title tx-24 mg-b-1 mg-b-lg-1">
              Hi, welcome back!
            </h2>
            <p className="mg-b-0">Sales monitoring dashboard.</p>
          </div>
        </div>
        <div className="main-dashboard-header-right">
          <div>
            <label className="tx-13">Customer Ratings</label>
            <div className="main-star">
              <i className="typcn typcn-star"></i> <span>(14,873)</span>
            </div>
          </div>
          <div>
            <label className="tx-13">Online Sales</label> <h5>563,275</h5>
          </div>
          <div>
            <label className="tx-13">Offline Sales</label> <h5>783,675</h5>
          </div>
        </div>
      </div>
    </>
  );
};
