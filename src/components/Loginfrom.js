import React , {Component} from "react";
// import styles from "./Navbar.module.css"
import styles from "./Loginfrom.module.css"

export default class Loginfrom extends Component{
	render(){
		return(
			<React.Fragment>
				<div className="card" id={styles.card}>
					<div className="card-title my-3">
						<h5>ระบบขอใช้รถ สำนักประชาสัมพันธ์เขต 6</h5>
					</div>
						<div className="card-img-top" id={styles.img}>
							image
						</div>

				</div>
		   </React.Fragment>
		)
	}
}
