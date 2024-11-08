import {Row, Col} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useState} from "react";
import axios from "axios";

const validationSchema = yup
  .object({
    fname: yup
      .string()
      .required("Missing first Name")
      .matches(/^[^0-9][a-zA-Z0-9\s]*$/, "String Type Invalid"),
    lname: yup
      .string()
      .required("Missing last Name")
      .matches(/^[^0-9][a-zA-Z0-9\s]*$/, "String Type Invalid"),
    fathername: yup
      .string()
      .required("Missing Name")
      .matches(/^[^0-9][a-zA-Z0-9\s]*$/, "String Type Invalid"),
    department: yup
      .string()
      .required("Missing department Name")
      .matches(/^[^0-9][a-zA-Z0-9\s]*$/, "String Type Invalid"),
    PAddress: yup.string().required("Missing Permanent address"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email Format"
      ),
    phone: yup
      .string()
      .required("Missing Phone No")
      .matches(/^\d+$/, "Invalid Phone No"),
    nic: yup
      .string()
      .required("Missing Phone No")
      .matches(/^\d+$/, "Invalid Phone No"),
  })
  .required();

const Input = ({placeholder, register, errors, label, format}) => {
  return (
    <Col sm={12} lg={6} md={6}>
      <Form.Group className="mb-3 input-group-lg">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...register()} type="text" placeholder={placeholder} />
        {errors && <span className="text-danger">{errors.message}</span>}
        <Form.Text muted>{format}</Form.Text>
      </Form.Group>
    </Col>
  );
};

const AddressInput = ({placeholder, register, errors, label}) => {
  return (
    <Col sm={12} lg={12} md={12}>
      <Form.Group className="mb-3 input-group-lg">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...register()} type="text" placeholder={placeholder} />
        {errors && <span className="text-danger">{errors.message}</span>}
      </Form.Group>
    </Col>
  );
};
function FormDate({register, errors, label}) {
  return (
    <Col sm={12} lg={6} md={6}>
      <Form.Group className="mb-3 input-group-md">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...register()} type="date" />
        {errors && <span className="text-danger">{errors.message}</span>}
      </Form.Group>
    </Col>
  );
}

export default function StaffMemberShip() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}/${month}/${day}/`;
  };

  const getExpireDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${year + 1}/${month}/${day}/`;
  };
  const currentDate = getCurrentDate();
  const expireDate = getExpireDate();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fname: "",
      lname: "",
      fathername: "",
      designation: "staff",
      department: "",
      PAddress: "",
      email: "",
      phone: "",
      nic: "",
      semester: 0,
      dob: "0000/00/00",
      status: "pending",
      issue: currentDate,
      expire: expireDate,
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append all form fields to formData
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    console.log(formData);

    // Append the image file
    if (image) {
      formData.append("image", image);
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      console.log("Attempting to send data to server...");
      const response = await axios.post(
        "http://localhost:5000/api/submit-form",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted successfully:", response.data);
      setSubmitResult({
        type: "success",
        message: "Form submitted successfully!",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitResult({
        type: "error",
        message: "Error submitting form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <h4 style={{marginTop: "19px", marginBottom: "58px"}}>
        Staff Membership Form
      </h4>
      <h5 style={{marginBottom: "60px"}}>Student Details:</h5>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-2">
          <Input
            label="First Name *"
            register={() => register("fname")}
            errors={errors.fname}
          />
          <Input
            label="Last Name *"
            register={() => register("lname")}
            errors={errors.lname}
          />
          <Input
            label="Father Name *"
            register={() => register("fathername")}
            errors={errors.fathername}
          />
          <Input
            label="nic *"
            register={() => register("nic")}
            errors={errors.nic}
            format="without dashes"
          />
          <Input
            label="Phone *"
            register={() => register("phone")}
            errors={errors.phone}
            format="0000-1234567"
          />
          <Input
            label="Office/Department *"
            register={() => register("department")}
            errors={errors.department}
            format="Accountant or librarian etc."
          />
          <Input
            label="Email"
            register={() => register("email")}
            errors={errors.email}
            format="example@gmail.com"
          />
          <AddressInput
            label="Permanent Address *"
            register={() => register("PAddress")}
            errors={errors.PAddress}
          />
          <label>Upload passport size white bg Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={3}>
            <button
              className="btn form-control"
              style={{
                color: "#fff",
                borderColor: "#0a1551",
                backgroundColor: "#0a1551",
              }}
              type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
