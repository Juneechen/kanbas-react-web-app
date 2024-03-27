import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EncodingParametersInURLs = () => {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const [result, setResult] = useState(0);

  const fetchSum = async (a: any, b: any) => {
    const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };

  const fetchSubtraction = async (a: number, b: number) => {
    const res = await axios.get(`http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(res.data);
  };

  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>

      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

      <h4>Calculator</h4>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <input value={result} type="number" readOnly />
      <h4>Fetch Result</h4>
      <button onClick={() => fetchSum(a, b)}>
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)}>
        Fetch Substraction of {a} - {b}
      </button>

      <h3>Path Parameters</h3>

      <Link
        to={`http://localhost:4000/a5/add/${a}/${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </Link>
      <Link
        to={`http://localhost:4000/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </Link>

      <h3>Query Parameters</h3>
      <Link
        to={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </Link>
      <Link
        to={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </Link>
    </div>
  );
};

export default EncodingParametersInURLs;
