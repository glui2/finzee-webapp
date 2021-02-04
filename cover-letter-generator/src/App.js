import "./App.css";
import { Button, Form, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cover Letter Generator</h1>
      </header>
      <section>
        <Form>
          <Form.Group as={Row} controlId="formCompanyName">
            <Form.Label className="form-label">Company Name:</Form.Label>
            <Form.Control
              type=""
              placeholder="Enter the company name"
              className="form-input"
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formRoleName">
            <Form.Label className="form-label" column sm="2">
              Role Name:
            </Form.Label>
            <Form.Control
              placeholder="Enter the role you are applying for"
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="formSkillsList">
            <Form.Label className="form-label">Skills to highlight</Form.Label>
            <Row>
              {[
                "HTML/CSS/JS",
                "React",
                "Vue",
                "Python",
                "Flask",
                "Django",
                "Java",
                "OOP",
                "SQL",
                "CI/CD",
              ].map((skill) => (
                <div key={`skill-${skill}`} className="mb-3">
                  <Form.Check
                    inline
                    type="checkbox"
                    id={`skill-${skill}`}
                    label={skill}
                  ></Form.Check>
                </div>
              ))}
            </Row>
          </Form.Group>
          <Form.Group as={Row} controlId="formOtherSkills">
            <Form.Label className="form-label" column sm="2">
              Other skills:
            </Form.Label>
            <Form.Control
              placeholder="Enter any other skills that aren't listed"
              className="form-input"
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formRoleName">
            <Form.Label className="form-label" column sm="2">
              Interests:
            </Form.Label>
            <Form.Control
              placeholder="Enter any other interests or projects"
              className="form-input"
            />
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
