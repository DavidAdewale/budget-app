import * as model from './model';
import formView from './view/formView';

function recordFormData(submission) {
  return model.recordHistory(submission);
}

function init() {
  formView.addFormEventHandler(recordFormData);
}

init();
