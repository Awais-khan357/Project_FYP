import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const validationSchema = yup
  .object({
    fname: yup
      .string()
      .required("Missing first Name")
      .matches(/^[^0-9][a-zA-Z0-9]*$/, "String Type Invalid"),
    lname: yup
      .string()
      .required("Missing last Name")
      .matches(/^[^0-9][a-zA-Z0-9]*$/, "String Type Invalid"),
    department: yup
      .string()
      .required("Missing department Name")
      .matches(/^[^0-9][a-zA-Z0-9\s]*$/, "String Type Invalid"),
    semester: yup.string().required("Missing semester"),
    email: yup
      .string()
      .required("Missing Email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email Format"
      ),
    phone: yup
      .string()
      .required("Missing Phone No")
      .matches(/^\d+$/, "Invalid Phone No"),
    isbn: yup.string(),
    dop: yup
      .string()
      .required("Missing date of publication")
      .matches(/^\d+$/, "String Type Invalid"),
    title: yup
      .string()
      .required("Missing title")
      .matches(/^[^0-9][a-zA-Z0-9\s]*$/, "String Type Invalid"),
  })
  .required();

const Input = ({ placeholder, register, errors, label, format }) => {
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

const TextInput = ({ register, errors, label }) => {
  return (
    <Col sm={12} lg={6} md={6}>
      <Form.Group className="mb-3 input-group-lg">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          {...register()}
          type="textarea"
          style={{ height: "100px" }}
        />
        {errors && <span className="text-danger">{errors.message}</span>}
      </Form.Group>
    </Col>
  );
};

export default function BookPurchase() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fname: "",
      lname: "",
      department: "",
      semester: "",
      email: "",
      phone: "",
      isbn: "",
      title: "",
      dop: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const result = await axios.post(
        "http://localhost:4000/api/purchase",
        data
      );
      console.log("data entered successfully in purchase table", result.data);
    } catch (error) {
      console.log("error in data purchase table", error);
    }
  };
  return (
    <>
      <h4 style={{ marginTop: "19px", marginBottom: "58px" }}>
        Book Purchase Request Form
      </h4>
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
            errors={errors.lastname}
          />
          <Input
            label="Department Name *"
            register={() => register("department")}
            errors={errors.department}
          />
          <Input
            label="Semester *"
            register={() => register("semester")}
            errors={errors.semester}
          />
          <Input
            label="Email *"
            register={() => register("email")}
            errors={errors.email}
            format="example@gmail.com"
          />
          <Input
            label="Phone *"
            register={() => register("phone")}
            errors={errors.phone}
            format="0000-1234567"
          />
          <Input
            label="ISBN "
            register={() => register("isbn")}
            errors={errors.isbn}
            format="ISBN is important, please include if possible"
          />
          <Input
            label="Date of publication *"
            register={() => register("dop")}
            errors={errors.dop}
          />
          <TextInput
            label="Title of Book *"
            register={() => register("title")}
            errors={errors.title}
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
              type="submit"
            >
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
