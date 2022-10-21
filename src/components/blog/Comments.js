import React from 'react';
import user from '../../img/user.png';
import { format } from "date-fns";
const Comments = ({c}) => {
 
  
    return (

        <li className="mb_20 wow animated slideInUp">
        <div className="comment_description bg_deepblack p_20">
          <div className="author_img">
            <img src={user} alt="images" />
          </div>
          <div className="author_text color_secondery">
            <div className="author_info d-flex justify-content-between w-100">
              <h5 className="author_name color_lightgray">
                {c.attributes.name}
              </h5>
              <p className='ml-5'><span> { format(new Date(c.attributes.publishedAt), "d MMM yyyy")}</span></p>
            </div>
            <p>
              {c.attributes.comment}
            </p>
            {/*<a href="#" className="btn btn_info mt_15">
              Replay
    </a> */}
          </div>
        </div>
      </li>
    );
}

export default Comments;
