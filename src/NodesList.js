import {Link} from "react-router-dom";
import API from './Api';
import {useEffect, useState} from "react";
import axios from "axios";

const getNodes = async (type) => {
  return API.get( '/node/' + type)
}

const GetNodesListHtml = ({ data }) => {
  return (
    <>
      <div>
        {data.data.map((node, index) => (
          <div key={index}>
            <div>
              <span>{node.attributes.title}</span>     <Link to={`/node/${node.id}/edit`}>Edit</Link>   <Link to={`/node/${node.id}/edit-subrequests`}>Edit Subrequests</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const getAllReactFinalFormNodes = async () => getNodes('react_final_form');

const NodesList = () => {
  const [data, updateData] = useState([]);
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
        <Link to="/node/final-form/create">Create Node</Link>
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

export default NodesList;
