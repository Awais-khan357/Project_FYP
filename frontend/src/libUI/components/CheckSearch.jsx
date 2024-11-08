import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./CheckSearch.css";

export default function CheckSearch() {
  const [formData, setFormData] = useState({
    searchType: "title",
    searchKeyword: "",
    option: "book",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const radioValues = {
      book: formData.option === "book",
      article: formData.option === "article",
      thesis: formData.option === "thesis",
    };

    if (formData.searchKeyword === "") return;

    let searchQuery = formData.searchKeyword;
    let contentTypeFilter = "";

    switch (formData.option) {
      case "book":
        contentTypeFilter = "book";
        break;
      case "article":
        contentTypeFilter = "journal";
        break;
      case "thesis":
        contentTypeFilter = "thesis";
        break;
      default:
        break;
    }

    if (contentTypeFilter === "journal") {
      const googleScholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(
        searchQuery
      )}`;
      window.location.href = googleScholarUrl;
    } else if (contentTypeFilter === "book") {
      const searchType =
        formData.searchType === "title"
          ? "ti"
          : formData.searchType === "author"
          ? "au"
          : "kw";
      const opacUrl = `http://opac.uop.edu.pk:1009/cgi-bin/koha/opac-search.pl?idx=${searchType}&q=${encodeURIComponent(
        searchQuery
      )}&limit=&weight_search=1`;
      window.location.href = opacUrl;
    } else {
      console.log("Another API for thesis search");
    }
  };

  return (
    <Container
      fluid
      className="mb-5"
      style={{
        paddingTop: "65px",
        paddingBottom: "85px",
        visibility: "visible",
        background: "rgb(31, 9, 55)",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Row className="g-2">
          <Col md={10} sm={10} lg={10}>
            <Row className="g-2">
              <Col md={4} sm={4} lg={4}>
                <Form.Select
                  className="border-0 py-3"
                  name="searchType"
                  value={formData.searchType}
                  onChange={handleChange}
                >
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="keyword">Keyword</option>
                </Form.Select>
              </Col>
              <Col md={8} sm={8} lg={8}>
                <Form.Control
                  type="text"
                  className="border-0 py-3"
                  placeholder="Search Keyword"
                  name="searchKeyword"
                  value={formData.searchKeyword}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Col>
          <Col md={2} sm={2} lg={2} className="search-btn">
            <button type="submit" className="btn border-0 w-100 py-3">
              Search
            </button>
          </Col>
          <Col md={12} className="text-center text-light">
            <div className="mb-3">
              <Form.Check
                inline
                label="Book"
                name="option"
                type="radio"
                id="inline-radio-1"
                value="book"
                checked={formData.option === "book"}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Article"
                name="option"
                type="radio"
                id="inline-radio-2"
                value="article"
                checked={formData.option === "article"}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Thesis"
                name="option"
                type="radio"
                id="inline-radio-3"
                value="thesis"
                checked={formData.option === "article"}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
