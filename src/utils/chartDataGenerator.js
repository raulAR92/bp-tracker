import { areFromSameDay, getOnlyDate, formatDate } from "./dateUtils";
import _ from "lodash";

export const getData = () => {
  const areaData = [
    { x: "08/05/2020 00:31", y0: 137, y: 80 },
    { x: "08/05/2020 00:34", y0: 119, y: 70 },
    { x: "08/05/2020 00:37", y0: 122, y: 73 },
    { x: "08/05/2020 08:02", y0: 125, y: 73 },
    { x: "08/05/2020 08:06", y0: 115, y: 74 },
    { x: "08/05/2020 08:09", y0: 116, y: 71 },
    { x: "08/05/2020 23:56", y0: 122, y: 73 },
    { x: "09/05/2020 00:00", y0: 119, y: 63 },
    { x: "09/05/2020 00:04", y0: 118, y: 70 },
    { x: "09/05/2020 10:32", y0: 116, y: 70 },
    { x: "09/05/2020 10:36", y0: 109, y: 75 },
    { x: "09/05/2020 10:41", y0: 120, y: 72 },
    { x: "09/05/2020 22:43", y0: 131, y: 72 },
    { x: "09/05/2020 22:48", y0: 133, y: 75 },
    { x: "09/05/2020 22:52", y0: 124, y: 73 },
    { x: "10/05/2020 10:16", y0: 119, y: 73 },
    { x: "10/05/2020 10:20", y0: 118, y: 70 },
    { x: "10/05/2020 10:24", y0: 110, y: 71 },
    { x: "10/05/2020 22:49", y0: 136, y: 72 },
    { x: "10/05/2020 22:53", y0: 140, y: 74 },
    { x: "10/05/2020 22:57", y0: 133, y: 74 },
    { x: "11/05/2020 10:01", y0: 116, y: 77 },
    { x: "11/05/2020 10:04", y0: 112, y: 74 },
    { x: "11/05/2020 10:08", y0: 113, y: 71 },
    { x: "11/05/2020 23:25", y0: 119, y: 73 },
    { x: "11/05/2020 23:31", y0: 130, y: 75 },
    { x: "11/05/2020 23:35", y0: 135, y: 72 },
    { x: "12/05/2020 08:33", y0: 123, y: 73 },
    { x: "12/05/2020 08:36", y0: 124, y: 70 },
    { x: "12/05/2020 08:42", y0: 113, y: 69 },
    { x: "12/05/2020 23:43", y0: 126, y: 75 },
    { x: "12/05/2020 23:46", y0: 128, y: 69 },
    { x: "12/05/2020 23:51", y0: 125, y: 68 },
    { x: "13/05/2020 08:01", y0: 113, y: 73 },
    { x: "13/05/2020 08:07", y0: 119, y: 71 },
    { x: "13/05/2020 08:14", y0: 120, y: 65 },
    { x: "14/05/2020 07:50", y0: 115, y: 70 },
    { x: "14/05/2020 07:54", y0: 114, y: 66 },
    { x: "14/05/2020 08:01", y0: 122, y: 66 },
    { x: "14/05/2020 23:45", y0: 125, y: 77 },
    { x: "14/05/2020 23:49", y0: 128, y: 77 },
    { x: "14/05/2020 23:54", y0: 133, y: 76 },
    { x: "15/05/2020 09:23", y0: 114, y: 69 },
    { x: "15/05/2020 09:26", y0: 113, y: 71 },
    { x: "15/05/2020 09:30", y0: 112, y: 69 },
    { x: "15/05/2020 23:43", y0: 140, y: 78 },
    { x: "15/05/2020 23:49", y0: 147, y: 66 },
    { x: "16/05/2020 00:09", y0: 145, y: 71 },
    { x: "16/05/2020 10:49", y0: 117, y: 75 },
    { x: "16/05/2020 10:53", y0: 101, y: 76 },
    { x: "16/05/2020 10:58", y0: 107, y: 58 },
    { x: "16/05/2020 23:18", y0: 131, y: 80 },
    { x: "16/05/2020 23:21", y0: 137, y: 74 },
    { x: "16/05/2020 23:22", y0: 124, y: 74 },
    { x: "17/05/2020 10:12", y0: 122, y: 78 },
    { x: "17/05/2020 10:15", y0: 109, y: 73 },
    { x: "17/05/2020 10:17", y0: 113, y: 74 },
    { x: "17/05/2020 23:23", y0: 129, y: 71 },
    { x: "17/05/2020 23:26", y0: 123, y: 69 },
    { x: "17/05/2020 23:29", y0: 118, y: 67 },
    { x: "18/05/2020 08:02", y0: 114, y: 76 },
    { x: "18/05/2020 08:05", y0: 106, y: 68 },
    { x: "18/05/2020 08:09", y0: 106, y: 65 },
    { x: "18/05/2020 23:04", y0: 136, y: 78 },
    { x: "18/05/2020 23:18", y0: 133, y: 69 },
    { x: "18/05/2020 23:20", y0: 122, y: 72 },
    { x: "18/05/2020 23:21", y0: 131, y: 66 },
    { x: "19/05/2020 08:25", y0: 116, y: 74 },
    { x: "19/05/2020 08:28", y0: 107, y: 64 },
    { x: "19/05/2020 08:32", y0: 115, y: 70 },
    { x: "20/05/2020 08:58", y0: 115, y: 72 },
    { x: "20/05/2020 09:00", y0: 124, y: 68 },
    { x: "20/05/2020 09:06", y0: 115, y: 53 },
    { x: "21/05/2020 00:17", y0: 128, y: 72 },
    { x: "21/05/2020 00:19", y0: 116, y: 72 },
    { x: "21/05/2020 00:24", y0: 118, y: 67 },
    { x: "21/05/2020 08:16", y0: 103, y: 64 },
    { x: "21/05/2020 08:20", y0: 111, y: 66 },
    { x: "21/05/2020 08:25", y0: 105, y: 63 },
  ];

  const lineData = [
    { x: "08/05/2020 00:31", y: 77 },
    { x: "08/05/2020 00:34", y: 76 },
    { x: "08/05/2020 00:37", y: 76 },
    { x: "08/05/2020 08:02", y: 59 },
    { x: "08/05/2020 08:06", y: 58 },
    { x: "08/05/2020 08:09", y: 59 },
    { x: "08/05/2020 23:56", y: 74 },
    { x: "09/05/2020 00:00", y: 73 },
    { x: "09/05/2020 00:04", y: 74 },
    { x: "09/05/2020 10:32", y: 61 },
    { x: "09/05/2020 10:36", y: 59 },
    { x: "09/05/2020 10:41", y: 58 },
    { x: "09/05/2020 22:43", y: 62 },
    { x: "09/05/2020 22:48", y: 65 },
    { x: "09/05/2020 22:52", y: 68 },
    { x: "10/05/2020 10:16", y: 60 },
    { x: "10/05/2020 10:20", y: 58 },
    { x: "10/05/2020 10:24", y: 57 },
    { x: "10/05/2020 22:49", y: 68 },
    { x: "10/05/2020 22:53", y: 73 },
    { x: "10/05/2020 22:57", y: 67 },
    { x: "11/05/2020 10:01", y: 64 },
    { x: "11/05/2020 10:04", y: 60 },
    { x: "11/05/2020 10:08", y: 58 },
    { x: "11/05/2020 23:25", y: 85 },
    { x: "11/05/2020 23:31", y: 88 },
    { x: "11/05/2020 23:35", y: 86 },
    { x: "12/05/2020 08:33", y: 67 },
    { x: "12/05/2020 08:36", y: 57 },
    { x: "12/05/2020 08:42", y: 55 },
    { x: "12/05/2020 23:43", y: 85 },
    { x: "12/05/2020 23:46", y: 80 },
    { x: "12/05/2020 23:51", y: 82 },
    { x: "13/05/2020 08:01", y: 68 },
    { x: "13/05/2020 08:07", y: 58 },
    { x: "13/05/2020 08:14", y: 60 },
    { x: "14/05/2020 07:50", y: 60 },
    { x: "14/05/2020 07:54", y: 63 },
    { x: "14/05/2020 08:01", y: 59 },
    { x: "14/05/2020 23:45", y: 83 },
    { x: "14/05/2020 23:49", y: 85 },
    { x: "14/05/2020 23:54", y: 79 },
    { x: "15/05/2020 09:23", y: 59 },
    { x: "15/05/2020 09:26", y: 58 },
    { x: "15/05/2020 09:30", y: 62 },
    { x: "15/05/2020 23:43", y: 81 },
    { x: "15/05/2020 23:49", y: 78 },
    { x: "16/05/2020 00:09", y: 74 },
    { x: "16/05/2020 10:49", y: 67 },
    { x: "16/05/2020 10:53", y: 66 },
    { x: "16/05/2020 10:58", y: 63 },
    { x: "16/05/2020 23:18", y: 73 },
    { x: "16/05/2020 23:21", y: 76 },
    { x: "16/05/2020 23:22", y: 73 },
    { x: "17/05/2020 10:12", y: 63 },
    { x: "17/05/2020 10:15", y: 63 },
    { x: "17/05/2020 10:17", y: 61 },
    { x: "17/05/2020 23:23", y: 91 },
    { x: "17/05/2020 23:26", y: 88 },
    { x: "17/05/2020 23:29", y: 83 },
    { x: "18/05/2020 08:02", y: 61 },
    { x: "18/05/2020 08:05", y: 63 },
    { x: "18/05/2020 08:09", y: 64 },
    { x: "18/05/2020 23:04", y: 75 },
    { x: "18/05/2020 23:18", y: 78 },
    { x: "18/05/2020 23:20", y: 77 },
    { x: "18/05/2020 23:21", y: 73 },
    { x: "19/05/2020 08:25", y: 66 },
    { x: "19/05/2020 08:28", y: 66 },
    { x: "19/05/2020 08:32", y: 61 },
    { x: "20/05/2020 08:58", y: 80 },
    { x: "20/05/2020 09:00", y: 80 },
    { x: "20/05/2020 09:06", y: 75 },
    { x: "21/05/2020 00:17", y: 85 },
    { x: "21/05/2020 00:19", y: 86 },
    { x: "21/05/2020 00:24", y: 86 },
    { x: "21/05/2020 08:16", y: 63 },
    { x: "21/05/2020 08:20", y: 60 },
    { x: "21/05/2020 08:25", y: 59 },
  ];

  let sys = 0;
  let dia = 0;
  let pulse = 0;
  areaData.forEach((ad) => {
    const splitDate = ad.x.split(" ");
    const date = splitDate[0].split("/");
    const time = splitDate[1].split(":");
    const dd = date[0];
    const mm = date[1] - 1;
    const yyyy = date[2];
    const hh = time[0];
    const min = time[1];

    sys += ad.y0;
    dia += ad.y;
    ad.x = new Date(yyyy, mm, dd, hh, min);
  });

  sys = sys / areaData.length;
  dia = dia / areaData.length;

  lineData.forEach((ld) => {
    const splitDate = ld.x.split(" ");
    const date = splitDate[0].split("/");
    const time = splitDate[1].split(":");
    const dd = date[0];
    const mm = date[1] - 1;
    const yyyy = date[2];
    const hh = time[0];
    const min = time[1];
    pulse += ld.y;
    ld.x = new Date(yyyy, mm, dd, hh, min);
  });

  let lineDataFiltered = [];
  let areaDataFiltered = [];
  let allDates = _.uniq(lineData.map((ld) => getOnlyDate(ld.x)));
  let registersPerDay = [];
  let registersLinePerDay = [];
  allDates.forEach((d) => {
    //Line Section
    let lineRegisters = lineData.filter((ad) => areFromSameDay(d, ad.x));
    let dayLineRegisterArea = {
      dayValue: d.valueOf(),
      day: d,
      registers: lineRegisters,
    };
    registersLinePerDay.push(dayLineRegisterArea);

    //area section
    let registers = areaData.filter((ad) => areFromSameDay(d, ad.x));
    let dayRegisterArea = {
      dayValue: d.valueOf(),
      day: d,
      registers: registers,
    };
    registersPerDay.push(dayRegisterArea);
  });
  registersPerDay = _.uniqBy(registersPerDay, "dayValue");
  registersPerDay = _.orderBy(registersPerDay, ["day", "asc"]);

  registersLinePerDay = _.uniqBy(registersLinePerDay, "dayValue");
  registersLinePerDay = _.orderBy(registersLinePerDay, ["day", "asc"]);

  registersPerDay.forEach((r, i, a) => {
    if (r.registers.length > 6) {
      let aux = [];
      r.registers.forEach((rs, indx) => {
        if (rs.x.getHours() < 6) {
          aux.push(rs);
          r.registers.splice(indx, 1);
        }
      });
      if (i === 0) {
        let d = new Date(aux[0].x);
        d.setDate(d.getDate() - 1);
        let auxR = {
          dayValue: getOnlyDate(d).valueOf(),
          day: getOnlyDate(d),
          registers: aux,
        };
        a.unshift(auxR);
      } else {
        Array.prototype.push.apply(a[i - 1].registers, aux);
      }
    }
  });

  registersLinePerDay.forEach((r, i, a) => {
    if (r.registers.length > 6) {
      let aux = [];
      r.registers.forEach((rs, indx) => {
        if (rs.x.getHours() < 6) {
          aux.push(rs);
          r.registers.splice(indx, 1);
        }
      });
      if (i === 0) {
        let d = new Date(aux[0].x);
        d.setDate(d.getDate() - 1);
        let auxR = {
          dayValue: getOnlyDate(d).valueOf(),
          day: getOnlyDate(d),
          registers: aux,
        };
        a.unshift(auxR);
      } else {
        Array.prototype.push.apply(a[i - 1].registers, aux);
      }
    }
  });

  registersPerDay.forEach((rpd, i) => {
    let amRegisters = [];
    let pmRegisters = [];
    rpd.registers.forEach((r) => {
      if (r.x.getHours() < 12 && r.x.getHours() > 5) {
        amRegisters.push(r);
      } else {
        pmRegisters.push(r);
      }
    });
    amRegisters = _.orderBy(amRegisters, ["x", "asc"]);
    pmRegisters = _.orderBy(pmRegisters, ["x", "asc"]);
    amRegisters = amRegisters.splice(0, 1);
    pmRegisters = pmRegisters.splice(0, 1);
    let sysAvrAM = _.meanBy(amRegisters, "y0");
    let sysAvrPM = _.meanBy(pmRegisters, "y0");
    let diaAvrAM = _.meanBy(amRegisters, "y");
    let diaAvrPM = _.meanBy(pmRegisters, "y");
    const auxAM = {
      x: rpd.day.getDate(),
      label: `${formatDate(rpd.day)} - morning`,
      diastolic: diaAvrAM,
      systolic: sysAvrAM,
    };
    const auxPM = {
      x: rpd.day.getDate() + 0.5,
      label: `${formatDate(rpd.day)} - night`,
      diastolic: diaAvrPM,
      systolic: sysAvrPM,
    };
    if (diaAvrAM && sysAvrAM) areaDataFiltered.push(auxAM);

    if (diaAvrPM && sysAvrPM) areaDataFiltered.push(auxPM);
  });

  registersLinePerDay.forEach((rpd, i) => {
    let amRegisters = [];
    let pmRegisters = [];
    rpd.registers.forEach((r) => {
      if (r.x.getHours() < 12 && r.x.getHours() > 5) {
        amRegisters.push(r);
      } else {
        pmRegisters.push(r);
      }
    });
    amRegisters = _.orderBy(amRegisters, ["x", "asc"]);
    pmRegisters = _.orderBy(pmRegisters, ["x", "asc"]);
    amRegisters = amRegisters.splice(0, 1);
    pmRegisters = pmRegisters.splice(0, 1);
    let diaAvrAM = _.meanBy(amRegisters, "y");
    let diaAvrPM = _.meanBy(pmRegisters, "y");
    const auxAM = {
      x: rpd.day.getDate(),
      label: `${formatDate(rpd.day)} - morning`,
      y: diaAvrAM,
    };
    const auxPM = {
      x: rpd.day.getDate() + 0.5,
      label: `${formatDate(rpd.day)} - night`,
      y: diaAvrPM,
    };
    if (diaAvrAM) lineDataFiltered.push(auxAM);

    if (diaAvrPM) lineDataFiltered.push(auxPM);
  });

  areaDataFiltered.forEach((adf, i) => {
    adf.composed = [adf.systolic, adf.diastolic];
    adf.pulse = lineDataFiltered[i].y;
  });

  pulse = pulse / lineData.length;

  return areaDataFiltered;
};

