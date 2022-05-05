import {Link} from "react-router-dom";
import API from './Api';
import React, {useEffect} from "react";
import {Field, Form} from "react-final-form";
import arrayMutators from 'final-form-arrays'
import {FieldArray} from 'react-final-form-arrays'
import Styles from "./Styles";
import axios from "axios";
import Page from "./Page";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import ContentW from "./ContentW";

const headers = {
  'Content-Type': 'application/vnd.api+json',
  "Accept": "application/vnd.api+json",
  'Authorization': 'Basic ' + btoa("admin:111")
}

const doCreateNodeWithParagraphs = async (values, responses) => {
  let index = 0;
  let requests = [];
  let paragraphsData = responses.map(resp => {
    index++;
    requests.push(`req-${index}`);
    return {
      "type": "paragraph--award",
      "id": `{{req-${index}.body@$.data.id}}`,
      "meta": {
        "target_revision_id": `{{req-${index}.body@$.data.attributes.drupal_internal__revision_id}}`,
      }
    }
  });
  console.log(paragraphsData);
  let requestData = {
    data: {
      type: 'node--react_final_form',
      attributes: {
        title: values.name
      },
      "relationships": {
        "field_award": {
          "data": paragraphsData
        }
      },
    }
  };

  index++;
  console.log(index);
  console.log(requests);
  let suburequestsData = {
    "requestId": `req-${index}`,
    "waitFor": requests,
    "uri": "/jsonapi/node/react_final_form",
    "action": "create",
    "body": JSON.stringify(requestData),
    "headers": {
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      'Authorization': 'Basic ' + btoa("admin:111")
    }
  }


  responses.push(suburequestsData);
  console.log(suburequestsData);

  axios.post(
    'http://drupal9.home:8002/subrequests',
    responses,
    { headers: headers }
  ).then((resp) => {
    console.log(resp);
    //alert('Created!');
  })
}

const createParagraphAsync = (index, name) => {
  console.log(name);
  let requestData = {
    data: {
      type: 'paragraph--award',
      attributes: {
        field_name: name
      },
    }
  };

  return {
    "requestId": `req-${index}`,
    "uri": "/jsonapi/paragraph/award",
    "action": "create",
    "body": JSON.stringify(requestData),
    "headers": {
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      'Authorization': 'Basic ' + btoa("admin:111")
    }
  };

}

const createNodeWithParagraphs = async (values) => {
  console.log(values.paragraphs);
  let responses = [];
  let index = 1;
  for (const i in values.paragraphs) {
    console.log(i);

    const resp = createParagraphAsync(index, values.paragraphs[i].name);
    console.log(resp);
    responses.push(resp);
    console.log(responses);
    index++;
  }
  console.log(responses);
  return doCreateNodeWithParagraphs(values, responses)
}

const onSubmit = async values => {
  console.log(values);
  const resp = await createNodeWithParagraphs(values);
}

const createNode = async (values) => {
  let requestData = {
    data: {
      type: `node--${values.type}`,
      attributes: {
        //'field_award': response.data.data.attributes.drupal_internal__id,
        title: values.name
      },
      /*"relationships": {
        "field_award": {
          "data": {
            "type": "paragraph--award",
            "id": '58d16c9c-20f8-4036-9960-7802c0a5ba23',
            'meta': {
              'target_revision_id': 1,
            }
          }
        }
      },*/
    }
  };

  return API.post(
    `/node/${values.type}`,
    requestData
  )
}

const NodeCreateSubrequests = () => {
  useEffect(() => {
    document.body.classList.add('full-screen');
    document.body.classList.add('menu-side-left');
    document.body.classList.add('path-dashboard');
    document.body.classList.add('menu-position-side');
  });

  return (
    <Page>
      <Dashboard/>
      <ContentW>
        <div id="block-bb-dash21-page-title-dashboard" className="block block-core block-page-title-block">
          <div className="content">
            <h1 className="title">Editing Animal: <em className="placeholder">EON Makulu's Abernathy</em></h1>
          </div>
        </div>
        <div id="block-bb-dash21-breadcrumbs" className="block block-system block-system-breadcrumb-block">
          <div className="content">
            <nav role="navigation" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/dashboard/animals">Animals</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <Styles>
          <Form
            onSubmit={onSubmit}
            mutators={{
              ...arrayMutators
            }}
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
                <div>
                  <FieldArray name="paragraphs">
                    {({ fields }) => (
                      <div>
                        {fields.map((name, index) => (
                          <div key={name}>
                            <div>
                              <label>Paragraph Name</label>
                              <Field name={`${name}.name`} component="input" />
                            </div>
                            <button type="button" onClick={() => fields.remove(index)}>
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => fields.push({ name: '' })}
                        >
                          Add Paragraph
                        </button>
                      </div>
                    )}
                  </FieldArray>
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
      </ContentW>
    </Page>
  );
}

export default NodeCreateSubrequests;
