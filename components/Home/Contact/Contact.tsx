import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import contact from "../../../FakeDB/contact.json";

const Contact = () => {
  const form: any = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_mqaafbl",
        "template_08t9s6n",
        form.current,
        "user_bnnxVvW2kSJ6R7JiYXAQj"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setLoading(false);
            console.log(result);
            form.current.reset();
          } else {
            alert("Something went wrong! Try Again!");
            setLoading(false);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="py-16">
      <div className="contact_container">
        <div className="container mx-auto">
          <p className="category_text text-center">{contact.category}</p>
          <h3 className="heading_text sm:w-full md:w-7/12 mx-auto mt-5 text-center">
            {contact.heading}
          </h3>
          <div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 my-11">
              <div>
                <div className="contact_info_card">
                  <div className="py-6 contact_list">
                    <div className="flex">
                      <div>
                        <div className="contact_icon">
                          <img src={contact.address.icon} alt="" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h6>Address:</h6>
                        <p>{contact.address.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 contact_list">
                    <div className="flex">
                      <div>
                        <div className="contact_icon">
                          <img src={contact.email.icon} alt="" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h6>Email:</h6>
                        <p>{contact.email.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 contact_list">
                    <div className="flex">
                      <div>
                        <div className="contact_icon">
                          <img src={contact.mobile.icon} alt="" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h6>Phone:</h6>
                        <p>{contact.mobile.mobile}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:col-span-2">
                <form ref={form} onSubmit={sendEmail} className="contact_form">
                  <div className="py-3 grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        className="input_field"
                        type="text"
                        placeholder="Name"
                        name="user_name"
                      />
                    </div>
                    <div>
                      <input
                        className="input_field"
                        type="text"
                        placeholder="Email"
                        name="user_email"
                      />
                    </div>
                  </div>
                  <div className="py-3 grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        className="input_field"
                        type="text"
                        placeholder="Phone"
                        name="user_phone"
                      />
                    </div>
                    <div>
                      <input
                        className="input_field"
                        type="text"
                        placeholder="Subject"
                        name="user_subject"
                      />
                    </div>
                  </div>
                  <div className="py-4">
                    <textarea
                      className="input_field_textarea"
                      name="message"
                      id=""
                      cols={30}
                      rows={5}
                      placeholder="Messgae"
                    ></textarea>
                  </div>
                  <div className="py-3">
                    {loading ? (
                      <button
                        className="hireme_btn common_btn_disabled"
                        disabled
                      >
                        {" "}
                        <svg
                          role="status"
                          className="inline-block mr-4 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-900"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        Submit
                      </button>
                    ) : (
                      <button className="hireme_btn common_btn">Submit</button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
