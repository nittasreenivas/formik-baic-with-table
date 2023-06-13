import { Formik } from "formik";
import { useState } from "react";
export default function Vasu() {
  const [submittedValues, setSubmittedValues] = useState([]);
  const handleSubmit = (values, x) => {
    setSubmittedValues((prevValues) => {
      return [...prevValues, values];
    });
    console.log("values::", values, x.resetForm());
  };
  const handleDelete = (i) => {
    let temp = [...submittedValues];
    temp.splice(i, 1);
    setSubmittedValues([...temp]);
  };
  return (
    <div className="vasu">
      <h3> Vasu's Form</h3>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          percentage: "",
          graduation: ""
        }}
        validate={(values) => {
          var errors = {};
          if (!values.firstname) {
            errors.firstname = "Firstname is mandatory";
          }
          if (!values.graduation) {
            errors.graduation = "graduation is mandatory";
          }
          console.log("errors:", errors);
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched
        }) => {
          return (
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="enter firstname"
                  value={values.firstname}
                  name="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <div>
                  {errors && errors.firstname && touched.firstname && (
                    <b className="err"> {errors.firstname} </b>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="enter lastname"
                  value={values.lastname}
                  name="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <input
                  type="text"
                  placeholder="enter graduation"
                  value={values.graduation}
                  name="graduation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <div>
                  {errors && errors.graduation && touched.graduation && (
                    <b className="err"> {errors.graduation} </b>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="enter percentage"
                  value={values.percentage}
                  name="percentage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <button type="submit"> SAVE </button>
              </form>{" "}
              <br />
              {submittedValues.length > 0 ? (
                <table border="3" cellPadding={10} align="center">
                  <thead>
                    <tr>
                      <th>Firstname </th>
                      <th> Lastname </th>
                      <th> Graduation </th>
                      <th> Percentage </th>
                      <th> DELETE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submittedValues.map((s, i) => {
                      return (
                        <tr key={i}>
                          <td>{s.firstname} </td>
                          <td>{s.lastname} </td>
                          <td>{s.graduation} </td>
                          <td>{s.percentage} </td>
                          <td>
                            <button onClick={() => handleDelete(i)}>
                              {" "}
                              del
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <h3> </h3>
              )}
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
