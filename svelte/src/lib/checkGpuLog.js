// const log = "GPU #0: MSI RTX 3070 Ti - 76.31 MH/s, [T:60/94C, P:217W, F:80%, E:353kH/W], 190/194 R:2.06%";

export const checkGpu = log => {
  if (!log.startsWith("GPU")) return false;

  const gpuRegEx = log.match(/(#\w+)|(:\s(\w+\s)+)|(T:\w+(\/\w+)?)|(F:\w+%)|(P:\w+)|(\w+.\w+\sMH\/s)|(R:\w+(\.\w+)?%)/g);
  const row = gpuRegEx[0].slice(1); //0
  const name = gpuRegEx[1].slice(2, -1);
  const coreTemp = gpuRegEx[3].slice(2, 4); //60
  const vramTemp = gpuRegEx[3].slice(5, 7) || "--"; //94
  const fan = gpuRegEx[5].slice(2); //80%
  const power = gpuRegEx[4].slice(2); //217W
  const hash = gpuRegEx[2]; //76.31 MH/s
  const r = gpuRegEx[6].slice(2);
  // console.log(gpuRegEx);
  return {
    row,
    name,
    coreTemp,
    vramTemp,
    fan,
    power,
    hash,
    r
  };
  // console.log(gpu);
};

// console.log(checkGpu(log));