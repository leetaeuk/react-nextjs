let __IS_BACK = false;
let __PROPS   = null;

/**
 * 현재페이지 프로퍼티정보 세팅
 * @param json
 */
export function setProps(json)
{
    __PROPS = json;
}

/**
 * 현재페이지 프로퍼티정보 가져오기
 * @returns {null}
 */
export function getProps()
{
    return __PROPS;
}

/**
 * 뒤로가기 상태 세팅
 * @param isBack
 */
export function setIsBack(isBack)
{
    __IS_BACK = isBack;
}

/**
 * 뒤로가기 상태 가져오기
 * @returns {boolean}
 */
export function getIsBack()
{
    return __IS_BACK;
}