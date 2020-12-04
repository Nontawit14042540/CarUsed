import React , {Component} from "react";
// import styles from "./Navbar.module.css"
import styles from "./Loginfrom.module.css"

export default class Loginfrom extends Component{
	render(){
		return(
			<React.Fragment>
				<card className="card" id={styles.card}>
					<div className="card-header">
						<h5>ระบบขอใช้รถ สำนักประชาสัมพันธ์เขต 6</h5>
					</div>
				</card>
		   </React.Fragment>
		)
	}
}
