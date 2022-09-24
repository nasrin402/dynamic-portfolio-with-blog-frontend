import React, { useContext } from 'react';
import BlogBanner from '../components/blog/BlogBanner';
import BlogMenu from '../components/blog/BlogMenu';
import Footer from '../components/layout/Footer';
import { useForm } from "react-hook-form";
import { AuthContext } from '../context/authContext/AuthContext';

const Register = () => {
	const {registerUser} = useContext(AuthContext);
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => {
		registerUser(data)
	};

	
    return (
        <>
        <BlogMenu />
        <BlogBanner />
        <section id="contact" name="contact" className="py_80 bg_black full_row">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-lg-12">
					<div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
	                    <h2 className="title text-uppercase color_white"><span className="line_double mx-auto color_default">Register</span>Create your account</h2>
	                    <span className="sub_title color_lightgray">To comment or create a new blog you need to register.</span>
	                </div>
				</div>
				<div className="col-md-12 col-lg-12">
					<div className="row">
				
						<div className="col-md-12 col-lg-12">
							<form onSubmit={handleSubmit(onSubmit)} className="form contact_message wow animated fadeInRight" id="contact-form">
								<div className="row">
									<div className="col-md-6 col-lg-6">
										<div className="form-group">
											<input {...register("fname", { required: true })} className="form-control bg_black" type="text" name="fname" placeholder="Your First name" />
										</div>
									</div>
									<div className="col-md-6 col-lg-6">
										<div className="form-group">
											<input {...register("lname", { required: true })} className="form-control bg_black" type="text" name="lname" placeholder="Your Last Name" />
										</div>
									</div>
									<div className="col-md-6 col-lg-6">
										<div className="form-group">
											<input {...register("username", { required: true })} className="form-control bg_black" type="text" name="username" placeholder="Your username" />
										</div>
									</div>
									<div className="col-md-6 col-lg-6">
										<div className="form-group">
											<input {...register("email", { required: true })} className="form-control bg_black" type="email" name="email" placeholder="Email Address" />
										</div>
									</div>
									<div className="col-md-6 col-lg-6">
										<div className="form-group">
											<input {...register("password", { required: true })} className="form-control bg_black" type="password" name="password" placeholder="Password" />
										</div>
									</div>
									<div className="col-md-6 col-lg-6">
										<div className="form-group">
											<input {...register("cPassword", { required: true })} className="form-control bg_black" type="password" name="cPassword" placeholder="Confirm password" />
										</div>
									</div>
									{/*<div className="col-md-6 col-lg-6">
										<div className="form-group">
											<input {...register("profileImg", { required: true })} className="form-control bg_black" type="file" name="profileImg" placeholder="Upload profile image" />
										</div>
	</div> */}
									
									
									<div className="col-md-12 col-lg-12">
										<div className="form-group">
											<input className="btn btn-default" id="send" value="Register" type="submit"/>
										</div>
									</div>
									<div className="col-md-12 col-lg-12">
										<div className="error-handel">
											<div id="success">Your email sent Successfully, Thank you.</div>
											<div id="error"> Error occurred while sending email. Please try again later.</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        <Footer />  
        </>
    );
}

export default Register;
