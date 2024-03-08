import React from "react";

import { data1, data2 } from "./ContextParent";
const ChildC = () => {
  return (
    <div>
      <data1.Consumer>
        {
            (name) => {
                return(
                    <data2.Consumer>
                        {
                            (email) => {
                                return (
                                    <h2>My name is {name} and email is {email}</h2>
                                )
                            }
                        }
                    </data2.Consumer>
                )
            }
        }
      </data1.Consumer>
    </div>
  );
};

export default ChildC;
