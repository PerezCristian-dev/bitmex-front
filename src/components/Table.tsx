import React from "react";

export const Table = () => {
  return (
    <>
      <div className="col-md-12 col-lg-8 col-xl-8">
        {" "}
        <div className="card card-table-two">
          {" "}
          <div className=" card-header p-0 d-flex justify-content-between">
            {" "}
            <h4 className="card-title mb-1">Your Most Recent Earnings</h4>{" "}
            <a
              href="javascript:void(0);"
              className="tx-inverse"
              data-bs-toggle="dropdown"
            >
              <i className="mdi mdi-dots-horizontal text-gray"></i>
            </a>{" "}
            <div className="dropdown-menu">
              {" "}
              <a className="dropdown-item" href="javascript:void(0);">
                Action
              </a>{" "}
              <a className="dropdown-item" href="javascript:void(0);">
                Another Action
              </a>{" "}
              <a className="dropdown-item" href="javascript:void(0);">
                Something Else Here
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <span className="tx-12 tx-muted mb-3 ">
            This is your most recent earnings for today's date.
          </span>{" "}
          <div className="table-responsive country-table">
            {" "}
            <table className="table table-striped table-bordered mb-0 text-sm-nowrap text-lg-nowrap text-xl-nowrap">
              {" "}
              <thead>
                <tr>
                  <th className="wd-lg-25p">Date</th>
                  <th className="wd-lg-25p tx-right">Sales Count</th>
                  <th className="wd-lg-25p tx-right">Earnings</th>
                  <th className="wd-lg-25p tx-right">Tax Witheld</th>
                </tr>{" "}
              </thead>{" "}
              <tbody>
                <tr>
                  <td>05 Dec 2019</td>
                  <td className="tx-right tx-medium tx-inverse">34</td>
                  <td className="tx-right tx-medium tx-inverse">$658.20</td>
                  <td className="tx-right tx-medium tx-danger">-$45.10</td>
                </tr>
                <tr>
                  <td>06 Dec 2019</td>
                  <td className="tx-right tx-medium tx-inverse">26</td>
                  <td className="tx-right tx-medium tx-inverse">$453.25</td>
                  <td className="tx-right tx-medium tx-danger">-$15.02</td>
                </tr>
                <tr>
                  <td>07 Dec 2019</td>
                  <td className="tx-right tx-medium tx-inverse">34</td>
                  <td className="tx-right tx-medium tx-inverse">$653.12</td>
                  <td className="tx-right tx-medium tx-danger">-$13.45</td>
                </tr>
                <tr>
                  <td>08 Dec 2019</td>
                  <td className="tx-right tx-medium tx-inverse">45</td>
                  <td className="tx-right tx-medium tx-inverse">$546.47</td>
                  <td className="tx-right tx-medium tx-danger">-$24.22</td>
                </tr>
                <tr>
                  <td>09 Dec 2019</td>
                  <td className="tx-right tx-medium tx-inverse">31</td>
                  <td className="tx-right tx-medium tx-inverse">$425.72</td>
                  <td className="tx-right tx-medium tx-danger">-$25.01</td>
                </tr>{" "}
              </tbody>
            </table>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};
