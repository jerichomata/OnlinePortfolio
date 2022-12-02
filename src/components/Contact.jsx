import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

// const Contact = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

//   const onSubmit = (data, e) => {
//     e.target.reset();
//     console.log("Message submited: " + JSON.stringify(data));
//   };

//   return (
//     <>
//       <form ref={form} className="contct-form" onSubmit={sendEmail}>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="user_name"
//                 className="form-control"
//                 placeholder="Full name"
//                 {...register("name", { required: true })}
//               />
//               <label className="form-label">Name</label>
//               {errors.name && errors.name.type === "required" && (
//                 <span className="invalid-feedback">Name is required</span>
//               )}
//             </div>
//           </div>
//           {/* End .col-6 */}

//           <div className="col-md-6">
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="user_email"
//                 className="form-control"
//                 placeholder="Email address"
//                 {...register(
//                   "email",
//                   {
//                     required: "Email is Required",
//                     pattern: {
//                       value: /\S+@\S+\.\S+/,
//                       message: "Entered value does not match email format",
//                     },
//                   },
//                   { required: true }
//                 )}
//               />
//               <label className="form-label">Email</label>
//               {errors.email && (
//                 <span className="invalid-feedback">{errors.email.message}</span>
//               )}
//             </div>
//           </div>
//           {/* End .col-6 */}

//           {/* <div className="col-12">
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Subject"
//                 {...register("subject", { required: true })}
//               />
//               <label className="form-label">Subject</label>
//               {errors.subject && (
//                 <span className="invalid-feedback">Subject is required.</span>
//               )}
//             </div>
//           </div> */}
//           {/* End .col-12 */}
          

//           <div className="col-12">
//             <div className="form-group">
//               <textarea
//                 rows="4"
//                 name="message"
//                 className="form-control"
//                 placeholder="Type comment"
//                 {...register("comment", { required: true })}
//               ></textarea>
//               <label className="form-label">Write message ...</label>
//               {errors.comment && (
//                 <span className="invalid-feedback">Comment is required.</span>
//               )}
//             </div>
//           </div>
//           {/* End .col-12 */}

//           <div className="col-12">
//             <div className="btn-bar">
//               <button className="px-btn px-btn-theme">Send your message<input type="submit" value="Send" /></button>
//             </div>
//           </div>
//           {/* End .col-12 */}
//         </div>
//       </form>
//     </>
//   );
// };

export const ContactUs = () => {
  const {
    // register,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    // console.log(e)
    e.preventDefault();

    emailjs.sendForm('service_utjijpo', 'template_aupib5l', form.current, 'PB2HUWsnW6JHbVqLH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };

  return (

    <form ref={form} className="row" onSubmit={sendEmail}>
    
      <div className="col-md-6">
        <div className="form-group">
        <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Full name"
            />
        <label className="form-label">Full Name</label>
            {errors.name && errors.name.type === "required" && (
              <span className="invalid-feedback">Name is required</span>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Email address"
            />
            <label className="form-label">Email</label>
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <textarea
              rows="4"
              name="message"
              className="form-control"
              placeholder="Type comment"
            ></textarea>
            <label className="form-label">Write message ...</label>
            {errors.comment && (
              <span className="invalid-feedback">Comment is required.</span>
            )}
          </div>
        </div>
        
        <div className="col-12">
          <div className="btn-bar">
            <button className="px-btn px-btn-theme" type="submit" value="Send">Send your message</button>
          </div>
        </div>

      {/* <label>Full Name</label>
      <input type="text" name="user_name" /> */}
      {/* <label>Email</label>
      <input type="email" name="user_email" /> */}
      {/* <label>Message</label>
      <textarea name="message" /> */}
      {/* <div className="col-12">
        <div className="btn-bar">
          <input className="px-btn px-btn-theme" type="submit" value="Send" />
        </div>
      </div> */}
    </form>
  );
};

export default ContactUs;
