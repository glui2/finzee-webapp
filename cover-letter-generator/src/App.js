import "./App.css";
import { Button, Form, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="heading">Cover Letter Generator</h3>
      </header>
      <section>
        <Form>
          <Form.Group as={Row} controlId="formCompanyName">
            <Form.Label column sm={2} className="form-label">
              Company Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type=""
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
                placeholder="Enter any other interests or projects"
                className="form-input"
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
