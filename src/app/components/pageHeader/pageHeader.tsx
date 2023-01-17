import React from "react";
import AppRouter from "../../../AppRouter";
import './pageHeader.css'
class PageHeader extends React.Component{
    render(): React.ReactNode {
        return(
            <div>
            <div className="pageTitle">Address Book</div>
            </div>
        )
    }
}
export default PageHeader