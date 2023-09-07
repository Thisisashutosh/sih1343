import { exec } from "child_process";

const modelcomputing = () => {
  return new Promise((resolve, reject) => {
    // Create a Python process
    exec("python3 predicted.py", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        reject(error); // Reject the promise if there's an error
        return;
      }

      const pythonResponse = stdout;
      const data = pythonResponse.split("\n");
      resolve(data[1]); // Resolve the promise with the response
    });
  });
};

const extractdata = (param1) => {
  return new Promise((resolve, reject) => {
    // Create a Python process with parameters
    const command = `python3 comparison.py "${param1}"`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        reject(error); // Reject the promise if there's an error
        return;
      }

      const pythonResponse = stdout;
      resolve(pythonResponse); // Resolve the promise with the response
    });
  });
};

export const upload = async (req, res) => {
  try {
    const response = await modelcomputing();
    // console.log(`response from the function is ${response}`);
    // console.log(typeof response)

    const param1 = JSON.parse(response);
    // console.log(`this is the data in json format ${JSON.stringify(param1.result)}`);
    const data = await extractdata(param1.result);
    const parsedData = data.split("\n")
    // console.log(`the data obtained from comaprison is ${parsedData}`);
    const class_name = param1.result;

    if (response && parsedData)
      res.status(200).json({ status: "success", result: { class_name, parsedData } });
    else
      res
        .status(404)
        .json({ status: "error", message: "No response received" });
  } catch (error) {
    res.status(500).json(error);
  }
};
