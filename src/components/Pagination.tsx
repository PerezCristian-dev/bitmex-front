import React from "react";
import { useEffect, useState } from "react";
import { TablePaginationPropsI } from '../interfaces/app.interface';
import ButtonPagination from './ButtonPagination';
import { formatPagination } from '../helpers/formatPagination';

const Pagination = ({ hasSelectPagination, limitData, total, keyName, loadedData: loadData = false, callback, offset: _offset }: TablePaginationPropsI) => {

    let [offset, setOffset] = useState(_offset || 0);
    let to = limitData * (offset + 1);
    let totalPagination = Math.ceil(total / limitData);
    let cantLoad = 7;

    const handleClick = (i: number) => {
        if ((typeof callback == "function") && (i !== offset)) {
            callback(i);
            setOffset(i);
        }
    }

    useEffect(() => {
        setOffset(_offset || 0)
    }, [_offset])

    return (
        <React.Fragment>
            {limitData ?
                <>
                    <div style={{ gap: "1rem" }} className={'card-inner d-flex text-nowrap flex-wrap justify-content-between pagination-r'}>
                        <ul className={" pagination justify-content-center justify-content-md-start"}>
                            {!loadData && (
                                <React.Fragment>
                                    {"-".repeat(cantLoad).split("").map((_, i) => (
                                        <div key={"table" + i} style={{
                                            margin: "0px 2.5px",
                                            padding: 0,
                                            height: 36,
                                            width: 34,
                                        }}>
                                        </div>
                                    ))}
                                </React.Fragment>
                            )}

                            {(total && loadData) ? (
                                <ButtonPagination
                                    label={"Prev"}
                                    offset={offset}
                                    totalPagination={totalPagination}
                                    isBack={true}
                                    callback={handleClick}
                                />
                            )
                                :
                                null
                            }

                            <div className="d-flex" >
                                {(total && loadData) ? formatPagination(offset, totalPagination, 5).map((index, i) => {
                                    return (
                                        <li key={`pagination-${i}`} onClick={(e) => { e.preventDefault(); handleClick(index); }} className={`page-item ${offset === index && "active"}`}>
                                            <a className="page-link" key={`${keyName}-pagination-${i}`} href="#" aria-controls="DataTables_Table_1" tabIndex={0} >{index + 1}</a>
                                        </li>
                                    )
                                })
                                    :
                                    null
                                }
                            </div>
                            {(total && loadData) ? (
                                <ButtonPagination
                                    label={"Next"}
                                    offset={offset}
                                    totalPagination={totalPagination}
                                    callback={handleClick}
                                />
                            )
                                :
                                null}

                        </ul>

                        {hasSelectPagination &&
                            <div className="g" data-select2-id="15">
                                <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3" data-select2-id="14">
                                    <div>Page</div>
                                    <div>
                                        <select onChange={(e) => { e.preventDefault(); handleClick(Number(e.target.value)); }} value={offset} className="form-select " >

                                            {(total && loadData) ?
                                                [...Array(totalPagination)].map((i, index: number) =>
                                                    <option key={`pagination-${i}`} value={index} >{index + 1}</option>
                                                )
                                                :
                                                <option value="0" >0</option>
                                            }
                                        </select>

                                    </div>
                                    <div>OF {totalPagination}</div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="pl-3" >
                        {!loadData && (
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div style={{ width: 100, height: 15 }}>
                                </div>
                            </div>
                        )}
                    </div>
                </>
                :
                null
            }
        </React.Fragment>
    )
}

export default Pagination;