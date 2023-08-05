import * as model from './model';
import formView from './view/formView';
import historyView from './view/historyView';
import summaryView from './view/summaryView';

function recordFormData(submission) {
  return model.recordHistory(submission);
}

function renderSummary() {
  summaryView.renderSummary(model.updateSummary);
}

function historyData() {
  const data = model.historyData();
  //   console.log(data);

  historyView.renderHistory(data);
}

function clearHistoryData() {
  model.clearHistory();
  //   location.reload();
}

function init() {
  formView.addFormEventHandler(recordFormData, renderSummary);
  historyView.clearRecords(clearHistoryData);

  historyData();
}

init();
