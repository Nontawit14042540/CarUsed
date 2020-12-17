import React , {Component} from "react";
// import styles from "./Navbar.module.css"
import styles from "./Loginfrom.module.css"
//test
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
						<div className="card-body" id={styles.body}>
							<div className="container" id={styles.container}>
								<from className={styles.from}>
									<h3 className={styles.txtLogin}>กรุณาเข้าสู่ระบบ</h3>
									<div className={styles.logfrom}>
										<div className="input-group mb-3">
										  <div className="input-group-prepend">
										    <span className="input-group-text" id="basic-addon1">
													<i class="fas fa-user"></i>
												</span>
										  </div>
										  <input type="text" class="form-control" placeholder="ชื่อผู้ใช้" aria-label="ชื่อผู้ใช้" aria-describedby="basic-addon1"/>
										</div>
										<div className="input-group mb-3">
											<div className="input-group-prepend">
												<span className="input-group-text" id="basic-addon1">
													<i class="fas fa-lock"></i>
												</span>
											</div>
											<input type="password" className="form-control" placeholder="รหัสผ่าน" aria-label="รหัสผ่าน" aria-describedby="basic-addon1"/>
										</div>
										<div className={styles.btn}>
											<button type="button" className="btn btn-primary">เข้าสู่ระบบ</button>
										</div>
									</div>
								</from>
							</div>
						</div>
				</div>

		   </React.Fragment>
		)
	}
}
