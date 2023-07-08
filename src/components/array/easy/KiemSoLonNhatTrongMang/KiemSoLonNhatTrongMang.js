import React from "react";
import NavBar from "../../../shared/NavBar";
import CodeBlock from "../../../shared/CodeBlock";
import { sample } from './misc';
import "../../../../components/styles.scss";
import ProblemSummary from "../KiemSoLonNhatTrongMang/misc/ProblemSummary"

const KiemSoLonNhatTrongMang = () => {
    const title = "Kiếm Số Lớn Nhất Trong Mảng";
    console.log(sample);
    return (<><NavBar /><div className="problemTitle">{title}</div>
        <ProblemSummary/><CodeBlock {...sample} /></>)
}
export default KiemSoLonNhatTrongMang;