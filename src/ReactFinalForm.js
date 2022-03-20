/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import axios from "axios";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const getBasicAuth = () => 'Basic ' + btoa("admin:111");

const getDefaultHeaders = () => {
  return {
    'Content-Type': 'application/vnd.api+json',
    'Authorization': getBasicAuth()
  }
}

const onSubmit = async values => {
  await createNodeWithParagraphs(values);
}

const getNode = async (values) => {
  const headers = {
    'Content-Type': 'application/vnd.api+json',
    'Authorization': 'Basic ' + btoa("admin:111")
  }
  axios.get(
    `http://drupal9.home:8002/jsonapi/node/react_final_form/1794cf5e-4ee7-41ad-a133-1fc483593603?include=field_award&jsonapi_include=1`,
    {},
    { headers: headers }
  ).then(function (response) {
    console.log(response);
  })
}

const editNode = async (values) => {
  let requestData = {
    data: {
      type: 'node--react_final_form',
      id: '1794cf5e-4ee7-41ad-a133-1fc483593603',
      attributes: {
        //'field_award': response.data.data.attributes.drupal_internal__id,
        title: '2222'
      },
      "relationships": {
        "field_award": {
          "data": {
            "type": "paragraph--award",
            "id": '58d16c9c-20f8-4036-9960-7802c0a5ba23',
            'meta': {
              'target_revision_id': 1,
            }
          }
        }
      },
    }
  };
  const headers = {
    'Content-Type': 'application/vnd.api+json',
    'Authorization': 'Basic ' + btoa("admin:111")
  }
  axios.patch(
    `http://drupal9.home:8002/jsonapi/node/react_final_form/1794cf5e-4ee7-41ad-a133-1fc483593603`,
    requestData,
    { headers: headers }
  ).then(function (response) {
    console.log(response);
  })
}

const createNodeWithParagraphs = async (values) => {
  createParagraphAsync(values).then(response => {
    doCreateNodeWithParagraphs(values, response)
  });
}

const editNodeWithParags = async (values) => {
  let requestData = {
    data: {
      type: 'node--react_final_form',
      id: '1794cf5e-4ee7-41ad-a133-1fc483593603',
      attributes: {
        //'field_award': response.data.data.attributes.drupal_internal__id,
        title: '2222'
      },
      "relationships": {
        "field_award": {
          "data": {
            "type": "paragraph--award",
            "id": '58d16c9c-20f8-4036-9960-7802c0a5ba23',
            'meta': {
              'target_revision_id': 1,
            }
          }
        }
      },
    }
  };
  const headers = {
    'Content-Type': 'application/vnd.api+json',
    'Authorization': 'Basic ' + btoa("admin:111")
  }
  axios.patch(
    `http://drupal9.home:8002/jsonapi/node/react_final_form/1794cf5e-4ee7-41ad-a133-1fc483593603`,
    requestData,
    { headers: headers }
  ).then(function (response) {
    console.log(response);
  })
}


const doCreateNodeWithParagraphs = async (values, response) => {
  console.log(response);
  let requestData = {
    data: {
      type: 'node--react_final_form',
      attributes: {
        title: values.name
      },
      "relationships": {
        "field_award": {
          "data": {
            "type": "paragraph--award",
            "id": response.data.data.id,
            'meta': {
              'target_revision_id': response.data.data.attributes.drupal_internal__revision_id,
            }
          }
        }
      },
    }
  };
  const headers = getDefaultHeaders();

  axios.post(
    `http://drupal9.home:8002/jsonapi/node/react_final_form`,
    requestData,
    { headers: headers }
  ).then(function (response) {
    console.log(response);
  })
}

const createParagraphAsync = async (values) => {
  let requestData = {
    data: {
      type: 'paragraph--award',
      attributes: {
        field_name: values.name
      },
    }
  };

  let headers = getDefaultHeaders();

  return axios.post(
    `http://drupal9.home:8002/jsonapi/paragraph/award`,
    requestData,
    { headers: headers }
  )
}

const createParagraph = async (values) => {
  let requestData = {
    data: {
      type: 'node--react_final_form',
      id: '1794cf5e-4ee7-41ad-a133-1fc483593603',
      attributes: {
        //'field_award': response.data.data.attributes.drupal_internal__id,
        title: '111111'
      },
      "relationships": {
        "uid": {
          "data": {
            "type": "user--user",
            "id": "ef554419-175c-46cf-ae22-3c142cbfdd26"
          }
        },
        "field_award": {
          "data": {
            "type": "paragraph--award",
            "id": '58d16c9c-20f8-4036-9960-7802c0a5ba23'
          }
        }
      },
    }
  };
  const headers = {
    'Content-Type': 'application/vnd.api+json',
    'Authorization': 'Basic ' + btoa("admin:111")
  }
  axios.patch(
    `http://drupal9.home:8002/jsonapi/node/react_final_form/1794cf5e-4ee7-41ad-a133-1fc483593603`,
    requestData,
    { headers: headers }
  ).then(function (response) {
    console.log(response);
  })
}

const ReactFinalForm = () => {
  return (
    <Styles>
      <h1>React Final Form - Simple Example</h1>
      <a
        href="https://final-form.org/react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Docs
      </a>
      <Form
        onSubmit={onSubmit}
        initialValues={{ }}
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
  )
}

export default ReactFinalForm;
