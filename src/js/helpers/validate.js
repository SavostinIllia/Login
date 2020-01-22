const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/
};

/**
 * Function validate. Chek Input on regExp provided in const"regExpDic"
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Return true if input "valid" || no require attribute, return false if input "invalid"
 */

export function validate(el) {
  const regExpName = el.dataset.required;

  if (!regExpDic[regExpName]) return true;

  return regExpDic[regExpName].test(el.value);
}
