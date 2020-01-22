function getContainer() {
  return document.querySelector(".notify-container");
}

function alertTemplate(msg, className, index) {
  return `
    <div class="alert ${className}" data-index=${index}>
      ${msg}
    </div>
  `;
}
function notifyContainerTemplate() {
  return `
  <div class='notify-container' style="position: fixed; top: 10px; right: 10px; z-index: 99;"></div>
  `;
}
function createNotifyContainer() {
  const template = notifyContainerTemplate();
  return document.body.insertAdjacentHTML("afterbegin", template);
}

function getAlertIndex() {
  return document.querySelectorAll(".notify-container .alert").length;
}
/**
 * Function notify. Show notification
 * @param {Object} Settings
 * @param {string} settings.msg
 * @param {string} setting.className
 * @param {number} setting.timeout
 */

export function notify({
  msg = "Info Message",
  className = "alert-info",
  timeout = 2000
} = {}) {
  if (!getContainer()) {
    createNotifyContainer();
  }

  const index = getAlertIndex();
  const template = alertTemplate(msg, className, index);
  const container = getContainer();
  container.insertAdjacentHTML("afterbegin", template);

  setTimeout(() => closeNotify(index), timeout);
}

export function closeNotify(index) {
  let alert;

  if (index === undefined) {
    alert = document.querySelector(".notify-container .alert");
  } else {
    alert = document.querySelector(
      `.notify-container .alert[data-index="${index}"]`
    );
  }

  if (!alert) {
    console.warn("Alert not found ");
    return;
  }
  const container = getContainer();
  container.removeChild(alert);
}
