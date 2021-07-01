import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import AgentGameReport from "./agentGameReportChild"
import queryString from "query-string"

class AllAgent extends React.Component{
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs breadCrumbTitle="Agent" breadCrumbParent="Game Report" />
        <Row>
          <Col sm="12">
            <AgentGameReport parsedFilter={queryString.parse(this.props.location.search)} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AllAgent