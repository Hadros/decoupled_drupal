import API from './Api';
import React from "react";
import {Field, Form} from "react-final-form";
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import Styles from "./Styles";
import Navigation from "./Navigation";
import {Autocomplete, TextField} from "@mui/material";

const doCreateNodeWithParagraphs = async (values, responses) => {
  let paragraphsData = responses.map(resp => {
    return {
      "type": "paragraph--award",
      "id": resp.data.data.id,
      'meta': {
        'target_revision_id': resp.data.data.attributes.drupal_internal__revision_id,
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

  return API.post(
    `/node/react_final_form`,
    requestData
  )
}

const createParagraphAsync = async (name) => {
  console.log(name);
  let requestData = {
    data: {
      type: 'paragraph--award',
      attributes: {
        field_name: name
      },
    }
  };

  return API.post(
    `/paragraph/award`,
    requestData
  )
}

const createNodeWithParagraphs = async (values) => {
  console.log(values.paragraphs);
  let responses = [];
  for (const i in values.paragraphs) {
    const resp = await createParagraphAsync(values.paragraphs[i].name);
    responses.push(resp);
  }
  console.log(responses);
  return doCreateNodeWithParagraphs(values, responses)
}

const onSubmit = async values => {
  console.log(values);
  const resp = await createNodeWithParagraphs(values);
  console.log(resp);
  alert('Created!');
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

const NodeCreate = () => {
  const onChangeFarmRef = () => {
    console.log('kek2');
  }
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  return (
    <>
      <main>
        <h1>Create Node</h1>
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
                  <label>Farm Reference</label>
                  <Field name="farm_ref">
                    {props => (
                      <div onChange={onChangeFarmRef}>
                        <Autocomplete
                          disablePortal
                          //name={props.input.name}
                          //value={props.input.value}
                          //onChange={props.input.onChange}
                          id="combo-box-demo"
                          options={options}
                          sx={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                      </div>
                    )}
                  </Field>
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
      </main>
      <br/>
      <Navigation/>
    </>
  );
}

export default NodeCreate;
