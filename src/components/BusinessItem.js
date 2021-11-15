import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function BusinessItem(props) {
      return (
            <>
                  <div className='card-item'>
                        <Link
                              className='card-items-link'
                              to={props.path}
                              style={{ textDecoration: "none" }}
                        >
                              <figure
                                    className='card-item-pic-wrapper'
                                    data-category={props.label}
                              >
                                    <img
                                          style={{
                                                width: "100%",
                                                backgroundColor: "black",
                                                borderRadius: 10,
                                                justifyContent: "flex-start",
                                                border: 2,
                                                borderColor: "black",
                                                marginTop: 5,
                                          }}
                                          src={props.src}
                                          className='card-item-img'
                                          alt='IMAGE'
                                    />
                              </figure>
                              <div
                                    className='card-item-info'
                                    style={{
                                          textAlign: "center",
                                          flexWrap: "wrap",
                                          marginRight: 20,
                                          marginBottom: 10,
                                          marginTop: 10,
                                          listStyle: "none",
                                          justifyContent: "center",
                                    }}
                              >
                                    <h5
                                          className='card-item-text'
                                          style={{
                                                justifyContent: "center",
                                                fontSize: 12,
                                                listStyle: "none",
                                                color: "black",
                                          }}
                                    >
                                          {props.text}
                                    </h5>
                              </div>
                        </Link>
                  </div>
            </>
      );
}

export default BusinessItem;
