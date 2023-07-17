const symptomCode = {
  কান্না: 1201,
  "মাথা ঝাঁকাতে থাকবে": 1202,
  "ঘড়ঘড় আওয়াজ": 1203,
  "শরীর নীল": 1204,
  "ঘনঘন শ্বাস": 1205,
  "হৃৎপিণ্ডের গতি বেড়ে গেছে": 1206,
  "হলুদ বা সবুজ রঙের শ্লেষ্মা (কফ্)": 1101,
  শ্বাসকষ্ট: 102,
  "ঘরঘর আওয়াজ": 1203,
  "টানা 3 সপ্তাহের বেশি কাশি হওয়া": 1103,
  "কাশির সঙ্গে রক্ত": 703,
  "ফ্যাকাসে নীল শিরার দাগ": 1104,
  জ্বর: 702,
  মাথাব্যথা: 1000,
  "সারা শরীরে ব্যথা": 1102,
  "দুর্বল লাগা": 106,
  "খাবারের অরুচি": 601,
  কোষ্ঠকাঠিন্য: 1001,
  ডায়রিয়া: 1002,
  বমি: 301,
  "গা ম্যাজ ম্যাজ করা": 1003,
  কাশি: 104,
  "পেট ব্যথা ": 1004,
  "পেটে,পিঠে গোলাপি রঙের দানা": 1006,
  "হার্ট রেট বা হৃদস্পন্দন কমে যেতে পারে": 1005,
  "জ্বর ১০৫ ফারেনহাইট পর্যন্ত হয়ে থাকে": 900,
  "পেটে ব্যথা": 1004,
  "চোখের পেছনে ব্যথা": 902,
  "সারা শরীরজুড়ে লালচে দানা দেখা যায়": 904,
  "সাধারণত ৪ বা ৫ দিন জ্বর থাকার পর তা এমনিতেই চলে যায়। কারও ক্ষেত্রে ২ বা ৩ দিন পর আবারও জ্বর আসে": 903,
};
const diseases = [
  {
    DiseaseName: "Pneumonia(children)",
    DiseaseCode: 200,
    Symtoms:
      "1.কান্না-1201\n2.জ্বর-702\n3.শ্বাসকষ্ট-102\n4.মাথা ঝাঁকাতে থাকবে-1202\n5.ঘড়ঘড় আওয়াজ-1203\n6. শরীর নীল-1204\n7.ঘনঘন শ্বাস-1205 \n8.হৃৎপিণ্ডের গতি বেড়ে যাবে-1206",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Pneumonia(aged)",
    DiseaseCode: 201,
    Symtoms:
      "কাশি-104 \nহলুদ বা সবুজ রঙের শ্লেষ্মা (কফ্)-1101 \nশ্বাসকষ্ট-102 \nঘরঘর আওয়াজ-1203\nজ্বর-702\n4.বুকব্যথা-109\n5.সারা শরীরে ব্যথা -1102\n6.দুর্বল লাগা-106\n7.খাবারের অরুচি-601\n8.টানা 3 সপ্তাহের বেশি কাশি হওয়া-1103 \n9.কাশির সঙ্গে রক্ত -703\n10.ফ্যাকাসে নীল শিরার দাগ-1104",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Typhoid",
    DiseaseCode: 202,
    Symtoms:
      "জ্বর-702\nমাথাব্যথা-1000\nসারা শরীরে ব্যথা-1102\nদুর্বল লাগা-106\nখাবারের অরুচি-601\nকোষ্ঠকাঠিন্য-1001\nডায়রিয়া-1002 \nবমি-301\nগা ম্যাজ ম্যাজ করা-1003\nকাশি-104\nপেট ব্যথা -1004\nপেটে,পিঠে গোলাপি রঙের দানা -1006\nহার্ট রেট বা হৃদস্পন্দন কমে যেতে পারে-1005",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Dengue",
    DiseaseCode: 203,
    Symtoms:
      "জ্বর-702\nসারা শরীরে ব্যথা-1102\nজ্বর ১০৫ ফারেনহাইট পর্যন্ত হয়ে থাকে-900\nপেটে ব্যথা-1004\nহাড়, কোমর, পিঠসহ অস্থিসন্ধি এবং মাংসপেশীতে তীব্র ব্যথা হয় -901\nমাথাব্যথা-1000\nচোখের পেছনে ব্যথা-902\nসারা শরীরজুড়ে লালচে দানা দেখা যায়-904\nবমি-301\nদুর্বল লাগা-106\nসাধারণত ৪ বা ৫ দিন জ্বর থাকার পর তা এমনিতেই চলে যায়। কারও ক্ষেত্রে ২ বা ৩ দিন পর আবারও জ্বর আসে-903",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Malaria",
    DiseaseCode: 204,
    Symtoms:
      " কাঁপুনি দিয়ে জ্বর আসা-800\nকেপে কেপে জ্বর আসা-801\nজ্বর-702 \n2.জ্বর সাধারণত ১০৫-১০৬ ডিগ্রি ফারেনহাইট পর্যন্ত-802\n3.নিয়মিত ও নির্দিষ্ট বিরতিতে জ্বর আসা-যাওয়া করে-803\n4.একদিন পর পর জ্বর, তা ৩-৪ দিন দীর্ঘ হওয়া -804 \n5.ঘাম দিয়ে জ্বর কমে যায় -805\n6.জ্বর ছেড়ে গেলে শরীরের তাপমাত্রা স্বাভাবিকের চেয়ে কমে যেতে পারে-806",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Cholera",
    DiseaseCode: 205,
    Symtoms:
      "ঘনঘন চাল ধোয়া পানির মত পাতলা পায়খানা-712\nপেটব্যথা-1004\nদুর্বলতা-106 \nচোখ ডেবে যায়-711 \nহাত ও ত্বক কুঁচকে যায়-709 ",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Dysentery",
    DiseaseCode: 206,
    Symtoms:
      "1.পেট ফেঁপে থাকা-610\n2.পেটে ব্যথা -1004\nখিঁচুনি-611\n3.বমি বমি ভাব-612\n4.বমি-301\n5.জ্বর-702\n6.তরল পানির মত মল-613\nফ্যানা সৃষ্টি-614\n7.মল আঁশটে দূর্গন্ধযুক্ত হয়ে থাকে-615\n8.মলে রক্ত -616\n9.মলে শ্লেষ্মা-617\n10.ঘন ঘন পায়খানা-618\nডায়রিয়া-1002",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Tuberculosis(TB)",
    DiseaseCode: 207,
    Symtoms:
      "1.২/৩ সপ্তাহ বা তার বেশি সময় ধরে যদি একটানা কাশি চলতে থাকে-1300\nকাশি-104\n\n2.বুকে ব্যথা -109\n\n3.কাশির সঙ্গে রক্ত -703\n\n দুর্বল লাগে-106\n\n5.ওজন কম-504\n\nখাবারের অরুচি-601\n\n7.ঠান্ডা-701 \n\n8.জ্বর-702 ",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Diabetes",
    DiseaseCode: 208,
    Symtoms:
      "1.ঘনঘন প্রস্রাব হওয়া-501\n পিপাসা লাগা-502\n2.দুর্বল লাগা-106\n3.ক্ষুধা বেড়ে যাওয়া-503\n5.মিষ্টি জাতীয় জিনিসের প্রতি আকর্ষণ বেড়ে যাওয়া-505\n6.কোন কারণ ছাড়াই অনেক ওজন কমে যাওয়া-504\n7.শরীরে ক্ষত বা কাটাছেঁড়া হলেও দীর্ঘদিনেও সেটা না সারা-506\n8.চামড়ায় শুষ্ক, খসখসে ও চুলকানি ভাব-507\n10.চোখে কম দেখতে শুরু করা-508",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "High Pressure",
    DiseaseCode: 209,
    Symtoms:
      "1.নাক থেকে রক্ত পড়া-401\n2.মাথা যন্ত্রণা-1000\n3.দুর্বল লাগা-106\n4.চোখ ঝাপসা হয়ে আসা-402\n5.বুকে ব্যথা-109",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Gastric",
    DiseaseCode: 210,
    Symtoms:
      "1.বমি-301\n2.পেটে ফুলে যাওয়া বা পেট ফাঁপা-302\n3.পেটে ব্যথা-1004\n4.বদহজম-307\n6.আলসার-306\n7.পেটে জ্বালাপোড়া-303\n8.খাবারের অরুচি-601\n9.রক্ত ​​বমি বা বমির সাথে কফি -304\n10.কালো, ট্যারি স্টুল -305",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Heart disease",
    DiseaseCode: 211,
    Symtoms:
      "1.বুকের মাঝখানে প্রচণ্ড ব্যথা-101\n2.শ্বাসকষ্ট-102\n3.অতিরিক্ত ঘাম হওয়া-103\n4.কাশি-104\n5.অজ্ঞান হয়ে যাওয়া-105\n6.দুর্বল লাগা-106\n7.মাথা ব্যথা-1000\n8.অনিয়মিত পালস রেট-108\n9.বুক ব্যাথা-109",
    AssumeStage: "1st trimester and 6 weeks",
    Medicine: "fgedhcd",
    Test: "fyuhue",
  },
  {
    DiseaseName: "Asthma",
    DiseaseCode: 212,
    Symtoms:
      "1.শ্বাসকষ্ট-102\nকাশি -104\n\n2.শ্বাস-প্রশ্বাসের সময় বাঁশির মতো সাঁ সাঁ শব্দ-201\n\n3.হঠাৎ দমবন্ধ ভাব অনুভব করা-202 \n\n5.ঋতু পরিবর্তনের সময় শ্বাসকষ্ট-204\n\n6.বিটাব্লকার বা অ্যাসরিন জাতীয় ওষুধ খেলে শ্বাসকষ্ট-203",
    AssumeStage: "N/A",
    Medicine: "fgcd",
    Test: "fyuhue",
  },
];

