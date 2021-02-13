import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

const CoverLetterForm = () => {
  var [companyName, setCompanyName] = useState("");
  var [roleName, setRoleName] = useState("");
  var [otherSkills, setOtherSkills] = useState("");
  var [interests, setInterests] = useState("");

  var submitForm = () => {};

  return (
    <Form onSubmit={submitForm}>
      <Form.Group as={Row} controlId="formCompanyName">
        <Form.Label column sm={2} className="form-label">
          Company Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter the company name"
            className="form-input"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formRoleName">
        <Form.Label className="form-label" column sm="2">
          Role Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            inputRef={(role) => setRoleName(role)}
            onChange={(e) => setRoleName(e.target.value)}
            placeholder="Enter the role you are applying for"
            className="form-input"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formFrontendSkillsList">
        <Form.Label className="form-label" column sm="3">
          Front end skills:
        </Form.Label>
        <Col sm="9">
          <Row>
            {["HTML/CSS/JS", "React", "Vue", "Kotlin", "Wordpress"].map(
              (skill) => (
                <div key={`frontend-skill-${skill}`} className="mb-2">
                  <Form.Check
                    inline
                    type="checkbox"
                    id={`frontend-skill-${skill}`}
                    label={skill}
                  ></Form.Check>
                </div>
              )
            )}
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formBackendSkillsList">
        <Form.Label className="form-label" column sm="3">
          Back end skills:
        </Form.Label>
        <Col sm="9">
          <Row>
            {["Python", "Flask", "Django", "Java", "OOP", "SQL"].map(
              (skill) => (
                <div key={`backend-skill-${skill}`} className="mb-2">
                  <Form.Check
                    inline
                    type="checkbox"
                    id={`backend-skill-${skill}`}
                    label={skill}
                  ></Form.Check>
                </div>
              )
            )}
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formToolsList">
        <Form.Label className="form-label" column sm="3">
          Software tools:
        </Form.Label>
        <Col sm="9">
          <Row>
            {["Git", "CI/CD", "Unit testing", "AWS", "GCP"].map((skill) => (
              <div key={`software-tool-${skill}`} className="mb-2">
                <Form.Check
                  inline
                  type="checkbox"
                  id={`software-tool-${skill}`}
                  label={skill}
                ></Form.Check>
              </div>
            ))}
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formOtherSkills">
        <Form.Label className="form-label" column sm="2">
          Other skills:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onChange={(e) => setOtherSkills(e.target.value)}
            placeholder="Enter any other skills that aren't listed"
            className="form-input"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formRoleName">
        <Form.Label className="form-label" column sm="2">
          Interests:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Enter any other interests or projects"
            className="form-input"
          />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit" className="submit-button">
        Submit
      </Button>
    </Form>
  );
};

export default CoverLetterForm;
