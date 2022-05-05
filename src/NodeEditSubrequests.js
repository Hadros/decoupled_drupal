import {Link, useParams, useNavigate} from "react-router-dom";
import API from './Api';
import React, {useEffect, useState} from "react";
import {Field, Form} from "react-final-form";
import Styles from "./Styles";
import {FieldArray} from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";
import axios from "axios";
import {Autocomplete, TextField} from "@mui/material";
import FileFieldBB from "./FileFieldBB";

const headers = {
  'Content-Type': 'application/vnd.api+json',
  "Accept": "application/vnd.api+json",
  'Authorization': 'Basic ' + btoa("admin:111")
}

const getNode = async (type, id) => {
  return API.get(`/node/${type}/${id}?include=field_award,field_avatar`);
}

const doEditNodeWithParagraphs = async (values, responses) => {
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

  let requestData = {
    data: {
      id: values.id,
      type: 'node--react_final_form',
      attributes: {
        title: values.name
      },
      relationships: {
        field_award: {
          data: paragraphsData
        }
      },
    }
  };

  index++;
  console.log(requestData);
  let suburequestsData = {
    "requestId": `req-${index}`,
    "waitFor": requests,
    "uri": `/jsonapi/node/react_final_form/${values.id}`,
    "action": "update",
    "body": JSON.stringify(requestData),
    "headers": {
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    }
  }

  responses.push(suburequestsData);
  console.log(responses);
  return axios.post(
    'http://drupal9.home:8002/subrequests',
    responses,
    { headers: headers }
  )
}

const createParagraphAsync = (index, name) => {
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
    }
  };
}

const updateParagraphAsync = (index, data) => {
  let requestData = {
    data: {
      id: data.id,
      type: 'paragraph--award',
      attributes: {
        field_name: data.name
      },
    }
  };

  return {
    "requestId": `req-${index}`,
    "uri": `/jsonapi/paragraph/award/${data.id}`,
    "action": "update",
    "body": JSON.stringify(requestData),
    "headers": {
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    }
  };
}

const updateAvatarAsync = async (values) => {
  if (values.file) {
    return axios.post(
      `http://drupal9.home:8002/jsonapi/node/react_final_form/${values.id}/field_avatar`,
      values.file,
      { headers: {
          'Content-Type': 'application/octet-stream',
          'Accept': 'application/vnd.api+json',
          'Content-Disposition': 'file; filename="Screenshot from 2022-04-11 18-46-53.png"',
          'Authorization': 'Basic ' + btoa("admin:111")
        }
      }
    )
  }
}

const editNodeWithParagraphs = async (values) => {
  let responses = [];
  let index = 1;
  let resp;

  await updateAvatarAsync(values);

  for (const i in values.paragraphs) {
    if (values.paragraphs[i].id) {
      resp = updateParagraphAsync(index, values.paragraphs[i]);
    }
    else {
      resp = createParagraphAsync(index, values.paragraphs[i].name);
    }
    responses.push(resp);
    index++;
  }
  return doEditNodeWithParagraphs(values, responses)
}

const NodeEditSubrequests = () => {
  const { id } = useParams();
  const [data, updateData] = useState([]);
  const [avatar, setAvatar] = useState()
  useEffect(() => {
    const getData = async () => {
      const resp = await getNode('react_final_form', id);
      updateData(resp.data);
    }
    getData();
  }, [id]);


  let navigate = useNavigate();

  const onSubmit = async (values) => {
    if (avatar) {
      values.file = avatar;
    }
    const resp = await editNodeWithParagraphs(values);
    console.log(resp);
    navigate("/nodes", { replace: true });
  }

  const onChangeAvatar = (event) => {
    console.log('working!')
    console.log('onChangeAvatar', event.target.files[0]);
    setAvatar(event.target.files[0])
  }

  const onAvatarRemove = () => {
    console.log('working!11111111')
    console.log(avatar);
    setAvatar({});
    console.log(data);
    data.included.forEach((item, key) => {
      if (item.type === 'file--file') {
        data.included.splice(key, 1);
      }
    });
    console.log(data);
    updateData(data);
    console.log(avatar);
  }

  const onChangeFarmRef = () => {
    console.log('kek2');
  }

  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  let paragraphs = [];
  let avatarDefaultValue = {};
  if (data.length !== 0) {
    console.log(data);
    paragraphs = data.included.reduce((result, item) => {
      if (item.type === 'paragraph--award') {
        result.push({
          id: item.id,
          name: item.attributes.field_name
        });
      }
      return result;
    }, []);

    paragraphs = [];
    data.included.forEach(item => {
      if (item.type === 'paragraph--award') {
        paragraphs.push({
          id: item.id,
          name: item.attributes.field_name
        });
      }
      else if (item.type === 'file--file') {
        avatarDefaultValue = {
          id: item.id,
          name: item.attributes.filename
        };
      }
    });
  }

  return (
    <>
      <main>
        {data.length !== 0 && (
          <>
            <h1>Editing Subrequests: <em>{data.data.attributes.title}</em></h1>
            <Styles>
              <Form
                onSubmit={onSubmit}
                mutators={{
                  ...arrayMutators
                }}
                initialValues={{ id: id, type: 'react_final_form', name: data.data.attributes.title, paragraphs: paragraphs, field_avatar: avatarDefaultValue }}
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
                    <FileFieldBB name="field_avatar2" onChange={onChangeAvatar} onAvatarRemove={onAvatarRemove} avatar={avatar} avatarDefaultValue={avatarDefaultValue}/>
                    <div>
                      <FieldArray name="paragraphs">
                        {({ fields }) => (
                          <div>
                            {fields.map((name, index) => (
                              <div key={name}>
                                <div>
                                  <label>Paragraph Name</label>
                                  <Field data-index={index} data-id={paragraphs[index] ? paragraphs[index].id : 0} name={`${name}.name`} component="input" />
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

export default NodeEditSubrequests;