const get_input_from_user = () => {
  const input = document.getElementById("input").value;
  const map_num = () => {
    input.map((item) => {
      symptomCode == item;
    });
  };
  return input;
};
function developModel() {
  //Get input arrays
  var x_values = document
    .getElementById("x_values")
    .value.split(",")
    .map(Number);
  var y_values = document
    .getElementById("y_values")
    .value.split(",")
    .map(Number);

  //Get slope, intercept and R2 score
  var regressor = linearRegression(x_values, y_values);

  //Plot the chart
  plotRegressionChart(x_values, y_values, regressor["y_hat"], regressor["r2"]);

  //Write the regression equation to the screen
  document.getElementById("regressionEquation").innerHTML =
    "<b>Regression Equation: </b> " +
    String(regressor["slope"]) +
    "*x + " +
    String(regressor["intercept"]);
}

function linearRegression(x_values, y_values) {
  //Create the regressor object to store the equation's data
  var regressor = {};

  //Set variables we'll need to get the slope and intercept; we need to find the equation in the format y = m*x+b where m is the slope and b is the intercept
  var x_mean = x_values.reduce((a, b) => a + b, 0) / x_values.length;
  var y_mean = y_values.reduce((a, b) => a + b, 0) / y_values.length;

  //Equations to solve for slope:
  var slope = 0,
    slope_numerator = 0,
    slope_denominator = 0;
  for (i = 0; i < x_values.length; i++) {
    slope_numerator += (x_values[i] - x_mean) * (y_values[i] - y_mean);
    slope_denominator += Math.pow(x_values[i] - x_mean, 2);
  }

  slope = slope_numerator / slope_denominator;
  console.log(slope);
  regressor["slope"] = slope;

  //Equation to solve for intercept
  var intercept = y_mean - x_mean * slope;
  regressor["intercept"] = intercept;

  //Get y_hat, or predicted values of y based on x_values
  //Loop through x_values, and run the elements through the lr equation to get predictions
  var y_hat = [];
  for (i = 0; i < x_values.length; i++) {
    console.log(x_values[i]);
    y_hat.push(x_values[i] * regressor["slope"] + regressor["intercept"]);
  }
  regressor["y_hat"] = y_hat;

  //Now to find the r2 score
  var residual_sum_of_squares = 0,
    total_sum_of_squares = 0,
    r2 = 0;

  for (i = 0; i < y_values.length; i++) {
    residual_sum_of_squares += Math.pow(y_hat[i] - y_values[i], 2);
    total_sum_of_squares += Math.pow(y_hat[i] - y_mean, 2);
  }

  r2 = 1 - residual_sum_of_squares / total_sum_of_squares;

  //Add to regressor object
  regressor["r2"] = r2;
  console.log(r2);

  return regressor;
}

function plotRegressionChart(x_values, y_values, y_hat, r2) {
  ctx = document.getElementById("regressionChart");
  var mixedChart = new Chart(ctx, {
    data: {
      datasets: [
        {
          type: "line",
          label: "Line of Best Fit (r2: " + String(r2) + ")",
          data: y_hat,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          type: "scatter",
          label: "True Values",
          data: y_values,
          backgroundColor: "rgb(0, 0, 0)",
        },
      ],
      labels: x_values,
    },
  });
}
