import * as model from './model';
import formView from './view/formView';
import historyView from './view/historyView';
import summaryView from './view/summaryView';
import footerView from './view/footerView';

function recordFormData(submission) {
  return model.recordHistory(submission);
}

function renderSummary() {
  summaryView.renderSummary(model.updateSummary);
}

function historyData() {
  const data = model.historyData();
  historyView.renderHistory(data);
}

function clearHistoryData() {
  model.clearHistory();
}

function clearSummary() {
  model.clearSummary();
  summaryView.clearSummary();
}

function init() {
  historyView.loadHistoryOnDOMLoad(model.historyData);
  formView.addFormEventHandler(recordFormData, renderSummary, historyData);
  historyView.clearRecords(clearHistoryData, clearSummary);
  summaryView.summaryDOMContentLoad(model.updateSummary);
}

init();
