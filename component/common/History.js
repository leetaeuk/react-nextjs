let _ARRAY_HISTORY = [];

/**
 * 히스토리 초기화
 */
export function init()
{
    _ARRAY_HISTORY = [];
};

/**
 * 전체 히스토리 가져오기
 * @returns {*[]}
 */
export function getAllHistory()
{
    return _ARRAY_HISTORY;
};

/**
 * 히스토리 갯수
 * @returns {number}
 */
export function getHistorySize()
{
    return _ARRAY_HISTORY.length;
}

/**
 * 히스토리 추가
 * currentPageId              : 현재 페이지
 * svcId                      : 이동할 페이지
 * options
 */
export function add(currentPageId, svcId, paramJson, options)
{
    _ARRAY_HISTORY.push({
        CURRENT_PAGE_ID    : currentPageId,
        SVC_ID             : svcId,
        PARAMETER          : paramJson,
        OPTIONS            : options
    });
};

/**
 * 히스토리 변경
 * @param currentPageId
 * @param svcId
 * @param paramJson
 * @param options
 */
export function change(svcId, paramJson, options)
{
    for(let idx=getHistorySize()-1; idx>=0; idx--)
    {
        if( svcId == _ARRAY_HISTORY[idx]["SVC_ID"] )
        {
            _ARRAY_HISTORY[idx]["PARAMETER"] = paramJson;
            _ARRAY_HISTORY[idx]["OPTIONS"  ] = options;

            break;
        }
    }
}

/**
 * 해당 서비스 아이디 까지 히스토리 삭제(없을시 모두삭제)
 */
export function removeFindSvcId(svcId)
{
    let findSvcIdHistory = null;
    for(let idx=getHistorySize()-1; idx>=0; idx--)
    {
        if( svcId == _ARRAY_HISTORY[idx]["SVC_ID"] )
        {
            findSvcIdHistory = _ARRAY_HISTORY[idx]["SVC_ID"];
            break;
        }
        _ARRAY_HISTORY.pop();
    }

    return findSvcIdHistory;
};

/**
 * 해당 서비스 아이디 까지 히스토리 삭제(없을시 모두삭제)
 */
function removeFindIncludeSvcId(svcId)
{
    for(let idx=getHistorySize()-1; idx>=0; idx--)
    {
        if( svcId == _ARRAY_HISTORY[idx]["SVC_ID"] )
        {
            _ARRAY_HISTORY.pop();
            break;
        }
        _ARRAY_HISTORY.pop();
    }
};

/**
 * 현재 active 된 화면의 이후 idx 모두 삭제하기
 * 1-2-3-4-5 화면에서 '3'으로 화면 이동시 '4','5' 히스토리 데이터는 삭제시킴
 */
function remove(idx)
{
    let rIdx = idx+1;
    let historyLength = getAllHistory().length;

    for(let i=0; i<historyLength; i++)
    {
        // active 된 화면의 이후 history 제거
        if(i == historyLength-1)
        {
            getAllHistory().splice(rIdx, historyLength);
        }
    }
};

/**
 * 히스토리 마지막 1개 삭제(일반적 뒤로가기의 경우)
 */
export function pop()
{
    _ARRAY_HISTORY.pop();

    if( getHistorySize() > 0 )
    {
        return _ARRAY_HISTORY[_ARRAY_HISTORY.length-1];
    }

    return null;
};
/**
 * 히스토리 가장 마지막에 등록된 서비스 정보 가져오기
 */
export function getLastSvcInfo()
{
    let historySize = getHistorySize();
    if( _ARRAY_HISTORY && historySize > 0 )
    {
        return _ARRAY_HISTORY[historySize-1];
    }

    return null;
};

/**
 * 히스토리 SVC_ID에 등록된 정보
 * @param svcId
 * @returns {null|*}
 */
export function getSvcInfo(svcId)
{
    let historySize = getHistorySize();
    if( _ARRAY_HISTORY && historySize > 0 )
    {
        for(let idx=getHistorySize()-1; idx>=0; idx--)
        {
            if( svcId === _ARRAY_HISTORY[idx]["SVC_ID"] )
            {
                return _ARRAY_HISTORY[idx];
            }
        }
    }

    return null;
};