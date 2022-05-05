import Styles from "./Styles";
import {Field, Form} from "react-final-form";
import {Link} from "react-router-dom";
import React from "react";
import axios from "axios";

const onSubmit = async values => {
  console.log(values);
  const requestData = [
    {
      "requestId": "req-1",
      "uri": "/jsonapi/taxonomy_term/tags",
      "action": "create",
      "body": "{\"data\":{\"type\":\"taxonomy_term--tags\",\"attributes\":{\"name\":\"My custom tag!\",\"description\":{\"value\":\"description of my custom tag.\"},\"weight\":8}}}",
      "headers": {
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        //'Authorization': 'Basic ' + btoa("hadros:111")
      }
    },
    {
      "requestId": "req-2",
      "waitFor": ["req-1"],
      "uri": "/jsonapi/node/article",
      "action": "create",
      "body": "{\"data\":{\"type\":\"node--article\",\"attributes\":{\"title\":\"My custom title\",\"status\":\"1\",\"promote\":\"1\",\"sticky\":\"0\",\"default_langcode\":\"1\",\"body\":{\"value\":\"Custom value\",\"format\":\"plain_text\",\"summary\":\"Custom summary\"}},\"relationships\":{\"field_tags\":{\"data\":[{\"type\":\"taxonomy_term--tags\",\"id\":\"{{req-1.body@$.data.id}}\"}]}}}}",
      "headers": {
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        //'Authorization': 'Basic ' + btoa("hadros:111")
      }
    }
  ];
  axios.post(
    'http://drupal9.home:8002/subrequests',
    requestData,
    { headers: {
        'Content-Type': 'application/vnd.api+json',
        'Authorization': 'Basic ' + btoa("hadros:111")
      } }).then((resp) => {
    console.log(resp);
  })
}

const NodeCreateArticleSubrequests = () => {
  return (
    <>
      <main>
        <h1>Create Node Article</h1>
        <Styles>
          <Form
            onSubmit={onSubmit}
            initialValues={{ type: 'react_final_form' }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name</label>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="buttons">
                  <button type="submit" disabled={submitting || pristine}>
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )}
          />
        </Styles>
      </main>
      <br/>
      <nav>
        <Link to="/nodes">Nodes List</Link>
        <br/>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default NodeCreateArticleSubrequests;