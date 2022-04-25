import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="page2/33">URL Param</Link>
      <br />
      <Link to="page2/33?name=kisuke">Query Param</Link>
    </div>
  );
};
