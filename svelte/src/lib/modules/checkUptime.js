import moment from "moment";
const log = "Uptime: 13 hours 28 mins 30 secs | Algo: ethash | Driver: 512.59 | T-Rex 0.26.4";

export const checkUptime = log => {
  if (log.startsWith("Uptime")) {
    const uptime = log.match(/\w+\shours\s\w+\smins\s\w+\ssecs/g)[0];
    const separator = uptime.split(" ");
    const hours = separator[0];
    const mins = separator[2];
    const secs = separator[4];
    const systemFirstBootTime = moment()
      .locale("tr")
      .subtract(hours, 'hours')
      .subtract(mins, 'minutes')
      .subtract(secs, 'seconds')
      .calendar();
    return systemFirstBootTime.toUpperCase();
    // const uptimeTr = uptime.replace("hours", "saat").replace("mins", "dakika").replace("secs", "saniye");   
    // return uptimeTr;
  };
};

console.log(checkUptime(log));