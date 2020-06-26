import HttpUtils from "../utils/HttpUtils";


export default class SessionChecker {

    static async checkUser() {

        try{

            const response = await HttpUtils.get('/security/check');
            if(response.status === 200) return true;
            else return false;
        }
        catch(err){

            return false;
        }
    }
}