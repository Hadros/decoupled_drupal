import {Link, useHistory, useParams} from "react-router-dom";
import API from './Api';
import React, {useEffect, useState} from "react";
import {Field, Form} from "react-final-form";
import Styles from "./Styles";

const getNode = async (type, id) => {
  return API.get(`/node/${type}/${id}`);
}

const onSubmit = async values => {
  console.log(values);
  const resp = await editNode(values);
  console.log(resp);
  alert('Updated!');
}

const editNode = async (values) => {
  let requestData = {
    data: {
      type: `node--${values.type}`,
      id: values.id,
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

  return API.patch(
    `/node/${values.type}/${values.id}`,
    requestData
  )
}

const NodeEdit = () => {
  const { id } = useParams();
  const [data, updateData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const resp = await getNode('react_final_form', id);
      console.log(resp);
      updateData(resp.data);
    }
    getData();
  }, [id]);

  return (
    <>
      <main>
        {data.length !== 0 && (
          <>
            <h1>Editing: <em>{data.data.attributes.title}</em></h1>
            <Styles>
              <Form
                onSubmit={onSubmit}
                initialValues={{ id: id, type: 'react_final_form', name: data.data.attributes.title }}
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
          </>
        )}
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

export default NodeEdit;
