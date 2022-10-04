import faker from "@faker-js/faker";
const labels = [
  "09:31:11",
  "09:31:22",
  "10:31:16",
  "11:17:25",
  "11:33:22",
  "11:34:47",
  "11:47:22",
];

export const cpu = {
  responsive: true,
  maintainAspectRatio: false,
  pointStyle: "line",

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "CPU",
    },
  },

  drawBorder: true,
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: (value: string | string[] | number | number[]): string => {
          console.log(typeof value);
          return value + "%";
        },
      },
    },
  },
};
export const cpuData = {
  labels,
  datasets: [
    {
      label: "read",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15 })),
      borderColor: "rgb(198, 40, 40)",
      backgroundColor: "rgb(198, 40, 40)",
    },
  ],
};
// --------------------------------------
export const disk = {
  responsive: true,
  maintainAspectRatio: false,
  pointStyle: "line",

  plugins: {
    legend: {
      position: "top" as const,
      align: "end" as const,
      labels: {
        boxWidth: 15,
        boxHeight: 2,
        color: "#393939",
      },
    },
    title: {
      display: true,
      text: "DISK THROUGHPUT",
    },
  },
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (
          value: string | string[] | number | number[]
        ): string {
          return value + "KBps";
        },
      },
    },
  },
};

export const diskData = {
  labels,
  datasets: [
    {
      label: "read",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      borderColor: "rgb(198, 40, 40)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "write",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      borderColor: "rgb(255, 143, 0)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
// --------------------------------------

export const diskIops = {
  responsive: true,
  maintainAspectRatio: false,
  pointStyle: "line",

  plugins: {
    legend: {
      position: "top" as const,
      align: "end" as const,
      labels: {
        boxWidth: 15,
        boxHeight: 2,
        color: "#393939",
      },
    },
    title: {
      display: true,
      text: "DISK IOPS",
    },
  },
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (
          value: string | string[] | number | number[]
        ): string {
          return value + "iops";
        },
      },
    },
  },
};
export const diskIopsData = {
  labels,
  datasets: [
    {
      label: "read",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      borderColor: "rgb(198, 40, 40)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "write",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      borderColor: "rgb(255, 143, 0)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
// --------------------------------------

export const network = {
  responsive: true,
  maintainAspectRatio: false,
  pointStyle: "line",

  plugins: {
    legend: {
      position: "top" as const,
      align: "end" as const,
      labels: {
        boxWidth: 15,
        boxHeight: 2,
        color: "#393939",
      },
    },
    title: {
      display: true,
      text: "NETWORK TRAFFIC",
    },
  },
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (
          value: string | string[] | number | number[]
        ): string {
          return value + "KBps";
        },
      },
    },
  },
};
export const networkData = {
  labels,
  datasets: [
    {
      label: "in",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      borderColor: "rgb(198, 40, 40)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "out",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      borderColor: "rgb(255, 143, 0)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
// --------------------------------------

export const networkPps = {
  responsive: true,
  maintainAspectRatio: false,
  pointStyle: "line",

  plugins: {
    legend: {
      position: "top" as const,
      align: "end" as const,
      labels: {
        boxWidth: 15,
        boxHeight: 2,
        color: "#393939",
      },
    },
    title: {
      display: true,
      text: "NETWORK PPS",
    },
  },
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value: string | string[] | number | number[]): string {
          return value + "pps";
        },
      },
    },
  },
};
export const networkPpsData = {
  labels,
  datasets: [
    {
      label: "in",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      borderColor: "rgb(198, 40, 40)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "out",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      borderColor: "rgb(255, 143, 0)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
