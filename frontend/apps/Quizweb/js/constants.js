/*
* (C) 2015 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
const FRONTEND = "http://localhost:8080";
const BACKEND = "http://localhost:9090";
const APP_NAME = "Quizweb";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;
export const APP_CONSTANTS = {
    FRONTEND, BACKEND, APP_PATH, APP_NAME,
    USER_HTML: APP_PATH + "/users.html",
    ADMIN_HTML: APP_PATH + "/admin.html",
    INDEX_HTML: APP_PATH + "/index.html",
    SESSION_NOTE_ID: "com_monkshu_ts",
    API_LOGIN: `${BACKEND}/apps/Quizweb/login`,
    API_ADDQUESTION: `${BACKEND}/apps/Quizweb/addQuestion`,
    API_VIEWQUESTIONS: `${BACKEND}/apps/Quizweb/viewQuestions`,
    API_ASSIGNQUESTIONS: `${BACKEND}/apps/Quizweb/assignQuestion`,
    API_VIEWQUIZZES:`${BACKEND}/apps/Quizweb/viewQuizzes`,
    USER_ROLE: "user",
    ADMIN_ROLE: "admin",
    PERMISSIONS_MAP: {
        user: [APP_PATH + "/index.html",
        $$.MONKSHU_CONSTANTS.ERROR_THTML],
        admin: [APP_PATH + "/index.html",
            $$.MONKSHU_CONSTANTS.ERROR_THTML]
        },
      //  API_KEYS: { "*": "uiTmv5YBOZMqdTb0gekD40PnoxtB9Q0k" },
    //KEY_HEADER: "X-API-Key"
    //fixed
}