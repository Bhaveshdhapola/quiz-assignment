/*
* (C) 2015 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
const FRONTEND = "http://localhost:8080";
const BACKEND = "http://localhost:9090";
const APP_NAME = "Quizapp";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;
export const APP_CONSTANTS = {
    FRONTEND, BACKEND, APP_PATH, APP_NAME,
    COMMON_HTML:APP_CONST + "/common/login.html",
    USER_HTML: APP_PATH + "/users/index.html",
    ADMIN_HTML: APP_PATH + "/admin/index.html",
    SESSION_NOTE_ID: "com_monkshu_ts",
    API_AUTH: `${BACKEND}/apis/auth`,
    API_ADDQUESTION: `${BACKEND}/apis/addQuestion`,
    USER_ROLE: "user",
    ADMIN_ROLE: "admin",
    PERMISSIONS_MAP: {
        user: [APP_PATH + "/users/index.html",
        $$.MONKSHU_CONSTANTS.ERROR_THTML],
        admin: [APP_PATH + "/admin/index.html",
            $$.MONKSHU_CONSTANTS.ERROR_THTML]
        },
      //  API_KEYS: { "*": "uiTmv5YBOZMqdTb0gekD40PnoxtB9Q0k" },
    //KEY_HEADER: "X-API-Key"
    //fixed
}