import React from "react";
import contact from "../../../FakeDB/contact.json";

const Contact = () => {
  return (
    <div className="py-16">
      <div className="contact_container">
        <div className="container mx-auto">
          <p className="category_text text-center">{contact.category}</p>
          <h3 className="heading_text sm:w-full md:w-7/12 mx-auto mt-5 text-center">
            {contact.heading}
          </h3>
          <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-9 my-11">
              <div>
                <div className="contact_info_card">
                  <div className="py-6 contact_list">
                    <div className="flex">
                      <div>
                        <div className="contact_icon">
                          <img src="../../../assets/location-icon.png" alt="" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h6>Address:</h6>
                        <p>{contact.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 contact_list">
                    <div className="flex">
                      <div>
                        <div className="contact_icon">
                          <img src="../../../assets/message-icon.png" alt="" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h6>Email:</h6>
                        <p>{contact.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 contact_list">
                    <div className="flex">
                      <div>
                        <div className="contact_icon">
                          <img src="../../../assets/phone-icon.png" alt="" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h6>Phone:</h6>
                        <p>{contact.mobile}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="contact_form">
                  <div className="py-3 grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        className="input_field"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        className="input_field"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="py-3 grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        className="input_field"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <input
                        className="input_field"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="py-4">
                    <textarea
                      className="input_field_textarea"
                      name=""
                      id=""
                      cols={30}
                      rows={5}
                      placeholder="Messgae"
                    ></textarea>
                  </div>
                  <div className="py-3">
                    <button className="hireme_btn common_btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
