import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { blogContext } from '../../context/blogContext/blogContext';

const CommentForm = ({blogId}) => {
  const {addComments} = useContext(blogContext);
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => {
    const commentWithId = {...data, blog:blogId}
		addComments(commentWithId);
	};
    return (
        <form onSubmit={handleSubmit(onSubmit)}  className="reply_form">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <input
              className="form-control bg_deepblack"
              name="author_name"
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name*"
            />
          </div>
          <div className="col-md-6 col-lg-6">
            <input
              className="form-control bg_deepblack"
              name="author_email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Email Address*"
            />
          </div>
          <div className="col-md-12">
            <textarea
              className="form-control bg_deepblack"
              name="comment"
              rows="7"
              {...register("comment", { required: true })}
              placeholder="Type Comments..."
            ></textarea>
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              name="submit"
              className="btn btn-default"
            >
              Post Comment
            </button>
          </div>
        </div>
      </form>
    );
}

export default CommentForm;
