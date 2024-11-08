import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Heading from "../AboutLinks/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup
  .object({
    name: yup.string().required("Missing Name"),
    department: yup.string().required("Missing department Name"),
    book: yup.string().required("Missing Book Name"),
    email: yup.string().required("Missing Email"),
    phone: yup
      .string()
      .required("Missing Phone No")
      .matches(/^\d+$/, "Invalid Phone No"),
  })
  .required();

const Input = ({ placeholder, register, errors }) => {
  return (
    <Form.Group className="mb-3 input-group-lg">
      <Form.Control {...register()} type="text" placeholder={placeholder} />
      {errors && <span className="text-danger">{errors.message}</span>}
    </Form.Group>
  );
};

export default function StudyRoom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      department: "",
      book: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <Col md={7}>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <Heading heading="StudyRoom Booking Form" />
        </Col>
        <Col sm={12} lg={12} md={12} className="g-3 mb-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Your Name"
              register={() => register("name")}
              errors={errors.name}
            />
            <Input
              placeholder="Department Name"
              register={() => register("department")}
              errors={errors.department}
            />
            <Input
              placeholder="Book Name"
              register={() => register("book")}
              errors={errors.book}
            />
            <Input
              placeholder="Enter Email"
              register={() => register("email")}
              errors={errors.email}
            />
            <Input
              placeholder="Phone No"
              register={() => register("phone")}
              errors={errors.phone}
            />
            <button
              className="btn btn-primary form-control py-2 text-white"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </Col>
  );
}
