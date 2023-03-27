function createYearList(){
  for (let i = 0; i < 2; i++) {
    const nowYear = new Date().getFullYear();
    let option = document.createElement('option');
    const startYear = document.getElementById('startYear');
    option.value = nowYear + i;
    option.textContent = nowYear + i;
    startYear.appendChild(option);
  };
  for (let i = 0; i < 2; i++) {
    const nowYear = new Date().getFullYear();
    let option = document.createElement('option');
    const endYear = document.getElementById('endYear');
    option.value = nowYear + i;
    option.textContent = nowYear + i;
    endYear.appendChild(option);
  };
}

function createMonthsList(currentMonth){
  for (let i = 1; i < 13; i++) {
    let option = document.createElement('option');
    const startMonth = document.getElementById('startMonth');
    option.value = i;
    option.textContent = i;
    if(currentMonth === i){
      option.selected = true;
    };
    startMonth.appendChild(option);
  };
  for (let i = 1; i < 13; i++) {
    let option = document.createElement('option');
    const endMonth = document.getElementById('endMonth');
    option.value = i;
    option.textContent = i;
    if(currentMonth === i){
      option.selected = true;
    };
    endMonth.appendChild(option);
  };
};

function createStartDateList(dateNum){
  document.getElementById('startDate').textContent = '';
  for (let i = 1; i < dateNum + 1; i++) {
    let option = document.createElement('option');
    const startDate = document.getElementById('startDate');
    option.value = i;
    option.textContent = i;
    startDate.appendChild(option);
  };
}

function createEndDateList(dateNum){
  document.getElementById('endDate').textContent = '';
  for (let i = 1; i < dateNum + 1; i++) {
    let option = document.createElement('option');
    const endDate = document.getElementById('endDate');
      option.value = i;
      option.textContent = i;
    endDate.appendChild(option);
  };
};

function createHourList(){
  for (let i = 0; i < 24; i++) {
    let option = document.createElement('option');
    const startWorkHour = document.getElementById('startWorkHour');
    if (i < 10) {
      option.value = `0${i}`
      option.textContent = `0${i}`;
    } else {
      option.value = i;
      option.textContent = i;
    };
    startWorkHour.appendChild(option);
  };
  for (let i = 0; i < 24; i++) {
    let option = document.createElement('option');
    const endWorkHour = document.getElementById('endWorkHour');
    if (i < 10) {
      option.value = `0${i}`
      option.textContent = `0${i}`;
    } else {
      option.value = i;
      option.textContent = i;
    };
    endWorkHour.appendChild(option);
  };
}

function createMinList(){
  for (let i = 0; i < 12; i++) {
    let option = document.createElement('option');
    const startWorkMin = document.getElementById('startWorkMin');
    if (i < 2) {
      option.value = `0${i * 5}`
      option.textContent = `0${i * 5}`;
    } else {
      option.value = i * 5;
      option.textContent = i * 5;
    };
    startWorkMin.appendChild(option);
  };
  for (let i = 0; i < 12; i++) {
    let option = document.createElement('option');
    const endWorkMin = document.getElementById('endWorkMin');
    if (i < 2) {
      option.value = `0${i * 5}`
      option.textContent = `0${i * 5}`;
    } else {
      option.value = i * 5;
      option.textContent = i * 5;
    }
    endWorkMin.appendChild(option);
  };
}

function createTakeMinList(){
  const minList = [60, 30, 20, 15, 10, 5];
  minList.forEach(function(min){
    let option = document.createElement('option');
    const takeMin = document.getElementById('takeMin');
    option.value = min;
    option.textContent = min;
    takeMin.appendChild(option);
  })
}

function createOptions(){
  const current = new Date();
  const MonthOfDateNum = new Date(current.getFullYear(), current.getMonth() + 1, 0);
  createYearList();
  createMonthsList(current.getMonth() + 1);
  createStartDateList(MonthOfDateNum.getDate());
  createEndDateList(MonthOfDateNum.getDate());
  createHourList();
  createMinList();
  createTakeMinList();
}

createOptions();

const startYear = document.getElementById('startYear');
const startMonth = document.getElementById('startMonth');
const endYear = document.getElementById('endYear');
const endMonth = document.getElementById('endMonth');

startYear.addEventListener('change', function(){
  const startYear = parseInt(document.getElementById('startYear').value);
  const selectStartMonthPlusOne = parseInt(document.getElementById('startMonth').value);
  const createStartDateNum = new Date(startYear, selectStartMonthPlusOne, 0).getDate();
  createStartDateList(createStartDateNum);
})

startMonth.addEventListener('change', function(){
  const startYear = parseInt(document.getElementById('startYear').value);
  const selectStartMonthPlusOne = parseInt(document.getElementById('startMonth').value);
  const createStartDateNum = new Date(startYear, selectStartMonthPlusOne, 0).getDate();
  createStartDateList(createStartDateNum);
})

endYear.addEventListener('change', function(){
  const endYear = parseInt(document.getElementById('endYear').value);
  const selectEndMonthPlusOne = parseInt(document.getElementById('endMonth').value);
  const createEndDateNum = new Date(endYear, selectEndMonthPlusOne, 0).getDate();
  createEndDateList(createEndDateNum);
})

endMonth.addEventListener('change', function(){
  const endYear = parseInt(document.getElementById('endYear').value);
  const selectEndMonthPlusOne = parseInt(document.getElementById('endMonth').value);
  const createEndDateNum = new Date(endYear, selectEndMonthPlusOne, 0).getDate();
  createEndDateList(createEndDateNum);
})