export const getUpdatedData = () => {
  const areaData = [
    { x: "08/05/2020 00:31", y0: 137, y: 80 },
    { x: "08/05/2020 00:34", y0: 119, y: 70 },
    { x: "08/05/2020 00:37", y0: 122, y: 73 },
    { x: "08/05/2020 08:02", y0: 125, y: 73 },
    { x: "08/05/2020 08:06", y0: 115, y: 74 },
    { x: "08/05/2020 08:09", y0: 116, y: 71 },
    { x: "08/05/2020 23:56", y0: 122, y: 73 },
    { x: "09/05/2020 00:00", y0: 119, y: 63 },
    { x: "09/05/2020 00:04", y0: 118, y: 70 },
    { x: "09/05/2020 10:32", y0: 116, y: 70 },
    { x: "09/05/2020 10:36", y0: 109, y: 75 },
    { x: "09/05/2020 10:41", y0: 120, y: 72 },
    { x: "09/05/2020 22:43", y0: 131, y: 72 },
    { x: "09/05/2020 22:48", y0: 133, y: 75 },
    { x: "09/05/2020 22:52", y0: 124, y: 73 },
    { x: "10/05/2020 10:16", y0: 119, y: 73 },
    { x: "10/05/2020 10:20", y0: 118, y: 70 },
    { x: "10/05/2020 10:24", y0: 110, y: 71 },
    { x: "10/05/2020 22:49", y0: 136, y: 72 },
    { x: "10/05/2020 22:53", y0: 140, y: 74 },
    { x: "10/05/2020 22:57", y0: 133, y: 74 },
    { x: "11/05/2020 10:01", y0: 116, y: 77 },
    { x: "11/05/2020 10:04", y0: 112, y: 74 },
    { x: "11/05/2020 10:08", y0: 113, y: 71 },
    { x: "11/05/2020 23:25", y0: 119, y: 73 },
    { x: "11/05/2020 23:31", y0: 130, y: 75 },
    { x: "11/05/2020 23:35", y0: 135, y: 72 },
    { x: "12/05/2020 08:33", y0: 123, y: 73 },
    { x: "12/05/2020 08:36", y0: 124, y: 70 },
    { x: "12/05/2020 08:42", y0: 113, y: 69 },
    { x: "12/05/2020 23:43", y0: 126, y: 75 },
    { x: "12/05/2020 23:46", y0: 128, y: 69 },
    { x: "12/05/2020 23:51", y0: 125, y: 68 },
    { x: "13/05/2020 08:01", y0: 113, y: 73 },
    { x: "13/05/2020 08:07", y0: 119, y: 71 },
    { x: "13/05/2020 08:14", y0: 120, y: 65 },
    { x: "14/05/2020 07:50", y0: 115, y: 70 },
    { x: "14/05/2020 07:54", y0: 114, y: 66 },
    { x: "14/05/2020 08:01", y0: 122, y: 66 },
    { x: "14/05/2020 23:45", y0: 125, y: 77 },
    { x: "14/05/2020 23:49", y0: 128, y: 77 },
    { x: "14/05/2020 23:54", y0: 133, y: 76 },
    { x: "15/05/2020 09:23", y0: 114, y: 69 },
    { x: "15/05/2020 09:26", y0: 113, y: 71 },
    { x: "15/05/2020 09:30", y0: 112, y: 69 },
    { x: "15/05/2020 23:43", y0: 140, y: 78 },
    { x: "15/05/2020 23:49", y0: 147, y: 66 },
    { x: "16/05/2020 00:09", y0: 145, y: 71 },
    { x: "16/05/2020 10:49", y0: 117, y: 75 },
    { x: "16/05/2020 10:53", y0: 101, y: 76 },
    { x: "16/05/2020 10:58", y0: 107, y: 58 },
    { x: "16/05/2020 23:18", y0: 131, y: 80 },
    { x: "16/05/2020 23:21", y0: 137, y: 74 },
    { x: "16/05/2020 23:22", y0: 124, y: 74 },
    { x: "17/05/2020 10:12", y0: 122, y: 78 },
    { x: "17/05/2020 10:15", y0: 109, y: 73 },
    { x: "17/05/2020 10:17", y0: 113, y: 74 },
    { x: "17/05/2020 23:23", y0: 129, y: 71 },
    { x: "17/05/2020 23:26", y0: 123, y: 69 },
    { x: "17/05/2020 23:29", y0: 118, y: 67 },
    { x: "18/05/2020 08:02", y0: 114, y: 76 },
    { x: "18/05/2020 08:05", y0: 106, y: 68 },
    { x: "18/05/2020 08:09", y0: 106, y: 65 },
    { x: "18/05/2020 23:04", y0: 136, y: 78 },
    { x: "18/05/2020 23:18", y0: 133, y: 69 },
    { x: "18/05/2020 23:20", y0: 122, y: 72 },
    { x: "18/05/2020 23:21", y0: 131, y: 66 },
    { x: "19/05/2020 08:25", y0: 116, y: 74 },
    { x: "19/05/2020 08:28", y0: 107, y: 64 },
    { x: "19/05/2020 08:32", y0: 115, y: 70 },
    { x: "20/05/2020 08:58", y0: 115, y: 72 },
    { x: "20/05/2020 09:00", y0: 124, y: 68 },
    { x: "20/05/2020 09:06", y0: 115, y: 53 },
    { x: "21/05/2020 00:17", y0: 128, y: 72 },
    { x: "21/05/2020 00:19", y0: 116, y: 72 },
    { x: "21/05/2020 00:24", y0: 118, y: 67 },
    { x: "21/05/2020 08:16", y0: 103, y: 64 },
    { x: "21/05/2020 08:20", y0: 111, y: 66 },
    { x: "21/05/2020 08:25", y0: 105, y: 63 },
  ];

  const lineData = [
    { x: "08/05/2020 00:31", y: 77 },
    { x: "08/05/2020 00:34", y: 76 },
    { x: "08/05/2020 00:37", y: 76 },
    { x: "08/05/2020 08:02", y: 59 },
    { x: "08/05/2020 08:06", y: 58 },
    { x: "08/05/2020 08:09", y: 59 },
    { x: "08/05/2020 23:56", y: 74 },
    { x: "09/05/2020 00:00", y: 73 },
    { x: "09/05/2020 00:04", y: 74 },
    { x: "09/05/2020 10:32", y: 61 },
    { x: "09/05/2020 10:36", y: 59 },
    { x: "09/05/2020 10:41", y: 58 },
    { x: "09/05/2020 22:43", y: 62 },
    { x: "09/05/2020 22:48", y: 65 },
    { x: "09/05/2020 22:52", y: 68 },
    { x: "10/05/2020 10:16", y: 60 },
    { x: "10/05/2020 10:20", y: 58 },
    { x: "10/05/2020 10:24", y: 57 },
    { x: "10/05/2020 22:49", y: 68 },
    { x: "10/05/2020 22:53", y: 73 },
    { x: "10/05/2020 22:57", y: 67 },
    { x: "11/05/2020 10:01", y: 64 },
    { x: "11/05/2020 10:04", y: 60 },
    { x: "11/05/2020 10:08", y: 58 },
    { x: "11/05/2020 23:25", y: 85 },
    { x: "11/05/2020 23:31", y: 88 },
    { x: "11/05/2020 23:35", y: 86 },
    { x: "12/05/2020 08:33", y: 67 },
    { x: "12/05/2020 08:36", y: 57 },
    { x: "12/05/2020 08:42", y: 55 },
    { x: "12/05/2020 23:43", y: 85 },
    { x: "12/05/2020 23:46", y: 80 },
    { x: "12/05/2020 23:51", y: 82 },
    { x: "13/05/2020 08:01", y: 68 },
    { x: "13/05/2020 08:07", y: 58 },
    { x: "13/05/2020 08:14", y: 60 },
    { x: "14/05/2020 07:50", y: 60 },
    { x: "14/05/2020 07:54", y: 63 },
    { x: "14/05/2020 08:01", y: 59 },
    { x: "14/05/2020 23:45", y: 83 },
    { x: "14/05/2020 23:49", y: 85 },
    { x: "14/05/2020 23:54", y: 79 },
    { x: "15/05/2020 09:23", y: 59 },
    { x: "15/05/2020 09:26", y: 58 },
    { x: "15/05/2020 09:30", y: 62 },
    { x: "15/05/2020 23:43", y: 81 },
    { x: "15/05/2020 23:49", y: 78 },
    { x: "16/05/2020 00:09", y: 74 },
    { x: "16/05/2020 10:49", y: 67 },
    { x: "16/05/2020 10:53", y: 66 },
    { x: "16/05/2020 10:58", y: 63 },
    { x: "16/05/2020 23:18", y: 73 },
    { x: "16/05/2020 23:21", y: 76 },
    { x: "16/05/2020 23:22", y: 73 },
    { x: "17/05/2020 10:12", y: 63 },
    { x: "17/05/2020 10:15", y: 63 },
    { x: "17/05/2020 10:17", y: 61 },
    { x: "17/05/2020 23:23", y: 91 },
    { x: "17/05/2020 23:26", y: 88 },
    { x: "17/05/2020 23:29", y: 83 },
    { x: "18/05/2020 08:02", y: 61 },
    { x: "18/05/2020 08:05", y: 63 },
    { x: "18/05/2020 08:09", y: 64 },
    { x: "18/05/2020 23:04", y: 75 },
    { x: "18/05/2020 23:18", y: 78 },
    { x: "18/05/2020 23:20", y: 77 },
    { x: "18/05/2020 23:21", y: 73 },
    { x: "19/05/2020 08:25", y: 66 },
    { x: "19/05/2020 08:28", y: 66 },
    { x: "19/05/2020 08:32", y: 61 },
    { x: "20/05/2020 08:58", y: 80 },
    { x: "20/05/2020 09:00", y: 80 },
    { x: "20/05/2020 09:06", y: 75 },
    { x: "21/05/2020 00:17", y: 85 },
    { x: "21/05/2020 00:19", y: 86 },
    { x: "21/05/2020 00:24", y: 86 },
    { x: "21/05/2020 08:16", y: 63 },
    { x: "21/05/2020 08:20", y: 60 },
    { x: "21/05/2020 08:25", y: 59 },
  ];

  let sys = 0;
  let dia = 0;
  let pulse = 0;
  areaData.forEach((ad) => {
    const splitDate = ad.x.split(" ");
    const date = splitDate[0].split("/");
    const time = splitDate[1].split(":");
    const dd = date[0];
    const mm = date[1] - 1;
    const yyyy = date[2];
    const hh = time[0];
    const min = time[1];

    sys += ad.y0;
    dia += ad.y;
    ad.x = new Date(yyyy, mm, dd, hh, min);
  });

  sys = sys / areaData.length;
  dia = dia / areaData.length;

  lineData.forEach((ld) => {
    const splitDate = ld.x.split(" ");
    const date = splitDate[0].split("/");
    const time = splitDate[1].split(":");
    const dd = date[0];
    const mm = date[1] - 1;
    const yyyy = date[2];
    const hh = time[0];
    const min = time[1];
    pulse += ld.y;
    ld.x = new Date(yyyy, mm, dd, hh, min);
  });

  let lineDataFiltered = [];
  let areaDataFiltered = [];
  let allDates = _.uniq(lineData.map((ld) => getOnlyDate(ld.x)));
  let registersPerDay = [];
  let registersLinePerDay = [];
  allDates.forEach((d) => {
    //Line Section
    let lineRegisters = lineData.filter((ad) => areFromSameDay(d, ad.x));
    let dayLineRegisterArea = {
      dayValue: d.valueOf(),
      day: d,
      registers: lineRegisters,
    };
    registersLinePerDay.push(dayLineRegisterArea);

    //area section
    let registers = areaData.filter((ad) => areFromSameDay(d, ad.x));
    let dayRegisterArea = {
      dayValue: d.valueOf(),
      day: d,
      registers: registers,
    };
    registersPerDay.push(dayRegisterArea);
  });
  registersPerDay = _.uniqBy(registersPerDay, "dayValue");
  registersPerDay = _.orderBy(registersPerDay, ["day", "asc"]);

  registersLinePerDay = _.uniqBy(registersLinePerDay, "dayValue");
  registersLinePerDay = _.orderBy(registersLinePerDay, ["day", "asc"]);

  registersPerDay.forEach((r, i, a) => {
    if (r.registers.length > 6) {
      let aux = [];
      r.registers.forEach((rs, indx) => {
        if (rs.x.getHours() < 6) {
          aux.push(rs);
          r.registers.splice(indx, 1);
        }
      });
      if (i === 0) {
        let d = new Date(aux[0].x);
        d.setDate(d.getDate() - 1);
        let auxR = {
          dayValue: getOnlyDate(d).valueOf(),
          day: getOnlyDate(d),
          registers: aux,
        };
        a.unshift(auxR);
      } else {
        Array.prototype.push.apply(a[i - 1].registers, aux);
      }
    }
  });

  registersLinePerDay.forEach((r, i, a) => {
    if (r.registers.length > 6) {
      let aux = [];
      r.registers.forEach((rs, indx) => {
        if (rs.x.getHours() < 6) {
          aux.push(rs);
          r.registers.splice(indx, 1);
        }
      });
      if (i === 0) {
        let d = new Date(aux[0].x);
        d.setDate(d.getDate() - 1);
        let auxR = {
          dayValue: getOnlyDate(d).valueOf(),
          day: getOnlyDate(d),
          registers: aux,
        };
        a.unshift(auxR);
      } else {
        Array.prototype.push.apply(a[i - 1].registers, aux);
      }
    }
  });

  registersPerDay.forEach((rpd, i) => {
    let amRegisters = [];
    let pmRegisters = [];
    rpd.registers.forEach((r) => {
      if (r.x.getHours() < 12 && r.x.getHours() > 5) {
        amRegisters.push(r);
      } else {
        pmRegisters.push(r);
      }
    });
    amRegisters = _.orderBy(amRegisters, ["x", "asc"]);
    pmRegisters = _.orderBy(pmRegisters, ["x", "asc"]);
    amRegisters = amRegisters.splice(0, 1);
    pmRegisters = pmRegisters.splice(0, 1);
    let sysAvrAM = _.meanBy(amRegisters, "y0");
    let sysAvrPM = _.meanBy(pmRegisters, "y0");
    let diaAvrAM = _.meanBy(amRegisters, "y");
    let diaAvrPM = _.meanBy(pmRegisters, "y");
    const auxAM = {
      x: rpd.day.getDate(),
      date: rpd.day.valueOf(),
      label: `${formatDate(rpd.day)} - morning`,
      diastolic: diaAvrAM,
      systolic: sysAvrAM,
    };
    const auxPM = {
      x: rpd.day.getDate() + 0.5,
      date: rpd.day.valueOf(),
      label: `${formatDate(rpd.day)} - night`,
      diastolic: diaAvrPM,
      systolic: sysAvrPM,
    };
    if (diaAvrAM && sysAvrAM) areaDataFiltered.push(auxAM);

    if (diaAvrPM && sysAvrPM) areaDataFiltered.push(auxPM);
  });

  registersLinePerDay.forEach((rpd, i) => {
    let amRegisters = [];
    let pmRegisters = [];
    rpd.registers.forEach((r) => {
      if (r.x.getHours() < 12 && r.x.getHours() > 5) {
        amRegisters.push(r);
      } else {
        pmRegisters.push(r);
      }
    });
    amRegisters = _.orderBy(amRegisters, ["x", "asc"]);
    pmRegisters = _.orderBy(pmRegisters, ["x", "asc"]);
    amRegisters = amRegisters.splice(0, 1);
    pmRegisters = pmRegisters.splice(0, 1);
    let diaAvrAM = _.meanBy(amRegisters, "y");
    let diaAvrPM = _.meanBy(pmRegisters, "y");
    const auxAM = {
      x: rpd.day.getDate(),
      label: `${formatDate(rpd.day)} - morning`,
      y: diaAvrAM,
    };
    const auxPM = {
      x: rpd.day.getDate() + 0.5,
      label: `${formatDate(rpd.day)} - night`,
      y: diaAvrPM,
    };
    if (diaAvrAM) lineDataFiltered.push(auxAM);

    if (diaAvrPM) lineDataFiltered.push(auxPM);
  });

  areaDataFiltered.forEach((adf, i) => {
    adf.composed = [adf.systolic, adf.diastolic];
    adf.pulse = lineDataFiltered[i].y;
  });

  pulse = pulse / lineData.length;
  return areaDataFiltered;
};
