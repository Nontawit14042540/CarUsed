import React , {Component} from "react";
import styles from "./Navbar.module.css"

export default class Navbar extends Component{
	render(){
		return(
			<React.Fragment>
		      <div id="page-top" className={styles.top}>
		        <nav id={styles.mainNav} className="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
		          <div className={styles.container}>
		            <a className="navbar-brand" id={styles.navbarbrand} href="#page-top">CarBooking</a>
		          </div>
		        </nav>
		      </div>
		    </React.Fragment>
		)
	}
}