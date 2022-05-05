import {Link} from "react-router-dom";
import API from './Api';
import {useEffect, useState} from "react";
import axios from "axios";

const getNodes = async (type) => {
  const requestData = [
    {
      "requestId": "req-1",
      "uri": "/jsonapi/node/react_final_form",
      "action": "view",
      "headers": {
        "Accept": "application/vnd.api+json"
      }
    },
    {
      "requestId": "req-2",
      "uri": "/jsonapi/node/article",
      "action": "view",
      "headers": {
        "Accept": "application/vnd.api+json"
      }
    }
  ];

console.log(1);
  axios.get(
    'http://drupal9.home:8002/subrequests',
    requestData,
    { headers: {
        'Content-Type': 'application/vnd.api+json',
        'Authorization': 'Basic ' + btoa("admin:111")
      } }).then((resp) => {
    console.log(resp);
    alert('Created!');
  }).catch((err) => console.log(err))
}

const GetNodesListHtml = ({ data }) => {
  return (
    <>
      <div>
        {data.data.map((node, index) => (
          <div key={index}>
            {console.log(node)}
            <div>
              <span>{node.attributes.title}</span>     <Link to={`/node/${node.id}/edit`}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const getAllReactFinalFormNodes = async () => getNodes('react_final_form');

const NodesListSubrequests = () => {
  console.log(11);
  const [data, updateData] = useState([]);
  console.log(0);
  useEffect(() => {
    const getData = async () => {
      const resp = await getAllReactFinalFormNodes();
      updateData(resp.data);
    }
    getData();
  }, []);

  return (
    <>
      <main>
        <h2>Nodes List</h2>
        <br/>
        <Link to="/node/create">Create Node</Link>
        <br/>
        <br/>
        <br/>

        <div>
          {data.length !== 0 && <GetNodesListHtml data={data}/>}
        </div>
      </main>
      <br/>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default NodesListSubrequests;
