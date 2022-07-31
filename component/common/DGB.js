import Router from "next/router";
import * as history from '/component/common/history';

let __IS_BACK = false;

export function setIsBack(isBack)
{
    __IS_BACK = isBack;
}
export function getIsBack()
{
    return __IS_BACK;
}

/**
 * 메인페이지 이동
 * @param url
 * @constructor
 */
export function goMain()
{
    history.init();
    Router.replace("/");
}

/**
 * 페이지 이동
 * @param url
 * @constructor
 */
export function Location(svcId, paramJson, options, isBack)
{
    let currentPageId   = location.pathname;
    let isHashChange    = false;

    if( options != null )
    {
        // 페이지 로케이션 여부
        if( options.isHashChange === true )
        {
            isHashChange = true;
        }
    }

    // 뒤로가기 처리시 hash정보가 남아있으면 show 처리만 한다.
    if( isHashChange )
    {
    }

    // 뒤로가기로 들어온 경우 히스토리가 존재하면 히스토리값만 변경
    if( isBack )
    {
        // 히스토리 변경(현재페이지정보, 이동할페이지정보, 파라미터정보, 옵션)
        Router.replace(svcId).then(r => {
            history.change(svcId, paramJson, options);
        });
    }
    // 정상 location의 경우 히스토리 추가
    else
    {
        // 히스토리 추가(현재페이지정보, 이동할페이지정보, 파라미터정보, 옵션)
        Router.replace(svcId).then(r => {
            history.add(currentPageId, svcId, paramJson, options);
        });
    }
};

/**
 * 뒤로가기
 * @param svcId
 * @param options
 */
export function LocationBack(svcId, paramJson, options)
{
    /*
    let pageInfo = DPT.com.getCurrentPageInfo();

    // 팝업이 떠있는 상태에서 뒤로가기를 눌렀을 경우에는 팝업을 닫아준다.
    if( pageInfo.PAGE_TYPE == "popup" )
    {
        //DPF.com.closePopup();
        return;
    }
    */

    // 서비스 아이디가 존재하는 경우(여러단계를 건너띄고 back하는 경우)
    if( svcId )
    {
        // 넘겨준 서비스아이디를 찾을때까지 히스토리 array를 search한 후 찾은 정보를 리턴
        let lastSvcInfo = history.removeFindSvcId(svcId);

        let param = {};
        let opt   = {};
        if( lastSvcInfo != null && lastSvcInfo != undefined )
        {
            param = lastSvcInfo.PARAMETER;
            if( paramJson )
            {
                param = paramJson;
            }

            opt = lastSvcInfo.OPTIONS;
            if( options )
            {
                opt = options;
            }
        }

        // 페이지이동
        Location(svcId, param, opt, true);
    }
    // 서비스 아이디가 없는 경우(한단계 이전으로 돌아가는 경우)
    else
    {
        // 히스토리정보가 1개 이상 존재하는 경우
        if( history.getHistorySize() > 0 )
        {
            // 맨 마지막 히스토리 1개만 삭제 후 이전페이지 정보 세팅
            let afterPopSvcInfo = history.pop();

            // 이전으로 갈 정보가 없으면 메인화면으로 이동처리
            if( afterPopSvcInfo == null || afterPopSvcInfo == undefined )
            {
                // 메인페이지 이동
                goMain();
            }
            else
            {
                // 이전페이지 이동
                Location(afterPopSvcInfo.SVC_ID, afterPopSvcInfo.PARAMETER, afterPopSvcInfo.OPTIONS, true);
            }
        }
        // 히스토리정보가 없는경우는 메인으로 이동
        else
        {
            // 메인페이지 이동
            goMain();
        }
    }
}

/**
 * 뒤로가기 처리
 */
export function goBack()
{
    // 뒤로가기 상태값 세팅
    setIsBack(true);

    // 뒤로가기 처리
    LocationBack(history.getLastSvcInfo().CURRENT_PAGE_ID);
};