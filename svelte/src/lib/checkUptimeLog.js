import moment from "moment";
// const log = "Uptime: 13 hours 28 mins 30 secs | Algo: ethash | Driver: 512.59 | T-Rex 0.26.4";

export const checkUptime = log => {
  if (!log.startsWith("Uptime")) return false;

  const uptimeRegex = log.match(/\w+\s(hours?|mins?|secs?)/g);
  // const separator = uptime.split(" ");
  // const days = uptimeRegex.split(" ")[0];
  const hours = uptimeRegex[0].split(" ")[0];
  const mins = uptimeRegex[1].split(" ")[0];
  const secs = uptimeRegex[2].split(" ")[0];
  const systemFirstBootTime = moment()
    .locale("tr")
    // .subtract(days, 'days')
    .subtract(hours, 'hours')
    .subtract(mins, 'minutes')
    .subtract(secs, 'seconds')
    .calendar();
  return systemFirstBootTime;
  // const uptimeTr = uptime.replace("hours", "saat").replace("mins", "dakika").replace("secs", "saniye");   
  // return uptimeTr;
};

// console.log(checkUptime(log));