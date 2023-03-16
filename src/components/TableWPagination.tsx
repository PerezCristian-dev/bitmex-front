import { TablePropsI } from "@interfaces/app.interface";
import { TableColumnsPropsI } from '../interfaces/app.interface';
import Pagination from "./Pagination";
import TBodyTable from "./TBodyTable";


const TableWPagination = (props: TablePropsI) => {
    let _props = { ...props };
    let { header, keyName, stylesCustom } = _props;
    let columns = header?.columns;
    let pagination = _props.pagination;
    let loadedData = Array.isArray(_props.data);
    const isLight = props.tableVersion === "bold" ? false : true


    return (

        <div className="card card-bordered">
            {props?.headerRender &&
                <div className="card-inner border-bottom">
                    {typeof (props.headerRender) === "function" ? props.headerRender() : props.headerRender}
                </div>
            }
            <div className={` card-inner p-0 ${stylesCustom?.container || ""} `}>
                <div id="scroll-table" className={` containerOverflow ${stylesCustom?.containerOverflow || ""} `}>
                    <table className={`table table-tranx   ${stylesCustom?.table || ""} `}>
                        <thead className={``} >
                            <tr className={`tb-tnx-head ${isLight && "bg-white"}  ${stylesCustom?.tr || ""} `}>
                                {columns?.map((column: TableColumnsPropsI, i: number) => (
                                    <th  key={`${keyName}-th-${i}`} style={{ borderTop: 0 }} tabIndex={0} rowSpan={1} colSpan={1} className={`tb-tnx-info ${isLight && "fw-lighter"} ${stylesCustom?.th || ""} `} >
                                        <div className="text-nowrap " >
                                            {typeof column.title === "function" ? column.title() : (column.title)}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <TBodyTable {..._props} handleReload={_props.handleReload} />
                        </tbody>
                    </table>
                </div>
                <div className={` ${stylesCustom?.paginationContainer || ""} `}>
                    {pagination && (
                        <Pagination
                            hasSelectPagination={props?.hasSelectPagination}
                            {...pagination}
                            limit={pagination.limit}
                            keyName={_props.keyName}
                            limitData={pagination.limit}
                            loadedData={loadedData}
                            total={pagination.total || 0}
                            callback={typeof pagination.change === "function" ? pagination.change : () => null}
                        />
                    )}
                </div>
            </div>
            
            {props.footerRender && (
                <div className={`card-inner-sm border-top ${stylesCustom?.footerContainer || ""}`.trim()}>
                    {typeof (props.footerRender) === "function" ? props.footerRender() : props.footerRender}
                </div>
            )}
        </div>
    )
}

export default TableWPagination;