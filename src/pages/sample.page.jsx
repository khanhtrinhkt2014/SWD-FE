import { Tooltip, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { DEMO_CONSTANT, PI } from "../const/sample.constant";
import useDemo from "../hooks/useDemo";
import { sampleModel } from "../models/sample.model";

const SamplePage = () => {
  const { demoValue, updateDemoValue, resetDemoValue } = useDemo();

  return (
    <div className="bg-slate-800 text-white h-[100vh] flex flex-col pt-24 px-10">
      <Tooltip
        arrow
        title="src/pages/sample.page.jsx"
        className="flex flex-col gap-2 items-center justify-center"
      >
        <h1
          className="text-2xl font-semibold tracking-wider"
          style={{
            background:
              "radial-gradient(circle 300px at 30% -180%, #41D1FF 0%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          I'm Sample Page
        </h1>
      </Tooltip>
      <div className="flex flex-col justify-start">
        <div>
          <Tooltip
            arrow
            placement="left"
            title="src/const/demo.constant.js"
            className="text-lg font-semibold tracking-wider"
          >
            Constant
          </Tooltip>
        </div>
        <code className="px-4">
          <Tooltip arrow placement="right" title="DEMO_CONSTANT">
            {DEMO_CONSTANT}
          </Tooltip>
        </code>
        <code className="px-4">
          <Tooltip arrow placement="right" title="PI">
            {PI}
          </Tooltip>
        </code>
        <div className="mt-4 flex flex-col">
          <div>
            <Tooltip
              arrow
              placement="right"
              title="src/hook/useDemo.js"
              className="text-lg font-semibold tracking-wider"
            >
              Hook
            </Tooltip>
          </div>
          <code className="px-4">
            <Tooltip arrow placement="right" title="DEMO_HOOK_VALUE">
              {demoValue}
            </Tooltip>
          </code>
        </div>
        <div className="mt-4 flex gap-2">
          <Button variant="contained" color="primary" onClick={updateDemoValue}>
            SIMULATE FETCH DATA
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={resetDemoValue}
            className="mt-2"
          >
            RESET DATA
          </Button>
        </div>
        <div>
          <Tooltip
            arrow
            placement="right"
            title="src/models/sample.model.js"
            className="text-lg font-semibold tracking-wider"
          >
            Model
          </Tooltip>
        </div>
        <code className="px-4">
          <Tooltip arrow placement="right" title="sampleModel">
            {JSON.stringify(sampleModel, null, 2)}
          </Tooltip>
        </code>
        <div className="mt-4">
          <h2 className="text-lg font-semibold tracking-wider">Routes Demo</h2>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-blue-500 underline">
              Go to Home
            </Link>
            <Link to="/sample" className="text-blue-500 underline">
              Go to Sample Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
