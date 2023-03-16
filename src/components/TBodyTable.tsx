import React from "react";
import { useEffect, useState } from "react";
import { TableColumnsPropsI, TablePropsI } from '../interfaces/app.interface';


const TBodyTable = ({ keyName, data, Empty, header, limit, timeout, stylesCustom, handleAction }: TablePropsI) => {
    let columns = header?.columns;
    const [connected, setConnected] = useState(true);
    const [isHover, setIsHover] = useState(null);

    const connection = () => {
        if (timeout) {
            setConnected(false)
            return;
        }
    }

    useEffect(() => {
        connection()
    }, [timeout])

    const handleMouseEnter = (idx: number) => setIsHover(idx)
    const handleMouseLeave = () => setIsHover(null)
    const handleDoubleClick = (idx: number, colum:any, z:any, item:any) =>{
        handleAction?.("View Details", item);
    }


    return (
        <React.Fragment>
            {
                connected ?
                    <React.Fragment>

                        {!data && (
                            "-".repeat(limit || 0).split("").map((_, i) => (
                                <tr key={`${keyName}-tr-load-${i}`}>
                                    {columns?.map((_, e) => (
                                        <td key={`${keyName}-td-load-${e}`}>
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}

                        {data && !data.length && typeof Empty == "function" ? (
                            <tr>
                                <td colSpan={15} >
                                    <div className="text-center">
                                        <Empty />
                                    </div>
                                </td>
                            </tr>
                        ) : ''}

                        {data && data?.length ? (
                            data?.map((item: any, i) => {
                                // let isHover = false;

                                
                                return (
                                    <tr className={""} key={`${keyName}-tr-body-${i}`} >
                                        {columns.map((column: TableColumnsPropsI, z: number) => (
                                            <td
                                                
                                                style={{ verticalAlign: "middle"}}
                                                // onMouseEnter={() => handleMouseEnter(i)}
                                                // onMouseLeave={handleMouseLeave}
                                                onDoubleClick={()=>handleDoubleClick(i, column, z, item)}
                                                className={` ${stylesCustom?.td || ""}`.trim()} key={`${keyName}-td-body-${i}-${z}`} >
                                                {typeof column.render == "function" ? (
                                                    column.render({ data: item, indexData: i, isHover: isHover === i, indexColumn: z })
                                                ) : (
                                                    column.formatDate ? new Date(item[column?.key || ""]).toISOString() : item[column?.key || ""]
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            })
                        ) : ''}
                    </React.Fragment>
                    :
                    <tr>
                        <td colSpan={15}>
                        </td>
                    </tr>
            }
        </React.Fragment>
    )
}

export default TBodyTable;