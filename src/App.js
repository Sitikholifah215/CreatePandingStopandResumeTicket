import React from "react";
import "./styles.css";
import Stopwatch from "react-stopwatch";
// import moment from "moment";

const App = () => {
  // start time
  let startTime = new Date("2020-09-19 12:00:00 UTC");
  var currentTime = new Date();
  currentTime.toString();

  // let DayCurrent = currentTime.getDay();
  // let HourCurrent = currentTime.getHours();
  // let MinuteCurrent = currentTime.getMinutes();
  // let SecondCurrent = currentTime.getSeconds();
  // let tanggal = currentTime.getDate();
  // let bulan = currentTime.getMonth();
  // let tahun = currentTime.getFullYear();

  // console.warn("Current Time :");
  // console.log(
  //   `${tanggal}DD ${
  //     bulan + 1
  //   }MM ${tahun}YY ${tanggal}d ${HourCurrent}h ${MinuteCurrent}m ${SecondCurrent}s`
  // );

  // jarak mulai tiket dengan tanggal skrng
  let timeElapsed = new Date(currentTime - startTime);

  // diff timeElapsed
  let getDay = timeElapsed.getDate();
  let getHour = timeElapsed.getHours();
  let getMinute = timeElapsed.getMinutes();
  let getSecond = timeElapsed.getSeconds();

  console.warn("Start time to Current :");
  console.log(`${getDay}d ${getHour}h ${getMinute}m ${getSecond}s`);

  // ==============================================

  let pendingTime = new Date("2020-10-04 19:55:14");
  pendingTime.toString();
  let StartPending = new Date(pendingTime - startTime);
  let getDayStartPending = StartPending.getDate();
  let getHourStartPending = StartPending.getHours();
  let getMinuteStartPending = StartPending.getMinutes();
  let getSecondStartPending = StartPending.getSeconds();

  console.warn("Start time to Pending :");
  console.log(
    `${getDayStartPending}d ${getHourStartPending}h ${getMinuteStartPending}m ${getSecondStartPending}s`
  );

  // ================================================

  let resumeTime = new Date("2020-10-04 19:56:07");
  resumeTime.toString();
  // let resumeToNow = new Date(currentTime - resumeTime);

  // let getDayResumeToNow = resumeToNow.getDate();
  // let getHourResumeToNow = resumeToNow.getHours();
  // let getMinuteResumeToNow = resumeToNow.getMinutes();
  // let getSecondResumeToNow = resumeToNow.getSeconds();

  // console.warn("Resume time to Now:");
  // console.log(
  //   `${getDayResumeToNow}d ${getHourResumeToNow}h ${getMinuteResumeToNow}m ${getSecondResumeToNow}s`
  // );

  // ================================================

  // jarak antara pending ke resume
  let resumePending = new Date(resumeTime - pendingTime);

  let getDayresumePending = resumePending.getDate();
  let getHourresumePending = resumePending.getHours();
  let getMinuteresumePending = resumePending.getMinutes();
  let getSecondresumePending = resumePending.getSeconds();

  console.warn("Resume time to pendding:");
  console.log(
    `${getDayresumePending}d ${getHourresumePending}h ${getMinuteresumePending}m ${getSecondresumePending}s`
  );

  // ================================================

  // let PendingResume = new Date(resumeTime - pendingTime);
  // // gimana caranya ngeresume waktu dari tanggal pending berdasarkan tanggal skrng
  //let timeAll = new Date(StartPending + resumeToNow);
  let timeAll = new Date(timeElapsed - resumePending);
  let getDaytimeAll = timeAll.getDate();
  let getHourtimeAll = timeAll.getHours();
  let getMinutetimeAll = timeAll.getMinutes();
  let getSecondtimeAll = timeAll.getSeconds();

  console.warn("Time All:");
  console.log(
    `${getDaytimeAll}d ${getHourtimeAll}h ${getMinutetimeAll}m ${getSecondtimeAll}s`
  );

  return (
    <div>
      <h1>[Studi kasus] Stop dan Resume Tanggal</h1>
      <div>
        Misalkan ada project A yang dikerjakan pada tanggan 19 Sep 2020 pukul
        12.00 lalu tiba-tiba project tersebut harus di pending pada tanggal 04
        okt 2020 pukul 19:55. Dan di resume tanggal 04 okt 2020 pada 19:56.
        Durasi realtime lamanya project di kerjakan hingga hari ini.
        <hr />
        Jawab :
      </div>

      <Stopwatch
        seconds={getSecondtimeAll}
        minutes={getMinutetimeAll}
        hours={getHourtimeAll}
        dates={getDaytimeAll}
        render={({ hours, minutes, seconds }) => {
          return (
            <div>{`${getDaytimeAll}d ${hours}h ${minutes}m ${seconds}s`}</div>
          );
        }}
      />
    </div>
  );
};

export default App;
