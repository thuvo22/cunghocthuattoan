import React from "react";
import NavBar from "../../../shared/NavBar";
import CodeBlock from "../../../shared/CodeBlock";
import { sample } from './misc';
import "../../../../components/styles.scss";
import ProblemSummary from "../KiemSoLonNhiTrongMang/misc/ProblemSummary"

const KiemSoLonNhiTrongMang = () => {
    const title = "Kiếm Số Lớn Nhì Trong Mảng";
    console.log(sample);
    return (<><NavBar /><div className="problemTitle">{title}</div>
        <ProblemSummary/><CodeBlock {...sample} /></>)
}
export default KiemSoLonNhiTrongMang;