const log = "GPU #0: MSI RTX 3070 Ti - 76.31 MH/s, [T:60/94C, P:217W, F:80%, E:353kH/W], 190/194 R:2.06%";

export const checkGpu = log => {
  if (log.startsWith("GPU")) {
    const gpuRegEx = log.match(/(#\w+)|(:\s(\w+\s)+)|(T:\w+\/\w+)|(F:\w+%)|(P:\w+)|(\w+.\w+\sMH\/s)/g);
    const row = gpuRegEx[0].slice(1); //0
    const name = gpuRegEx[1].slice(2, -1);
    const temp = gpuRegEx[3].slice(2, 4); //60
    const maxTemp = gpuRegEx[3].slice(-3, -1); //94
    const fan = gpuRegEx[5].slice(2); //80%
    const power = gpuRegEx[4].slice(2); //217W
    const hash = gpuRegEx[2]; //76.31 MH/s
    // console.log(gpuRegEx);
    return {
      row,
      name,
      temp,
      maxTemp,
      fan,
      power,
      hash,
    };
    // console.log(gpu);
  };
};

console.log(checkGpu(log));
