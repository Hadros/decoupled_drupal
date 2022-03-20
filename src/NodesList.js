import {Link} from "react-router-dom";
import API from './Api';
import {useEffect, useState} from "react";

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
              {node.attributes.title}=
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const getAllReactFinalFormNodes = async () => getNodes('react_final_form');

const NodesList = () => {
  //console.log(getAllReactFinalFormNodes())
  getAllReactFinalFormNodes().then(response => console.log(response));

  const [data, updateData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const resp = await getAllReactFinalFormNodes();
      updateData(resp.data);
    }
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <main>
        <h2>Nodes List</h2>
        <div>
          {data.length !== 0 && <GetNodesListHtml data={data}/>}
        </div>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default NodesList;
